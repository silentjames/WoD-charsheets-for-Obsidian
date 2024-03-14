async function sleep(ms) { // сон, чтобы успела прогрузиться вся страница
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(120).then(() => {

    // список изъянов для кланов
    // Камарилья
    const weaknessBrujah = '';
    const weaknessCaitiff = '';
    const weaknessGangrel = '';
    const weaknessMalkavian = '';
    const weaknessNosferatu = '';
    const weaknessToreador = '';
    const weaknessTremere = '';
    const weaknessVentrue = '';
    // Шабаш
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
    const weaknessAssamite = '';
    const weaknessFollowersOfSet = '';
    const weaknessGiovanni = '';
    const weaknessRavnos = '';
    // Линии крови
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


    // the list of weakness for Dark Ages
    // Clans
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


    // найти активную открытую вкладку для вампирского статблока
    var findClasses = document.querySelector('.workspace-leaf.mod-active .obsidian-statblock-plugin.statblock')
    const statblockClassList = findClasses.classList
    var allClasses = statblockClassList.value.toString()
    var regex = /[a-z]{3}-[a-z]{1}20-[a-z-]{0,20}/gm;
    var statblockCSSclass = '.' + allClasses.match(regex);
    // console.log(statblockCSSclass + ' |=| css-класс статблока')
    var activeTab = '.workspace-leaf.mod-active ' + statblockCSSclass + ' ';

    // найти статблок в ховере
    if (document.querySelector('.popover.hover-popover') != null) {
        var statblockClassListHover = document.querySelector('.popover.hover-popover .obsidian-statblock-plugin.statblock').classList;
        var allClassesHover = statblockClassListHover.value.toString()
        var statblockCSSclassHover = '.' + allClassesHover.match(regex);
        // console.log(statblockCSSclassHover + ' |=| css-класс статблока в ховере')
        var statblockCSSpathHover = '.popover.hover-popover ' + statblockCSSclassHover + ' ';
    }
    else { }


    // используется ли обычный вампирский статблок?
    if (document.querySelector(activeTab + '.line.clan .statblock-markdown') != null && (statblockCSSclass.endsWith('.vtm-v20-vampire') || statblockCSSclass.endsWith('.vtm-v20-vampire-en'))) {
        // определяется клан, и каждому клану подставляется своя картинка на бэкграунд, и изъян
        var clanName = document.querySelector(activeTab + '.line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - название клана')
        // определяется зона, которой будет назначен бэкграунд
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (clanName) {
            case 'Ассамиты':
            case 'Assamite':
                // каждому клану назначается соответствующий класс, для которого в css уже вшито изображение
                var collapsedBackgroundClan = 'Assamite';
                // изъян - соответствующий клану из списка выше
                var clanWeakness = weaknessAssamite;
                //  если у заметки есть класс wod-header, логотип клана будет под именем, рядом с фото
                var headerBackgroundClan = 'var(--Assamite-background-logo)';
                break;
            case 'Антитрибу Ассамитов':
            case 'Assamite Antitribu':
                var collapsedBackgroundClan = 'Assamite-Antitribu';
                var clanWeakness = weaknessAssamiteAntitribu;
                var headerBackgroundClan = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Баали':
            case 'Baali':
                var collapsedBackgroundClan = 'Baali';
                var clanWeakness = weaknessBaali;
                var headerBackgroundClan = 'var(--Baali-background-logo)';
                break;
            case 'Бруха':
            case 'Brujah':
                var collapsedBackgroundClan = 'Brujah';
                var clanWeakness = weaknessBrujah;
                var headerBackgroundClan = 'var(--Brujah-background-logo)';
                break;
            case 'Антитрибу Бруха':
            case 'Brujah Antitribu':
                var collapsedBackgroundClan = 'Brujah-Antitribu';
                var clanWeakness = weaknessBrujahAntitribu;
                var headerBackgroundClan = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'Истинные Бруха':
            case 'True Brujah':
                var collapsedBackgroundClan = 'True-Brujah';
                var clanWeakness = weaknessTrueBrujah;
                var headerBackgroundClan = 'var(--True-Brujah-background-logo)';
                break;
            case 'Каппадокийцы':
            case 'Cappadocians':
                var collapsedBackgroundClan = 'Cappadocians';
                var clanWeakness = weaknessCappadocians;
                var headerBackgroundClan = 'var(--Cappadocians-background-logo)';
                break;
            case 'Каитиф':
            case 'Caitiff':
                var collapsedBackgroundClan = 'Caitiff';
                var clanWeakness = weaknessCaitiff;
                var headerBackgroundClan = 'var(--Caitiff-background-logo)';
                break;
            case 'Пандер':
            case 'Pander':
                var collapsedBackgroundClan = 'Caitiff-Antitribu-Pander';
                var clanWeakness = weaknessCaitiffAntitribuPander;
                var headerBackgroundClan = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Вентру':
            case 'Ventrue':
                var collapsedBackgroundClan = 'Ventrue';
                var clanWeakness = weaknessVentrue;
                var headerBackgroundClan = 'var(--Ventrue-background-logo)';
                break;
            case 'Антитрибу Вентру':
            case 'Ventrue Antitribu':
                var collapsedBackgroundClan = 'Ventrue-Antitribu';
                var clanWeakness = weaknessVentrueAntitribu;
                var headerBackgroundClan = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Гангрел':
            case 'Gangrel':
                var collapsedBackgroundClan = 'Gangrel';
                var clanWeakness = weaknessGangrel;
                var headerBackgroundClan = 'var(--Gangrel-background-logo)';
                break;
            case 'Дикие Гангрелы':
            case 'Country Gangrel':
                var collapsedBackgroundClan = 'Country-Gangrel';
                var clanWeakness = weaknessCountryGangrel;
                var headerBackgroundClan = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'Городские Гангрелы':
            case 'City Gangrel':
                var collapsedBackgroundClan = 'City-Gangrel';
                var clanWeakness = weaknessCityGangrel;
                var headerBackgroundClan = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Джованни':
            case 'Giovanni':
                var collapsedBackgroundClan = 'Giovanni';
                var clanWeakness = weaknessGiovanni;
                var headerBackgroundClan = 'var(--Giovanni-background-logo)';
                break;
            case 'Дочери Какофонии':
            case 'Daughters of Cacophony':
                var collapsedBackgroundClan = 'Daughters-of-Cacophony';
                var clanWeakness = weaknessDaughtersOfCacophony;
                var headerBackgroundClan = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Киасиды':
            case 'Kiasyd':
                var collapsedBackgroundClan = 'Kiasyd';
                var clanWeakness = weaknessKiasyd;
                var headerBackgroundClan = 'var(--Kiasyd-background-logo)';
                break;
            case 'Ласомбра':
            case 'Lasombra':
                var collapsedBackgroundClan = 'Lasombra';
                var clanWeakness = weaknessLasombra;
                var headerBackgroundClan = 'var(--Lasombra-background-logo)';
                break;
            case 'Малкавиане':
            case 'Малкавиан':
            case 'Malkavian':
                var collapsedBackgroundClan = 'Malkavian';
                var clanWeakness = weaknessMalkavian;
                var headerBackgroundClan = 'var(--Malkavian-background-logo)';
                break;
            case 'Антитрибу Малкавиан':
            case 'Malkavian Antitribu':
                var collapsedBackgroundClan = 'Malkavian-Antitribu';
                var clanWeakness = weaknessMalkavianAntitribu;
                var headerBackgroundClan = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Носферату':
            case 'Nosferatu':
                var collapsedBackgroundClan = 'Nosferatu';
                var clanWeakness = weaknessNosferatu;
                var headerBackgroundClan = 'var(--Nosferatu-background-logo)';
                break;
            case 'Антитрибу Носферату':
            case 'Nosferatu Antitribu':
                var collapsedBackgroundClan = 'Nosferatu-Antitribu';
                var clanWeakness = weaknessNosferatuAntitribu;
                var headerBackgroundClan = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case 'Последователи Сета':
            case 'Followers of Set':
                var collapsedBackgroundClan = 'Followers-of-Set';
                var clanWeakness = weaknessFollowersOfSet;
                var headerBackgroundClan = 'var(--Followers-of-Set-background-logo)';
                break;
            case 'Змеи Света':
            case 'Serpents of Light':
                var collapsedBackgroundClan = 'Serpents-of-Light';
                var clanWeakness = weaknessSerpentsOfLight;
                var headerBackgroundClan = 'var(--Serpents-of-Light-background-logo)';
                break;
            case 'Равнос':
            case 'Ravnos':
                var collapsedBackgroundClan = 'Ravnos';
                var clanWeakness = weaknessRavnos;
                var headerBackgroundClan = 'var(--Ravnos-background-logo)';
                break;
            case 'Антитрибу Равнос':
            case 'Ravnos Antitribu':
                var collapsedBackgroundClan = 'Ravnos-Antitribu';
                var clanWeakness = weaknessRavnosAntitribu;
                var headerBackgroundClan = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case 'Салюбри':
            case 'Salubri':
                var collapsedBackgroundClan = 'Salubri';
                var clanWeakness = weaknessSalubri;
                var headerBackgroundClan = 'var(--Salubri-background-logo)';
                break;
            case 'Антитрибу Салюбри':
            case 'Salubri Antitribu':
                var collapsedBackgroundClan = 'Salubri-Antitribu';
                var clanWeakness = weaknessSalubriAntitribu;
                var headerBackgroundClan = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case 'Самеди':
            case 'Samedi':
                var collapsedBackgroundClan = 'Samedi';
                var clanWeakness = weaknessSamedi;
                var headerBackgroundClan = 'var(--Samedi-background-logo)';
                break;
            case 'Тореадор':
            case 'Toreador':
                var collapsedBackgroundClan = 'Toreador';
                var clanWeakness = weaknessToreador;
                var headerBackgroundClan = 'var(--Toreador-background-logo)';
                break;
            case 'Антитрибу Тореадор':
            case 'Toreador Antitribu':
                var collapsedBackgroundClan = 'Toreador-Antitribu';
                var clanWeakness = weaknessToreadorAntitribu;
                var headerBackgroundClan = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case 'Тремер':
            case 'Tremere':
                var collapsedBackgroundClan = 'Tremere';
                var clanWeakness = weaknessTremere;
                var headerBackgroundClan = 'var(--Tremere-background-logo)';
                break;
            case 'Антитрибу Тремер':
            case 'Tremere Antitribu':
                var collapsedBackgroundClan = 'Tremere-Antitribu';
                var clanWeakness = weaknessTremereAntitribu;
                var headerBackgroundClan = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case 'Цимисхи':
            case 'Tzimisce':
                var collapsedBackgroundClan = 'Tzimisce';
                var clanWeakness = weaknessTzimisce;
                var headerBackgroundClan = 'var(--Tzimisce-background-logo)';
                break;
        };
        collapsedColumn.classList.add(collapsedBackgroundClan);
        document.querySelector(activeTab + '.weakness .inline').innerHTML = clanWeakness;
        if (document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClan
        };
    }
    else {
        // nothing
    }
    // для ховера все то же самое
    if (document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown') != null && (statblockCSSclassHover.endsWith('.vtm-v20-vampire') || statblockCSSclassHover.endsWith('.vtm-v20-vampire-en'))) {
        var clanNameHover = document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown > p').innerHTML;
        var collapsedColumnHover = document.querySelector(statblockCSSpathHover + '.collapse-container');
        switch (clanNameHover) {
            case 'Ассамиты':
            case 'Assamite':
                var collapsedBackgroundClanHover = 'Assamite';
                var clanWeaknessHover = weaknessAssamite;
                var headerBackgroundClanHover = 'var(--Assamite-background-logo)';
                break;
            case 'Антитрибу Ассамитов':
            case 'Assamite Antitribu':
                var collapsedBackgroundClanHover = 'Assamite-Antitribu';
                var clanWeaknessHover = weaknessAssamiteAntitribu;
                var headerBackgroundClanHover = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Баали':
            case 'Baali':
                var collapsedBackgroundClanHover = 'Baali';
                var clanWeaknessHover = weaknessBaali;
                var headerBackgroundClanHover = 'var(--Baali-background-logo)';
                break;
            case 'Бруха':
            case 'Brujah':
                var collapsedBackgroundClanHover = 'Brujah';
                var clanWeaknessHover = weaknessBrujah;
                var headerBackgroundClanHover = 'var(--Brujah-background-logo)';
                break;
            case 'Антитрибу Бруха':
            case 'Brujah Antitribu':
                var collapsedBackgroundClanHover = 'Brujah-Antitribu';
                var clanWeaknessHover = weaknessBrujahAntitribu;
                var headerBackgroundClanHover = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'Истинные Бруха':
            case 'True Brujah':
                var collapsedBackgroundClanHover = 'True-Brujah';
                var clanWeaknessHover = weaknessTrueBrujah;
                var headerBackgroundClanHover = 'var(--True-Brujah-background-logo)';
                break;
            case 'Каппадокийцы':
            case 'Cappadocians':
                var collapsedBackgroundClanHover = 'Cappadocians';
                var clanWeaknessHover = weaknessCappadocians;
                var headerBackgroundClanHover = 'var(--Cappadocians-background-logo)';
                break;
            case 'Каитиф':
            case 'Caitiff':
                var collapsedBackgroundClanHover = 'Caitiff';
                var clanWeaknessHover = weaknessCaitiff;
                var headerBackgroundClanHover = 'var(--Caitiff-background-logo)';
                break;
            case 'Пандер':
            case 'Pander':
                var collapsedBackgroundClanHover = 'Caitiff-Antitribu-Pander';
                var clanWeaknessHover = weaknessCaitiffAntitribuPander;
                var headerBackgroundClanHover = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Вентру':
            case 'Ventrue':
                var collapsedBackgroundClanHover = 'Ventrue';
                var clanWeaknessHover = weaknessVentrue;
                var headerBackgroundClanHover = 'var(--Ventrue-background-logo)';
                break;
            case 'Антитрибу Вентру':
            case 'Ventrue Antitribu':
                var collapsedBackgroundClanHover = 'Ventrue-Antitribu';
                var clanWeaknessHover = weaknessVentrueAntitribu;
                var headerBackgroundClanHover = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Гангрел':
            case 'Gangrel':
                var collapsedBackgroundClanHover = 'Gangrel';
                var clanWeaknessHover = weaknessGangrel;
                var headerBackgroundClanHover = 'var(--Gangrel-background-logo)';
                break;
            case 'Дикие Гангрелы':
            case 'Country Gangrel':
                var collapsedBackgroundClanHover = 'Country-Gangrel';
                var clanWeaknessHover = weaknessCountryGangrel;
                var headerBackgroundClanHover = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'Городские Гангрелы':
            case 'City Gangrel':
                var collapsedBackgroundClanHover = 'City-Gangrel';
                var clanWeaknessHover = weaknessCityGangrel;
                var headerBackgroundClanHover = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Джованни':
            case 'Giovanni':
                var collapsedBackgroundClanHover = 'Giovanni';
                var clanWeaknessHover = weaknessGiovanni;
                var headerBackgroundClanHover = 'var(--Giovanni-background-logo)';
                break;
            case 'Дочери Какофонии':
            case 'Daughters of Cacophony':
                var collapsedBackgroundClanHover = 'Daughters-of-Cacophony';
                var clanWeaknessHover = weaknessDaughtersOfCacophony;
                var headerBackgroundClanHover = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Киасиды':
            case 'Kiasyd':
                var collapsedBackgroundClanHover = 'Kiasyd';
                var clanWeaknessHover = weaknessKiasyd;
                var headerBackgroundClanHover = 'var(--Kiasyd-background-logo)';
                break;
            case 'Ласомбра':
            case 'Lasombra':
                var collapsedBackgroundClanHover = 'Lasombra';
                var clanWeaknessHover = weaknessLasombra;
                var headerBackgroundClanHover = 'var(--Lasombra-background-logo)';
                break;
            case 'Малкавиане':
            case 'Малкавиан':
            case 'Malkavian':
                var collapsedBackgroundClanHover = 'Malkavian';
                var clanWeaknessHover = weaknessMalkavian;
                var headerBackgroundClanHover = 'var(--Malkavian-background-logo)';
                break;
            case 'Антитрибу Малкавиан':
            case 'Malkavian Antitribu':
                var collapsedBackgroundClanHover = 'Malkavian-Antitribu';
                var clanWeaknessHover = weaknessMalkavianAntitribu;
                var headerBackgroundClanHover = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Носферату':
            case 'Nosferatu':
                var collapsedBackgroundClanHover = 'Nosferatu';
                var clanWeaknessHover = weaknessNosferatu;
                var headerBackgroundClanHover = 'var(--Nosferatu-background-logo)';
                break;
            case 'Антитрибу Носферату':
            case 'Nosferatu Antitribu':
                var collapsedBackgroundClanHover = 'Nosferatu-Antitribu';
                var clanWeaknessHover = weaknessNosferatuAntitribu;
                var headerBackgroundClanHover = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case 'Последователи Сета':
            case 'Followers of Set':
                var collapsedBackgroundClanHover = 'Followers-of-Set';
                var clanWeaknessHover = weaknessFollowersOfSet;
                var headerBackgroundClanHover = 'var(--Followers-of-Set-background-logo)';
                break;
            case 'Змеи Света':
            case 'Serpents of Light':
                var collapsedBackgroundClanHover = 'Serpents-of-Light';
                var clanWeaknessHover = weaknessSerpentsOfLight;
                var headerBackgroundClanHover = 'var(--Serpents-of-Light-background-logo)';
                break;
            case 'Равнос':
            case 'Ravnos':
                var collapsedBackgroundClanHover = 'Ravnos';
                var clanWeaknessHover = weaknessRavnos;
                var headerBackgroundClanHover = 'var(--Ravnos-background-logo)';
                break;
            case 'Антитрибу Равнос':
            case 'Ravnos Antitribu':
                var collapsedBackgroundClanHover = 'Ravnos-Antitribu';
                var clanWeaknessHover = weaknessRavnosAntitribu;
                var headerBackgroundClanHover = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case 'Салюбри':
            case 'Salubri':
                var collapsedBackgroundClanHover = 'Salubri';
                var clanWeaknessHover = weaknessSalubri;
                var headerBackgroundClanHover = 'var(--Salubri-background-logo)';
                break;
            case 'Антитрибу Салюбри':
            case 'Salubri Antitribu':
                var collapsedBackgroundClanHover = 'Salubri-Antitribu';
                var clanWeaknessHover = weaknessSalubriAntitribu;
                var headerBackgroundClanHover = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case 'Самеди':
            case 'Samedi':
                var collapsedBackgroundClanHover = 'Samedi';
                var clanWeaknessHover = weaknessSamedi;
                var headerBackgroundClanHover = 'var(--Samedi-background-logo)';
                break;
            case 'Тореадор':
            case 'Toreador':
                var collapsedBackgroundClanHover = 'Toreador';
                var clanWeaknessHover = weaknessToreador;
                var headerBackgroundClanHover = 'var(--Toreador-background-logo)';
                break;
            case 'Антитрибу Тореадор':
            case 'Toreador Antitribu':
                var collapsedBackgroundClanHover = 'Toreador-Antitribu';
                var clanWeaknessHover = weaknessToreadorAntitribu;
                var headerBackgroundClanHover = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case 'Тремер':
            case 'Tremere':
                var collapsedBackgroundClanHover = 'Tremere';
                var clanWeaknessHover = weaknessTremere;
                var headerBackgroundClanHover = 'var(--Tremere-background-logo)';
                break;
            case 'Антитрибу Тремер':
            case 'Tremere Antitribu':
                var collapsedBackgroundClanHover = 'Tremere-Antitribu';
                var clanWeaknessHover = weaknessTremereAntitribu;
                var headerBackgroundClanHover = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case 'Цимисхи':
            case 'Tzimisce':
                var collapsedBackgroundClanHover = 'Tzimisce';
                var clanWeaknessHover = weaknessTzimisce;
                var headerBackgroundClanHover = 'var(--Tzimisce-background-logo)';
                break;
        };
        collapsedColumnHover.classList.add(collapsedBackgroundClanHover);
        document.querySelector(statblockCSSpathHover + '.weakness .inline').innerHTML = clanWeaknessHover;
        if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClanHover
        };
    }
    else {
        // nothing
    }


    // используется ли вампирский статблок темных веков?
    if (document.querySelector(activeTab + '.line.clan .statblock-markdown') != null && (statblockCSSclass.endsWith('.vtm-v20-vampire-dark-ages') || statblockCSSclass.endsWith('.vtm-v20-vampire-dark-ages-en'))) {
        // определяется клан, и каждому клану подставляется своя картинка на бэкграунд, и изъян
        var clanName = document.querySelector(activeTab + '.line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - название клана')
        // определяется зона, которой будет назначен бэкграунд
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (clanName) {
            case 'Ассамиты':
            case 'Assamite':
                // каждому клану назначается соответствующий класс, для которого в css уже вшито изображение
                var collapsedBackgroundClan = 'Assamite';
                // изъян - соответствующий клану из списка выше
                var clanWeakness = weaknessAssamiteDarkAges;
                break;
            case 'Бруха':
            case 'Brujah':
                var collapsedBackgroundClan = 'Brujah';
                var clanWeakness = weaknessBrujahDarkAges;
                break;
            case 'Вентру':
            case 'Ventrue':
                var collapsedBackgroundClan = 'Ventrue';
                var clanWeakness = weaknessVentrueDarkAges;
                break;
            case 'Каппадокийцы':
            case 'Cappadocians':
                var collapsedBackgroundClan = 'Cappadocians';
                var clanWeakness = weaknessCappadociansDarkAges;
                break;
            case ('Последователи Сета'):
            case ('Followers of Set'):
                var collapsedBackgroundClan = 'Followers-of-Set';
                var clanWeakness = weaknessFollowersOfSetDarkAges;
                break;
            case 'Гангрел':
            case 'Gangrel':
                var collapsedBackgroundClan = 'Gangrel';
                var clanWeakness = weaknessGangrelDarkAges;
                break;
            case 'Ласомбра':
            case 'Lasombra':
                var collapsedBackgroundClan = 'Lasombra';
                var clanWeakness = weaknessLasombraDarkAges;
                break;
            case 'Малкавиане':
            case 'Малкавиан':
            case 'Malkavian':
                var collapsedBackgroundClan = 'Malkavian';
                var clanWeakness = weaknessMalkavianDarkAges;
                break;
            case 'Носферату':
            case 'Nosferatu':
                var collapsedBackgroundClan = 'Nosferatu';
                var clanWeakness = weaknessNosferatuDarkAges;
                break;
            case ('Равнос'):
            case ('Ravnos'):
                var collapsedBackgroundClan = 'Ravnos';
                var clanWeakness = weaknessRavnosDarkAges;
                break;
            case 'Тореадор':
            case 'Toreador':
                var collapsedBackgroundClan = 'Toreador';
                var clanWeakness = weaknessToreadorDarkAges;
                break;
            case 'Тремер':
            case 'Tremere':
                var collapsedBackgroundClan = 'Tremere';
                var clanWeakness = weaknessTremereDarkAges;
                break;
            case 'Цимисхи':
            case 'Tzimisce':
                var collapsedBackgroundClan = 'Tzimisce';
                var clanWeakness = weaknessTzimisceDarkAges;
                break;
            case 'Ангра-Майнью':
            case 'Ahrimanes':
                var collapsedBackgroundClan = 'Ahrimanes';
                var clanWeakness = weaknessAhrimanesDarkAges;
                break;
            case 'Анда':
            case 'Anda':
                var collapsedBackgroundClan = 'Anda';
                var clanWeakness = weaknessAndaDarkAges;
                break;
            case 'Баали':
            case 'Baali':
                var collapsedBackgroundClan = 'Baali';
                var clanWeakness = weaknessBaaliDarkAges;
                break;
            case 'Бонсам':
            case 'Bonsam':
                var collapsedBackgroundClan = 'Bonsam';
                var clanWeakness = weaknessBonsamDarkAges;
                break;
            case 'Горгульи':
            case 'Gargoyles':
                var collapsedBackgroundClan = 'Gargoyles';
                var clanWeakness = weaknessGargoylesDarkAges;
                break;
            case 'Данавы':
            case 'Данава':
            case 'Danava':
                var collapsedBackgroundClan = 'Danava';
                var clanWeakness = weaknessDanavaDarkAges;
                break;
            case 'Дети Осириса':
            case 'Children of Osiris':
                var collapsedBackgroundClan = 'Children-of-Osiris';
                var clanWeakness = weaknessChildrenOfOsirisDarkAges;
                break;
            case 'Джованни':
            case 'Джовани':
            case 'Giovanni':
                var collapsedBackgroundClan = 'Giovanni';
                var clanWeakness = weaknessGiovanniDarkAges;
                break;
            case 'Импундулу':
            case 'Impundulu':
                var collapsedBackgroundClan = 'Impundulu';
                var clanWeakness = weaknessImpunduluDarkAges;
                break;
            case 'Истинные Бруха':
            case 'True Brujah':
                var collapsedBackgroundClan = 'TrueBrujah';
                var clanWeakness = weaknessTrueBrujahDarkAges;
                break;
            case 'Киасид':
            case 'Киасиды':
            case 'Kiasyd':
                var collapsedBackgroundClan = 'Kiasyd';
                var clanWeakness = weaknessKiasydDarkAges;
                break;
            case 'Ламии':
            case 'Ламия':
            case 'Lamia':
                var collapsedBackgroundClan = 'Lamia';
                var clanWeakness = weaknessLamiaDarkAges;
                break;
            case 'Лианнан':
            case 'Lhiannan':
                var collapsedBackgroundClan = 'Lhiannan';
                var clanWeakness = weaknessLhiannanDarkAges;
                break;
            case 'Нагараджа':
            case 'Nagaraja':
                var collapsedBackgroundClan = 'Nagaraja';
                var clanWeakness = weaknessNagarajaDarkAges;
                break;
            case 'Никтуку':
            case 'Nictuku':
                var collapsedBackgroundClan = 'Nictuku';
                var clanWeakness = weaknessNictukuDarkAges;
                break;
            case 'Раманга':
            case 'Ramanga':
                var collapsedBackgroundClan = 'Ramanga';
                var clanWeakness = weaknessRamangaDarkAges;
                break;
            case 'Салюбри':
            case 'Salubri':
                var collapsedBackgroundClan = 'Salubri';
                break;
            case 'Салюбри (целители)':
            case 'Salubri (Healer Caste)':
                var collapsedBackgroundClan = 'SalubriHealers';
                var clanWeakness = weaknessSalubriHealersDarkAges;
                break;
            case 'Салюбри (воины)':
            case 'Salubri (Warriors Caste)':
                var collapsedBackgroundClan = 'SalubriWarriors';
                var clanWeakness = weaknessSalubriWarriorsDarkAges;
                break;
            case 'Салюбри (наблюдатели)':
            case 'Salubri (Watchers Caste)':
                var collapsedBackgroundClan = 'SalubriWatchers';
                var clanWeakness = weaknessSalubriWatchersDarkAges;
                break;
        };
        collapsedColumn.classList.add(collapsedBackgroundClan);
        document.querySelector('.weakness .inline').innerHTML = clanWeakness;
    }
    else {
        // nothing
    }

    // для ховера все то же самое
    if (document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown') != null && (statblockCSSclassHover.endsWith('.vtm-v20-vampire-dark-ages') || statblockCSSclassHover.endsWith('.vtm-v20-vampire-dark-ages-en'))) {
        var clanNameHover = document.querySelector(statblockCSSpathHover + ' .line.clan .statblock-markdown > p').innerHTML;
        var collapsedColumnHover = document.querySelector(statblockCSSpathHover + ' .collapse-container');
        switch (clanNameHover) {
            case 'Ассамиты':
            case 'Assamite':
                // каждому клану назначается соответствующий класс, для которого в css уже вшито изображение
                var collapsedBackgroundClanHover = 'Assamite';
                // изъян - соответствующий клану из списка выше
                var clanWeaknessHover = weaknessAssamiteDarkAges;
                break;
            case 'Бруха':
            case 'Brujah':
                var collapsedBackgroundClanHover = 'Brujah';
                var clanWeaknessHover = weaknessBrujahDarkAges;
                break;
            case 'Вентру':
            case 'Ventrue':
                var collapsedBackgroundClanHover = 'Ventrue';
                var clanWeaknessHover = weaknessVentrueDarkAges;
                break;
            case 'Каппадокийцы':
            case 'Cappadocians':
                var collapsedBackgroundClanHover = 'Cappadocians';
                var clanWeaknessHover = weaknessCappadociansDarkAges;
                break;
            case 'Последователи Сета':
            case 'Followers of Set':
                var collapsedBackgroundClanHover = 'Followers-of-Set';
                var clanWeaknessHover = weaknessFollowersOfSetDarkAges;
                break;
            case 'Гангрел':
            case 'Gangrel':
                var collapsedBackgroundClanHover = 'Gangrel';
                var clanWeaknessHover = weaknessGangrelDarkAges;
                break;
            case 'Ласомбра':
            case 'Lasombra':
                var collapsedBackgroundClanHover = 'Lasombra';
                var clanWeaknessHover = weaknessLasombraDarkAges;
                break;
            case 'Малкавиане':
            case 'Малкавиан':
            case 'Malkavian':
                var collapsedBackgroundClanHover = 'Malkavian';
                var clanWeaknessHover = weaknessMalkavianDarkAges;
                break;
            case 'Носферату':
            case 'Nosferatu':
                var collapsedBackgroundClanHover = 'Nosferatu';
                var clanWeaknessHover = weaknessNosferatuDarkAges;
                break;
            case 'Равнос':
            case 'Ravnos':
                var collapsedBackgroundClanHover = 'Ravnos';
                var clanWeaknessHover = weaknessRavnosDarkAges;
                break;
            case 'Тореадор':
            case 'Toreador':
                var collapsedBackgroundClanHover = 'Toreador';
                var clanWeaknessHover = weaknessToreadorDarkAges;
                break;
            case 'Тремер':
            case 'Tremere':
                var collapsedBackgroundClanHover = 'Tremere';
                var clanWeaknessHover = weaknessTremereDarkAges;
                break;
            case 'Цимисхи':
            case 'Tzimisce':
                var collapsedBackgroundClanHover = 'Tzimisce';
                var clanWeaknessHover = weaknessTzimisceDarkAges;
                break;
            case 'Ангра-Майнью':
            case 'Ahrimanes':
                var collapsedBackgroundClanHover = 'Ahrimanes';
                var clanWeaknessHover = weaknessAhrimanesDarkAges;
                break;
            case 'Анда':
            case 'Anda':
                var collapsedBackgroundClanHover = 'Anda';
                var clanWeaknessHover = weaknessAndaDarkAges;
                break;
            case 'Баали':
            case 'Baali':
                var collapsedBackgroundClanHover = 'Baali';
                var clanWeaknessHover = weaknessBaaliDarkAges;
                break;
            case 'Бонсам':
            case 'Bonsam':
                var collapsedBackgroundClanHover = 'Bonsam';
                var clanWeaknessHover = weaknessBonsamDarkAges;
                break;
            case 'Горгульи':
            case 'Gargoyles':
                var collapsedBackgroundClanHover = 'Gargoyles';
                var clanWeaknessHover = weaknessGargoylesDarkAges;
                break;
            case 'Данавы':
            case 'Данава':
            case 'Danava':
                var collapsedBackgroundClanHover = 'Danava';
                var clanWeaknessHover = weaknessDanavaDarkAges;
                break;
            case 'Дети Осириса':
            case 'Children of Osiris':
                var collapsedBackgroundClanHover = 'Children-of-Osiris';
                var clanWeaknessHover = weaknessChildrenOfOsirisDarkAges;
                break;
            case 'Джованни':
            case 'Джовани':
            case 'Giovanni':
                var collapsedBackgroundClanHover = 'Giovanni';
                var clanWeaknessHover = weaknessGiovanniDarkAges;
                break;
            case 'Импундулу':
            case 'Impundulu':
                var collapsedBackgroundClanHover = 'Impundulu';
                var clanWeaknessHover = weaknessImpunduluDarkAges;
                break;
            case 'Истинные Бруха':
            case 'True Brujah':
                var collapsedBackgroundClanHover = 'TrueBrujah';
                var clanWeaknessHover = weaknessTrueBrujahDarkAges;
                break;
            case 'Киасид':
            case 'Киасиды':
            case 'Kiasyd':
                var collapsedBackgroundClanHover = 'Kiasyd';
                var clanWeaknessHover = weaknessKiasydDarkAges;
                break;
            case 'Ламии':
            case 'Ламия':
            case 'Lamia':
                var collapsedBackgroundClanHover = 'Lamia';
                var clanWeaknessHover = weaknessLamiaDarkAges;
                break;
            case 'Лианнан':
            case 'Lhiannan':
                var collapsedBackgroundClanHover = 'Lhiannan';
                var clanWeaknessHover = weaknessLhiannanDarkAges;
                break;
            case 'Нагараджа':
            case 'Nagaraja':
                var collapsedBackgroundClanHover = 'Nagaraja';
                var clanWeaknessHover = weaknessNagarajaDarkAges;
                break;
            case 'Никтуку':
            case 'Nictuku':
                var collapsedBackgroundClanHover = 'Nictuku';
                var clanWeaknessHover = weaknessNictukuDarkAges;
                break;
            case 'Раманга':
            case 'Ramanga':
                var collapsedBackgroundClanHover = 'Ramanga';
                var clanWeaknessHover = weaknessRamangaDarkAges;
                break;
            case 'Салюбри':
            case 'Salubri':
                var collapsedBackgroundClanHover = 'Salubri';
                break;
            case 'Салюбри (целители)':
            case 'Salubri (Healer Caste)':
                var collapsedBackgroundClanHover = 'SalubriHealers';
                var clanWeaknessHover = weaknessSalubriHealersDarkAges;
                break;
            case 'Салюбри (воины)':
            case 'Salubri (Warriors Caste)':
                var collapsedBackgroundClanHover = 'SalubriWarriors';
                var clanWeaknessHover = weaknessSalubriWarriorsDarkAges;
                break;
            case 'Салюбри (наблюдатели)':
            case 'Salubri (Watchers Caste)':
                var collapsedBackgroundClanHover = 'SalubriWatchers';
                var clanWeaknessHover = weaknessSalubriWatchersDarkAges;
                break;
        };
        collapsedColumnHover.classList.add(collapsedBackgroundClanHover);
        document.querySelector('.popover.hover-popover .weakness .inline').innerHTML = clanWeaknessHover;
    }
    else {
        //nothing
    }


    // может, это вообще оборотень?
    if (document.querySelector(activeTab + '.line.tribe .statblock-markdown') != null && (statblockCSSclass.endsWith('.wta-w20-werewolf') || statblockCSSclass.endsWith('.wta-w20-werewolf-en'))) {
        // определяется племя, и каждому племени подставляется своя картинка на бэкграунд
        var tribeName = document.querySelector(activeTab + '.line.tribe .statblock-markdown > p').innerHTML;
        console.log(tribeName + ' - название племени')
        // определяется зона, которой будет назначен бэкграунд
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (tribeName) {
            case 'Черные Фурии':
            case 'Black Furies':
                // каждому племени назначается соответствующий класс, для которого в css уже вшито изображение
                var collapsedBackgroundClan = 'BlackFuries';
                break;
            case 'Танцоры Чёрной Спирали':
            case 'Танцоры Черной Спирали':
            case 'Black Spiral Dancers':
                var collapsedBackgroundClan = 'BlackSpiralDancers';
                break;
            case 'Костегрызы':
            case 'Bone Gnawers':
                var collapsedBackgroundClan = 'BoneGnawers';
                break;
            case 'Bunyip':
                var collapsedBackgroundClan = 'Bunyip';
                break;
            case ('Дети Гайи'):
            case ('Children of Gaia'):
                var collapsedBackgroundClan = 'Children-of-Gaia';
                break;
            case 'Кроатан':
            case 'Croatan':
                var collapsedBackgroundClan = 'Croatan';
                break;
            case 'Фианна':
            case 'Fianna':
                var collapsedBackgroundClan = 'Fianna';
                break;
            case 'Потомки Фенрира':
            case 'Get of Fenris':
                var collapsedBackgroundClan = 'Get-of-Fenris';
                break;
            case 'Стеклоходы':
            case 'Glass Walkers':
                var collapsedBackgroundClan = 'GlassWalkers';
                break;
            case ('Красные Когти'):
            case ('Красные когти'):
            case ('Red Talons'):
                var collapsedBackgroundClan = 'RedTalons';
                break;
            case 'Теневые Владыки':
            case 'Теневые владыки':
            case 'Shadow Lords':
                var collapsedBackgroundClan = 'ShadowLords';
                break;
            case 'Безмолвные Странники':
            case 'Безмолвные cтранники':
            case 'Silent Striders':
                var collapsedBackgroundClan = 'SilentStriders';
                break;
            case 'Серебряные Клыки':
            case 'Серебряные клыки':
            case 'Silver Fangs':
                var collapsedBackgroundClan = 'SilverFangs';
                break;
            case 'Звездочеты':
            case 'Stargazers':
                var collapsedBackgroundClan = 'Stargazers';
                break;
            case 'Уктена':
            case 'Uktena':
                var collapsedBackgroundClan = 'Uktena';
                break;
            case 'Вендиго':
            case 'Wendigo':
                var collapsedBackgroundClan = 'Wendigo';
                break;
            case 'Белые Завыватели':
            case 'Белые завыватели':
            case 'White Howlers':
                var collapsedBackgroundClan = 'WhiteHowlers';
                break;
            case 'Ajaba':
                var collapsedBackgroundClan = 'Ajaba';
                break;
            case 'Ананаси':
            case 'Ананси':
            case 'Ananasi':
                var collapsedBackgroundClan = 'Ananasi';
                break;
            case 'Бастет':
            case 'Bastet':
                var collapsedBackgroundClan = 'Bastet';
                break;
            case 'Кораксы':
            case 'Коракс':
            case 'Corax':
                var collapsedBackgroundClan = 'Corax';
                break;
            case 'Gurahl':
                var collapsedBackgroundClan = 'Gurahl';
                break;
            case 'Кицунэ':
            case 'Kitsune':
                var collapsedBackgroundClan = 'Kitsune';
                break;
            case 'Моколе':
            case 'Mokole':
                var collapsedBackgroundClan = 'Mokole';
                break;
            case 'Наги':
            case 'Нага':
            case 'Nagah':
                var collapsedBackgroundClan = 'Nagah';
                break;
            case 'Nuwisha':
                var collapsedBackgroundClan = 'Nuwisha';
                break;
            case 'Раткины':
            case 'Раткин':
            case 'Ratkin':
                var collapsedBackgroundClan = 'Ratkin';
                break;
            case 'Рокеа':
            case 'Rokea':
                var collapsedBackgroundClan = 'Rokea';
                break;
        };
        collapsedColumn.classList.add(collapsedBackgroundClan);
        if (document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClan
        };
    }
    else {
        // nothing
    }


    // настройка, отвечающая за отображение изъяна
    if (document.querySelector(activeTab + '.line.show_weakness .inline') != null) {
        var showWeakness = document.querySelector(activeTab + '.line.show_weakness .inline').innerHTML;
        switch (showWeakness) {
            case ('no'):
                // console.log('показывать изъян? ' + showWeakness)
                document.querySelector(activeTab + '.property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                // console.log('показывать изъян? ' + showWeakness)
                document.querySelector(activeTab + '.property-container:has(> .line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        // console.log('показывать изъян? ДА');
    }
    // и она же для ховера
    if (document.querySelector(statblockCSSpathHover + '.line.show_weakness .inline') != null) {
        var showWeaknessHover = document.querySelector(statblockCSSpathHover + '.line.show_weakness .inline').innerHTML;
        switch (showWeaknessHover) {
            case ('no'):
                // console.log('показывать изъян в ховере? ' + showWeaknessHover)
                document.querySelector(statblockCSSpathHover + ' .property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                // console.log('показывать изъян в ховере? ' + showWeaknessHover)
                document.querySelector(statblockCSSpathHover + '.property-container:has(.line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        // console.log('показывать изъян в ховере? ДА');
    }



    // В зависимости от поколения, меняется значение траты крови в ход
    if (document.querySelector(activeTab + '.line.generation .statblock-markdown p') != null) {
        // нашел поколение
        var generationFull = document.querySelector(activeTab + '.line.generation .statblock-markdown').textContent;
        // берем только первые два символа, если поколение вдруг длиннее за счет инфы про диаблери
        var generation = generationFull.slice(0, 2);
        // убираем пробелы, если поколение 8-9
        var generation = generation.replace(/\s/g, '');
        console.log('поколение - ' + generation);
        // console.log(document.querySelector(activeTab + '.line.blood_per_turn .inline'))
        switch (generation) {
            case '13':
                document.querySelector(activeTab + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '12':
                document.querySelector(activeTab + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '11':
                document.querySelector(activeTab + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '10':
                document.querySelector(activeTab + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '9':
                document.querySelector(activeTab + '.line.blood_per_turn .inline').innerHTML = '2'; break;
            case '8':
                document.querySelector(activeTab + '.line.blood_per_turn .inline').innerHTML = '3'; break;
        }
    }
    else {
        // nothing
    }
    // то же самое, но для ховера
    if (document.querySelector(statblockCSSpathHover + '.line.generation .statblock-markdown > p') != null) {
        var generationFullHover = document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p').textContent;
        var generationHover = generationFullHover.slice(0, 2);
        var generationHover = generationHover.replace(/\s/g, '');
        console.log('поколение в ховере - ' + generationHover);
        switch (generationHover) {
            case '13':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '12':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '11':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '10':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn .inline').innerHTML = '1'; break;
            case '9':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn .inline').innerHTML = '2'; break;
            case '8':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn .inline').innerHTML = '3'; break;
        }
    }




    // если имя персонажа, написанное H2, есть в заметке и совпадает с именем в статблоке, то оно удаляется - но остается в оглавлении
    if (document.querySelector('.workspace-leaf.mod-active .markdown-preview-sizer > .el-h2 h2') != null) {
        var outlineName = document.querySelector('.workspace-leaf.mod-active .markdown-preview-sizer > .el-h2 h2').innerText
        console.log(outlineName + ' - имя из заметки');
        const characterName = document.querySelector(activeTab + 'h1.heading .inline').innerHTML
        console.log('имя из статблока - ' + characterName)
        if (outlineName = characterName && outlineName != null) {
            document.querySelector('.workspace-leaf.mod-active .markdown-preview-sizer > .el-h2 h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .markdown-preview-sizer > .el-h2 h2') != null) {
        var outlineNameHover = document.querySelector('.popover.hover-popover .markdown-preview-sizer  > .el-h2 h2').innerText
        //  console.log('имя в заметке в ховере - ' + outlineName_hover)
        const characterNameHover = document.querySelector(statblockCSSpathHover + 'h1.heading .inline').innerHTML
        //  console.log('имя из статблока в ховере = ' + characterName_hover)
        if (outlineNameHover = characterNameHover) {
            document.querySelector('.popover.hover-popover .markdown-preview-sizer > .el-h2 h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }


    // Разная обработка значений для характеристик, способностей и дисциплин

    // задаем названия классов, по которым будем искать 
    const basicAttributes = ['.strength', '.dexterity', '.stamina', '.charisma', '.manipulation', '.appearance', '.perception', '.intelligence', '.wits'];
    const basicTalents = ['.athletics', '.alertness', '.brawl', '.intimidation', '.expression', '.leadership', '.streetwise', '.subterfuge', '.awareness', '.empathy']
    const basicSkills = ['.drive', '.larceny', '.survival', '.performance', '.animalken', '.crafts', '.stealth', '.firearms', '.melee', '.etiquette']
    const basicKnowledges = ['.academics', '.science', '.law', '.computer', '.medicine', '.occult', '.politics', '.investigation', '.finance', '.technology']
    const additionalDarkAgesAbilities = ['.legerdemain', '.ride', '.commerce', '.archery', '.enigmas', '.hearthwisdom', '.seneschal', '.theology']
    // собираем все в один список
    const allTraits = basicAttributes.concat(basicTalents, basicSkills, basicKnowledges, additionalDarkAgesAbilities);
    for (let x = 0; x < allTraits.length; x++) {
        if (document.querySelector(activeTab + allTraits[x]) != null) {
            // находим имя и значение для каждого параметра
            var nameAbility = document.querySelector(activeTab + allTraits[x] + ' .property-name').innerHTML;
            var valueAbility = document.querySelector(activeTab + allTraits[x] + ' .inline');
            // код для обычных точек
            if (valueAbility !== null) {
                // console.log(nameAbility + ' в ховере - длина имени ' + nameAbility.length + ' и значение ' + valueAbility);
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(activeTab + '.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // если значение характеристик равно 0, вместо точек появится предупреждение 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontSize = '13px';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(activeTab + allTraits[x] + ' .inline').innerHTML = 'at least 1'
                }
                // в зависимости от длины имени и значения, точни будут заменены на цифры
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                }
                // меняем десятку на X
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(activeTab + allTraits[x] + ' .inline').innerHTML = 'X'
                }
            }
            // для дайс роллера
            else {
                valueAbility = document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').innerHTML;
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    // console.log('Какая способность пошла к Носферату? Это ' + allTraits[x]);
                    document.querySelector(activeTab + '.line.appearance .property-name').style.textDecoration = 'line-through';
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.display = 'none';
                    document.querySelector(activeTab + '.appearance .dice-original').innerHTML = 0;
                    document.querySelector(activeTab + '.appearance .dice-original').style.display = 'block';
                    document.querySelector(activeTab + '.appearance .dice-original').style.fontSize = '9px';
                    document.querySelector(activeTab + '.appearance .dice-original').style.fontFamily = 'SmallCircles';
                    document.querySelector(activeTab + '.appearance .dice-original').style.textAlign = 'center';
                    document.querySelector(activeTab + '.appearance .dice-original').style.verticalAlign = 'top';
                    document.querySelector(activeTab + '.appearance .dice-original').style.fontWeight = 'normal'
                }
                // если значение характеристик равно 0, вместо точек появится предупреждение 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(allTraits[x]))) {
                    // console.log('У кого нулевое значение? Это ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .roller-result').style.display = 'none';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').style.display = 'block';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').style.fontSize = '13px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').innerHTML = 'at least 1';
                }
                // в зависимости от длины имени и значения, точни будут заменены на цифры
                else if ((nameAbility.length >= 11 && valueAbility > 9)
                    || (nameAbility.length >= 12 && valueAbility > 8)
                    || (nameAbility.length >= 13 && valueAbility > 7)
                    || (nameAbility.length >= 14 && valueAbility > 6)
                    || (nameAbility.length >= 15 && valueAbility > 5)) {
                    // console.log('Кому сменили точки на цифры? Это ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px'
                }
                // меняем десятку на X
                else if (valueAbility == 10) {
                    // console.log('У кого есть десятка? Это ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').innerHTML = 'X'
                }
            }
        }
    }

    // характеристики и способности для ховера
    for (let x = 0; x < allTraits.length; x++) {
        if (document.querySelector(statblockCSSpathHover + allTraits[x]) != null) {
            // находим имя и значение для каждого параметра
            var nameAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-name').innerHTML;
            var valueAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .inline');
            // код для обычных точек
            if (valueAbility !== null) {
                // console.log(nameAbility + ' в ховере - длина имени ' + nameAbility.length + ' и значение ' + valueAbility);
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanNameHover !== 'undefined' && (clanNameHover.includes('Носферату') || clanNameHover.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(statblockCSSpathHover + '.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // если значение характеристик равно 0, вместо точек появится предупреждение 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontSize = '13px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .inline').innerHTML = 'at least 1'
                }
                // в зависимости от длины имени и значения, точни будут заменены на цифры
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                }
                // меняем десятки на X
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .inline').innerHTML = 'X'
                }
            }
            // для дайс роллера
            else {
                valueAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').innerHTML;
                // console.log(nameAbility + ' - это ' + nameAbility.length + ' и ' + valueAbility);
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanNameHover !== 'undefined' && (clanNameHover.includes('Носферату') || clanNameHover.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    // console.log('Какая способность пошла к Носферату? Это ' + allTraits[x]);
                    document.querySelector(statblockCSSpathHover + '.line.appearance .property-name').style.textDecoration = 'line-through';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.display = 'none';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').innerHTML = 0;
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').style.display = 'block';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').style.fontSize = '9px';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').style.fontFamily = 'SmallCircles';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').style.textAlign = 'center';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').style.verticalAlign = 'top';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-original').style.fontWeight = 'normal'
                }
                // если значение характеристик равно 0, вместо точек появится предупреждение 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(allTraits[x]))) {
                    // console.log('У кого нулевое значение? Это ' + allTraits[x]);
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .roller-result').style.display = 'none';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').style.display = 'block';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').style.fontSize = '13px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').innerHTML = 'at least 1';
                }
                // в зависимости от длины имени и значения, точни будут заменены на цифры
                else if ((nameAbility.length >= 11 && valueAbility > 9)
                    || (nameAbility.length >= 12 && valueAbility > 8)
                    || (nameAbility.length >= 13 && valueAbility > 7)
                    || (nameAbility.length >= 14 && valueAbility > 6)
                    || (nameAbility.length >= 15 && valueAbility > 5)) {
                    // console.log('Кому сменили точки на цифры? Это ' + allTraits[x]);
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px'
                }
                // меняем десятку на X
                else if (valueAbility == 10) {
                    // console.log('У кого есть десятка? Это ' + allTraits[x]);
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').innerHTML = 'X'
                }
            }
        }
    }


    // Дисциплины
    // Имена некоторых дисциплин слишком длинные; в сочетании с высокими (больше 5) значениями может ломаться отображение. Поэтому кое-где точки будут заменяться на цифры.
    if (document.querySelector(activeTab + '.discipline1_name .inline')) {
        // получаем список всего из столбца дисциплин
        var disciplinesList = document.querySelectorAll(activeTab + '.disciplines-column .inline');
        // console.log(disciplinesList);
        // получаем имена дисциплин (они всегда с нечетным индексом) и их значения
        for (let i = 1; i < disciplinesList.length; i += 2) {
            // если в имени дисциплины есть ссылка
            if (disciplinesList[i].innerHTML.startsWith('<a data')) {
                if ((disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9)
                    || (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8)
                    || (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7)
                    || (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6)
                    || (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5)) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
            }
            // если имя - просто текст
            else if ((disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9)
                || (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8)
                || (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7)
                || (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6)
                || (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5)) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
        }
    }
    // все то же самое, но для ховера
    if (document.querySelector(statblockCSSpathHover + '.discipline1_name .inline')) {
        var disciplinesList = document.querySelectorAll(statblockCSSpathHover + '.disciplines-column .inline');
        for (let i = 1; i < disciplinesList.length; i += 2) {
            if (disciplinesList[i].innerHTML.startsWith('<a data')) {
                if ((disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9)
                    || (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8)
                    || (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7)
                    || (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6)
                    || (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5)) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
            }
            else if ((disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9)
                || (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8)
                || (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7)
                || (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6)
                || (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5)) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
        }
    }



    // в завимимости от названия пути и его значения, проставляется (или удаляется) модификатор столпа
    if (document.querySelector(activeTab + '.line.path .statblock-markdown > p') != null) {
        // найти значение пути, человечность это или нет
        var path = document.querySelector(activeTab + '.line.path .statblock-markdown > p');
        // если путь вообще не указан...
        if (path === null) {
            // ...удаляется вся строчка 'Столп'
            document.querySelector(activeTab + '.bearing').style.display = 'none'
        }
        // если путь не человечность, то...
        else if (path.innerHTML != (('ЧЕЛОВЕЧНОСТЬ') || ('Человечность'))) {
            // ...удаляется вся строчка 'Столп'
            document.querySelector(activeTab + '.bearing').style.display = 'none';
            // ... убираются стрелочки вокруг заголовка
            document.querySelector(activeTab + '.statblock-item-container.path-block:has(> .path)').style.backgroundImage = 'none';
            // получаем количество точек в не-человечности
            var pathModifier = document.querySelector(activeTab + '.line.path_value .inline').innerHTML;
            // заменяем десятики на Х
            if (pathModifier = 10) {
                document.querySelector(activeTab + '.path_value .inline').innerHTML = 'X';
            }
        }
        else {
            // получаем количество точек в человечности
            if (document.querySelector(activeTab + '.line.path_value .inline') != null) {
                var pathModifier = document.querySelector(activeTab + '.line.path_value .inline').innerHTML;
                switch (pathModifier) {
                    // заменяем десятики на Х
                    case '10':
                        document.querySelector(activeTab + '.line.path_value .inline').innerHTML = 'X';
                    // каждому значению человечности прописывается соответствующий модификатор столпа
                    case 'X':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность ( -2 )'; break;
                    case '9':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность ( -1 )'; break;
                    case '8':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность ( -1 )'; break;
                    case '7':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                    case '6':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                    case '5':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                    case '4':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                    case '3':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность ( +1 )'; break;
                    case '2':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность ( +1 )'; break;
                    case '1':
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Нормальность ( +2 )'; break;
                    default:
                        document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'Теперь ты Зверь!';
                        if (document.querySelector(activeTab + '.line.bearing .inline').innerHTML === null) {
                            console.log('пропал блок со столпом')
                        }
                }
            }
            else { }
        }
    }
    else {
        //nothing
    }
    // то же самое, но для ховера
    if (document.querySelector(statblockCSSpathHover + '.line.path .statblock-markdown p') != null) {
        var pathHover = document.querySelector(statblockCSSpathHover + '.line.path .statblock-markdown p');
        // console.log(pathHover + 'есть ли путь в ховере?')
        if (pathHover === null) {
            document.querySelector(statblockCSSpathHover + '.line.bearing').style.display = 'none'
        }
        else if (pathHover.innerHTML != (('ЧЕЛОВЕЧНОСТЬ') || ('Человечность'))) {
            document.querySelector(statblockCSSpathHover + '.bearing').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.path-block:has(> .path)').style.backgroundImage = 'none';
            var pathModifierHover = document.querySelector(statblockCSSpathHover + '.line.path_value .inline').innerHTML;
            if (pathModifierHover = 10) {
                document.querySelector(statblockCSSpathHover + '.path_value .inline').innerHTML = 'X';
            }
        }
        else {
            var pathModifierHover = document.querySelector(statblockCSSpathHover + '.line.path_value .inline').innerHTML;
            switch (pathModifierHover) {
                case '10':
                    document.querySelector(statblockCSSpathHover + '.line.path_value .inline').innerHTML = 'X';
                case 'X':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность ( -2 )'; break;
                case '9':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность ( -1 )'; break;
                case '8':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность ( -1 )'; break;
                case '7':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                case '6':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                case '5':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                case '4':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность'; break;
                case '3':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность ( +1 )'; break;
                case '2':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность ( +1 )'; break;
                case '1':
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Нормальность ( +2 )'; break;
                default:
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'Теперь ты Зверь!';
                    if (document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML === null) {
                        console.log('пропал блок со столпом в ховере')
                    }
            }
        }
    }


    // Меняем всякие иксы на нормальные 10 для воли

    // задаем названия классов, по которым будем искать волю и запас воли
    const willpowerOptions = ['.willpower_main', '.willpower_current'];
    // проверяем, есть ли вообще воля в статблоке
    if (document.querySelector(activeTab + '.willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            // ищем обычное значение
            if (document.querySelector(activeTab + willpowerOptions[i] + ' .inline') != null) {
                var willpowerValue = document.querySelector(activeTab + willpowerOptions[i] + ' .inline');
                // если оно есть и равно десяти...
                if (willpowerValue != null) {
                    if (willpowerValue.innerHTML == 10) {
                        // меняем его на Х
                        document.querySelector(activeTab + willpowerOptions[i] + ' .inline').innerHTML = 'X'
                    }
                }
            }
            // ищем дайс роллер
            if (document.querySelector(activeTab + willpowerOptions[i] + ' .dice-roller-result') != null) {
                // если оно есть
                var willpowerValue = document.querySelector(activeTab + willpowerOptions[i] + ' .dice-roller-result').innerHTML;
                if (willpowerValue == 10) {
                    // меняем десятку на X
                    document.querySelector(activeTab + willpowerOptions[i] + ' .dice-roller-result').innerHTML = 'X'
                };
            }
            else {
                // do nothing
            }
        }
    }

    // то же самое, но для ховера
    if (document.querySelector(statblockCSSpathHover + '.willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            var willpowerValue = document.querySelector(statblockCSSpathHover + willpowerOptions[i] + ' .inline');
            if (willpowerValue != null) {
                if (willpowerValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + willpowerOptions[i] + ' .inline').innerHTML = 'X'
                }
            }
            else {
                willpowerValue = document.querySelector(statblockCSSpathHover + willpowerOptions[i] + ' .dice-roller-result');
                if (willpowerValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + willpowerOptions[i] + ' .dice-roller-result').innerHTML = 'X'
                };
            }
        }
    }


    // Глобальный пересчет крови, чтобы из одной цифры (от 1 до 40) добавлялись и отображались нужные строчки, а ненужные - скрывались
    if (document.querySelector(activeTab + '.line.blood') != null) {
        // находим значение крови
        const bloodCurrent = document.querySelector(activeTab + '.line.blood .inline').innerHTML;
        console.log('значение крови = ' + bloodCurrent)
        if (bloodCurrent <= 9) {
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на меньше девяти')
        } else if (bloodCurrent == 10) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на равенство десяти или иксу')
        } else if (bloodCurrent < 20) {
            var bloodCurrentTwo = bloodCurrent - 10;
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = bloodCurrentTwo;
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на меньше двадцати')
        } else if (bloodCurrent == 20) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство двадцати')
        } else if (bloodCurrent < 30) {
            var bloodCurrentThree = bloodCurrent - 20;
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = bloodCurrentThree;
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на меньше тридцати')
        } else if (bloodCurrent == 30) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = 'X';;
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на равенство тридцати')
        } else if (bloodCurrent < 40) {
            var bloodCurrentFour = bloodCurrent - 30;
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.line.blood_current4 .inline').innerHTML = bloodCurrentFour;
            // console.log('проверка на меньше сорока')
        } else if (bloodCurrent == '40') {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current4 .inline').innerHTML = 'X';
            // console.log('проверка на равенство сорока')
        } else if (bloodCurrent >= 41) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector(activeTab + '.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrent + '.  Time to think about your Humanity!';
            console.log('проверка на больше сорока')
        } else {
            // do nothing
            console.log('что-то с кровью пошло не так')
        }
    }
    else {
        //nothing
    }
    // то же самое, но для ховера
    if (document.querySelector(statblockCSSpathHover + '.line.blood .inline') != null) {
        const bloodCurrentHover = document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML;
        console.log('значение крови в ховере = ' + bloodCurrentHover)
        if (bloodCurrentHover <= 9) {
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на меньше девяти в ховере')
        } else if (bloodCurrentHover == 10) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на равенство десяти или иксу в ховере')
        } else if (bloodCurrentHover < 20) {
            var bloodCurrentTwoHover = bloodCurrentHover - 10;
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = bloodCurrentTwoHover;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на меньше двадцати в ховере')
        } else if (bloodCurrentHover == 20) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на равенство двадцати в ховере')
        } else if (bloodCurrentHover < 30) {
            var bloodCurrentThreeHover = bloodCurrentHover - 20;
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = bloodCurrentThreeHover;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на меньше тридцати в ховере')
        } else if (bloodCurrentHover == 30) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = 'X';;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('проверка на равенство тридцати в ховере')
        } else if (bloodCurrentHover < 40) {
            var bloodCurrentFourHover = bloodCurrentHover - 30;
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.line.blood_current4 .inline').innerHTML = bloodCurrentFourHover;
            // console.log('проверка на меньше сорока в ховере')
        } else if (bloodCurrentHover == '40') {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current4 .inline').innerHTML = 'X';
            // console.log('проверка на равенство сорока в ховере')
        } else if (bloodCurrentHover >= 41) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrentHover + '.  Time to think about your Humanity!';
            // console.log('проверка на больше сорока в ховере')
        } else {
            // do nothing
            console.log('что-то с кровью в ховере пошло не так')
        }
    }


    //  ОБОРОТНИ


    // определяем, с какой стороны показывать достоинства и недостатки у оборотней
    if (document.querySelector(activeTab + '.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlaws = document.querySelector(activeTab + '.line.where-to-show-merits-and-flaws .inline').innerHTML;
        console.log('где же показывать достоинства и недостатки? ' + whereToShowMeritsAndFlaws)
        switch (whereToShowMeritsAndFlaws) {
            case ('left'):
                document.querySelector(activeTab + '.statblock-item-container.group-container:has(>.merits-and-flaws-column-right)').style.display = 'none';
                break;
            case ('right'):
                document.querySelector(activeTab + '.statblock-item-container.group-container:has(>.merits-and-flaws-column-left)').style.display = 'none';
                break;
        }
    }
    else { // do nothing
    }
    // то же самое для ховера
    if (document.querySelector(statblockCSSpathHover + '.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlawsHover = document.querySelector('.popover.hover-popover .line.where-to-show-merits-and-flaws .inline').innerHTML;
        switch (whereToShowMeritsAndFlawsHover) {
            case ('left'):
                document.querySelector(statblockCSSpathHover + '.statblock-item-container.group-container:has(>.merits-and-flaws-column-right)').style.display = 'none';
                break;
            case ('right'):
                document.querySelector(statblockCSSpathHover + '.statblock-item-container.group-container:has(>.merits-and-flaws-column-left)').style.display = 'none';
                break;
        }
    }
    else { // do nothing
    }


    // задаем названия классов, по которым будем искать оборотневские характеристики
    const werewolfOptions = ['rage', 'gnosis', 'glory', 'honor', 'wisdom'];
    for (let y = 0; y < werewolfOptions.length; y++) {
        // если вообще есть соответствующий блок...
        if (document.querySelector(activeTab + '.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('найден блок для ' + werewolfOptions[y].toUpperCase());
            // ищем значение для обычных точек
            optionValue = document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main .inline')
            // если оно есть...
            if (optionValue != null) {
                // и равно десяти
                if (optionValue.innerHTML == 10) {
                    // заменяем на Х
                    document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main .inline').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения ' + werewolfOptions[y].toUpperCase());
                }
                // а если нет - то и ладно
                else {
                    // console.log('обычный ' + werewolfOptions[y].toUpperCase() + ' в полном порядке')
                }
            }
            // если нет обычных точек - значит, тут дайс роллер 
            else {
                var optionValue = document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                // если равно десяти
                if (optionValue == 10) {
                    // заменяем на Х
                    document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку для дайсового значения ' + werewolfOptions[y].toUpperCase());
                }
                // а если нет - то и ладно
                else {
                    // console.log('дайсовый ' + werewolfOptions[y].toUpperCase() + ' в полном порядке')
                }
            }
        }
        else if (document.querySelector('.wta-v20-werewolf') == null) {
            // nothing
        }
        else {
            // console.log('c ' + werewolfOptions[y].toUpperCase() + ' что-то пошло не так')
        }

        // то же самое для ховера
        if (document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('найден блок для ' + werewolfOptions[y].toUpperCase() + ' в ховере');
            optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main .inline')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main .inline').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения ' + werewolfOptions[y].toUpperCase() + ' в ховере');
                }
                else {
                    // console.log(werewolfOptions[y].toUpperCase() + ' в ховере в полном порядке')
                }
            }
            else {
                var optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку для дайсового значения ' + werewolfOptions[y].toUpperCase() + ' в ховере');
                }
                else {
                    // console.log(werewolfOptions[y].toUpperCase() + ' в ховере в полном порядке')
                }
            }
        }
        else if (document.querySelector(statblockCSSpathHover) == null) {
            // nothing
        }
        else {
            // console.log('c ' + werewolfOptions[y].toUpperCase() + ' в ховере что-то пошло не так')
        }
    }

    // запасы тех же самых оборотневых характеристик
    for (let z = 0; z < werewolfOptions.length; z++) {
        // если вообще есть соответствующий блок...
        if (document.querySelector(activeTab + '.' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('найден блок для запаса ' + werewolfOptions[z].toUpperCase());
            optionValue = document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current .inline')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current .inline').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения запаса ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' в полном порядке')
                }
            }
            else {
                var optionValue = document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку  для дайсового значения запаса ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('с дайсовым запасом' + werewolfOptions[z].toUpperCase() + ' в полном порядке')
                }
            }
        }
        else if (document.querySelector(activeTab) == null) {
            // nothing
        }
        else {
            // console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' что-то пошло не так')
        }
        // то же самое для ховера
        if (document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('найден блок для ' + werewolfOptions[z].toUpperCase() + ' в ховере');
            optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current .inline')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current .inline').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения запаса ' + werewolfOptions[z].toUpperCase() + ' в ховере');
                }
                else {
                    // console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' в ховере в полном порядке')
                }
            }
            else {
                var optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку для дайсового значения запаса ' + werewolfOptions[z].toUpperCase()) + ' в ховере';
                }
                else {
                    // console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' в ховере вполном порядке')
                }
            }
        }
        else if (document.querySelector(statblockCSSpathHover) == null) {
            // nothing
        }
        else {
            // console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' в ховере что-то пошло не так')
        }
    }



})