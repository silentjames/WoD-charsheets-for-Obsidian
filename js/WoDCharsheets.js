async function sleep(ms) { // сон, чтобы успела прогрузиться вся страница
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(120).then(() => {

    // найти активную открытую вкладку для вампирского статблока
    const statblockVampireName = '.vtm-v20-vampire'
    const activeTab = '.workspace-leaf.mod-active ' + statblockVampireName;

    // список изъянов для всех поддерживаемых кланов
    const weaknessAssamite = '';
    const weaknessAssamiteAntitribu = '';
    const weaknessBaali = '';
    const weaknessBrujah = '';
    const weaknessBrujahAntitribu = '';
    const weaknessTrueBrujah = '';
    const weaknessCappadocians = '';
    const weaknessCaitiff = '';
    const weaknessCaitiffAntitribuPander = '';
    const weaknessFollowersOfSet = '';
    const weaknessSerpentsOfLight = '';
    const weaknessGangrel = '';
    const weaknessCountryGangrel = '';
    const weaknessCityGangrel = '';
    const weaknessGiovanni = '';
    const weaknessDaughtersOfCacophony = '';
    const weaknessKiasyd = '';
    const weaknessLasombra = '';
    const weaknessMalkavian = '';
    const weaknessMalkavianAntitribu = '';
    const weaknessNosferatu = '';
    const weaknessNosferatuAntitribu = '';
    const weaknessRavnos = '';
    const weaknessRavnosAntitribu = '';
    const weaknessSalubri = ''
    const weaknessSalubriAntitribu = '';
    const weaknessSamedi = '';
    const weaknessToreador = '';
    const weaknessToreadorAntitribu = '';
    const weaknessTremere = '';
    const weaknessTremereAntitribu = '';
    const weaknessTzimisce = '';
    const weaknessVentrue = '';
    const weaknessVentrueAntitribu = '';


    // определяется клан, и каждому клану подставляется своя картинка на бэкграунд, и изъян
    if (document.querySelector(activeTab + ' .line.clan .statblock-markdown') != null) {
        var clanName = document.querySelector(activeTab + ' .line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - название клана')
        const collapsedColumn = document.querySelector(activeTab + ' .collapse-container'); // определяется зона, которой будет назначен бэкграунд 
        switch (clanName) {
            case 'Ассамиты':
                // каждому клану назначается соответствующий класс, для которого в css уже вшито изображение
                var collapsedBackgroundClan = 'Assamite';
                // изъян - соответствующий клану из списка выше
                var clanWeakness = weaknessAssamite;
                //  если у заметки есть класс wod-header, логотип клана будет под именем, рядом с фото
                var headerBackgroundClan = 'var(--Assamite-background-logo)';
                break;
            case 'Антитрибу Ассамитов':
                var collapsedBackgroundClan = 'Assamite-Antitribu';
                var clanWeakness = weaknessAssamiteAntitribu;
                var headerBackgroundClan = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Баали':
                var collapsedBackgroundClan = 'Baali';
                var clanWeakness = weaknessBaali;
                var headerBackgroundClan = 'var(--Baali-background-logo)';
                break;
            case 'Бруха':
                var collapsedBackgroundClan = 'Brujah';
                var clanWeakness = weaknessBrujah;
                var headerBackgroundClan = 'var(--Brujah-background-logo)';
                break;
            case 'Антитрибу Бруха':
                var collapsedBackgroundClan = 'Brujah-Antitribu';
                var clanWeakness = weaknessBrujahAntitribu;
                var headerBackgroundClan = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'Истинные Бруха':
                var collapsedBackgroundClan = 'True-Brujah';
                var clanWeakness = weaknessTrueBrujah;
                var headerBackgroundClan = 'var(--True-Brujah-background-logo)';
                break;
            case 'Каппадокийцы':
                var collapsedBackgroundClan = 'Cappadocians';
                var clanWeakness = weaknessCappadocians;
                var headerBackgroundClan = 'var(--Cappadocians-background-logo)';
                break;
            case 'Каитиф':
                var collapsedBackgroundClan = 'Caitiff';
                var clanWeakness = weaknessCaitiff;
                var headerBackgroundClan = 'var(--Caitiff-background-logo)';
                break;
            case 'Пандер':
                var collapsedBackgroundClan = 'Caitiff-Antitribu-Pander';
                var clanWeakness = weaknessCaitiffAntitribuPander;
                var headerBackgroundClan = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Вентру':
                var collapsedBackgroundClan = 'Ventrue';
                var clanWeakness = weaknessVentrue;
                var headerBackgroundClan = 'var(--Ventrue-background-logo)';
                break;
            case 'Антитрибу Вентру':
                var collapsedBackgroundClan = 'Ventrue-Antitribu';
                var clanWeakness = weaknessVentrueAntitribu;
                var headerBackgroundClan = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Гангрел':
                var collapsedBackgroundClan = 'Gangrel';
                var clanWeakness = weaknessGangrel;
                var headerBackgroundClan = 'var(--Gangrel-background-logo)';
                break;
            case 'Дикие Гангрелы':
                var collapsedBackgroundClan = 'Country-Gangrel';
                var clanWeakness = weaknessCountryGangrel;
                var headerBackgroundClan = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'Городские Гангрелы':
                var collapsedBackgroundClan = 'City-Gangrel';
                var clanWeakness = weaknessCityGangrel;
                var headerBackgroundClan = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Джованни':
                var collapsedBackgroundClan = 'Giovanni';
                var clanWeakness = weaknessGiovanni;
                var headerBackgroundClan = 'var(--Giovanni-background-logo)';
                break;
            case 'Дочери Какофонии':
                var collapsedBackgroundClan = 'Daughters-of-Cacophony';
                var clanWeakness = weaknessDaughtersOfCacophony;
                var headerBackgroundClan = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Киасиды':
                var collapsedBackgroundClan = 'Kiasyd';
                var clanWeakness = weaknessKiasyd;
                var headerBackgroundClan = 'var(--Kiasyd-background-logo)';
                break;
            case 'Ласомбра':
                var collapsedBackgroundClan = 'Lasombra';
                var clanWeakness = weaknessLasombra;
                var headerBackgroundClan = 'var(--Lasombra-background-logo)';
                break;
            case 'Малкавиан':
                var collapsedBackgroundClan = 'Malkavian';
                var clanWeakness = weaknessMalkavian;
                var headerBackgroundClan = 'var(--Malkavian-background-logo)';
                break;
            case 'Антитрибу Малкавиан':
                var collapsedBackgroundClan = 'Malkavian-Antitribu';
                var clanWeakness = weaknessMalkavianAntitribu;
                var headerBackgroundClan = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Носферату':
                var collapsedBackgroundClan = 'Nosferatu';
                var clanWeakness = weaknessNosferatu;
                var headerBackgroundClan = 'var(--Nosferatu-background-logo)';
                break;
            case 'Антитрибу Носферату':
                var collapsedBackgroundClan = 'Nosferatu-Antitribu';
                var clanWeakness = weaknessNosferatuAntitribu;
                var headerBackgroundClan = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case ('Последователи Сета'):
                var collapsedBackgroundClan = 'Followers-of-Set';
                var clanWeakness = weaknessFollowersOfSet;
                var headerBackgroundClan = 'var(--Followers-of-Set-background-logo)';
                break;
            case ('Змеи Света'):
                var collapsedBackgroundClan = 'Serpents-of-Light';
                var clanWeakness = weaknessSerpentsOfLight;
                var headerBackgroundClan = 'var(--Serpents-of-Light-background-logo)';
                break;
            case ('Равнос'):
                var collapsedBackgroundClan = 'Ravnos';
                var clanWeakness = weaknessRavnos;
                var headerBackgroundClan = 'var(--Ravnos-background-logo)';
                break;
            case ('Антитрибу Равнос'):
                var collapsedBackgroundClan = 'Ravnos-Antitribu';
                var clanWeakness = weaknessRavnosAntitribu;
                var headerBackgroundClan = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case ('Салюбри'):
                var collapsedBackgroundClan = 'Salubri';
                var clanWeakness = weaknessSalubri;
                var headerBackgroundClan = 'var(--Salubri-background-logo)';
                break;
            case 'Антитрибу Салюбри':
                var collapsedBackgroundClan = 'Salubri-Antitribu';
                var clanWeakness = weaknessSalubriAntitribu;
                var headerBackgroundClan = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case 'Самеди':
                var collapsedBackgroundClan = 'Samedi';
                var clanWeakness = weaknessSamedi;
                var headerBackgroundClan = 'var(--Samedi-background-logo)';
                break;
            case 'Тореадор':
                var collapsedBackgroundClan = 'Toreador';
                var clanWeakness = weaknessToreador;
                var headerBackgroundClan = 'var(--Toreador-background-logo)';
                break;
            case 'Антитрибу Тореадор':
                var collapsedBackgroundClan = 'Toreador-Antitribu';
                var clanWeakness = weaknessToreadorAntitribu;
                var headerBackgroundClan = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case 'Тремер':
                var collapsedBackgroundClan = 'Tremere';
                var clanWeakness = weaknessTremere;
                var headerBackgroundClan = 'var(--Tremere-background-logo)';
                break;
            case 'Антитрибу Тремер':
                var collapsedBackgroundClan = 'Tremere-Antitribu';
                var clanWeakness = weaknessTremereAntitribu;
                var headerBackgroundClan = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case 'Цимисхи':
                var collapsedBackgroundClan = 'Tzimisce';
                var clanWeakness = weaknessTzimisce;
                var headerBackgroundClan = 'var(--Tzimisce-background-logo)';
                break;
        };
        collapsedColumn.classList.add(collapsedBackgroundClan);
        document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = clanWeakness;
        if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClan };
    }
    else {
        //nothing
    }
    // для ховера - лого клана проставляется рядом с фото, если есть класс wod-header - все то же самое, в общем. 
    if (document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .line.clan .statblock-markdown > p') != null) {
        var clanNameHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .line.clan .statblock-markdown > p').innerHTML;
        const collapsedColumnHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .collapse-container');
        switch (clanNameHover) {
            case 'Ассамиты':
                var collapsedBackgroundClanHover = 'Assamite';
                var clanWeaknessHover = weaknessAssamite;
                var headerBackgroundClanHover = 'var(--Assamite-background-logo)';
                break;
            case 'Антитрибу Ассамитов':
                var collapsedBackgroundClanHover = 'Assamite-Antitribu';
                var clanWeaknessHover = weaknessAssamiteAntitribu;
                var headerBackgroundClanHover = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Баали':
                var collapsedBackgroundClanHover = 'Baali';
                var clanWeaknessHover = weaknessBaali;
                var headerBackgroundClanHover = 'var(--Baali-background-logo)';
                break;
            case 'Бруха':
                var collapsedBackgroundClanHover = 'Brujah';
                var clanWeaknessHover = weaknessBrujah;
                var headerBackgroundClanHover = 'var(--Brujah-background-logo)';
                break;
            case 'Антитрибу Бруха':
                var collapsedBackgroundClanHover = 'Brujah-Antitribu';
                var clanWeaknessHover = weaknessBrujahAntitribu;
                var headerBackgroundClanHover = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'Истинные Бруха':
                var collapsedBackgroundClanHover = 'True-Brujah';
                var clanWeaknessHover = weaknessTrueBrujah;
                var headerBackgroundClanHover = 'var(--True-Brujah-background-logo)';
                break;
            case 'Каппадокийцы':
                var collapsedBackgroundClanHover = 'Cappadocians';
                var clanWeaknessHover = weaknessCappadocians;
                var headerBackgroundClanHover = 'var(--Cappadocians-background-logo)';
                break;
            case 'Каитиф':
                var collapsedBackgroundClanHover = 'Caitiff';
                var clanWeaknessHover = weaknessCaitiff;
                var headerBackgroundClanHover = 'var(--Caitiff-background-logo)';
                break;
            case 'Пандер':
                var collapsedBackgroundClanHover = 'Caitiff-Antitribu-Pander';
                var clanWeaknessHover = weaknessCaitiffAntitribuPander;
                var headerBackgroundClanHover = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Вентру':
                var collapsedBackgroundClanHover = 'Ventrue';
                var clanWeaknessHover = weaknessVentrue;
                var headerBackgroundClanHover = 'var(--Ventrue-background-logo)';
                break;
            case 'Антитрибу Вентру':
                var collapsedBackgroundClanHover = 'Ventrue-Antitribu';
                var clanWeaknessHover = weaknessVentrueAntitribu;
                var headerBackgroundClanHover = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Гангрел':
                var collapsedBackgroundClanHover = 'Gangrel';
                var clanWeaknessHover = weaknessGangrel;
                var headerBackgroundClanHover = 'var(--Gangrel-background-logo)';
                break;
            case 'Дикие Гангрелы':
                var collapsedBackgroundClanHover = 'Country-Gangrel';
                var clanWeaknessHover = weaknessCountryGangrel;
                var headerBackgroundClanHover = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'Городские Гангрелы':
                var collapsedBackgroundClanHover = 'City-Gangrel';
                var clanWeaknessHover = weaknessCityGangrel;
                var headerBackgroundClanHover = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Джованни':
                var collapsedBackgroundClanHover = 'Giovanni';
                var clanWeaknessHover = weaknessGiovanni;
                var headerBackgroundClanHover = 'var(--Giovanni-background-logo)';
                break;
            case 'Дочери Какофонии':
                var collapsedBackgroundClanHover = 'Daughters-of-Cacophony';
                var clanWeaknessHover = weaknessDaughtersOfCacophony;
                var headerBackgroundClanHover = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Киасиды':
                var collapsedBackgroundClanHover = 'Kiasyd';
                var clanWeaknessHover = weaknessKiasyd;
                var headerBackgroundClanHover = 'var(--Kiasyd-background-logo)';
                break;
            case 'Ласомбра':
                var collapsedBackgroundClanHover = 'Lasombra';
                var clanWeaknessHover = weaknessLasombra;
                var headerBackgroundClanHover = 'var(--Lasombra-background-logo)';
                break;
            case 'Малкавиан':
                var collapsedBackgroundClanHover = 'Malkavian';
                var clanWeaknessHover = weaknessMalkavian;
                var headerBackgroundClanHover = 'var(--Malkavian-background-logo)';
                break;
            case 'Антитрибу Малкавиан':
                var collapsedBackgroundClanHover = 'Malkavian-Antitribu';
                var clanWeaknessHover = weaknessMalkavianAntitribu;
                var headerBackgroundClanHover = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Носферату':
                var collapsedBackgroundClanHover = 'Nosferatu';
                var clanWeaknessHover = weaknessNosferatu;
                var headerBackgroundClanHover = 'var(--Nosferatu-background-logo)';
                break;
            case 'Антитрибу Носферату':
                var collapsedBackgroundClanHover = 'Nosferatu-Antitribu';
                var clanWeaknessHover = weaknessNosferatuAntitribu;
                var headerBackgroundClanHover = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case ('Последователи Сета'):
                var collapsedBackgroundClanHover = 'Followers-of-Set';
                var clanWeaknessHover = weaknessFollowersOfSet;
                var headerBackgroundClanHover = 'var(--Followers-of-Set-background-logo)';
                break;
            case ('Змеи Света'):
                var collapsedBackgroundClanHover = 'Serpents-of-Light';
                var clanWeaknessHover = weaknessSerpentsOfLight;
                var headerBackgroundClanHover = 'var(--Serpents-of-Light-background-logo)';
                break;
            case ('Равнос'):
                var collapsedBackgroundClanHover = 'Ravnos';
                var clanWeaknessHover = weaknessRavnos;
                var headerBackgroundClanHover = 'var(--Ravnos-background-logo)';
                break;
            case ('Антитрибу Равнос'):
                var collapsedBackgroundClanHover = 'Ravnos-Antitribu';
                var clanWeaknessHover = weaknessRavnosAntitribu;
                var headerBackgroundClanHover = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case ('Салюбри'):
                var collapsedBackgroundClanHover = 'Salubri';
                var clanWeaknessHover = weaknessSalubri;
                var headerBackgroundClanHover = 'var(--Salubri-background-logo)';
                break;
            case ('Антитрибу Салюбри'):
                var collapsedBackgroundClanHover = 'Salubri-Antitribu';
                var clanWeaknessHover = weaknessSalubriAntitribu;
                var headerBackgroundClanHover = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case ('Самеди'):
                var collapsedBackgroundClanHover = 'Samedi';
                var clanWeaknessHover = weaknessSamedi;
                var headerBackgroundClanHover = 'var(--Samedi-background-logo)';
                break;
            case ('Тореадор'):
                var collapsedBackgroundClanHover = 'Toreador';
                var clanWeaknessHover = weaknessToreador;
                var headerBackgroundClanHover = 'var(--Toreador-background-logo)';
                break;
            case ('Антитрибу Тореадор'):
                var collapsedBackgroundClanHover = 'Toreador-Antitribu';
                var clanWeaknessHover = weaknessToreadorAntitribu;
                var headerBackgroundClanHover = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case ('Тремер'):
                var collapsedBackgroundClanHover = 'Tremere';
                var clanWeaknessHover = weaknessTremere;
                var headerBackgroundClanHover = 'var(--Tremere-background-logo)';
                break;
            case ('Антитрибу Тремер'):
                var collapsedBackgroundClanHover = 'Tremere-Antitribu';
                var clanWeaknessHover = weaknessTremereAntitribu;
                var headerBackgroundClanHover = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case ('Цимисхи'):
                var collapsedBackgroundClanHover = 'Tzimisce';
                var clanWeaknessHover = weaknessTzimisce;
                var headerBackgroundClanHover = 'var(--Tzimisce-background-logo)';
                break;
        };
        collapsedColumnHover.classList.add(collapsedBackgroundClanHover);
        document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = clanWeaknessHover;
        if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClanHover };
    }
    else {
        //nothing
    }


    // настройка, отвечающая за отображение изъяна
    if (document.querySelector('.line.show_weakness .statblock-rendered-text-content') != null) {
        const showWeakness = document.querySelector('.line.show_weakness .statblock-rendered-text-content').innerHTML;
        switch (showWeakness) {
            case ('no'):
                console.log('показывать изъян? ' + showWeakness)
                document.querySelector('.property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                console.log('показывать изъян? ' + showWeakness)
                document.querySelector('.property-container:has(.line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        console.log('показывать изъян? ДА');
    }
    // и она же для ховера
    if (document.querySelector('.popover.hover-popover .line.show_weakness .statblock-rendered-text-content') != null) {
        const showWeaknessHover = document.querySelector('.popover.hover-popover .line.show_weakness .statblock-rendered-text-content').innerHTML;
        switch (showWeaknessHover) {
            case ('no'):
                console.log('показывать изъян в ховере? ' + showWeaknessHover)
                document.querySelector('.popover.hover-popover .property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                console.log('показывать изъян в ховере? ' + showWeaknessHover)
                document.querySelector('.popover.hover-popover .property-container:has(.line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        console.log('показывать изъян в ховере? ДА');
    }




    // В зависимости от поколения, меняется значение траты крови в ход
    if (document.querySelector('.line.generation .statblock-markdown p') != null) {
        // нашел поколение
        var generationFull = document.querySelector('.line.generation .statblock-markdown').textContent;
        // берем только первые два символа, если поколение вдруг длиннее за счет инфы про диаблери
        var generation = generationFull.slice(0, 2);
        // убираем пробелы, если поколение 8-9
        var generation = generation.replace(/\s/g, '');
        console.log('поколение - ' + generation);
        switch (generation) {
            case '13':
                document.querySelector('.line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '12':
                document.querySelector('.line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '11':
                document.querySelector('.line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '10':
                document.querySelector('.line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '9':
                document.querySelector('.line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '2'; break;
            case '8':
                document.querySelector('.line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '3'; break;
        }
    }
    else {
        //nothing
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p') != null) {
        const generationFullHover = document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p').textContent;
        var generationHover = generationFullHover.slice(0, 2);
        var generationHover = generationHover.replace(/\s/g, '');
        console.log('поколение в ховере - ' + generationHover);
        switch (generationHover) {
            case '13':
                document.querySelector('.popover.hover-popover .line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '12':
                document.querySelector('.popover.hover-popover .line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '11':
                document.querySelector('.popover.hover-popover .line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '10':
                document.querySelector('.popover.hover-popover .line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '1'; break;
            case '9':
                document.querySelector('.popover.hover-popover .line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '2'; break;
            case '8':
                document.querySelector('.popover.hover-popover .line.blood_per_turn .statblock-rendered-text-content.inline').innerHTML = '3'; break;
        }
    }





    // если имя персонажа, написанное H2, есть в заметке и совпадает с именем в статблоке, то оно удаляется - но остается в оглавлении
    if (document.querySelector('.workspace-leaf.mod-active .markdown-reading-view h2') != null) {
        var outlineName = document.querySelector('.workspace-leaf.mod-active .markdown-reading-view h2').innerText
        console.log(outlineName + ' - имя из заметки');
        const characterName = document.querySelector('.workspace-leaf.mod-active h1.heading .statblock-rendered-text-content').innerHTML
        console.log('имя из статблока - ' + characterName)
        if (outlineName.includes(characterName)) {
            document.querySelector('.workspace-leaf.mod-active .markdown-reading-view h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover h2') != null) {
        var outlineName_hover = document.querySelector('.popover.hover-popover h2').innerText
        //  console.log('имя в заметке в ховере - ' + outlineName_hover)
        const characterName_hover = document.querySelector('.popover.hover-popover h1.heading .statblock-rendered-text-content').innerHTML
        //  console.log('имя из статблока в ховере = ' + characterName_hover)
        if (outlineName_hover.includes(characterName_hover)) {
            document.querySelector('.popover.hover-popover h2').style.display = 'none';
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
    const vampireAbilities = basicAttributes.concat(basicTalents, basicSkills, basicKnowledges, additionalDarkAgesAbilities);
    for (let x = 0; x < vampireAbilities.length; x++) {
        if (document.querySelector(vampireAbilities[x]) != null) {
            // находим имя и значение для каждого параметра
            var nameAbility = document.querySelector(vampireAbilities[x] + ' .property-name').innerHTML;
            var valueAbility = document.querySelector(vampireAbilities[x] + ' .statblock-rendered-text-content');
            // код для обычных точек
            if (valueAbility !== null) {
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (vampireAbilities[x].includes('.appearance'))) {
                    document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // если значение характеристик равно 0, вместо точек появится предупреждение 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(vampireAbilities[x]))) {
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontSize = '13px';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(vampireAbilities[x] + ' .statblock-rendered-text-content').innerHTML = 'at least 1'
                }
                // в зависимости от длины имени и значения, точни будут заменены на цифры
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                }
                // меняем десятку на X
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(vampireAbilities[x] + ' .statblock-rendered-text-content').innerHTML = 'X'
                }
            }
            // для дайс роллера
            else {
                valueAbility = document.querySelector(vampireAbilities[x] + ' .dice-roller-result').innerHTML;
                // console.log(nameAbility + ' - это ' + nameAbility.length + ' и ' + valueAbility);
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (vampireAbilities[x].includes('.appearance'))) {
                    // console.log('Какая способность пошла к Носферату? Это ' + vampireAbilities[x]);
                    document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through';
                    document.querySelector('.appearance .dice-roller-result').style.display = 'none';
                    document.querySelector('.appearance .dice-original').innerHTML = 0;
                    document.querySelector('.appearance .dice-original').style.display = 'block';
                    document.querySelector('.appearance .dice-original').style.fontSize = '9px';
                    document.querySelector('.appearance .dice-original').style.fontFamily = 'SmallCircles';
                    document.querySelector('.appearance .dice-original').style.textAlign = 'center';
                    document.querySelector('.appearance .dice-original').style.verticalAlign = 'top';
                    document.querySelector('.appearance .dice-original').style.fontWeight = 'normal'
                }
                // если значение характеристик равно 0, вместо точек появится предупреждение 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(vampireAbilities[x]))) {
                    // console.log('У кого нулевое значение? Это ' + vampireAbilities[x]);
                    document.querySelector(vampireAbilities[x] + ' .roller-result').style.display = 'none';
                    document.querySelector(vampireAbilities[x] + ' .dice-original').style.display = 'block';
                    document.querySelector(vampireAbilities[x] + ' .dice-original').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(vampireAbilities[x] + ' .dice-original').innerHTML = 'at least 1';
                }
                // в зависимости от длины имени и значения, точни будут заменены на цифры
                else if ((nameAbility.length >= 11 && valueAbility > 9)
                    || (nameAbility.length >= 12 && valueAbility > 8)
                    || (nameAbility.length >= 13 && valueAbility > 7)
                    || (nameAbility.length >= 14 && valueAbility > 6)
                    || (nameAbility.length >= 15 && valueAbility > 5)) {
                    // console.log('Кому сменили точки на цифры? Это ' + vampireAbilities[x]);
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px'
                }
                // меняем десятку на X
                else if (valueAbility == 10) {
                    // console.log('У кого есть десятка? Это ' + vampireAbilities[x]);
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').innerHTML = 'X'
                }
            }
        }
    }


    // Дисциплины
    // Имена некоторых дисциплин слишком длинные; в сочетании с высокими (больше 5) значениями может ломаться отображение. Поэтому кое-где точки будут заменяться на цифры.
    if (document.querySelector('.discipline1_name .statblock-rendered-text-content')) {
        // получаем список всего из столбца дисциплин
        var disciplinesList = document.querySelectorAll('.disciplines-column .statblock-rendered-text-content');
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
    if (document.querySelector('.popover.hover-popover .discipline1_name .statblock-rendered-text-content')) {
        var disciplinesList = document.querySelectorAll('.popover.hover-popover .disciplines-column .statblock-rendered-text-content');
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
    if (document.querySelector('.line.path .statblock-rendered-text-content') != null) {
        // найти значение пути, человечность это или нет
        const path = document.querySelector('.path .statblock-rendered-text-content');
        // если путь вообще не указан...
        if (path === null) {
            // ...удаляется вся строчка 'Столп'
            document.querySelector('.bearing').style.display = 'none'
        }
        // если путь не человечность, то...
        else if (path.innerHTML != ('ЧЕЛОВЕЧНОСТЬ')) {
            // ...удаляется вся строчка 'Столп'
            document.querySelector('.bearing').style.display = 'none';
            // получаем количество точек в не-человечности
            var pathModifier = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML;
            if (pathModifier = 10) {
                document.querySelector('.path_value .statblock-rendered-text-content').innerHTML = 'X';
            }
        }
        else {
            // получаем количество точек в человечности
            var pathModifier = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML;
            switch (pathModifier) {
                case '10':
                    document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML = 'X';
                case 'X':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( -2 )'; break;
                case '9':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( -1 )'; break;
                case '8':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( -1 )'; break;
                case '7':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '6':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '5':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '4':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '3':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( +1 )'; break;
                case '2':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( +1 )'; break;
                case '1':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( +2 )'; break;
                default:
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Теперь ты Зверь!';
                    if (document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML === null) {
                        console.log('пропал блок со столпом')
                    }
            }
        }
    }
    else {
        //nothing
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .path .statblock-rendered-text-content') != null) {
        const pathHover = document.querySelector('.popover.hover-popover .path .statblock-rendered-text-content');
        console.log(pathHover + 'есть ли путь в ховере')
        if (pathHover === null) {
            document.querySelector('.popover.hover-popover .line.bearing').style.display = 'none'
        }
        else if (pathHover.innerHTML != ('ЧЕЛОВЕЧНОСТЬ')) {
            document.querySelector('.popover.hover-popover .bearing').style.display = 'none';
            var pathModifierHover = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML;
            if (pathModifierHover = 10) {
                document.querySelector('.popover.hover-popover .path_value .statblock-rendered-text-content').innerHTML = 'X';
            }
        }
        else {
            var pathModifierHover = document.querySelector('.popover.hover-popover .line.path_value .statblock-rendered-text-content').innerHTML;
            switch (pathModifierHover) {
                case '10':
                    document.querySelector('.popover.hover-popover .line.path_value .statblock-rendered-text-content').innerHTML = 'X';
                case 'X':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( -2 )'; break;
                case '9':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( -1 )'; break;
                case '8':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( -1 )'; break;
                case '7':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '6':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '5':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '4':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность'; break;
                case '3':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( +1 )'; break;
                case '2':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( +1 )'; break;
                case '1':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Нормальность ( +2 )'; break;
                default:
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Теперь ты Зверь!';
                    if (document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML === null) {
                        console.log('пропал блок со столпом в ховере')
                    }
            }
        }
    }


    // Меняем всякие иксы на нормальные 10 для воли

    // задаем названия классов, по которым будем искать волю и запас воли
    const willpowerOptions = ['.willpower_main', '.willpower_current'];
    // проверяем, есть ли вообще воля в статблоке
    if (document.querySelector('.willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            // находим значение воли или запаса для обычного текса
            var willpowerValue = document.querySelector(willpowerOptions[i] + ' .statblock-rendered-text-content');
            // если оно есть и равно десяти...
            if (willpowerValue != null) {
                if (willpowerValue.innerHTML == 10) {
                    // меняем его на Х
                    document.querySelector(willpowerOptions[i] + ' .statblock-rendered-text-content').innerHTML = 'X'
                }
            }
            // если обычного текста нет, значит, тут дайс роллер
            else {
                willpowerValue = document.querySelector(willpowerOptions[i] + ' span.dice-roller-result').innerHTML;
                if (willpowerValue == 10) {
                    document.querySelector(willpowerOptions[i] + ' span.dice-roller-result').innerHTML = 'X'
                };
            }
        }
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            var willpowerValue = document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' .statblock-rendered-text-content');
            if (willpowerValue != null) {
                if (willpowerValue.innerHTML == 10) {
                    document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' .statblock-rendered-text-content').innerHTML = 'X'
                }
            }
            else {
                willpowerValue = document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' span.dice-roller-result');
                if (willpowerValue.innerHTML == 10) {
                    document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' span.dice-roller-result').innerHTML = 'X'
                };
            }
        }
    }


    // Глобальный пересчет крови, чтобы из одной цифры (от 1 до 40) добавлялись и отображались нужные строчки, а ненужные - скрывались
    if (document.querySelector('.line.blood') != null) {
        // находим значение крови
        const bloodCurrent = document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML;
        console.log('значение крови = ' + bloodCurrent)
        if (bloodCurrent <= 9) {
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на меньше девяти')
        } else if (bloodCurrent == 10) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство десяти или иксу')
        } else if (bloodCurrent < 20) {
            var bloodCurrentTwo = bloodCurrent - 10;
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentTwo;
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на меньше двадцати')
        } else if (bloodCurrent == 20) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство двадцати')
        } else if (bloodCurrent < 30) {
            var bloodCurrentThree = bloodCurrent - 20;
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentThree;
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на меньше тридцати')
        } else if (bloodCurrent == 30) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';;
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство тридцати')
        } else if (bloodCurrent < 40) {
            var bloodCurrentFour = bloodCurrent - 30;
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentFour;
            console.log('проверка на меньше сорока')
        } else if (bloodCurrent == '40') {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = 'X';
            console.log('проверка на равенство сорока')
        } else if (bloodCurrent >= 41) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector('.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector('.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector('.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrent + '.  Time to think about your Humanity!';
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
    if (document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline') != null) {
        const bloodCurrentHover = document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML;
        console.log('значение крови в ховере = ' + bloodCurrentHover)
        if (bloodCurrentHover <= 9) {
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на меньше девяти в ховере')
        } else if (bloodCurrentHover == 10) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство десяти или иксу в ховере')
        } else if (bloodCurrentHover < 20) {
            var bloodCurrentTwoHover = bloodCurrentHover - 10;
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentTwoHover;
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на меньше двадцати в ховере')
        } else if (bloodCurrentHover == 20) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство двадцати в ховере')
        } else if (bloodCurrentHover < 30) {
            var bloodCurrentThreeHover = bloodCurrentHover - 20;
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentThreeHover;
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на меньше тридцати в ховере')
        } else if (bloodCurrentHover == 30) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';;
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('проверка на равенство тридцати в ховере')
        } else if (bloodCurrentHover < 40) {
            var bloodCurrentFourHover = bloodCurrentHover - 30;
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentFourHover;
            console.log('проверка на меньше сорока в ховере')
        } else if (bloodCurrentHover == '40') {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = 'X';
            console.log('проверка на равенство сорока в ховере')
        } else if (bloodCurrentHover >= 41) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector('.popover.hover-popover .statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector('.popover.hover-popover .statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector('.popover.hover-popover .line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrentHover + '.  Time to think about your Humanity!';
            console.log('проверка на больше сорока в ховере')
        } else {
            // do nothing
            console.log('что-то с кровью в ховере пошло не так')
        }
    }


    //  ОБОРОТНИ


    // определяем, с какой стороны показывать достоинства и недостатки у оборотней
    // определяем, с какой стороны показывать достоинства и недостатки у оборотней
    if (document.querySelector('.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlaws = document.querySelector('.line.where-to-show-merits-and-flaws .statblock-rendered-text-content').innerHTML;
        console.log('где же показывать достоинства и недостатки? ' + whereToShowMeritsAndFlaws)
        switch (whereToShowMeritsAndFlaws) {
            case ('left'):
                document.querySelector('.statblock-item-container.group-container:has(>.merits-and-flaws-column-right)').style.display = 'none';
                break;
            case ('right'):
                document.querySelector('.statblock-item-container.group-container:has(>.merits-and-flaws-column-left)').style.display = 'none';
                break;
        }
    }
    else { // do nothing
    }
    // то же самое для ховера
    if (document.querySelector('.popover.hover-popover .merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlawsHover = document.querySelector('.popover.hover-popover .line.where-to-show-merits-and-flaws .statblock-rendered-text-content').innerHTML;
        switch (whereToShowMeritsAndFlawsHover) {
            case ('left'):
                document.querySelector('.popover.hover-popover .statblock-item-container.group-container:has(>.merits-and-flaws-column-right)').style.display = 'none';
                break;
            case ('right'):
                document.querySelector('.popover.hover-popover .statblock-item-container.group-container:has(>.merits-and-flaws-column-left)').style.display = 'none';
                break;
        }
    }
    else { // do nothing
    }


    // задаем названия классов, по которым будем искать оборотневские характеристики
    const werewolfOptions = ['rage', 'gnosis', 'glory', 'honor', 'wisdom'];
    for (let y = 0; y < werewolfOptions.length; y++) {
        // если вообще есть соответствующий блок...
        if (document.querySelector('.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('найден блок для ' + werewolfOptions[y].toUpperCase());
            // ищем значение для обычных точек 
            optionValue = document.querySelector('.' + werewolfOptions[y] + '_main .statblock-rendered-text-content')
            // если оно есть...
            if (optionValue != null) {
                // и равно десяти
                if (optionValue.innerHTML == 10) {
                    // заменяем на Х
                    document.querySelector('.' + werewolfOptions[y] + '_main .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения ' + werewolfOptions[y].toUpperCase());
                }
                // а если нет - то и ладно
                else {
                    // console.log('обычный ' + werewolfOptions[y].toUpperCase() + ' в полном порядке')
                }
            }
            // если нет обычных точек - значит, тут дайс роллер 
            else {
                var optionValue = document.querySelector('.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                // если равно десяти
                if (optionValue == 10) {
                    // заменяем на Х
                    document.querySelector('.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку для дайсового значения ' + werewolfOptions[y].toUpperCase());
                }
                // а если нет - то и ладно
                else {
                    // console.log('дайсовый ' + werewolfOptions[y].toUpperCase() + ' в полном порядке')
                }
            }
        }
        else if (document.querySelector('.wta-v20-werewolf') == null) {
            //nothing
        }
        else {
            console.log('c ' + werewolfOptions[y].toUpperCase() + ' что-то пошло не так')
        }
        // то же самое для ховера
        if (document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('найден блок для ' + werewolfOptions[y].toUpperCase() + ' в ховере');
            optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main .statblock-rendered-text-content')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения ' + werewolfOptions[y].toUpperCase() + ' в ховере');
                }
                else {
                    // console.log(werewolfOptions[y].toUpperCase() + ' в ховере в полном порядке')
                }
            }
            else {
                var optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку для дайсового значения ' + werewolfOptions[y].toUpperCase() + ' в ховере');
                }
                else {
                    // console.log(werewolfOptions[y].toUpperCase() + ' в ховере в полном порядке')
                }
            }
        }
        else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
            //nothing
        }
        else {
            console.log('c ' + werewolfOptions[y].toUpperCase() + ' в ховере что-то пошло не так')
        }
    }

    // запасы тех же самых оборотневых характеристик
    for (let z = 0; z < werewolfOptions.length; z++) {
        // если вообще есть соответствующий блок...
        if (document.querySelector('.' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('найден блок для запаса ' + werewolfOptions[z].toUpperCase());
            // ищем 
            optionValue = document.querySelector('.' + werewolfOptions[z] + '_current .statblock-rendered-text-content')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector('.' + werewolfOptions[z] + '_current .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения запаса ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('с запасом' + werewolfOptions[z].toUpperCase() + ' в полном порядке')
                }
            }
            else {
                var optionValue = document.querySelector('.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector('.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    мconsole.log('заменили десятку  для дайсового значения запаса ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('с запасом' + werewolfOptions[z].toUpperCase() + ' в полном порядке')
                }
            }
        }
        else if (document.querySelector('.wta-v20-werewolf') == null) {
            //nothing
        }
        else {
            console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' что-то пошло не так')
        }
        // то же самое для ховера
        if (document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('найден блок для ' + werewolfOptions[z].toUpperCase() + ' в ховере');
            optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current .statblock-rendered-text-content')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('заменили десятку для обычного значения запаса ' + werewolfOptions[z].toUpperCase() + ' в ховере');
                }
                else {
                    // console.log('с запасом' + werewolfOptions[z].toUpperCase() + ' в ховере в полном порядке')
                }
            }
            else {
                var optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('заменили десятку для дайсового значения запаса ' + werewolfOptions[z].toUpperCase()) + ' в ховере';
                }
                else {
                    // console.log('с запасом' + werewolfOptions[z].toUpperCase() + ' в ховере вполном порядке')
                }
            }
        }
        else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
            //nothing
        }
        else {
            console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' в ховере что-то пошло не так')
        }
    }



})










































