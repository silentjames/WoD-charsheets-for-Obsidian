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
        const collapsedColumnHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .collapse-container'); // определяется зона, которой будет назначен бэкграунд 
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
        var generationFull = document.querySelector('.line.generation .statblock-markdown').textContent; // нашел поколение
        var generation = generationFull.slice(0, 2); // берем только первые два символа, если поколение вдруг длиннее за счет инфы про диаблери
        var generation = generation.replace(/\s/g, ''); // убираем пробелы, если поколение 8-9
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
        const generationFullHover = document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p').textContent; // нашел поколение
        var generationHover = generationFullHover.slice(0, 2); // берем только первые два символа, если поколение вдруг длиннее за счет инфы про диаблери
        var generationHover = generationHover.replace(/\s/g, ''); // убираем пробелы, если поколение 8-9
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
    // Характеристики Физические
    if (document.querySelector('.strength')) {
        var valueStrength = document.querySelector('.strength .statblock-rendered-text-content');  // Сила
        if (valueStrength != null) { // для обычного значения
            if (valueStrength.innerHTML == '-') {
                document.querySelector('.strength .property-text').style.fontSize = '14px';
                document.querySelector('.strength .property-text').style.fontFamily = 'Marta';
                document.querySelector('.strength .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.strength .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueStrength.innerHTML == 10) {
                document.querySelector('.strength .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            valueStrength = document.querySelector('.strength .dice-roller-result').innerHTML;
            if (valueStrength === 'null') {
                document.querySelector('.strength .roller-result').style.display = 'none';
                document.querySelector('.strength .dice-original').style.display = 'block';
                document.querySelector('.strength .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.strength .dice-original').innerHTML = 'must be at least 1';
            }
            if (valueStrength == 10) {
                document.querySelector('.strength .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.dexterity')) {
        var valueDexterity = document.querySelector('.dexterity .statblock-rendered-text-content');  // Ловкость
        if (valueDexterity != null) { // для обычного значения
            if (valueDexterity.innerHTML == '-') {
                document.querySelector('.dexterity .property-text').style.fontSize = '14px';
                document.querySelector('.dexterity .property-text').style.fontFamily = 'Marta';
                document.querySelector('.dexterity .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.dexterity .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueDexterity.innerHTML == 10) {
                document.querySelector('.dexterity .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueDexterity = document.querySelector('.dexterity .dice-roller-result').innerHTML;
            if (valueDexterity === 'null') {
                document.querySelector('.dexterity .roller-result').style.display = 'none';
                document.querySelector('.dexterity .dice-original').style.display = 'block';
                document.querySelector('.dexterity .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.dexterity .dice-original').innerHTML = 'must be at least 1'
            }
            if (valueDexterity == 10) {
                document.querySelector('.dexterity .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.stamina')) {
        var valueStamina = document.querySelector('.stamina .statblock-rendered-text-content');  // Выносливость
        if (valueStamina != null) { // для обычного значения
            if (valueStamina.innerHTML == '-') {
                document.querySelector('.stamina .property-text').style.fontSize = '14px';
                document.querySelector('.stamina .property-text').style.fontFamily = 'Marta';
                document.querySelector('.stamina .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.stamina .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueStamina.innerHTML >= 9) {
                document.querySelector('.stamina .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.stamina .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.stamina .statblock-rendered-text-content').style.margin = '-1px 0px 0px 0px';
            }
        }
        else { // для дайс роллера
            valueStamina = document.querySelector('.stamina span.dice-roller-result').innerHTML;
            if (valueStamina === 'null' || valueStamina == 0) {
                document.querySelector('.stamina .roller-result').style.display = 'none';
                document.querySelector('.stamina .dice-original').style.display = 'block';
                document.querySelector('.stamina .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.stamina .dice-original').innerHTML = 'must be at least 1'
            }
            if (valueStamina >= 9) {
                document.querySelector('.stamina .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.stamina .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.stamina .dice-roller-result').style.margin = '-1px 0px 0px 0px'
            };
        }
    }


    // Характеристики Социальные
    if (document.querySelector('.charisma')) {
        var valueCharisma = document.querySelector('.charisma .statblock-rendered-text-content');  // Обаяние
        if (valueCharisma != null) { // для обычного значения
            if (valueCharisma.innerHTML == '-') {
                document.querySelector('.charisma .property-text').style.fontSize = '14px';
                document.querySelector('.charisma .property-text').style.fontFamily = 'Marta';
                document.querySelector('.charisma .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.charisma .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueCharisma.innerHTML == 10) {
                document.querySelector('.charisma .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueCharisma = document.querySelector('.charisma span.dice-roller-result').innerHTML;
            if (valueCharisma === 'null' || valueCharisma == 0) {
                document.querySelector('.charisma .roller-result').style.display = 'none';
                document.querySelector('.charisma .dice-original').style.display = 'block';
                document.querySelector('.charisma .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.charisma .dice-original').innerHTML = 'must be at least 1'
            }
            if (valueCharisma == 10) {
                document.querySelector('.charisma .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.manipulation')) {
        var valueManipulation = document.querySelector('.manipulation .statblock-rendered-text-content');  // Манипуляция
        if (valueManipulation != null) { // для обычного значения
            if (valueManipulation.innerHTML == '-') {
                document.querySelector('.manipulation .property-text').style.fontSize = '14px';
                document.querySelector('.manipulation .property-text').style.fontFamily = 'Marta';
                document.querySelector('.manipulation .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.manipulation .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueManipulation.innerHTML >= 9) {
                document.querySelector('.manipulation .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.manipulation .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.manipulation .statblock-rendered-text-content').style.margin = '-1px 0px 0px 0px';
            }
        }
        else { // для дайс роллера
            valueManipulation = document.querySelector('.manipulation .dice-roller-result').innerHTML;
            if (valueManipulation === 'null' || valueManipulation == 0) {
                document.querySelector('.manipulation .roller-result').style.display = 'none';
                document.querySelector('.manipulation .dice-original').style.display = 'block';
                document.querySelector('.manipulation .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.manipulation .dice-original').innerHTML = 'must be at least 1'
            }
            if (valueManipulation >= 9) {
                document.querySelector('.manipulation .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.manipulation .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.manipulation .dice-roller-result').style.margin = '-1px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.appearance')) {
        var valueAppearance = document.querySelector('.appearance .statblock-rendered-text-content');  // Привлекательность
        if (valueAppearance != null) { // для обычного значения
            if (valueAppearance.innerHTML == '-') {
                document.querySelector('.appearance .statblock-rendered-text-content').innerHTML = 0;
                document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through'
            }
            if (valueAppearance.innerHTML == 0) {
                document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through'
            }
            if (valueAppearance.innerHTML > 5) {
                document.querySelector('.appearance .property-text').style.fontSize = '14px';
                document.querySelector('.appearance .property-text').style.fontFamily = 'Marta';
                document.querySelector('.appearance .property-text').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueAppearance = document.querySelector('.appearance .dice-roller-result').innerHTML;
            if (valueAppearance === 'null' || valueAppearance == 0) {
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
            if (valueAppearance > 5) {
                document.querySelector('.appearance .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.appearance .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.appearance .dice-roller-result').style.margin = '-1px 0px 0px 0px'
            }
        }
    }


    // Характеристики Ментальные

    if (document.querySelector('.perception')) {
        var valuePerception = document.querySelector('.perception .statblock-rendered-text-content');  // Восприятие
        if (valuePerception != null) { // для обычного значения
            if (valuePerception.innerHTML == '-') {
                document.querySelector('.perception .property-text').style.fontSize = '14px';
                document.querySelector('.perception .property-text').style.fontFamily = 'Marta';
                document.querySelector('.perception .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.perception .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valuePerception.innerHTML == 10) {
                document.querySelector('.perception .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valuePerception = document.querySelector('.perception .dice-roller-result').innerHTML;
            if (valuePerception === 'null' || valuePerception == 0) {
                document.querySelector('.perception .roller-result').style.display = 'none';
                document.querySelector('.perception .dice-original').style.display = 'block';
                document.querySelector('.perception .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.perception .dice-original').innerHTML = 'must be at least 1'
            }
            if (valuePerception == 10) {
                document.querySelector('.perception .dice-roller-result').innerHTML = 'X'
            };
        }
    }

    if (document.querySelector('.intelligence')) {
        var valueIntelligence = document.querySelector('.intelligence .statblock-rendered-text-content');  // Интеллект
        if (valueIntelligence != null) { // для обычного значения
            if (valueIntelligence.innerHTML == '-') {
                document.querySelector('.intelligence .property-text').style.fontSize = '14px';
                document.querySelector('.intelligence .property-text').style.fontFamily = 'Marta';
                document.querySelector('.intelligence .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.intelligence .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueIntelligence.innerHTML == 10) {
                document.querySelector('.intelligence .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueIntelligence = document.querySelector('.intelligence .dice-roller-result').innerHTML;
            if (valueIntelligence === 'null' || valueIntelligence == 0) {
                document.querySelector('.intelligence .roller-result').style.display = 'none';
                document.querySelector('.intelligence .dice-original').style.display = 'block';
                document.querySelector('.intelligence .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.intelligence .dice-original').innerHTML = 'must be at least 1'
            }
            if (valueIntelligence == 10) {
                document.querySelector('.intelligence .dice-roller-result').innerHTML = 'X'
            };
        }
    }

    if (document.querySelector('.wits')) {
        var valueWits = document.querySelector('.wits .statblock-rendered-text-content');  // Смекалка
        if (valueWits != null) { // для обычного значения
            if (valueWits.innerHTML == '-') {
                document.querySelector('.wits .property-text').style.fontSize = '14px';
                document.querySelector('.wits .property-text').style.fontFamily = 'Marta';
                document.querySelector('.wits .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.wits .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueWits.innerHTML == 10) {
                document.querySelector('.wits .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueWits = document.querySelector('.wits .dice-roller-result').innerHTML;
            if (valueWits === 'null' || valueWits == 0) {
                document.querySelector('.wits .roller-result').style.display = 'none';
                document.querySelector('.wits .dice-original').style.display = 'block';
                document.querySelector('.wits .dice-original').style.margin = '-1px 0px 0px 0px';
                document.querySelector('.wits .dice-original').innerHTML = 'must be at least 1'
            }
            if (valueWits == 10) {
                document.querySelector('.wits .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    // Способности - Таланты
    if (document.querySelector('.athletics')) {
        var valueAthletics = document.querySelector('.athletics .statblock-rendered-text-content');  // Атлетика
        if (valueAthletics != null) { // для обычного значения
            if (valueAthletics.innerHTML == '-') {
                document.querySelector('.athletics .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAthletics.innerHTML == 10) {
                document.querySelector('.athletics .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueAthletics = document.querySelector('.athletics .dice-roller-result').innerHTML;
            if (valueAthletics === 'null' || valueAthletics == 0) {
                document.querySelector('.athletics .dice-roller-result').style.display = 'none';
                document.querySelector('.athletics .dice-original').innerHTML = 0;
                document.querySelector('.athletics .dice-original').style.display = 'block';
                document.querySelector('.athletics .dice-original').style.fontSize = '9px';
                document.querySelector('.athletics .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.athletics .dice-original').style.textAlign = 'center';
                document.querySelector('.athletics .dice-original').style.verticalAlign = 'top';
                document.querySelector('.athletics .dice-original').style.fontWeight = 'normal'
            }
            if (valueAthletics == 10) {
                document.querySelector('.athletics .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.alertness')) {
        var valueAlertness = document.querySelector('.alertness .statblock-rendered-text-content');  // Бдительность
        if (valueAlertness != null) { // для обычного значения
            if (valueAlertness.innerHTML == '-') {
                document.querySelector('.alertness .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAlertness.innerHTML == 10) {
                document.querySelector('.alertness .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.alertness .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.alertness .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueAlertness = document.querySelector('.alertness .dice-roller-result').innerHTML;
            if (valueAlertness === 'null' || valueAlertness == 0) {
                document.querySelector('.alertness .dice-roller-result').style.display = 'none';
                document.querySelector('.alertness .dice-original').innerHTML = 0;
                document.querySelector('.alertness .dice-original').style.display = 'block';
                document.querySelector('.alertness .dice-original').style.fontSize = '9px';
                document.querySelector('.alertness .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.alertness .dice-original').style.textAlign = 'center';
                document.querySelector('.alertness .dice-original').style.verticalAlign = 'top';
                document.querySelector('.alertness .dice-original').style.fontWeight = 'normal'
            }
            if (valueAlertness == 10) {
                document.querySelector('.alertness .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.alertness .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.alertness .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.brawl')) {
        var valueBrawl = document.querySelector('.brawl .statblock-rendered-text-content');  // Драка
        if (valueBrawl != null) { // для обычного значения
            if (valueBrawl.innerHTML == '-') {
                document.querySelector('.brawl .statblock-rendered-text-content').innerHTML = 1
            }
            if (valueBrawl.innerHTML == 10) {
                document.querySelector('.brawl .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueBrawl = document.querySelector('.brawl .dice-roller-result').innerHTML;
            if (valueBrawl === 'null' || valueBrawl == 0) {
                document.querySelector('.brawl .dice-roller-result').style.display = 'none';
                document.querySelector('.brawl .dice-original').innerHTML = 0;
                document.querySelector('.brawl .dice-original').style.display = 'block';
                document.querySelector('.brawl .dice-original').style.fontSize = '9px';
                document.querySelector('.brawl .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.brawl .dice-original').style.textAlign = 'center';
                document.querySelector('.brawl .dice-original').style.verticalAlign = 'top';
                document.querySelector('.brawl .dice-original').style.fontWeight = 'normal'
            }
            if (valueBrawl == 10) {
                document.querySelector('.brawl span.dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.intimidation')) {
        var valueIntimidation = document.querySelector('.intimidation .statblock-rendered-text-content');  // Запугивание
        if (valueIntimidation != null) { // для обычного значения
            if (valueIntimidation.innerHTML == '-') {
                document.querySelector('.intimidation .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueIntimidation.innerHTML == 10) {
                document.querySelector('.intimidation .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueIntimidation = document.querySelector('.intimidation .dice-roller-result').innerHTML;
            if (valueIntimidation === 'null' || valueIntimidation == 0) {
                document.querySelector('.intimidation .dice-roller-result').style.display = 'none';
                document.querySelector('.intimidation .dice-original').innerHTML = 0;
                document.querySelector('.intimidation .dice-original').style.display = 'block';
                document.querySelector('.intimidation .dice-original').style.fontSize = '9px';
                document.querySelector('.intimidation .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.intimidation .dice-original').style.textAlign = 'center';
                document.querySelector('.intimidation .dice-original').style.verticalAlign = 'top';
                document.querySelector('.intimidation .dice-original').style.fontWeight = 'normal'
            }
            if (valueIntimidation == 10) {
                document.querySelector('.intimidation .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.expression')) {
        var valueExpression = document.querySelector('.expression .statblock-rendered-text-content');  // Красноречие
        if (valueExpression != null) { // для обычного значения
            if (valueExpression.innerHTML == '-') {
                document.querySelector('.expression .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueExpression.innerHTML == 10) {
                document.querySelector('.expression .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueExpression = document.querySelector('.expression .dice-roller-result').innerHTML;
            if (valueExpression === 'null' || valueExpression == 0) {
                document.querySelector('.expression .dice-roller-result').style.display = 'none';
                document.querySelector('.expression .dice-original').innerHTML = 0;
                document.querySelector('.expression .dice-original').style.display = 'block';
                document.querySelector('.expression .dice-original').style.fontSize = '9px';
                document.querySelector('.expression .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.expression .dice-original').style.textAlign = 'center';
                document.querySelector('.expression .dice-original').style.verticalAlign = 'top';
                document.querySelector('.expression .dice-original').style.fontWeight = 'normal'
            }
            if (valueExpression == 10) {
                document.querySelector('.expression .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.leadership')) {
        var valueLeadership = document.querySelector('.leadership .statblock-rendered-text-content');  // Лидерство
        if (valueLeadership != null) { // для обычного значения
            if (valueLeadership.innerHTML == '-') {
                document.querySelector('.leadership .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueLeadership.innerHTML == 10) {
                document.querySelector('.leadership .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueLeadership = document.querySelector('.leadership .dice-roller-result').innerHTML;
            if (valueLeadership === 'null' || valueLeadership == 0) {
                document.querySelector('.leadership .dice-roller-result').style.display = 'none';
                document.querySelector('.leadership .dice-original').innerHTML = 0;
                document.querySelector('.leadership .dice-original').style.display = 'block';
                document.querySelector('.leadership .dice-original').style.fontSize = '9px';
                document.querySelector('.leadership .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.leadership .dice-original').style.textAlign = 'center';
                document.querySelector('.leadership .dice-original').style.verticalAlign = 'top';
                document.querySelector('.leadership .dice-original').style.fontWeight = 'normal'
            }
            if (valueLeadership == 10) {
                document.querySelector('.leadership .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.streetwise')) {
        var valueStreetwise = document.querySelector('.streetwise .statblock-rendered-text-content');  // Уличное чутье
        if (valueStreetwise != null) { // для обычного значения
            if (valueStreetwise.innerHTML == '-') {
                document.querySelector('.streetwise .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueStreetwise.innerHTML > 9) {
                document.querySelector('.streetwise .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.streetwise .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.streetwise .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueStreetwise = document.querySelector('.streetwise .dice-roller-result').innerHTML;
            if (valueStreetwise === 'null' || valueStreetwise == 0) {
                document.querySelector('.streetwise .dice-roller-result').style.display = 'none';
                document.querySelector('.streetwise .dice-original').innerHTML = 0;
                document.querySelector('.streetwise .dice-original').style.display = 'block';
                document.querySelector('.streetwise .dice-original').style.fontSize = '9px';
                document.querySelector('.streetwise .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.streetwise .dice-original').style.textAlign = 'center';
                document.querySelector('.streetwise .dice-original').style.verticalAlign = 'top';
                document.querySelector('.streetwise .dice-original').style.fontWeight = 'normal'
            }
            if (valueStreetwise > 9) {
                document.querySelector('.streetwise .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.streetwise .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.streetwise .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.subterfuge')) {
        var valueSubterfuge = document.querySelector('.subterfuge .statblock-rendered-text-content');  // Хитрость
        if (valueSubterfuge != null) { // для обычного значения
            if (valueSubterfuge.innerHTML == '-') {
                document.querySelector('.subterfuge .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueSubterfuge.innerHTML == 10) {
                document.querySelector('.subterfuge .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueSubterfuge = document.querySelector('.subterfuge .dice-roller-result').innerHTML;
            if (valueSubterfuge === 'null' || valueSubterfuge == 0) {
                document.querySelector('.subterfuge .dice-roller-result').style.display = 'none';
                document.querySelector('.subterfuge .dice-original').innerHTML = 0;
                document.querySelector('.subterfuge .dice-original').style.display = 'block';
                document.querySelector('.subterfuge .dice-original').style.fontSize = '9px';
                document.querySelector('.subterfuge .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.subterfuge .dice-original').style.textAlign = 'center';
                document.querySelector('.subterfuge .dice-original').style.verticalAlign = 'top';
                document.querySelector('.subterfuge .dice-original').style.fontWeight = 'normal'
            }
            if (valueSubterfuge == 10) {
                document.querySelector('.subterfuge .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.awareness')) {
        var valueAwareness = document.querySelector('.awareness .statblock-rendered-text-content');  // Шестое чувство
        if (valueAwareness != null) { // для обычного значения
            if (valueAwareness.innerHTML == '-') {
                document.querySelector('.awareness .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAwareness.innerHTML > 7) {
                document.querySelector('.awareness .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.awareness .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.awareness .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueAwareness = document.querySelector('.awareness .dice-roller-result').innerHTML;
            if (valueAwareness === 'null' || valueAwareness == 0) {
                document.querySelector('.awareness .dice-roller-result').style.display = 'none';
                document.querySelector('.awareness .dice-original').innerHTML = 0;
                document.querySelector('.awareness .dice-original').style.display = 'block';
                document.querySelector('.awareness .dice-original').style.fontSize = '9px';
                document.querySelector('.awareness .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.awareness .dice-original').style.textAlign = 'center';
                document.querySelector('.awareness .dice-original').style.verticalAlign = 'top';
                document.querySelector('.awareness .dice-original').style.fontWeight = 'normal'
            }
            if (valueAwareness > 7) {
                document.querySelector('.awareness .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.awareness .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.awareness .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.empathy')) {
        var valueEmpathy = document.querySelector('.empathy .statblock-rendered-text-content');  // Эмпатия
        if (valueEmpathy != null) { // для обычного значения
            if (valueEmpathy.innerHTML == '-') {
                document.querySelector('.empathy .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueEmpathy.innerHTML == 10) {
                document.querySelector('.empathy .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueEmpathy = document.querySelector('.empathy .dice-roller-result').innerHTML;
            if (valueEmpathy === 'null' || valueEmpathy == 0) {
                document.querySelector('.empathy .dice-roller-result').style.display = 'none';
                document.querySelector('.empathy .dice-original').innerHTML = 0;
                document.querySelector('.empathy .dice-original').style.display = 'block';
                document.querySelector('.empathy .dice-original').style.fontSize = '9px';
                document.querySelector('.empathy .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.empathy .dice-original').style.textAlign = 'center';
                document.querySelector('.empathy .dice-original').style.verticalAlign = 'top';
                document.querySelector('.empathy .dice-original').style.fontWeight = 'normal'
            }
            if (valueEmpathy == 10) {
                document.querySelector('.empathy .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    // Способности - Навыки

    if (document.querySelector('.drive')) {
        var valueDrive = document.querySelector('.drive .statblock-rendered-text-content');  // Вождение
        if (valueDrive != null) { // для обычного значения
            if (valueDrive.innerHTML == '-') {
                document.querySelector('.drive .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueDrive.innerHTML == 10) {
                document.querySelector('.drive .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueDrive = document.querySelector('.drive .dice-roller-result').innerHTML;
            if (valueDrive === 'null' || valueDrive == 0) {
                document.querySelector('.drive .dice-roller-result').style.display = 'none';
                document.querySelector('.drive .dice-original').innerHTML = 0;
                document.querySelector('.drive .dice-original').style.display = 'block';
                document.querySelector('.drive .dice-original').style.fontSize = '9px';
                document.querySelector('.drive .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.drive .dice-original').style.textAlign = 'center';
                document.querySelector('.drive .dice-original').style.verticalAlign = 'top';
                document.querySelector('.drive .dice-original').style.fontWeight = 'normal'
            }
            if (valueDrive == 10) {
                document.querySelector('.drive .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.larceny')) {
        var valueLarceny = document.querySelector('.larceny .statblock-rendered-text-content');  // Воровство
        if (valueLarceny != null) { // для обычного значения
            if (valueLarceny.innerHTML == '-') {
                document.querySelector('.larceny .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueLarceny.innerHTML == 10) {
                document.querySelector('.larceny .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueLarceny = document.querySelector('.larceny .dice-roller-result').innerHTML;
            if (valueLarceny === 'null' || valueLarceny == 0) {
                document.querySelector('.larceny .dice-roller-result').style.display = 'none';
                document.querySelector('.larceny .dice-original').innerHTML = 0;
                document.querySelector('.larceny .dice-original').style.display = 'block';
                document.querySelector('.larceny .dice-original').style.fontSize = '9px';
                document.querySelector('.larceny .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.larceny .dice-original').style.textAlign = 'center';
                document.querySelector('.larceny .dice-original').style.verticalAlign = 'top';
                document.querySelector('.larceny .dice-original').style.fontWeight = 'normal'
            }
            if (valueLarceny == 10) {
                document.querySelector('.larceny .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.survival')) {
        var valueSurvival = document.querySelector('.survival .statblock-rendered-text-content');  // Выживание
        if (valueSurvival != null) { // для обычного значения
            if (valueSurvival.innerHTML == '-') {
                document.querySelector('.survival .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueSurvival.innerHTML == 10) {
                document.querySelector('.survival .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueSurvival = document.querySelector('.survival .dice-roller-result').innerHTML;
            if (valueSurvival === 'null' || valueSurvival == 0) {
                document.querySelector('.survival .dice-roller-result').style.display = 'none';
                document.querySelector('.survival .dice-original').innerHTML = 0;
                document.querySelector('.survival .dice-original').style.display = 'block';
                document.querySelector('.survival .dice-original').style.fontSize = '9px';
                document.querySelector('.survival .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.survival .dice-original').style.textAlign = 'center';
                document.querySelector('.survival .dice-original').style.verticalAlign = 'top';
                document.querySelector('.survival .dice-original').style.fontWeight = 'normal'
            }
            if (valueSurvival == 10) {
                document.querySelector('.survival .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.performance')) {
        var valuePerformance = document.querySelector('.performance .statblock-rendered-text-content');  // Исполнение
        if (valuePerformance != null) { // для обычного значения
            if (valuePerformance.innerHTML == '-') {
                document.querySelector('.performance .statblock-rendered-text-content').innerHTML = 0
            }
            if (valuePerformance.innerHTML == 10) {
                document.querySelector('.performance .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valuePerformance = document.querySelector('.performance .dice-roller-result').innerHTML;
            if (valuePerformance === 'null' || valuePerformance == 0) {
                document.querySelector('.performance .dice-roller-result').style.display = 'none';
                document.querySelector('.performance .dice-original').innerHTML = 0;
                document.querySelector('.performance .dice-original').style.display = 'block';
                document.querySelector('.performance .dice-original').style.fontSize = '9px';
                document.querySelector('.performance .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.performance .dice-original').style.textAlign = 'center';
                document.querySelector('.performance .dice-original').style.verticalAlign = 'top';
                document.querySelector('.performance .dice-original').style.fontWeight = 'normal'
            }
            if (valuePerformance == 10) {
                document.querySelector('.performance .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.animalken')) {
        var valueAnimalken = document.querySelector('.animalken .statblock-rendered-text-content');  // Обращение с животными
        if (valueAnimalken != null) { // для обычного значения
            if (valueAnimalken.innerHTML == '-') {
                document.querySelector('.animalken .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAnimalken.innerHTML > 6) {
                document.querySelector('.animalken .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.animalken .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.animalken .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueAnimalken = document.querySelector('.animalken .dice-roller-result').innerHTML;
            if (valueAnimalken === 'null' || valueAnimalken == 0) {
                document.querySelector('.animalken .dice-roller-result').style.display = 'none';
                document.querySelector('.animalken .dice-original').innerHTML = 0;
                document.querySelector('.animalken .dice-original').style.display = 'block';
                document.querySelector('.animalken .dice-original').style.fontSize = '9px';
                document.querySelector('.animalken .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.animalken .dice-original').style.textAlign = 'center';
                document.querySelector('.animalken .dice-original').style.verticalAlign = 'top';
                document.querySelector('.animalken .dice-original').style.fontWeight = 'normal'
            }
            if (valueAnimalken > 6) {
                document.querySelector('.animalken .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.animalken .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.animalken .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.crafts')) {
        var valueCrafts = document.querySelector('.crafts .statblock-rendered-text-content');  // Ремесло
        if (valueCrafts != null) { // для обычного значения
            if (valueCrafts.innerHTML == '-') {
                document.querySelector('.crafts .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueCrafts.innerHTML == 10) {
                document.querySelector('.crafts .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueCrafts = document.querySelector('.crafts .dice-roller-result').innerHTML;
            if (valueCrafts === 'null' || valueCrafts == 0) {
                document.querySelector('.crafts .dice-roller-result').style.display = 'none';
                document.querySelector('.crafts .dice-original').innerHTML = 0;
                document.querySelector('.crafts .dice-original').style.display = 'block';
                document.querySelector('.crafts .dice-original').style.fontSize = '9px';
                document.querySelector('.crafts .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.crafts .dice-original').style.textAlign = 'center';
                document.querySelector('.crafts .dice-original').style.verticalAlign = 'top';
                document.querySelector('.crafts .dice-original').style.fontWeight = 'normal'
            }
            if (valueCrafts == 10) {
                document.querySelector('.crafts .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.stealth')) {
        var valueStealth = document.querySelector('.stealth .statblock-rendered-text-content');  // Скрытность
        if (valueStealth != null) { // для обычного значения
            if (valueStealth.innerHTML == '-') {
                document.querySelector('.stealth .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueStealth.innerHTML == 10) {
                document.querySelector('.stealth .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueStealth = document.querySelector('.stealth span.dice-roller-result').innerHTML;
            if (valueStealth === 'null' || valueCrafts == 0) {
                document.querySelector('.crafts .dice-roller-result').style.display = 'none';
                document.querySelector('.crafts .dice-original').innerHTML = 0;
                document.querySelector('.crafts .dice-original').style.display = 'block';
                document.querySelector('.crafts .dice-original').style.fontSize = '9px';
                document.querySelector('.crafts .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.crafts .dice-original').style.textAlign = 'center';
                document.querySelector('.crafts .dice-original').style.verticalAlign = 'top';
                document.querySelector('.crafts .dice-original').style.fontWeight = 'normal'
            }
            if (valueStealth == 10) {
                document.querySelector('.stealth span.dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.firearms')) {
        var valueFirearms = document.querySelector('.firearms .statblock-rendered-text-content');  // Стрельба
        if (valueFirearms != null) { // для обычного значения
            if (valueFirearms.innerHTML == '-') {
                document.querySelector('.firearms .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueFirearms.innerHTML == 10) {
                document.querySelector('.firearms .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueFirearms = document.querySelector('.firearms .dice-roller-result').innerHTML;
            if (valueFirearms === 'null' || valueFirearms == 0) {
                document.querySelector('.firearms .dice-roller-result').style.display = 'none';
                document.querySelector('.firearms .dice-original').innerHTML = 0;
                document.querySelector('.firearms .dice-original').style.display = 'block';
                document.querySelector('.firearms .dice-original').style.fontSize = '9px';
                document.querySelector('.firearms .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.firearms .dice-original').style.textAlign = 'center';
                document.querySelector('.firearms .dice-original').style.verticalAlign = 'top';
                document.querySelector('.firearms .dice-original').style.fontWeight = 'normal'
            }
            if (valueFirearms == 10) {
                document.querySelector('.firearms .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.melee')) {
        var valueMelee = document.querySelector('.melee .statblock-rendered-text-content');  // Фехтование
        if (valueMelee != null) { // для обычного значения
            if (valueMelee.innerHTML == '-') {
                document.querySelector('.melee .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueMelee.innerHTML == 10) {
                document.querySelector('.melee .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueMelee = document.querySelector('.melee .dice-roller-result').innerHTML;
            if (valueMelee === 'null' || valueMelee == 0) {
                document.querySelector('.melee .dice-roller-result').style.display = 'none';
                document.querySelector('.melee .dice-original').innerHTML = 0;
                document.querySelector('.melee .dice-original').style.display = 'block';
                document.querySelector('.melee .dice-original').style.fontSize = '9px';
                document.querySelector('.melee .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.melee .dice-original').style.textAlign = 'center';
                document.querySelector('.melee .dice-original').style.verticalAlign = 'top';
                document.querySelector('.melee .dice-original').style.fontWeight = 'normal'
            }
            if (valueMelee == 10) {
                document.querySelector('.melee .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.etiquette')) {
        var valueEtiquette = document.querySelector('.etiquette .statblock-rendered-text-content');  // Этикет
        if (valueEtiquette != null) { // для обычного значения
            if (valueEtiquette.innerHTML == '-') {
                document.querySelector('.etiquette .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueEtiquette.innerHTML == 10) {
                document.querySelector('.etiquette .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueEtiquette = document.querySelector('.etiquette .dice-roller-result').innerHTML;
            if (valueEtiquette === 'null' || valueEtiquette == 0) {
                document.querySelector('.etiquette .dice-roller-result').style.display = 'none';
                document.querySelector('.etiquette .dice-original').innerHTML = 0;
                document.querySelector('.etiquette .dice-original').style.display = 'block';
                document.querySelector('.etiquette .dice-original').style.fontSize = '9px';
                document.querySelector('.etiquette .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.etiquette .dice-original').style.textAlign = 'center';
                document.querySelector('.etiquette .dice-original').style.verticalAlign = 'top';
                document.querySelector('.etiquette .dice-original').style.fontWeight = 'normal'
            }
            if (valueEtiquette == 10) {
                document.querySelector('.etiquette .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    // Способности - Навыки

    if (document.querySelector('.academics')) {
        var valueAcademics = document.querySelector('.academics .statblock-rendered-text-content');  // Гуманитарные науки
        if (valueAcademics != null) { // для обычного значения
            if (valueAcademics.innerHTML == '-') {
                document.querySelector('.academics .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAcademics.innerHTML > 8) {
                document.querySelector('.academics .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.academics .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.academics .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueAcademics = document.querySelector('.academics .dice-roller-result').innerHTML;
            if (valueAcademics === 'null' || valueAcademics == 0) {
                document.querySelector('.academics .dice-roller-result').style.display = 'none';
                document.querySelector('.academics .dice-original').innerHTML = 0;
                document.querySelector('.academics .dice-original').style.display = 'block';
                document.querySelector('.academics .dice-original').style.fontSize = '9px';
                document.querySelector('.academics .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.academics .dice-original').style.textAlign = 'center';
                document.querySelector('.academics .dice-original').style.verticalAlign = 'top';
                document.querySelector('.academics .dice-original').style.fontWeight = 'normal'
            }
            if (valueAcademics > 8) {
                document.querySelector('.academics .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.academics .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.academics .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.science')) {
        var valueScience = document.querySelector('.science .statblock-rendered-text-content');  // Естественные науки
        if (valueScience != null) { // для обычного значения
            if (valueScience.innerHTML == '-') {
                document.querySelector('.science .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueScience.innerHTML > 8) {
                document.querySelector('.science .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.science .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.science .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueScience = document.querySelector('.science .dice-roller-result').innerHTML;
            if (valueScience === 'null' || valueScience == 0) {
                document.querySelector('.science .dice-roller-result').style.display = 'none';
                document.querySelector('.science .dice-original').innerHTML = 0;
                document.querySelector('.science .dice-original').style.display = 'block';
                document.querySelector('.science .dice-original').style.fontSize = '9px';
                document.querySelector('.science .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.science .dice-original').style.textAlign = 'center';
                document.querySelector('.science .dice-original').style.verticalAlign = 'top';
                document.querySelector('.science .dice-original').style.fontWeight = 'normal'
            }
            if (valueScience > 8) {
                document.querySelector('.science .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.science .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.science .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.law')) {
        var valueLaw = document.querySelector('.law .statblock-rendered-text-content');  // Законы
        if (valueLaw != null) { // для обычного значения
            if (valueLaw.innerHTML == '-') {
                document.querySelector('.law .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueLaw.innerHTML == 10) {
                document.querySelector('.law .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueLaw = document.querySelector('.law .dice-roller-result').innerHTML;
            if (valueLaw === 'null' || valueLaw == 0) {
                document.querySelector('.law .dice-roller-result').style.display = 'none';
                document.querySelector('.law .dice-original').innerHTML = 0;
                document.querySelector('.law .dice-original').style.display = 'block';
                document.querySelector('.law .dice-original').style.fontSize = '9px';
                document.querySelector('.law .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.law .dice-original').style.textAlign = 'center';
                document.querySelector('.law .dice-original').style.verticalAlign = 'top';
                document.querySelector('.law .dice-original').style.fontWeight = 'normal'
            }
            if (valueLaw == 10) {
                document.querySelector('.law .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.computer')) {
        var valueComputer = document.querySelector('.computer .statblock-rendered-text-content');  // Информатика
        if (valueComputer != null) { // для обычного значения
            if (valueComputer.innerHTML == '-') {
                document.querySelector('.computer .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueComputer.innerHTML > 8) {
                document.querySelector('.computer .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.computer .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.computer .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueComputer = document.querySelector('.computer .dice-roller-result').innerHTML;
            if (valueComputer === 'null' || valueComputer == 0) {
                document.querySelector('.computer .dice-roller-result').style.display = 'none';
                document.querySelector('.computer .dice-original').innerHTML = 0;
                document.querySelector('.computer .dice-original').style.display = 'block';
                document.querySelector('.computer .dice-original').style.fontSize = '9px';
                document.querySelector('.computer .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.computer .dice-original').style.textAlign = 'center';
                document.querySelector('.computer .dice-original').style.verticalAlign = 'top';
                document.querySelector('.computer .dice-original').style.fontWeight = 'normal'
            }
            if (valueComputer > 8) {
                document.querySelector('.computer .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.computer .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.computer .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.medicine')) {
        var valueMedicine = document.querySelector('.medicine .statblock-rendered-text-content');  // Медицина
        if (valueMedicine != null) { // для обычного значения
            if (valueMedicine.innerHTML == '-') {
                document.querySelector('.medicine .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueMedicine.innerHTML == 10) {
                document.querySelector('.medicine .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueMedicine = document.querySelector('.medicine .dice-roller-result').innerHTML;
            if (valueMedicine === 'null' || valueMedicine == 0) {
                document.querySelector('.medicine .dice-roller-result').style.display = 'none';
                document.querySelector('.medicine .dice-original').innerHTML = 0;
                document.querySelector('.medicine .dice-original').style.display = 'block';
                document.querySelector('.medicine .dice-original').style.fontSize = '9px';
                document.querySelector('.medicine .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.medicine .dice-original').style.textAlign = 'center';
                document.querySelector('.medicine .dice-original').style.verticalAlign = 'top';
                document.querySelector('.medicine .dice-original').style.fontWeight = 'normal'
            }
            if (valueMedicine == 10) {
                document.querySelector('.medicine .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.occult')) {
        var valueOccult = document.querySelector('.occult .statblock-rendered-text-content');  // Оккультизм
        if (valueOccult != null) { // для обычного значения
            if (valueOccult.innerHTML == '-') {
                document.querySelector('.occult .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueOccult.innerHTML == 10) {
                document.querySelector('.occult .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueOccult = document.querySelector('.occult .dice-roller-result').innerHTML;
            if (valueOccult === 'null' || valueOccult == 0) {
                document.querySelector('.occult .dice-roller-result').style.display = 'none';
                document.querySelector('.occult .dice-original').innerHTML = 0;
                document.querySelector('.occult .dice-original').style.display = 'block';
                document.querySelector('.occult .dice-original').style.fontSize = '9px';
                document.querySelector('.occult .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.occult .dice-original').style.textAlign = 'center';
                document.querySelector('.occult .dice-original').style.verticalAlign = 'top';
                document.querySelector('.occult .dice-original').style.fontWeight = 'normal'
            }
            if (valueOccult == 10) {
                document.querySelector('.occult .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.politics')) {
        var valuePolitics = document.querySelector('.politics .statblock-rendered-text-content');  // Политика
        if (valuePolitics != null) { // для обычного значения
            if (valuePolitics.innerHTML == '-') {
                document.querySelector('.politics .statblock-rendered-text-content').innerHTML = 0
            }
            if (valuePolitics.innerHTML == 10) {
                document.querySelector('.politics .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valuePolitics = document.querySelector('.politics .dice-roller-result').innerHTML;
            if (valuePolitics === 'null' || valuePolitics == 0) {
                document.querySelector('.politics .dice-roller-result').style.display = 'none';
                document.querySelector('.politics .dice-original').innerHTML = 0;
                document.querySelector('.politics .dice-original').style.display = 'block';
                document.querySelector('.politics .dice-original').style.fontSize = '9px';
                document.querySelector('.politics .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.politics .dice-original').style.textAlign = 'center';
                document.querySelector('.politics .dice-original').style.verticalAlign = 'top';
                document.querySelector('.politics .dice-original').style.fontWeight = 'normal'
            }
            if (valuePolitics == 10) {
                document.querySelector('.politics .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.investigation')) {
        var valueInvestigation = document.querySelector('.investigation .statblock-rendered-text-content');  // Расследование
        if (valueInvestigation != null) { // для обычного значения
            if (valueInvestigation.innerHTML == '-') {
                document.querySelector('.investigation .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueInvestigation.innerHTML > 8) {
                document.querySelector('.investigation .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.investigation .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.investigation .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // для дайс роллера
            valueInvestigation = document.querySelector('.investigation .dice-roller-result').innerHTML;
            if (valueInvestigation === 'null' || valueInvestigation == 0) {
                document.querySelector('.investigation .dice-roller-result').style.display = 'none';
                document.querySelector('.investigation .dice-original').innerHTML = 0;
                document.querySelector('.investigation .dice-original').style.display = 'block';
                document.querySelector('.investigation .dice-original').style.fontSize = '9px';
                document.querySelector('.investigation .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.investigation .dice-original').style.textAlign = 'center';
                document.querySelector('.investigation .dice-original').style.verticalAlign = 'top';
                document.querySelector('.investigation .dice-original').style.fontWeight = 'normal'
            }
            if (valueInvestigation > 8) {
                document.querySelector('.investigation .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.investigation .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.investigation .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
    }


    if (document.querySelector('.finance')) {
        var valueFinance = document.querySelector('.finance .statblock-rendered-text-content');  // Финансы
        if (valueFinance != null) { // для обычного значения
            if (valueFinance.innerHTML == '-') {
                document.querySelector('.finance .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueFinance.innerHTML == 10) {
                document.querySelector('.finance .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueFinance = document.querySelector('.finance .dice-roller-result').innerHTML;
            if (valueFinance === 'null' || valueFinance == 0) {
                document.querySelector('.finance .dice-roller-result').style.display = 'none';
                document.querySelector('.finance .dice-original').innerHTML = 0;
                document.querySelector('.finance .dice-original').style.display = 'block';
                document.querySelector('.finance .dice-original').style.fontSize = '9px';
                document.querySelector('.finance .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.finance .dice-original').style.textAlign = 'center';
                document.querySelector('.finance .dice-original').style.verticalAlign = 'top';
                document.querySelector('.finance .dice-original').style.fontWeight = 'normal'
            }
            if (valueFinance == 10) {
                document.querySelector('.finance .dice-roller-result').innerHTML = 'X'
            };
        }
    }


    if (document.querySelector('.technology')) {
        var valueTechnology = document.querySelector('.technology .statblock-rendered-text-content');  // Электроника
        if (valueTechnology != null) { // для обычного значения
            if (valueTechnology.innerHTML == '-') {
                document.querySelector('.technology .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueTechnology.innerHTML == 10) {
                document.querySelector('.technology .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // для дайс роллера
            valueTechnology = document.querySelector('.technology .dice-roller-result').innerHTML;
            if (valueTechnology === 'null' || valueTechnology == 0) {
                document.querySelector('.technology .dice-roller-result').style.display = 'none';
                document.querySelector('.technology .dice-original').innerHTML = 0;
                document.querySelector('.technology .dice-original').style.display = 'block';
                document.querySelector('.technology .dice-original').style.fontSize = '9px';
                document.querySelector('.technology .dice-original').style.fontFamily = 'SmallCircles';
                document.querySelector('.technology .dice-original').style.textAlign = 'center';
                document.querySelector('.technology .dice-original').style.verticalAlign = 'top';
                document.querySelector('.technology .dice-original').style.fontWeight = 'normal'
            }
            if (valueTechnology == 10) {
                document.querySelector('.technology .dice-roller-result').innerHTML = 'X'
            };
        }
    }



   // Дисциплины
   if (document.querySelector('.discipline1_name .statblock-rendered-text-content')) {
    var disciplinesList = document.querySelectorAll('.disciplines-column .statblock-rendered-text-content');
    // console.log(disciplinesList);
    for (let i = 1; i < disciplinesList.length; i += 2) {
        if (disciplinesList[i].innerHTML.startsWith('<a data')) {
            if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
        }
        else if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
    }
}

// Дисциплины в ховере
if (document.querySelector('.popover.hover-popover .discipline1_name .statblock-rendered-text-content')) {
    var disciplinesList = document.querySelectorAll('.popover.hover-popover .disciplines-column .statblock-rendered-text-content');
    // console.log(disciplinesList);
    for (let i = 1; i < disciplinesList.length; i += 2) {
        if (disciplinesList[i].innerHTML.startsWith('<a data')) {
            if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
                disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
        }
        else if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
        if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
            disciplinesList[i + 1].style.fontSize = '14px'; // и замену точек на цифры, если имя слишком длинное
            disciplinesList[i + 1].style.fontFamily = 'Marta';
            disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
        }
    }
}




    // определяем, с какой стороны показывать достоинства и недостатки у оборотней
    if (document.querySelector('.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var WhereToShowMeritsAndFlaws = document.querySelector('.line.where-to-show-merits-and-flaws .statblock-rendered-text-content').innerHTML;
        console.log('где же показывать достоинства и недостатки? ' + WhereToShowMeritsAndFlaws)
        switch (WhereToShowMeritsAndFlaws) {
            case ('left'):
                document.querySelector('.statblock-item-container.group-container:has(>.merits-and-flaws-column-right)').style.display = 'none';
                document.querySelector('.statblock-inline-item.group-container:has(.statblock-item-container.group-container:first-child:last-child > .merits-and-flaws-column-left)').style.display = 'block';
                break;
            case ('right'):
                document.querySelector('.statblock-item-container.group-container:has(>.merits-and-flaws-column-left)').style.display = 'none';
                break;
        }
    }
    else { // do nothing
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
        const pathHover = document.querySelector('.popover.hover-popover .path .statblock-rendered-text-content'); // найти значение пути, человечность это или нет
        console.log(pathHover + 'есть ли путь в ховере')
        if (pathHover === null) { // если путь вообще не указан...
            document.querySelector('.popover.hover-popover .line.bearing').style.display = 'none'
        } // удаляется вся строчка 'Столп'
        else if (pathHover.innerHTML != ('ЧЕЛОВЕЧНОСТЬ')) { // если путь не человечность, то...
            document.querySelector('.popover.hover-popover .bearing').style.display = 'none'; // удаляется вся строчка 'Столп'
            var pathModifierHover = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML; // получаем количество точек в не-человечности
            if (pathModifierHover = 10) {
                document.querySelector('.popover.hover-popover .path_value .statblock-rendered-text-content').innerHTML = 'X';
            }
        }
        else {
            var pathModifierHover = document.querySelector('.popover.hover-popover .line.path_value .statblock-rendered-text-content').innerHTML; // получаем количество точек в человечности
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
            if (willpowerValue != null && willpowerValue.innerHTML == 10) {
                // меняем его на Х
                document.querySelector(willpowerOptions[i] + ' .statblock-rendered-text-content').innerHTML = 'X'
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
            if (willpowerValue != null && willpowerValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' .statblock-rendered-text-content').innerHTML = 'X'
            }
            else {
                willpowerValue = document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' span.dice-roller-result').innerHTML;
                if (willpowerValue == 10) {
                    document.querySelector('.popover.hover-popover ' + willpowerOptions[i] + ' span.dice-roller-result').innerHTML = 'X'
                };
            }
        }
    }


    // Глобальный пересчет крови, чтобы из одной цифры (от 1 до 40) добавлялись и отображались нужные строчки, а ненужные - скрывались
    if (document.querySelector('.line.blood') != null) {
        const bloodCurrent = document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML; // для крови, первая строчка
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
        const bloodCurrentHover = document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML; // для крови, первая строчка
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
    if (document.querySelector('.wta-v20-werewolf .rage-block .line.rage_main') != null) {
        var rageValue = document.querySelector('.rage_main .statblock-rendered-text-content')  // для ярости
        if (rageValue != null) { // для обычного значения 
            if (rageValue.innerHTML == 10) {
                document.querySelector('.rage_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            rageValue = document.querySelector('.rage_main span.dice-roller-result').innerHTML;
            if (rageValue == 10) {
                document.querySelector('.rage_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('ярость не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.wta-v20-werewolf .popover.hover-popover .rage-block .line.rage_main') != null) {
        var rageValue = document.querySelector('.popover.hover-popover .rage_main .statblock-rendered-text-content')  // для ярости
        if (rageValue != null) { // для обычного значения 
            if (rageValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .rage_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            rageValue = document.querySelector('.popover.hover-popover .rage_main span.dice-roller-result').innerHTML;
            if (rageValue == 10) {
                document.querySelector('.popover.hover-popover .rage_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('ярость в ховере не норм')
    }


    if (document.querySelector('.rage-block .line.rage_current') != null) {
        var rageCurrentValue = document.querySelector('.rage_current .statblock-rendered-text-content')  // для запаса ярости
        if (rageCurrentValue != null) { // для обычного значения 
            if (rageCurrentValue.innerHTML == 10) {
                document.querySelector('.rage_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            rageCurrentValue = document.querySelector('.rage_current span.dice-roller-result').innerHTML;
            if (rageCurrentValue == 10) {
                document.querySelector('.rage_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас ярости не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .rage-block .line.rage_current') != null) {
        var rageCurrentValue = document.querySelector('.popover.hover-popover .rage_current .statblock-rendered-text-content')  // для запаса ярости
        if (rageCurrentValue != null) { // для обычного значения 
            if (rageCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .rage_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            rageCurrentValue = document.querySelector('.popover.hover-popover .rage_current span.dice-roller-result').innerHTML;
            if (rageCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .rage_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас ярости в ховере не норм')
    }


    if (document.querySelector('.gnosis-block .line.gnosis_main') != null) {
        var gnosisValue = document.querySelector('.gnosis_main .statblock-rendered-text-content')  // для гнозиса
        if (gnosisValue != null) { // для обычного значения 
            if (gnosisValue.innerHTML == 10) {
                document.querySelector('.gnosis_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gnosisValue = document.querySelector('.gnosis_main span.dice-roller-result').innerHTML;
            if (gnosisValue == 10) {
                document.querySelector('.gnosis_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('гнозис не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .gnosis-block .line.gnosis_main') != null) {
        var gnosisValue = document.querySelector('.popover.hover-popover .gnosis_main .statblock-rendered-text-content')  // для гнозиса
        if (gnosisValue != null) { // для обычного значения 
            if (gnosisValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .gnosis_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gnosisValue = document.querySelector('.popover.hover-popover .gnosis_main span.dice-roller-result').innerHTML;
            if (gnosisValue == 10) {
                document.querySelector('.popover.hover-popover .gnosis_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('гнозис в ховере не норм')
    }

    if (document.querySelector('.gnosis-block .line.gnosis_current') != null) {
        var gnosisCurrentValue = document.querySelector('.gnosis_current .statblock-rendered-text-content')  // для запаса гнозиса
        if (gnosisCurrentValue != null) { // для обычного значения 
            if (gnosisCurrentValue.innerHTML == 10) {
                document.querySelector('.gnosis_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gnosisCurrentValue = document.querySelector('.gnosis_current span.dice-roller-result').innerHTML;
            if (gnosisCurrentValue == 10) {
                document.querySelector('.gnosis_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас гнозиса не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .gnosis-block .line.gnosis_current') != null) {
        var gnosisCurrentValue = document.querySelector('.popover.hover-popover .gnosis_current .statblock-rendered-text-content')  // для запаса гнозиса
        if (gnosisCurrentValue != null) { // для обычного значения 
            if (gnosisCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .gnosis_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gnosisCurrentValue = document.querySelector('.popover.hover-popover .gnosis_current span.dice-roller-result').innerHTML;
            if (gnosisCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .gnosis_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас гнозиса в ховере не норм')
    }


    if (document.querySelector('.glory-block .line.glory_main') != null) {
        var gloryValue = document.querySelector('.glory_main .statblock-rendered-text-content')  // для славы
        if (gloryValue != null) { // для обычного значения 
            if (gloryValue.innerHTML == 10) {
                document.querySelector('.glory_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gloryValue = document.querySelector('.glory_main span.dice-roller-result').innerHTML;
            if (gloryValue == 10) {
                document.querySelector('.glory_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('слава не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .glory-block .line.glory_main') != null) {
        var gloryValue = document.querySelector('.popover.hover-popover .glory_main .statblock-rendered-text-content')  // для славы
        if (gloryValue != null) { // для обычного значения 
            if (gloryValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .glory_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gloryValue = document.querySelector('.popover.hover-popover .glory_main span.dice-roller-result').innerHTML;
            if (gloryValue == 10) {
                document.querySelector('.popover.hover-popover .glory_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('слава в ховере не норм')
    }


    if (document.querySelector('.glory-block .line.glory_current') != null) {
        var gloryCurrentValue = document.querySelector('.glory_current .statblock-rendered-text-content')  // для запаса славы
        if (gloryCurrentValue != null) { // для обычного значения 
            if (gloryCurrentValue.innerHTML == 10) {
                document.querySelector('.glory_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gloryCurrentValue = document.querySelector('.glory_current span.dice-roller-result').innerHTML;
            if (gloryCurrentValue == 10) {
                document.querySelector('.glory_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас славы не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .glory-block .line.glory_current') != null) {
        var gloryCurrentValue = document.querySelector('.popover.hover-popover .glory_current .statblock-rendered-text-content')  // для запаса славы
        if (gloryCurrentValue != null) { // для обычного значения 
            if (gloryCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .glory_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            gloryCurrentValue = document.querySelector('.popover.hover-popover .glory_current span.dice-roller-result').innerHTML;
            if (gloryCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .glory_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас славы в ховере не норм')
    }


    if (document.querySelector('.honor-block .line.honor_main') != null) {
        var honorValue = document.querySelector('.honor_main .statblock-rendered-text-content')  // для чести
        if (honorValue != null) { // для обычного значения 
            if (honorValue.innerHTML == 10) {
                document.querySelector('.honor_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            honorValue = document.querySelector('.honor_main span.dice-roller-result').innerHTML;
            if (honorValue == 10) {
                document.querySelector('.honor_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('честь не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .honor-block .line.honor_main') != null) {
        var honorValue = document.querySelector('.popover.hover-popover .honor_main .statblock-rendered-text-content')  // для чести
        if (honorValue != null) { // для обычного значения 
            if (honorValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .honor_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            honorValue = document.querySelector('.popover.hover-popover .honor_main span.dice-roller-result').innerHTML;
            if (honorValue == 10) {
                document.querySelector('.popover.hover-popover .honor_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('честь в ховере не норм')
    }


    if (document.querySelector('.honor-block .line.honor_current') != null) {
        var honorCurrentValue = document.querySelector('.honor_current .statblock-rendered-text-content')  // для запаса чести
        if (honorCurrentValue != null) { // для обычного значения 
            if (honorCurrentValue.innerHTML == 10) {
                document.querySelector('.honor_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            honorCurrentValue = document.querySelector('.honor_current span.dice-roller-result').innerHTML;
            if (honorCurrentValue == 10) {
                document.querySelector('.honor_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else if (document.querySelector('.wta-v20-werewolf') == null) {
    }
    else {
        console.log('запас чести не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .honor-block .line.honor_current') != null) {
        var honorCurrentValue = document.querySelector('.popover.hover-popover .honor_current .statblock-rendered-text-content')  // для запаса чести
        if (honorCurrentValue != null) { // для обычного значения 
            if (honorCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .honor_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            honorCurrentValue = document.querySelector('.popover.hover-popover .honor_current span.dice-roller-result').innerHTML;
            if (honorCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .honor_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас чести в ховере не норм')
    }


    if (document.querySelector('.wisdom-block .line.wisdom_main') != null) {
        var wisdomValue = document.querySelector('.wisdom_main .statblock-rendered-text-content')  // для мудрости
        if (wisdomValue != null) { // для обычного значения 
            if (wisdomValue.innerHTML == 10) {
                document.querySelector('.wisdom_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            wisdomValue = document.querySelector('.wisdom_main span.dice-roller-result').innerHTML;
            if (wisdomValue == 10) {
                document.querySelector('.wisdom_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('мудрость не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .wisdom-block .line.wisdom_main') != null) {
        var wisdomValue = document.querySelector('.popover.hover-popover .wisdom_main .statblock-rendered-text-content')  // для мудрости
        if (wisdomValue != null) { // для обычного значения 
            if (wisdomValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .wisdom_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            wisdomValue = document.querySelector('.popover.hover-popover .wisdom_main span.dice-roller-result').innerHTML;
            if (wisdomValue == 10) {
                document.querySelector('.popover.hover-popover .wisdom_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('мудрость в ховере не норм')
    }


    if (document.querySelector('.wisdom-block .line.wisdom_current') != null) {
        var wisdomCurrentValue = document.querySelector('.wisdom_current .statblock-rendered-text-content')  // для запаса мудрости
        if (wisdomCurrentValue != null) { // для обычного значения 
            if (wisdomCurrentValue.innerHTML == 10) {
                document.querySelector('.wisdom_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            wisdomCurrentValue = document.querySelector('.wisdom_current span.dice-roller-result').innerHTML;
            if (wisdomCurrentValue == 10) {
                document.querySelector('.wisdom_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
else if (document.querySelector('.wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас мудрости не норм')
    }
    // то же самое, но для ховера
    if (document.querySelector('.popover.hover-popover .wisdom-block .line.wisdom_current') != null) {
        var wisdomCurrentValue = document.querySelector('.popover.hover-popover .wisdom_current .statblock-rendered-text-content')  // для запаса мудрости
        if (wisdomCurrentValue != null) { // для обычного значения 
            if (wisdomCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .wisdom_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // для дайс роллера
            wisdomCurrentValue = document.querySelector('.popover.hover-popover .wisdom_current span.dice-roller-result').innerHTML;
            if (wisdomCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .wisdom_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
else if (document.querySelector('.popover.hover-popover .wta-v20-werewolf') == null) {
        //nothing
    }
    else {
        console.log('запас мудрости в ховере не норм')
    }



















})


























