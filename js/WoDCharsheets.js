async function waitForAnySelector(selectors, opts = {}) {
    // Ожидание появления любого из селекторов
    // Wait until any of the selectors appears
    const timeoutMs = opts.timeoutMs ?? 2000;
    const intervalMs = opts.intervalMs ?? 50;

    const start = performance.now();
    while (performance.now() - start <= timeoutMs) {
        for (let i = 0; i < selectors.length; i++) {
            const el = document.querySelector(selectors[i]);
            if (el != null) return el;
        }
        await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
    return null;
}


// Основной запуск после того, как статблок успел дорендериться
// Main entrypoint after the statblock has finished rendering
(async function run() {


    // --- Logging (disable by default) ---
    // --- Логирование (по умолчанию выключено) ---
    const DEBUG = false;
    function log() {
        if (!DEBUG) return;
        console.log.apply(console, arguments);
    }



    // Ждём, пока в активной вкладке или в hover появится ключевой узел statblock'а.
    // Wait until a key statblock node appears in the active leaf or hover popover.
    const ACTIVE_READY_SEL = '.workspace-leaf.mod-active .obsidian-statblock-plugin.statblock .collapse-container';
    const HOVER_READY_SEL = '.popover.hover-popover .obsidian-statblock-plugin.statblock .collapse-container';
    await waitForAnySelector([ACTIVE_READY_SEL, HOVER_READY_SEL], { timeoutMs: 2000, intervalMs: 50 });

    // Список изъянов для кланов
    // List of clan weaknesses

    // Камарилья
    // Camarilla
    const weaknessBrujah = '';
    const weaknessCaitiff = '';
    const weaknessGangrel = '';
    const weaknessMalkavian = '';
    const weaknessNosferatu = '';
    const weaknessToreador = '';
    const weaknessTremere = '';
    const weaknessVentrue = '';
    // Шабаш
    // Sabbat
    const weaknessAssamiteAntitribu = '';
    const weaknessBrujahAntitribu = '';
    const weaknessCaitiffAntitribuPander = '';
    const weaknessLasombra = '';
    const weaknessMalkavianAntitribu = '';
    const weaknessNosferatuAntitribu = '';
    const weaknessRavnosAntitribu = '';
    const weaknessSalubriAntitribu = '';
    const weaknessToreadorAntitribu = '';
    const weaknessTremereAntitribu = '';
    const weaknessTzimisce = '';
    const weaknessVentrueAntitribu = '';
    // Независимые кланы
    // Independent clans
    const weaknessAssamite = '';
    const weaknessFollowersOfSet = '';
    const weaknessGiovanni = '';
    const weaknessRavnos = '';
    // Линии крови
    // Bloodlines
    const weaknessBaali = '';
    const weaknessCappadocians = '';
    const weaknessCountryGangrel = '';
    const weaknessCityGangrel = '';
    const weaknessDaughtersOfCacophony = '';
    const weaknessKiasyd = '';
    const weaknessSalubri = '';
    const weaknessSamedi = '';
    const weaknessSerpentsOfLight = '';
    const weaknessTrueBrujah = '';


    // Список изъянов для Dark Ages
    // List of weakness for Dark Ages
    const weaknessAssamiteDarkAges = '';
    const weaknessBrujahDarkAges = '';
    const weaknessCappadociansDarkAges = '';
    const weaknessFollowersOfSetDarkAges = '';
    const weaknessGangrelDarkAges = '';
    const weaknessLasombraDarkAges = '';
    const weaknessMalkavianDarkAges = '';
    const weaknessNosferatuDarkAges = '';
    const weaknessRavnosDarkAges = '';
    const weaknessToreadorDarkAges = '';
    const weaknessTremereDarkAges = '';
    const weaknessTzimisceDarkAges = '';
    const weaknessVentrueDarkAges = '';
    // Bloodlines
    // Линии крови
    const weaknessAhrimanesDarkAges = '';
    const weaknessAndaDarkAges = '';
    const weaknessBaaliDarkAges = '';
    const weaknessBonsamDarkAges = '';
    const weaknessChildrenOfOsirisDarkAges = '';
    const weaknessDanavaDarkAges = '';
    const weaknessGargoylesDarkAges = '';
    const weaknessGiovanniDarkAges = '';
    const weaknessImpunduluDarkAges = '';
    const weaknessKiasydDarkAges = '';
    const weaknessLamiaDarkAges = '';
    const weaknessLhiannanDarkAges = '';
    const weaknessNagarajaDarkAges = '';
    const weaknessNictukuDarkAges = '';
    const weaknessRamangaDarkAges = '';
    const weaknessSalubriHealersDarkAges = '';
    const weaknessSalubriWarriorsDarkAges = '';
    const weaknessSalubriWatchersDarkAges = '';
    const weaknessTrueBrujahDarkAges = '';


    // --- Селекторы, ограниченные корнем (чтобы не собирать префиксы вроде "activeTab + ...") ---
    // --- Root-scoped selectors (avoid building string prefixes like "activeTab + ...") ---
    const ACTIVE_LEAF_SEL = '.workspace-leaf.mod-active';
    const STATBLOCK_SEL = '.obsidian-statblock-plugin.statblock';

    // --- Корневые контейнеры для всех последующих запросов --- 
    // --- Root containers for all subsequent queries --- 
    const activeRoot = document.querySelector(`${ACTIVE_LEAF_SEL} ${STATBLOCK_SEL}`);
    const hoverRoot = document.querySelector(`.popover.hover-popover ${STATBLOCK_SEL}`);

    // Все DOM-запросы ниже должны быть ограничены через ctx.qs/ctx.qsa, чтобы избежать утечек между вкладками/ховером.
    // All DOM queries below should be scoped via ctx.qs/ctx.qsa to avoid cross-tab/hover leaks.

    // --- Сохраняем строку sheetClass, потому что часть проверок опирается на неё (например, endsWith) ---
    // --- Keep sheet-class strings because some feature-gates rely on them (e.g., endsWith checks) --- 
    const sheetClassRe = /[a-z]{3}-[a-z]{1}20-[a-z-]{0,30}/gm;

    let statblockCSSclass = '';
    if (activeRoot != null) {
        const allClasses = activeRoot.classList.value.toString();
        const match = allClasses.match(sheetClassRe);
        statblockCSSclass = match ? ('.' + match[0]) : '';
    }

    let statblockCSSclassHover = '';
    if (hoverRoot != null) {
        const allClassesHover = hoverRoot.classList.value.toString();
        const matchHover = allClassesHover.match(sheetClassRe);
        statblockCSSclassHover = matchHover ? ('.' + matchHover[0]) : '';
    }


    // --- Единые контексты обработки (активная вкладка + ховер) ---
    // --- Unified processing contexts (active tab + hover) ---
    function makeProcessingContext(root, sheetClass, mode) {
        return {
            root: root,
            sheetClass: sheetClass,
            mode: mode,
            qs: function (sel) { return root.querySelector(sel); },
            qsa: function (sel) { return root.querySelectorAll(sel); },
            text: function (sel) {
                const el = root.querySelector(sel);
                if (el == null) return '';
                return (el.textContent || '').trim();
            }
        };
    }

    const processingContexts = [];
    if (activeRoot != null) processingContexts.push(makeProcessingContext(activeRoot, statblockCSSclass, 'active'));
    if (hoverRoot != null) processingContexts.push(makeProcessingContext(hoverRoot, statblockCSSclassHover, 'hover'));

    function forEachProcessingContext(fn) {
        for (let i = 0; i < processingContexts.length; i++) {
            fn(processingContexts[i]);
        }
    }

    // --- Безопасные DOM-хелперы: чтобы отсутствие опциональных блоков не валило весь DataviewJS-рендер ---
    // --- Safe DOM helpers: avoid crashing the whole DataviewJS render when optional blocks are missing ---

    function setText(el, value) {
        if (el != null) el.textContent = value;
    }

    function setStyle(el, prop, value) {
        if (el != null) el.style[prop] = value;
    }


    function getBloodPropertyContainer(ctx, index) {
        const line = ctx.qs('.line.blood_current' + index) || ctx.qs('.blood_current' + index);
        if (line == null) return null;
        return line.closest('.property-container');
    }


    // --- Вампирские кланы: общая логика для активной вкладки и ховера ---
    // --- Vampire clans: shared logic for active tab and hover ---
    const VTM_V20_VAMPIRE_SHEETS = [
        '.vtm-v20-vampire',
        '.vtm-v20-vampire-en',
        '.vtm-v20-vampire-wild-west',
        '.vtm-v20-vampire-wild-west-en',
    ];

    const VTM_V20_VAMPIRE_DARK_AGES_SHEETS = [
        '.vtm-v20-vampire-dark-ages',
        '.vtm-v20-vampire-dark-ages-en',
    ];

    const WTA_W20_WEREWOLF_SHEETS = [
        '.wta-w20-werewolf',
        '.wta-w20-werewolf-en',
        '.wta-w20-werewolf-savage-west',
        '.wta-w20-werewolf-savage-west-en',
    ];

    const WOD_V20_AGENT_SHEETS = [
        '.wod-v20-agent',
        '.wod-v20-agent-en',
    ];

    const MTA_M20_MAGE_SHEETS = [
        '.mta-m20-mage',
        '.mta-m20-mage-en',
    ];

    const MTA_M20_TECHNOCRAT_SHEETS = [
        '.mta-m20-technocrat',
        '.mta-m20-technocrat-en',
    ];


    function sheetMatchesEndsWith(sheetClass, allowedEndings) {
        return sheetClass != null && allowedEndings.some((ending) => sheetClass.endsWith(ending));
    }

    function getClanNameFromStatblock(root) {
        const el = root.querySelector('.line.clan .statblock-markdown > p');
        return el ? (el.textContent ?? '').trim() : '';
    }

    function getTribeNameFromStatblock(root) {
        const el = root.querySelector('.line.tribe .statblock-markdown > p');
        return el ? (el.textContent ?? '').trim() : '';
    }

    function getAgencyNameFromStatblock(root) {
        const el = root.querySelector('.line.agency .statblock-markdown > p');
        return el ? (el.textContent ?? '').trim() : '';
    }

    function getAffiliationNameFromStatblock(root) {
        const el = root.querySelector('.line.affiliation .statblock-markdown > p');
        return el ? (el.textContent ?? '').trim() : '';
    }




    function applyV20VampireClanBranding(root, sheetClass) {
        if (root == null) return;
        if (!sheetMatchesEndsWith(sheetClass, VTM_V20_VAMPIRE_SHEETS)) return;
        if (root.querySelector('.line.clan .statblock-markdown') == null) return;

        const clanName = getClanNameFromStatblock(root);
        if (!clanName) return;
        log('Название клана:', clanName);

        const collapsedColumn = root.querySelector('.collapse-container');
        if (collapsedColumn == null) return;

        let collapsedBackgroundClan;
        let clanWeakness;
        let headerBackgroundClan;

        switch (clanName) {
            case 'Ассамиты':
            case 'Assamite':
                // каждому клану назначается соответствующий класс, для которого в css уже вшито изображение
                // assign a clan-specific CSS class (the image is embedded in CSS)
                collapsedBackgroundClan = 'Assamite';
                // изъян - соответствующий клану из списка выше
                // weakness text for this clan (from the list above)
                clanWeakness = weaknessAssamite;
                // если у заметки есть класс wod-header, логотип клана будет под именем, рядом с фото
                // if the note has the wod-header class, show the clan logo in the header next to the portrait
                headerBackgroundClan = 'var(--Assamite-background-logo)';
                break;
            case 'Антитрибу Ассамитов':
            case 'Assamite Antitribu':
                collapsedBackgroundClan = 'Assamite-Antitribu';
                clanWeakness = weaknessAssamiteAntitribu;
                headerBackgroundClan = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Баали':
            case 'Baali':
                collapsedBackgroundClan = 'Baali';
                clanWeakness = weaknessBaali;
                headerBackgroundClan = 'var(--Baali-background-logo)';
                break;
            case 'Бруха':
            case 'Brujah':
                collapsedBackgroundClan = 'Brujah';
                clanWeakness = weaknessBrujah;
                headerBackgroundClan = 'var(--Brujah-background-logo)';
                break;
            case 'Антитрибу Бруха':
            case 'Brujah Antitribu':
                collapsedBackgroundClan = 'Brujah-Antitribu';
                clanWeakness = weaknessBrujahAntitribu;
                headerBackgroundClan = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'Истинные Бруха':
            case 'True Brujah':
                collapsedBackgroundClan = 'True-Brujah';
                clanWeakness = weaknessTrueBrujah;
                headerBackgroundClan = 'var(--True-Brujah-background-logo)';
                break;
            case 'Каппадокийцы':
            case 'Cappadocians':
                collapsedBackgroundClan = 'Cappadocians';
                clanWeakness = weaknessCappadocians;
                headerBackgroundClan = 'var(--Cappadocians-background-logo)';
                break;
            case 'Каитиф':
            case 'Caitiff':
                collapsedBackgroundClan = 'Caitiff';
                clanWeakness = weaknessCaitiff;
                headerBackgroundClan = 'var(--Caitiff-background-logo)';
                break;
            case 'Пандер':
            case 'Pander':
                collapsedBackgroundClan = 'Caitiff-Antitribu-Pander';
                clanWeakness = weaknessCaitiffAntitribuPander;
                headerBackgroundClan = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Вентру':
            case 'Ventrue':
                collapsedBackgroundClan = 'Ventrue';
                clanWeakness = weaknessVentrue;
                headerBackgroundClan = 'var(--Ventrue-background-logo)';
                break;
            case 'Антитрибу Вентру':
            case 'Ventrue Antitribu':
                collapsedBackgroundClan = 'Ventrue-Antitribu';
                clanWeakness = weaknessVentrueAntitribu;
                headerBackgroundClan = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Гангрел':
            case 'Gangrel':
                collapsedBackgroundClan = 'Gangrel';
                clanWeakness = weaknessGangrel;
                headerBackgroundClan = 'var(--Gangrel-background-logo)';
                break;
            case 'Дикие Гангрелы':
            case 'Country Gangrel':
                collapsedBackgroundClan = 'Country-Gangrel';
                clanWeakness = weaknessCountryGangrel;
                headerBackgroundClan = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'Городские Гангрелы':
            case 'City Gangrel':
                collapsedBackgroundClan = 'City-Gangrel';
                clanWeakness = weaknessCityGangrel;
                headerBackgroundClan = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Джованни':
            case 'Giovanni':
                collapsedBackgroundClan = 'Giovanni';
                clanWeakness = weaknessGiovanni;
                headerBackgroundClan = 'var(--Giovanni-background-logo)';
                break;
            case 'Дочери Какофонии':
            case 'Daughters of Cacophony':
                collapsedBackgroundClan = 'Daughters-of-Cacophony';
                clanWeakness = weaknessDaughtersOfCacophony;
                headerBackgroundClan = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Киасиды':
            case 'Kiasyd':
                collapsedBackgroundClan = 'Kiasyd';
                clanWeakness = weaknessKiasyd;
                headerBackgroundClan = 'var(--Kiasyd-background-logo)';
                break;
            case 'Ласомбра':
            case 'Lasombra':
                collapsedBackgroundClan = 'Lasombra';
                clanWeakness = weaknessLasombra;
                headerBackgroundClan = 'var(--Lasombra-background-logo)';
                break;
            case 'Малкавиане':
            case 'Малкавиан':
            case 'Malkavian':
                collapsedBackgroundClan = 'Malkavian';
                clanWeakness = weaknessMalkavian;
                headerBackgroundClan = 'var(--Malkavian-background-logo)';
                break;
            case 'Антитрибу Малкавиан':
            case 'Malkavian Antitribu':
                collapsedBackgroundClan = 'Malkavian-Antitribu';
                clanWeakness = weaknessMalkavianAntitribu;
                headerBackgroundClan = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Носферату':
            case 'Nosferatu':
                collapsedBackgroundClan = 'Nosferatu';
                clanWeakness = weaknessNosferatu;
                headerBackgroundClan = 'var(--Nosferatu-background-logo)';
                break;
            case 'Антитрибу Носферату':
            case 'Nosferatu Antitribu':
                collapsedBackgroundClan = 'Nosferatu-Antitribu';
                clanWeakness = weaknessNosferatuAntitribu;
                headerBackgroundClan = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case 'Последователи Сета':
            case 'Followers of Set':
                collapsedBackgroundClan = 'Followers-of-Set';
                clanWeakness = weaknessFollowersOfSet;
                headerBackgroundClan = 'var(--Followers-of-Set-background-logo)';
                break;
            case 'Змеи Света':
            case 'Serpents of Light':
                collapsedBackgroundClan = 'Serpents-of-Light';
                clanWeakness = weaknessSerpentsOfLight;
                headerBackgroundClan = 'var(--Serpents-of-Light-background-logo)';
                break;
            case 'Равнос':
            case 'Ravnos':
                collapsedBackgroundClan = 'Ravnos';
                clanWeakness = weaknessRavnos;
                headerBackgroundClan = 'var(--Ravnos-background-logo)';
                break;
            case 'Антитрибу Равнос':
            case 'Ravnos Antitribu':
                collapsedBackgroundClan = 'Ravnos-Antitribu';
                clanWeakness = weaknessRavnosAntitribu;
                headerBackgroundClan = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case 'Салюбри':
            case 'Salubri':
                collapsedBackgroundClan = 'Salubri';
                clanWeakness = weaknessSalubri;
                headerBackgroundClan = 'var(--Salubri-background-logo)';
                break;
            case 'Антитрибу Салюбри':
            case 'Salubri Antitribu':
                collapsedBackgroundClan = 'Salubri-Antitribu';
                clanWeakness = weaknessSalubriAntitribu;
                headerBackgroundClan = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case 'Самеди':
            case 'Samedi':
                collapsedBackgroundClan = 'Samedi';
                clanWeakness = weaknessSamedi;
                headerBackgroundClan = 'var(--Samedi-background-logo)';
                break;
            case 'Тореадор':
            case 'Toreador':
                collapsedBackgroundClan = 'Toreador';
                clanWeakness = weaknessToreador;
                headerBackgroundClan = 'var(--Toreador-background-logo)';
                break;
            case 'Антитрибу Тореадор':
            case 'Toreador Antitribu':
                collapsedBackgroundClan = 'Toreador-Antitribu';
                clanWeakness = weaknessToreadorAntitribu;
                headerBackgroundClan = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case 'Тремер':
            case 'Tremere':
                collapsedBackgroundClan = 'Tremere';
                clanWeakness = weaknessTremere;
                headerBackgroundClan = 'var(--Tremere-background-logo)';
                break;
            case 'Антитрибу Тремер':
            case 'Tremere Antitribu':
                collapsedBackgroundClan = 'Tremere-Antitribu';
                clanWeakness = weaknessTremereAntitribu;
                headerBackgroundClan = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case 'Цимисхи':
            case 'Tzimisce':
                collapsedBackgroundClan = 'Tzimisce';
                clanWeakness = weaknessTzimisce;
                headerBackgroundClan = 'var(--Tzimisce-background-logo)';
                break;
        };

        if (!collapsedBackgroundClan) return;
        collapsedColumn.classList.add(collapsedBackgroundClan);
        setWeaknessInStatblock(root, clanWeakness, { onlyIfEmpty: true });
        setHeaderLogoIfWodHeaderPresent(root, headerBackgroundClan);
    }

    function applyDarkAgesVampireClanBranding(root, sheetClass) {
        if (root == null) return;
        if (!sheetMatchesEndsWith(sheetClass, VTM_V20_VAMPIRE_DARK_AGES_SHEETS)) return;
        if (root.querySelector('.line.clan .statblock-markdown') == null) return;

        const clanName = getClanNameFromStatblock(root);
        if (!clanName) return;
        log('Название клана:', clanName);

        const collapsedColumn = root.querySelector('.collapse-container');
        if (collapsedColumn == null) return;

        let collapsedBackgroundClan;
        let clanWeakness;

        switch (clanName) {
            case 'Ассамиты':
            case 'Assamite':
                // каждому клану назначается соответствующий класс, для которого в css уже вшито изображение
                // assign a clan-specific CSS class (the image is embedded in CSS)
                collapsedBackgroundClan = 'Assamite';
                // изъян - соответствующий клану из списка выше
                // weakness text for this clan (from the list above)
                clanWeakness = weaknessAssamiteDarkAges;
                break;
            case 'Бруха':
            case 'Brujah':
                collapsedBackgroundClan = 'Brujah';
                clanWeakness = weaknessBrujahDarkAges;
                break;
            case 'Вентру':
            case 'Ventrue':
                collapsedBackgroundClan = 'Ventrue';
                clanWeakness = weaknessVentrueDarkAges;
                break;
            case 'Каппадокийцы':
            case 'Cappadocians':
                collapsedBackgroundClan = 'Cappadocians';
                clanWeakness = weaknessCappadociansDarkAges;
                break;
            case ('Последователи Сета'):
            case ('Followers of Set'):
                collapsedBackgroundClan = 'Followers-of-Set';
                clanWeakness = weaknessFollowersOfSetDarkAges;
                break;
            case 'Гангрел':
            case 'Gangrel':
                collapsedBackgroundClan = 'Gangrel';
                clanWeakness = weaknessGangrelDarkAges;
                break;
            case 'Ласомбра':
            case 'Lasombra':
                collapsedBackgroundClan = 'Lasombra';
                clanWeakness = weaknessLasombraDarkAges;
                break;
            case 'Малкавиане':
            case 'Малкавиан':
            case 'Malkavian':
                collapsedBackgroundClan = 'Malkavian';
                clanWeakness = weaknessMalkavianDarkAges;
                break;
            case 'Носферату':
            case 'Nosferatu':
                collapsedBackgroundClan = 'Nosferatu';
                clanWeakness = weaknessNosferatuDarkAges;
                break;
            case ('Равнос'):
            case ('Ravnos'):
                collapsedBackgroundClan = 'Ravnos';
                clanWeakness = weaknessRavnosDarkAges;
                break;
            case 'Тореадор':
            case 'Toreador':
                collapsedBackgroundClan = 'Toreador';
                clanWeakness = weaknessToreadorDarkAges;
                break;
            case 'Тремер':
            case 'Tremere':
                collapsedBackgroundClan = 'Tremere';
                clanWeakness = weaknessTremereDarkAges;
                break;
            case 'Цимисхи':
            case 'Tzimisce':
                collapsedBackgroundClan = 'Tzimisce';
                clanWeakness = weaknessTzimisceDarkAges;
                break;
            case 'Ангра-Майнью':
            case 'Ahrimanes':
                collapsedBackgroundClan = 'Ahrimanes';
                clanWeakness = weaknessAhrimanesDarkAges;
                break;
            case 'Анда':
            case 'Anda':
                collapsedBackgroundClan = 'Anda';
                clanWeakness = weaknessAndaDarkAges;
                break;
            case 'Баали':
            case 'Baali':
                collapsedBackgroundClan = 'Baali';
                clanWeakness = weaknessBaaliDarkAges;
                break;
            case 'Бонсам':
            case 'Bonsam':
                collapsedBackgroundClan = 'Bonsam';
                clanWeakness = weaknessBonsamDarkAges;
                break;
            case 'Горгульи':
            case 'Gargoyles':
                collapsedBackgroundClan = 'Gargoyles';
                clanWeakness = weaknessGargoylesDarkAges;
                break;
            case 'Данавы':
            case 'Данава':
            case 'Danava':
                collapsedBackgroundClan = 'Danava';
                clanWeakness = weaknessDanavaDarkAges;
                break;
            case 'Дети Осириса':
            case 'Children of Osiris':
                collapsedBackgroundClan = 'Children-of-Osiris';
                clanWeakness = weaknessChildrenOfOsirisDarkAges;
                break;
            case 'Джованни':
            case 'Джовани':
            case 'Giovanni':
                collapsedBackgroundClan = 'Giovanni';
                clanWeakness = weaknessGiovanniDarkAges;
                break;
            case 'Импундулу':
            case 'Impundulu':
                collapsedBackgroundClan = 'Impundulu';
                clanWeakness = weaknessImpunduluDarkAges;
                break;
            case 'Истинные Бруха':
            case 'True Brujah':
                collapsedBackgroundClan = 'TrueBrujah';
                clanWeakness = weaknessTrueBrujahDarkAges;
                break;
            case 'Киасид':
            case 'Киасиды':
            case 'Kiasyd':
                collapsedBackgroundClan = 'Kiasyd';
                clanWeakness = weaknessKiasydDarkAges;
                break;
            case 'Ламии':
            case 'Ламия':
            case 'Lamia':
                collapsedBackgroundClan = 'Lamia';
                clanWeakness = weaknessLamiaDarkAges;
                break;
            case 'Лианнан':
            case 'Lhiannan':
                collapsedBackgroundClan = 'Lhiannan';
                clanWeakness = weaknessLhiannanDarkAges;
                break;
            case 'Нагараджа':
            case 'Nagaraja':
                collapsedBackgroundClan = 'Nagaraja';
                clanWeakness = weaknessNagarajaDarkAges;
                break;
            case 'Никтуку':
            case 'Nictuku':
                collapsedBackgroundClan = 'Nictuku';
                clanWeakness = weaknessNictukuDarkAges;
                break;
            case 'Раманга':
            case 'Ramanga':
                collapsedBackgroundClan = 'Ramanga';
                clanWeakness = weaknessRamangaDarkAges;
                break;
            case 'Салюбри':
            case 'Salubri':
                collapsedBackgroundClan = 'Salubri';
                break;
            case 'Салюбри (целители)':
            case 'Salubri (Healer Caste)':
                collapsedBackgroundClan = 'SalubriHealers';
                clanWeakness = weaknessSalubriHealersDarkAges;
                break;
            case 'Салюбри (воины)':
            case 'Salubri (Warriors Caste)':
                collapsedBackgroundClan = 'SalubriWarriors';
                clanWeakness = weaknessSalubriWarriorsDarkAges;
                break;
            case 'Салюбри (наблюдатели)':
            case 'Salubri (Watchers Caste)':
                collapsedBackgroundClan = 'SalubriWatchers';
                clanWeakness = weaknessSalubriWatchersDarkAges;
                break;
        };

        if (!collapsedBackgroundClan) return;
        collapsedColumn.classList.add(collapsedBackgroundClan);
        setWeaknessInStatblock(root, clanWeakness, { onlyIfEmpty: true });
    }


    function applyW20WerewolfTribeBranding(root, sheetClass) {
        if (root == null) return;
        if (!sheetMatchesEndsWith(sheetClass, WTA_W20_WEREWOLF_SHEETS)) return;
        if (root.querySelector('.line.tribe .statblock-markdown') == null) return;

        const tribeName = getTribeNameFromStatblock(root);
        if (!tribeName) return;
        log('Название племени:', tribeName);

        const collapsedColumn = root.querySelector('.collapse-container');
        if (collapsedColumn == null) return;

        let collapsedBackgroundTribe;
        let headerBackgroundTribe;

        switch (tribeName) {
            case 'Черные Фурии':
            case 'Black Furies':
                // каждому племени назначается соответствующий класс, для которого в css уже вшито изображение
                // assign a tribe-specific CSS class (the image is embedded in CSS)
                collapsedBackgroundTribe = 'BlackFuries';
                headerBackgroundTribe = 'var(--BlackFuries-background-logo)';
                break;
            case 'Танцоры Чёрной Спирали':
            case 'Танцоры Черной Спирали':
            case 'Black Spiral Dancers':
                collapsedBackgroundTribe = 'BlackSpiralDancers';
                headerBackgroundTribe = 'var(--BlackSpiralDancers-background-logo)';
                break;
            case 'Костегрызы':
            case 'Bone Gnawers':
                collapsedBackgroundTribe = 'BoneGnawers';
                headerBackgroundTribe = 'var(--BoneGnawers-background-logo)';
                break;
            case 'Bunyip':
                collapsedBackgroundTribe = 'Bunyip';
                headerBackgroundTribe = 'var(--Bunyip-background-logo)';
                break;
            case 'Дети Гайи':
            case 'Children of Gaia':
                collapsedBackgroundTribe = 'Children-of-Gaia';
                headerBackgroundTribe = 'var(--ChildrenOfGaia-background-logo)';
                break;
            case 'Кроатан':
            case 'Croatan':
                collapsedBackgroundTribe = 'Croatan';
                headerBackgroundTribe = 'var(--Croatan-background-logo)';
                break;
            case 'Фианна':
            case 'Fianna':
                collapsedBackgroundTribe = 'Fianna';
                headerBackgroundTribe = 'var(--Fianna-background-logo)';
                break;
            case 'Потомки Фенрира':
            case 'Get of Fenris':
                collapsedBackgroundTribe = 'Get-of-Fenris';
                headerBackgroundTribe = 'var(--GetOfFenris-background-logo)';
                break;
            case 'Стеклоходы':
            case 'Glass Walkers':
                collapsedBackgroundTribe = 'GlassWalkers';
                headerBackgroundTribe = 'var(--GlassWalkers-background-logo)';
                break;
            case ('Красные Когти'):
            case ('Красные когти'):
            case ('Red Talons'):
                collapsedBackgroundTribe = 'RedTalons';
                headerBackgroundTribe = 'var(--RedTalons-background-logo)';
                break;
            case 'Теневые Владыки':
            case 'Теневые владыки':
            case 'Shadow Lords':
                collapsedBackgroundTribe = 'ShadowLords';
                headerBackgroundTribe = 'var(--ShadowLords-background-logo)';
                break;
            case 'Безмолвные Странники':
            case 'Безмолвные cтранники':
            case 'Silent Striders':
                collapsedBackgroundTribe = 'SilentStriders';
                headerBackgroundTribe = 'var(--SilentStriders-background-logo)';
                break;
            case 'Серебряные Клыки':
            case 'Серебряные клыки':
            case 'Silver Fangs':
                collapsedBackgroundTribe = 'SilverFangs';
                headerBackgroundTribe = 'var(--SilverFangs-background-logo)';
                break;
            case 'Звездочеты':
            case 'Stargazers':
                collapsedBackgroundTribe = 'Stargazers';
                headerBackgroundTribe = 'var(--Stargazers-background-logo)';
                break;
            case 'Уктена':
            case 'Uktena':
                collapsedBackgroundTribe = 'Uktena';
                headerBackgroundTribe = 'var(--Uktena-background-logo)';
                break;
            case 'Вендиго':
            case 'Wendigo':
                collapsedBackgroundTribe = 'Wendigo';
                headerBackgroundTribe = 'var(--Wendigo-background-logo)';
                break;
            case 'Белые Завыватели':
            case 'Белые завыватели':
            case 'White Howlers':
                collapsedBackgroundTribe = 'WhiteHowlers';
                headerBackgroundTribe = 'var(--WhiteHowlers-background-logo)';
                break;
            case 'Ajaba':
                collapsedBackgroundTribe = 'Ajaba';
                headerBackgroundTribe = 'var(--Ajaba-background-logo)';
                break;
            case 'Ананаси':
            case 'Ананси':
            case 'Ananasi':
                collapsedBackgroundTribe = 'Ananasi';
                headerBackgroundTribe = 'var(--Ananasi-background-logo)';
                break;
            case 'Бастет':
            case 'Bastet':
                collapsedBackgroundTribe = 'Bastet';
                headerBackgroundTribe = 'var(--Bastet-background-logo)';
                break;
            case 'Кораксы':
            case 'Коракс':
            case 'Corax':
                collapsedBackgroundTribe = 'Corax';
                headerBackgroundTribe = 'var(--Corax-background-logo)';
                break;
            case 'Gurahl':
                collapsedBackgroundTribe = 'Gurahl';
                headerBackgroundTribe = 'var(--Gurahl-background-logo)';
                break;
            case 'Кицунэ':
            case 'Kitsune':
                collapsedBackgroundTribe = 'Kitsune';
                headerBackgroundTribe = 'var(--Kitsune-background-logo)';
                break;
            case 'Моколе':
            case 'Mokole':
                collapsedBackgroundTribe = 'Mokole';
                headerBackgroundTribe = 'var(--Mokole-background-logo)';
                break;
            case 'Наги':
            case 'Нага':
            case 'Nagah':
                collapsedBackgroundTribe = 'Nagah';
                headerBackgroundTribe = 'var(--Nagah-background-logo)';
                break;
            case 'Nuwisha':
                collapsedBackgroundTribe = 'Nuwisha';
                headerBackgroundTribe = 'var(--Nuwisha-background-logo)';
                break;
            case 'Раткины':
            case 'Раткин':
            case 'Ratkin':
                collapsedBackgroundTribe = 'Ratkin';
                headerBackgroundTribe = 'var(--Ratkin-background-logo)';
                break;
            case 'Рокеа':
            case 'Rokea':
                collapsedBackgroundTribe = 'Rokea';
                headerBackgroundTribe = 'var(--Rokea-background-logo)';
                break;
        };

        if (collapsedBackgroundTribe) collapsedColumn.classList.add(collapsedBackgroundTribe);
        setHeaderLogoIfWodHeaderPresent(root, headerBackgroundTribe);
    }

    function applyV20AgentAgencyBranding(root, sheetClass) {
        if (root == null) return;
        if (!sheetMatchesEndsWith(sheetClass, WOD_V20_AGENT_SHEETS)) return;
        if (root.querySelector('.line.agency .statblock-markdown') == null) return;

        const agencyName = getAgencyNameFromStatblock(root);
        if (!agencyName) return;
        log('Агентство:', agencyName);

        const collapsedColumn = root.querySelector('.collapse-container');
        if (collapsedColumn == null) return;

        let collapsedBackgroundAgency;

        // В зависимости от агентства назначается класс, в CSS для него вшит фон
        // EN: Depending on the agency, assign a CSS class (the background is embedded in CSS)
        switch (agencyName) {
            case 'FBI':
            case 'ФБР':
                collapsedBackgroundAgency = 'FBI';
                break;
            case 'SAD':
            case 'ДОР':
            case 'ДОР ФБР':
                collapsedBackgroundAgency = 'SAD';
                break;
            case 'CIA':
            case 'ЦРУ':
                collapsedBackgroundAgency = 'CIA';
                break;
            case 'NSA':
                collapsedBackgroundAgency = 'NSA';
                break;
            default:
                // Если агентство неизвестно — ничего не делаем (но можно расширить список выше)
                // Unknown agency — do nothing (extend the list above if needed)
                return;
        }

        collapsedColumn.classList.add(collapsedBackgroundAgency);
    }


    function applyM20MageAffiliationBranding(root, sheetClass) {
        if (root == null) return;
        if (!sheetMatchesEndsWith(sheetClass, MTA_M20_MAGE_SHEETS)) return;
        if (root.querySelector('.line.affiliation .statblock-markdown') == null) return;

        const affiliationName = getAffiliationNameFromStatblock(root);
        if (!affiliationName) return;
        log('Принадлежность:', affiliationName);

        const collapsedColumn = root.querySelector('.collapse-container');
        if (collapsedColumn == null) return;

        let collapsedBackgroundAffiliation;
        let headerBackgroundAffiliation;

        switch (affiliationName) {
            case 'The Akashic Brotherhood':
            case 'Akashic Brotherhood':
            case 'Akashayana':
            case 'Акашийское Братство':
            case 'Акашаяна':
                collapsedBackgroundAffiliation = 'AkashicBrotherhood';
                headerBackgroundAffiliation = 'var(--AkashicBrotherhood-background-logo)';
                break;
            case 'The Celestial Chorus':
            case 'Celestial Chorus':
            case 'Небесный Хор':
            case 'Хористы':
                collapsedBackgroundAffiliation = 'CelestialChorus';
                headerBackgroundAffiliation = 'var(--CelestialChorus-background-logo)';
                break;
            case 'The Cult of Ecstasy':
            case 'Cult of Ecstasy':
            case 'Sahajiya':
            case 'Культ Экстаза':
            case 'Экстатики':
            case 'Экстатик':
                collapsedBackgroundAffiliation = 'Cult-of-Ecstasy';
                headerBackgroundAffiliation = 'var(--Cult-of-Ecstasy-background-logo)';
                break;
            case 'The Dreamspeakers':
            case 'Dreamspeakers':
            case 'Kha’vadi':
            case 'Говорящие с Грёзой':
            case 'Говорящие с Грезой':
            case 'Общество Грёз':
            case 'Общество Грез':
            case 'Кха’вади':
            case 'Кхавади':
                collapsedBackgroundAffiliation = 'Dreamspeakers';
                headerBackgroundAffiliation = 'var(--Dreamspeakers-background-logo)';
                break;
            case 'The Euthanatos':
            case 'Euthanatos':
            case 'Chakravanti':
            case 'Эвтанатос':
            case 'Эвтанаты':
            case 'Чакраванти':
                collapsedBackgroundAffiliation = 'Euthanatos';
                headerBackgroundAffiliation = 'var(--Euthanatos-background-logo)';
                break;
            case 'The Order of Hermes':
            case 'Order of Hermes':
            case 'Орден Гермеса':
                collapsedBackgroundAffiliation = 'Order-of-Hermes';
                headerBackgroundAffiliation = 'var(--Order-of-Hermes-background-logo)';
                break;
            case 'The Sons of Ether':
            case 'Sons of Ether':
            case 'Society of Ether':
            case 'Сыны Эфира':
            case 'Эфириты':
            case 'Общество Эфира':
                collapsedBackgroundAffiliation = 'Sons-of-Ether';
                headerBackgroundAffiliation = 'var(--Sons-of-Ether-background-logo)';
                break;
            case 'The Verbena':
            case 'Verbena':
            case 'Вербена':
            case 'Вербены':
                collapsedBackgroundAffiliation = 'Verbena';
                headerBackgroundAffiliation = 'var(--Verbena-background-logo)';
                break;
            case 'The Virtual Adepts':
            case 'Virtual Adepts':
            case 'Адепты Виртуальности':
            case 'Адепт Виртуальности':
                collapsedBackgroundAffiliation = 'VirtualAdepts';
                headerBackgroundAffiliation = 'var(--VirtualAdepts-background-logo)';
                break;
            case 'Nephandi':
            case 'Нефанди':
                collapsedBackgroundAffiliation = 'Nephandi';
                headerBackgroundAffiliation = 'var(--Nephandi-background-logo)';
                break;
            case 'The Ahl-i-Batin':
            case 'Ahl-i-Batin':
            case 'Аль-и-Батин':
                collapsedBackgroundAffiliation = 'Ahl-i-Batin';
                headerBackgroundAffiliation = 'var(--Ahl-i-Batin-background-logo)';
                break;
            case 'The Bata’a':
            case 'Bata’a':
            case 'The Bataa':
            case 'Bataa':
            case 'Бата’а':
            case 'Батаа':
                collapsedBackgroundAffiliation = 'Bataa';
                headerBackgroundAffiliation = 'var(--Bataa-background-logo)';
                break;
            case 'The Children of Knowledge':
            case 'Children of Knowledge':
            case 'The True Solificati':
            case 'True Solificati':
            case 'Дети Знания':
            case 'Солификати':
                collapsedBackgroundAffiliation = 'Children-of-Knowledge';
                headerBackgroundAffiliation = 'var(--Children-of-Knowledge-background-logo)';
                break;
            case 'The Hollow Ones':
            case 'Hollow Ones':
            case 'Пустые':
                collapsedBackgroundAffiliation = 'HollowOnes';
                headerBackgroundAffiliation = 'var(--HollowOnes-background-logo)';
                break;
            case 'The Kopa Loei':
            case 'Kopa Loei':
            case 'Копа Лоэй':
                collapsedBackgroundAffiliation = 'KopaLoei';
                headerBackgroundAffiliation = 'var(--KopaLoei-background-logo)';
                break;
            case 'The Ngoma':
            case 'Ngoma':
            case 'Нгома':
                collapsedBackgroundAffiliation = 'Ngoma';
                headerBackgroundAffiliation = 'var(--Ngoma-background-logo)';
                break;
            case 'Orphans':
            case 'Сироты':
            case 'Сирота':
                collapsedBackgroundAffiliation = 'Orphans';
                headerBackgroundAffiliation = 'var(--Orphans-background-logo)';
                break;
            case 'The Sisters of Hippolyta':
            case 'Sisters of Hippolyta':
            case 'The Hippolytoi':
            case 'Hippolytoi':
            case 'Сёстры Ипполиты':
            case 'Сестры Ипполиты':
                collapsedBackgroundAffiliation = 'Sisters-of-Hippolyta';
                headerBackgroundAffiliation = 'var(--Sisters-of-Hippolyta-background-logo)';
                break;
            case 'Taftâni':
            case 'Taftani':
            case 'Тафтани':
                collapsedBackgroundAffiliation = 'Taftani';
                headerBackgroundAffiliation = 'var(--Taftani-background-logo)';
                break;
            case 'The Templar Knights':
            case 'Templar Knights':
            case 'Рыцари-Тамплиерыы':
                collapsedBackgroundAffiliation = 'TemplarKnights';
                headerBackgroundAffiliation = 'var(--TemplarKnights-background-logo)';
                break;
            case 'The WuLung':
            case 'WuLung':
            case 'The Wu Lung':
            case 'Wu Lung':
            case 'У-Лун':
                collapsedBackgroundAffiliation = 'WuLung';
                headerBackgroundAffiliation = 'var(--WuLung-background-logo)';
                break;
        };

        if (!collapsedBackgroundAffiliation) return;
        collapsedColumn.classList.add(collapsedBackgroundAffiliation);
        setHeaderLogoIfWodHeaderPresent(root, headerBackgroundAffiliation);
    }

    function applyM20TechnocratAffiliationBranding(root, sheetClass) {
        if (root == null) return;
        if (!sheetMatchesEndsWith(sheetClass, MTA_M20_TECHNOCRAT_SHEETS)) return;
        if (root.querySelector('.line.affiliation .statblock-markdown') == null) return;

        const affiliationName = getAffiliationNameFromStatblock(root);
        if (!affiliationName) return;
        log('Название секты:', affiliationName);

        const collapsedColumn = root.querySelector('.collapse-container');
        if (collapsedColumn == null) return;

        let collapsedBackgroundAffiliation;
        let headerBackgroundAffiliation;

        switch (affiliationName) {
            case 'Iteration X':
            case 'Итерация Икс':
                collapsedBackgroundAffiliation = 'IterationX';
                headerBackgroundAffiliation = 'var(--IterationX-background-logo)';
                break;
            case 'The New World Order':
            case 'New World Order':
            case 'The NWO':
            case 'NWO':
            case 'Новый Мировой Порядок':
            case 'НМП':
                collapsedBackgroundAffiliation = 'NewWorldOrder';
                headerBackgroundAffiliation = 'var(--NewWorldOrder-background-logo)';
                break;
            case 'The Progenitors':
            case 'Progenitors':
            case 'Родоначальники':
                collapsedBackgroundAffiliation = 'Progenitors';
                headerBackgroundAffiliation = 'var(--Progenitors-background-logo)';
                break;
            case 'The Syndicate':
            case 'Syndicate':
            case 'Синдикат':
                collapsedBackgroundAffiliation = 'Syndicate';
                headerBackgroundAffiliation = 'var(--Syndicate-background-logo)';
                break;
            case 'The Void Engineers':
            case 'Void Engineers':
            case 'Инженеры Пустоты':
                collapsedBackgroundAffiliation = 'VoidEngineers';
                headerBackgroundAffiliation = 'var(--VoidEngineers-background-logo)';
                break;
        };

        if (!collapsedBackgroundAffiliation) return;
        collapsedColumn.classList.add(collapsedBackgroundAffiliation);
        setHeaderLogoIfWodHeaderPresent(root, headerBackgroundAffiliation);
    }

    function setHeaderLogoIfWodHeaderPresent(root, headerBackgroundClan) {
        if (headerBackgroundClan === undefined || headerBackgroundClan === null || headerBackgroundClan === '') return;
        const container = root.closest('.view-content') || root.closest('.markdown-embed-content') || root;
        if (container.querySelector('.wod-header') == null) return;
        const target = root.querySelector('.general-info-group > .statblock-inline-item.group-container');
        if (target != null) target.style.backgroundImage = headerBackgroundClan;
    }



    // --- настройка, отвечающая за отображение вампирского изъяна --- 
    // --- setting that controls whether the vampire weakness is displayed --- 
    function applyWeaknessVisibility(ctx) {
        const flagEl = ctx.qs('.line.show_weakness p');
        if (flagEl == null) return;

        const raw = (flagEl.textContent || '').trim().toLowerCase();
        const hide = (raw === 'no' || raw === 'false');

        const weaknessLine = ctx.qs('.line.weakness');
        if (weaknessLine == null) return;

        const container = weaknessLine.closest('.property-container');
        if (container != null) container.style.display = hide ? 'none' : '';
    }

    function setWeaknessInStatblock(root, weaknessHtml, opts = {}) {
        if (weaknessHtml === undefined || weaknessHtml === null) return;
        const el = root.querySelector('.weakness p');
        if (el == null) return;

        const onlyIfEmpty = !!opts.onlyIfEmpty;
        if (onlyIfEmpty) {
            const existing = (el.textContent ?? '').trim();
            const isPlaceholderDash = /^[-–—]$/.test(existing);
            if (existing.length > 0 && !isPlaceholderDash) return;
        }

        el.innerHTML = weaknessHtml;
    }

    // --- В зависимости от поколения, меняется значение траты крови в ход ---
    // --- depending on Generation, update the per-turn blood spend value ---
    function applyBloodPerTurnByGeneration(ctx) {
        const generationBlock = ctx.qs('.line.generation .statblock-markdown');
        if (generationBlock == null) return;

        const outEl = ctx.qs('.line.blood_per_turn p');
        if (outEl == null) return;

        // берем только первые два символа, если поколение вдруг длиннее за счет инфы про диаблери
        // take only the first two characters in case the generation string is longer (e.g., includes diablerie notes)
        let generation = (generationBlock.textContent || '').slice(0, 2);
        // убираем пробелы, если поколение 8-9
        // remove spaces if the generation is a single digit (8–9)
        generation = generation.replace(/\s/g, '');

        switch (generation) {
            case '13':
            case '12':
            case '11':
            case '10':
                outEl.textContent = '1'; break;
            case '9':
                outEl.textContent = '2'; break;
            case '8':
                outEl.textContent = '3'; break;
            case '7':
                outEl.textContent = '4'; break;
            case '6':
                outEl.textContent = '6'; break;
            case '5':
                outEl.textContent = '8'; break;
            case '4':
                outEl.textContent = '10'; break;
            default:
                // nothing
                // ничего
                break;
        }
    }
    // --- Скрывается H1 в заметке, если совпадает с именем персонажа в статблоке (active + hover) ---
    // --- hide the note H1 if it matches the character name in the statblock (active + hover) ---
    function applyHideNoteH1IfMatchesCharacter(ctx) {
        // Контейнер, в котором находится контент заметки
        // container that holds the note content
        let container = null;
        if (ctx.mode === 'hover') {
            container = ctx.root.closest('.popover.hover-popover') || document.querySelector('.popover.hover-popover');
        }
        else {
            container = ctx.root.closest('.workspace-leaf') || document.querySelector('.workspace-leaf.mod-active');
        }
        if (container == null) return;

        const noteH1 = container.querySelector('.markdown-preview-sizer > .el-h1 h1');
        if (noteH1 == null) return;

        const outlineName = (noteH1.innerText || '').trim();
        if (!outlineName) return;

        const statblockNameEl = ctx.qs('h1.heading .inline');
        if (statblockNameEl == null) return;

        const characterName = (statblockNameEl.textContent || '').trim();
        if (!characterName) return;

        if (outlineName === characterName) {
            noteH1.style.display = 'none';
        }
    }

    // --- Разная обработка значений для характеристик, способностей и дисциплин ---
    // --- different formatting for attributes, abilities, and disciplines values ---

    // Задаем названия классов, по которым будем искать 
    // Define the CSS class names we will search for
    const basicAttributes = ['.strength', '.dexterity', '.stamina', '.charisma', '.manipulation', '.appearance', '.perception', '.intelligence', '.wits'];
    const basicTalents = ['.athletics', '.alertness', '.brawl', '.intimidation', '.expression', '.leadership', '.streetwise', '.subterfuge', '.awareness', '.empathy']
    const basicSkills = ['.drive', '.larceny', '.survival', '.performance', '.animalken', '.crafts', '.stealth', '.firearms', '.melee', '.etiquette']
    const basicKnowledges = ['.academics', '.science', '.law', '.computer', '.medicine', '.occult', '.politics', '.investigation', '.finance', '.technology']
    const additionalDarkAgesAbilities = ['.legerdemain', '.ride', '.commerce', '.archery', '.enigmas', '.hearthwisdom', '.seneschal', '.theology']
    const mageAbilities = ['.art', '.martialarts', '.research', '.meditation', '.cosmology', '.esoterica']
    const wildWestAbilities = ['.smithwork', '.geology', '.culture']
    // Cобираем все в один список
    // Сombine everything into a single list
    const allTraits = basicAttributes.concat(basicTalents, basicSkills, basicKnowledges, additionalDarkAgesAbilities, mageAbilities, wildWestAbilities);

    function applyTraitsFormatting(ctx) {
        // Клан используется только для вампиров; для других листов вернётся пустая строка
        // Clan is only used for vampires; other sheets will return an empty string
        const clanNameLocal = getClanNameFromStatblock(ctx.root) || '';
        const isNosferatuOrSamedi =
            clanNameLocal.includes('Носферату') || clanNameLocal.includes('Nosferatu') ||
            clanNameLocal.includes('Самеди') || clanNameLocal.includes('Samedi');

        for (let x = 0; x < allTraits.length; x++) {
            const baseSel = allTraits[x];

            // Строка может отсутствовать в некоторых шаблонах — просто пропускаем
            // The row may be missing in some templates — just skip it
            if (ctx.qs(baseSel) == null) continue;

            // Находим имя и значение для каждого параметра
            // Find the name and value for each entry
            const nameEl = ctx.qs(baseSel + ' .property-name');
            if (nameEl == null) continue;

            // Имя может содержать разметку, поэтому берём текст
            // The name may include markup, so we take textContent
            const nameAbility = (nameEl.textContent || '').trim();

            // код для обычных точек (без dice-roller)
            // logic for plain dots (no dice-roller)
            let valueEl = null;

            // В некоторых шаблонах внутри строки могут быть несколько <p> (в т.ч. в имени), поэтому берём первый <p>, который не лежит внутри .property-name и не содержит .dice-roller.
            // Some templates may have multiple <p> (including inside the name); pick the first <p> not inside .property-name and not containing .dice-roller.
            const pCandidates = ctx.root.querySelectorAll(baseSel + ' p');
            for (let i = 0; i < pCandidates.length; i++) {
                const pEl = pCandidates[i];
                if (pEl.closest('.property-name')) continue;
                if (pEl.querySelector('.dice-roller')) continue;
                valueEl = pEl;
                break;
            }
            if (valueEl !== null) {
                const rawValText = (valueEl.textContent || '').trim();
                const rawValNum = Number(rawValText);
                const rawValIsNull = (rawValText === 'null');
                const rawValIsZero = (rawValText === '' || (Number.isFinite(rawValNum) && rawValNum === 0));

                // Если привлекательность 0 и клан Носферату/Самеди — строка привлекательности зачеркивается
                // If Appearance is 0 and the clan is Nosferatu/Samedi, strike through the Appearance row
                if ((rawValIsNull || rawValIsZero) && isNosferatuOrSamedi && baseSel.includes('.appearance')) {
                    const appearanceName = ctx.qs('.line.appearance .property-name');
                    setStyle(appearanceName, 'textDecoration', 'line-through');
                }
                // Eсли значение характеристик равно 0, вместо точек появится предупреждение
                // If an attribute value is 0, show a warning instead of dots
                else if ((rawValIsNull || rawValIsZero) && basicAttributes.includes(baseSel)) {
                    setStyle(valueEl, 'fontSize', (ctx.mode === 'active') ? '13px' : '14px');
                    setStyle(valueEl, 'fontFamily', 'Marta');
                    setStyle(valueEl, 'margin', '-1px 0px 0px 0px');
                    setText(valueEl, 'at least 1');
                }
                // В зависимости от длины имени и значения, точки будут заменены на цифры
                // Depending on name length and value, dots will be replaced with numbers
                else if ((nameAbility.length >= 11 && rawValNum > 9)
                    || (nameAbility.length >= 12 && rawValNum > 8)
                    || (nameAbility.length >= 13 && rawValNum > 7)
                    || (nameAbility.length >= 14 && rawValNum > 6)
                    || (nameAbility.length >= 15 && rawValNum > 5)) {

                    setStyle(valueEl, 'fontSize', '14px');
                    setStyle(valueEl, 'fontFamily', 'Marta');
                    setStyle(valueEl, 'margin', '-1px 0px 0px 0px');
                }
                // Mеняем десятку на X
                // Replace 10 with X
                else if (rawValNum === 10) {
                    setText(valueEl, 'X');
                }
            }
            // Для дайс роллера
            // For the dice-roller output
            else {
                const diceEl = ctx.qs(baseSel + ' .dice-roller-result');
                if (diceEl == null) continue;

                const valueAbilityText = (diceEl.textContent || '').trim();

                const valueAbilityNum = Number(valueAbilityText);
                const valueAbilityIsNull = (valueAbilityText === 'null');
                const valueAbilityIsZero = (valueAbilityText === '' || (Number.isFinite(valueAbilityNum) && valueAbilityNum === 0));

                // Eсли привлекательность 0 и клан Носферату/Самеди — строка привлекательности зачеркивается
                // If Appearance is 0 and the clan is Nosferatu/Samedi, strike through the Appearance row
                if ((valueAbilityIsNull || valueAbilityIsZero) && isNosferatuOrSamedi && baseSel.includes('.appearance')) {
                    const appearanceName2 = ctx.qs('.line.appearance .property-name');
                    setStyle(appearanceName2, 'textDecoration', 'line-through');

                    const appearanceDice = ctx.qs('.appearance .dice-roller-result');
                    if (appearanceDice != null) {
                        setText(appearanceDice, '0');
                        if (ctx.mode === 'hover') setStyle(appearanceDice, 'display', 'block');
                        setStyle(appearanceDice, 'fontSize', '9px');
                        setStyle(appearanceDice, 'fontFamily', 'SmallCircles');
                        setStyle(appearanceDice, 'textAlign', 'center');
                        setStyle(appearanceDice, 'verticalAlign', 'top');
                        setStyle(appearanceDice, 'fontWeight', 'normal');
                    }
                }
                // Если значение характеристик равно 0, вместо точек появится предупреждение
                // If an attribute value is 0, show a warning instead of dots
                else if ((valueAbilityIsNull || valueAbilityIsZero) && basicAttributes.includes(baseSel)) {
                    setStyle(diceEl, 'fontSize', '14px');
                    setStyle(diceEl, 'fontFamily', 'Marta');
                    setStyle(diceEl, 'margin', '-1px 0px 0px 0px');
                    setText(diceEl, 'at least 1');
                }
                // В зависимости от длины имени и значения, точки будут заменяться на цифры
                // Depending on name length and value, dots will be replaced with numbers
                else if ((nameAbility.length >= 11 && valueAbilityNum > 9)
                    || (nameAbility.length >= 12 && valueAbilityNum > 8)
                    || (nameAbility.length >= 13 && valueAbilityNum > 7)
                    || (nameAbility.length >= 14 && valueAbilityNum > 6)
                    || (nameAbility.length >= 15 && valueAbilityNum > 5)) {

                    setStyle(diceEl, 'fontSize', '14px');
                    setStyle(diceEl, 'fontFamily', 'Marta');
                    setStyle(diceEl, 'margin', '-1px 0px 0px 0px');
                }
                // Меняем десятку на X
                // Replace 10 with X
                else if (valueAbilityNum === 10) {
                    setText(diceEl, 'X');
                }
            }
        }
    }

    // --- Дисциплины --- 
    // --- Disciplines --- 

    // Имена некоторых дисциплин слишком длинные; в сочетании с высокими (больше 5) значениями может ломаться отображение. Поэтому кое-где точки будут заменяться на цифры (уменьшаем размер/межстрочные отступы у значения дисциплины).
    // Some discipline names are too long; combined with high values (over 5) this can break the layout. So in some cases dots are replaced with numbers (reduce font size/line spacing for the discipline value)
    function applyDisciplinesFormatting(ctx) {
        if (ctx.qs('.discipline1_name p') == null) return;

        // Получаем список всего из столбца дисциплин: name/value чередуются
        // Get the full list from the disciplines column (name/value alternating)
        const disciplinesList = ctx.qsa('.disciplines-column p');
        if (disciplinesList == null || disciplinesList.length < 2) return;

        for (let i = 0; i < disciplinesList.length; i += 2) {
            const nameEl = disciplinesList[i];
            const valueEl = disciplinesList[i + 1];
            if (!nameEl || !valueEl) continue;

            const nameLen = ((nameEl.innerText || nameEl.textContent || '').trim()).length;
            const valueNum = Number((valueEl.innerText || valueEl.textContent || '').trim());
            if (!Number.isFinite(valueNum)) continue;

            let didStyleAdjust = false;

            if ((nameLen >= 11 && valueNum > 9)
                || (nameLen >= 12 && valueNum > 8)
                || (nameLen >= 13 && valueNum > 7)
                || (nameLen >= 14 && valueNum > 6)
                || (nameLen >= 15 && valueNum > 5)) {

                didStyleAdjust = true;
                setStyle(valueEl, 'fontSize', '14px');
                setStyle(valueEl, 'fontFamily', 'Marta');
                setStyle(valueEl, 'margin', '-2px 0px 0px 0px');
            }

            // Заменяем 10 на X для дисциплин (и в обычном значении, и в dice-roller)
            // Replace 10 with X for disciplines (both normal value and dice-roller)
            if (!didStyleAdjust && valueNum === 10) {
                const diceResultEl = valueEl.querySelector('.dice-roller-result');
                setText(diceResultEl != null ? diceResultEl : valueEl, 'X');
            }
        }
    }


    // --- В завимимости от названия пути и его значения, проставляется (или удаляется) модификатор столпа --- 
    // --- Depending on the Path name and its value, set (or remove) the Bearing modifier --- 
    function applyBearingModifier(ctx) {
        const pathEl = ctx.qs('.line.path .statblock-markdown > p');
        if (pathEl == null) return;

        const path = (pathEl.textContent || '').trim();

        // Если путь вообще не указан...
        // If the Path is not specified at all...
        if (!path) {
            const bearingRow = ctx.qs('.bearing');
            if (bearingRow != null) bearingRow.style.display = 'none';
            return;
        }

        // Если путь это человечность, то...
        // If the Path is Humanity, then...
        if (path.toLowerCase() === 'человечность') {
            const pathValueEl = ctx.qs('.line.path_value p');
            if (pathValueEl == null) return;

            let pathModifier = (pathValueEl.textContent || '').trim();

            // Заменяем десятики на X
            // Replace 10s with X
            if (pathModifier === '10') {
                pathModifier = 'X';
                pathValueEl.textContent = 'X';
            }

            const bearingValueEl = ctx.qs('.line.bearing p');
            if (bearingValueEl == null) return;

            switch (pathModifier) {
                case 'X':
                    bearingValueEl.textContent = 'Нормальность ( -2 )'; break;
                case '9':
                case '8':
                    bearingValueEl.textContent = 'Нормальность ( -1 )'; break;
                case '7':
                case '6':
                case '5':
                case '4':
                    bearingValueEl.textContent = 'Нормальность'; break;
                case '3':
                case '2':
                    bearingValueEl.textContent = 'Нормальность ( +1 )'; break;
                case '1':
                    bearingValueEl.textContent = 'Нормальность ( +2 )'; break;
                default:
                    bearingValueEl.textContent = 'Теперь ты Зверь!';
                    break;
            }
            return;
        }

        // Иначе (не-человечность\путь) — скрываем столп и убираем стрелочки вокруг заголовка
        // Otherwise (non-Humanity\Path) — hide Bearing and remove the header arrows
        const bearingRow2 = ctx.qs('.bearing');
        if (bearingRow2 != null) bearingRow2.style.display = 'none';

        const pathEl2 = ctx.qs('.path');
        const pathBlock = pathEl2 ? pathEl2.closest('.statblock-item-container.path-block') : null;
        if (pathBlock != null) pathBlock.style.backgroundImage = 'none';

        // Заменяем 10 на X (как было раньше)
        // Replace 10 with X (as before)
        const pathValueEl2 = ctx.qs('.line.path_value p');
        if (pathValueEl2 != null) {
            const pv2 = (pathValueEl2.textContent || '').trim();
            if (pv2 === '10') pathValueEl2.textContent = 'X';
        }
    }


    // --- Меняем всякие иксы на нормальные 10 для воли --- 
    // --- Convert 10s to X for Willpower (comment duplicated) --- 

    function applyWillpowerX(ctx) {
        // Задаем названия классов, по которым будем искать волю и запас воли
        // Define the class names used to find Willpower and Willpower (current)
        const willpowerOptions = ['.willpower_main', '.willpower_current'];

        // Проверяем, есть ли вообще воля в статблоке
        // Check whether Willpower exists in the statblock
        if (ctx.qs('.willpower-block .line.willpower_main') == null) return;

        for (let i = 0; i < willpowerOptions.length; i++) {
            const base = willpowerOptions[i];

            // Ищем обычное значение
            // Look for the normal value
            const pEl = ctx.qs(base + ' p');
            if (pEl != null) {
                const val = (pEl.textContent || '').trim();
                if (val === '10') {
                    pEl.textContent = 'X';
                }
            }

            // Ищем дайс роллер
            // Look for the dice-roller value
            const diceEl = ctx.qs(base + ' .dice-roller-result');
            if (diceEl != null) {
                const diceVal = (diceEl.textContent || '').trim();
                if (diceVal === '10') {
                    diceEl.textContent = 'X';
                }
            }
        }
    }


    // --- Глобальный пересчет крови, чтобы из одной цифры (от 1 до 40) добавлялись и отображались нужные строчки, а ненужные скрывались --- 
    // --- Global blood recalculation: from a single number (1–40) show the required extra rows and hide the unnecessary ones --- 
    function applyBloodCurrentRecalc(ctx) {
        if (ctx.qs('.line.blood') != null) {
            // Находим значение крови
            // Read the blood value
            const bloodEl = ctx.qs('.line.blood p');
            if (bloodEl == null) return;
            const bloodCurrentRaw = (bloodEl.textContent || '').trim();
            const bloodCurrent = Number(bloodCurrentRaw);
            // Кэшируем контейнеры для строк blood_current2/3/4
            // Cache containers for blood_current2/3/4 rows
            const bloodCurrent2Container = getBloodPropertyContainer(ctx, 2);
            const bloodCurrent3Container = getBloodPropertyContainer(ctx, 3);
            const bloodCurrent4Container = getBloodPropertyContainer(ctx, 4);
            log('значение крови' + (ctx.mode === 'hover' ? ' в ховере' : '') + ' = ' + bloodCurrentRaw)
            if (bloodCurrent <= 9) {
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'none';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'none';
                if (bloodCurrent4Container != null) bloodCurrent4Container.style.display = 'none';
                log('проверка на меньше девяти')
                // debug: check for less than nine
            } else if (bloodCurrent == 10) {
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'none';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'none';
                if (bloodCurrent4Container != null) bloodCurrent4Container.style.display = 'none';
                log('проверка на равенство десяти или иксу')
                // debug: check for equal to ten (or X)
            } else if (bloodCurrent < 20) {
                const bloodCurrentTwo = bloodCurrent - 10;
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'block';
                ctx.qs('.line.blood_current2 p').innerHTML = bloodCurrentTwo;
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'none';
                if (bloodCurrent4Container != null) bloodCurrent4Container.style.display = 'none';
                log('проверка на меньше двадцати')
                // debug: check for less than twenty
            } else if (bloodCurrent == 20) {
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'block';
                ctx.qs('.line.blood_current2 p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'none';
                if (bloodCurrent4Container != null) bloodCurrent4Container.style.display = 'none';
                log('проверка на равенство двадцати')
                // debug: check for less than twenty
            } else if (bloodCurrent < 30) {
                const bloodCurrentThree = bloodCurrent - 20;
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'block';
                ctx.qs('.line.blood_current2 p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'block';
                ctx.qs('.line.blood_current3 p').innerHTML = bloodCurrentThree;
                if (bloodCurrent4Container != null) bloodCurrent4Container.style.display = 'none';
                log('проверка на меньше тридцати')
                // debug: check for less than thirty
            } else if (bloodCurrent == 30) {
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'block';
                ctx.qs('.line.blood_current2 p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'block';
                ctx.qs('.line.blood_current3 p').innerHTML = 'X';;
                if (bloodCurrent4Container != null) bloodCurrent4Container.style.display = 'none';
                log('проверка на равенство тридцати')
                // debug: check for equal to thirty
            } else if (bloodCurrent < 40) {
                const bloodCurrentFour = bloodCurrent - 30;
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'block';
                ctx.qs('.line.blood_current2 p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'block';
                ctx.qs('.line.blood_current3 p').innerHTML = 'X';
                ctx.qs('.line.blood_current4 p').innerHTML = bloodCurrentFour;
                log('проверка на меньше сорока')
                // debug: check for less than forty
            } else if (bloodCurrent === 40) {
                ctx.qs('.line.blood p').innerHTML = 'X';
                if (bloodCurrent2Container != null) bloodCurrent2Container.style.display = 'block';
                ctx.qs('.line.blood_current2 p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'block';
                ctx.qs('.line.blood_current3 p').innerHTML = 'X';
                if (bloodCurrent3Container != null) bloodCurrent3Container.style.display = 'block';
                ctx.qs('.line.blood_current4 p').innerHTML = 'X';
                log('проверка на равенство сорока')
                // debug: check for equal to forty
            } else if (bloodCurrent >= 41) {
                ctx.qs('.line.blood p').innerHTML = 'X';
                const c2 = bloodCurrent2Container;
                if (c2 != null) c2.innerHTML = '';
                const c3 = bloodCurrent3Container;
                if (c3 != null) c3.innerHTML = '';
                const c4 = bloodCurrent4Container;
                if (c4 != null) c4.innerHTML = '';
                ctx.qs('.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrentRaw + '.  Time to think about your Humanity!';
                log('проверка на больше сорока')
            } else {
                log('что-то с кровью' + (ctx.mode === 'hover' ? ' в ховере' : '') + ' пошло не так')
            }
        }
        else {

        }

    }



    // --- ОБОРОТНИ --- 
    // --- WEREWOLVES --- 

    // Определяем, с какой стороны показывать достоинства и недостатки у оборотней
    // Сhoose which side to display werewolf merits and flaws on
    function applyMeritsFlawsPlacement(ctx) {
        if (!sheetMatchesEndsWith(ctx.sheetClass, WTA_W20_WEREWOLF_SHEETS)) return;

        const whereEl = ctx.qs('.line.where-to-show-merits-and-flaws p');
        if (whereEl == null) return;

        const where = (whereEl.textContent || '').trim().toLowerCase();
        // Контейнеры колонок
        // Column containers
        const rightCol = ctx.qs('.merits-and-flaws-column-right');
        const rightContainer = rightCol ? rightCol.closest('.statblock-item-container.group-container') : null;
        const leftCol = ctx.qs('.merits-and-flaws-column-left');
        const leftContainer = leftCol ? leftCol.closest('.statblock-item-container.group-container') : null;

        switch (where) {
            case 'left':
                if (rightContainer != null) rightContainer.style.display = 'none';
                break;
            case 'right':
                if (leftContainer != null) leftContainer.style.display = 'none';
                break;
        }
    }


    // Задаем названия классов, по которым будем искать оборотневские характеристики
    // Define the class names used to find werewolf stats
    function applyWerewolfOptionsX(ctx) {
        // Применяем только к листам оборотней
        // Apply only to werewolf sheets
        if (!sheetMatchesEndsWith(ctx.sheetClass, WTA_W20_WEREWOLF_SHEETS)) return;

        // Названия характеристик/добродетелей, у которых бывают точки или dice-roller
        // Names of stats/virtues that can appear as dots or via dice-roller
        const werewolfOptions = ['rage', 'gnosis', 'glory', 'honor', 'wisdom'];
        // Базовое значение и запас
        // Base value and current pool
        const suffixes = ['_main', '_current'];

        for (let i = 0; i < werewolfOptions.length; i++) {
            const opt = werewolfOptions[i];

            for (let j = 0; j < suffixes.length; j++) {
                const suffix = suffixes[j];

                // Если вообще есть соответствующий блок...
                // If the corresponding block exists at all...
                if (ctx.qs('.' + opt + '-block .line.' + opt + suffix) == null) continue;

                const baseSel = '.' + opt + suffix;

                // Обычное значение
                // Normal value
                const pEl = ctx.qs(baseSel + ' p');
                if (pEl != null) {
                    const val = (pEl.textContent || '').trim();
                    if (val === '10') setText(pEl, 'X');
                    continue;
                }

                // Dice-roller
                const diceEl = ctx.qs(baseSel + ' .dice-roller-result');
                if (diceEl != null) {
                    const diceVal = (diceEl.textContent || '').trim();
                    if (diceVal === '10') setText(diceEl, 'X');
                }
            }
        }
    }

    // --- Единый проход по контекстам (active + hover): запускаем все обработчики в одном месте ---
    // --- Unified pass over contexts (active + hover): run all handlers in one place --- 
    forEachProcessingContext(function (ctx) {
        // Брендинг листа (фоны, логотипы, дефолтная слабость)
        // Sheet branding (backgrounds, logos, default weakness)
        applyV20VampireClanBranding(ctx.root, ctx.sheetClass);
        applyDarkAgesVampireClanBranding(ctx.root, ctx.sheetClass);
        applyW20WerewolfTribeBranding(ctx.root, ctx.sheetClass);
        applyV20AgentAgencyBranding(ctx.root, ctx.sheetClass);
        applyM20MageAffiliationBranding(ctx.root, ctx.sheetClass);
        applyM20TechnocratAffiliationBranding(ctx.root, ctx.sheetClass);

        // Отображение кланового изъяна
        // Weakness visibility
        applyWeaknessVisibility(ctx);

        // Вычисление предела траты крови в ход
        // "Blood per Turn" calculation
        applyBloodPerTurnByGeneration(ctx);

        // Косметика заметки
        // note cosmetics
        applyHideNoteH1IfMatchesCharacter(ctx);

        // Форматирование значений способностей и дисциплин
        // formatting of values of trais and disciplines
        applyTraitsFormatting(ctx);
        applyDisciplinesFormatting(ctx);

        // Модификатор Пути/Человечности
        // Path/Humanity bearing modifier
        applyBearingModifier(ctx);

        // Пересчет Х для воли и крови
        // Willpower and blood tens-to-X transformation
        applyWillpowerX(ctx);
        applyBloodCurrentRecalc(ctx);

        // Расположение оборотневых достоинств и недостатков слева или справа
        // Werewolf's merits and flaws left or roght placement
        applyMeritsFlawsPlacement(ctx);

        // Пересчет Х для оборотневых опций
        // Werewolf tens-to-X transformation
        applyWerewolfOptionsX(ctx);
    });


})();
