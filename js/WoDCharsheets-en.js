async function sleep(ms) { // sleep is needed to wait for a note and a statblok to be fully loaded
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(130).then(() => {

    // the list of weaknesses for all the supported clans
    // Camarilla
    const weaknessBrujah = '';
    const weaknessCaitiff = '';
    const weaknessGangrel = '';
    const weaknessMalkavian = '';
    const weaknessNosferatu = '';
    const weaknessToreador = '';
    const weaknessTremere = '';
    const weaknessVentrue = '';
    // Sabbat
    const weaknessAssamiteAntitribu = '';
    const weaknessBrujahAntitribu = '';
    const weaknessCaitiffAntitribuPander = '';
    const weaknessCountryGangrel = '';
    const weaknessCityGangrel = '';
    const weaknessLasombra = '';
    const weaknessMalkavianAntitribu = '';
    const weaknessNosferatuAntitribu = '';
    const weaknessRavnosAntitribu = '';
    const weaknessSalubriAntitribu = '';
    const weaknessToreadorAntitribu = '';
    const weaknessTremereAntitribu = '';
    const weaknessTzimisce = '';
    const weaknessVentrueAntitribu = '';
    // Independent clans
    const weaknessAssamite = '';
    const weaknessFollowersOfSet = '';
    const weaknessGiovanni = '';
    const weaknessRavnos = '';
    // Bloodlines
    const weaknessBaali = '';
    const weaknessCappadocians = '';
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


    // find the statblock's layout name and active tab that has it
    var findClasses = document.querySelector('.workspace-leaf.mod-active .obsidian-statblock-plugin.statblock')
    const statblockClassList = findClasses.classList
    var allClasses = statblockClassList.value.toString()
    var regex = /[a-z]{3}-[a-z]{1}20-[a-z-]{0,20}/gm;
    var statblockCSSclass = '.' + allClasses.match(regex);
    // console.log(statblockCSSclass + ' |=| statblock css-class')
    var activeTab = '.workspace-leaf.mod-active ' + statblockCSSclass + ' ';

    // find statblock in hover
    if (document.querySelector('.popover.hover-popover') != null) {
        var statblockClassListHover = document.querySelector('.popover.hover-popover .obsidian-statblock-plugin.statblock').classList;
        var allClassesHover = statblockClassListHover.value.toString()
        var statblockCSSclassHover = '.' + allClassesHover.match(regex);
        // console.log(statblockCSSclassHover + ' |=| css-класс статблока в ховере')
        var statblockCSSpathHover = '.popover.hover-popover ' + statblockCSSclassHover + ' ';
    }
    else { }


    // define a clan, and set up different background and weakness for each clan
    if (document.querySelector(activeTab + '.line.clan .statblock-markdown') != null && (statblockCSSclass.endsWith('.vtm-v20-vampire') || statblockCSSclass.endsWith('.vtm-v20-vampire-en'))) {
        // define clan
        var clanName = document.querySelector(activeTab + '.line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - the clan')
        // define the area where a clan image should be placed 
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (clanName) {
            case 'Assamite':
                // corresponding css-class is assigned for each clan
                var collapsedBackgroundClan = 'Assamite';
                // and clan weakness is also added
                var clanWeakness = weaknessAssamite;
                // if note has 'csslacss: wod-header', clan logo will be displayed there, as background for general character info
                var headerBackgroundClan = 'var(--Assamite-background-logo)';
                break;
            case 'Assamite Antitribu':
                var collapsedBackgroundClan = 'Assamite-Antitribu';
                var clanWeakness = weaknessAssamiteAntitribu;
                var headerBackgroundClan = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Baali':
                var collapsedBackgroundClan = 'Baali';
                var clanWeakness = weaknessBaali;
                var headerBackgroundClan = 'var(--Baali-background-logo)';
                break;
            case 'Brujah':
                var collapsedBackgroundClan = 'Brujah';
                var clanWeakness = weaknessBrujah;
                var headerBackgroundClan = 'var(--Brujah-background-logo)';
                break;
            case 'Brujah Antitribu':
                var collapsedBackgroundClan = 'Brujah-Antitribu';
                var clanWeakness = weaknessBrujahAntitribu;
                var headerBackgroundClan = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'True Brujah':
                var collapsedBackgroundClan = 'True-Brujah';
                var clanWeakness = weaknessTrueBrujah;
                var headerBackgroundClan = 'var(--True-Brujah-background-logo)';
                break;
            case 'Cappadocians':
                var collapsedBackgroundClan = 'Cappadocians';
                var clanWeakness = weaknessCappadocians;
                var headerBackgroundClan = 'var(--Cappadocians-background-logo)';
                break;
            case 'Caitiff':
                var collapsedBackgroundClan = 'Caitiff';
                var clanWeakness = weaknessCaitiff;
                var headerBackgroundClan = 'var(--Caitiff-background-logo)';
                break;
            case 'Pander':
                var collapsedBackgroundClan = 'Caitiff-Antitribu-Pander';
                var clanWeakness = weaknessCaitiffAntitribuPander;
                var headerBackgroundClan = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Ventrue':
                var collapsedBackgroundClan = 'Ventrue';
                var clanWeakness = weaknessVentrue;
                var headerBackgroundClan = 'var(--Ventrue-background-logo)';
                break;
            case 'Ventrue Antitribu':
                var collapsedBackgroundClan = 'Ventrue-Antitribu';
                var clanWeakness = weaknessVentrueAntitribu;
                var headerBackgroundClan = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Gangrel':
                var collapsedBackgroundClan = 'Gangrel';
                var clanWeakness = weaknessGangrel;
                var headerBackgroundClan = 'var(--Gangrel-background-logo)';
                break;
            case 'Country Gangrel':
                var collapsedBackgroundClan = 'Country-Gangrel';
                var clanWeakness = weaknessCountryGangrel;
                var headerBackgroundClan = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'City Gangrel':
                var collapsedBackgroundClan = 'City-Gangrel';
                var clanWeakness = weaknessCityGangrel;
                var headerBackgroundClan = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Giovanni':
                var collapsedBackgroundClan = 'Giovanni';
                var clanWeakness = weaknessGiovanni;
                var headerBackgroundClan = 'var(--Giovanni-background-logo)';
                break;
            case 'Daughters of Cacophony':
                var collapsedBackgroundClan = 'Daughters-of-Cacophony';
                var clanWeakness = weaknessDaughtersOfCacophony;
                var headerBackgroundClan = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Kiasyd':
                var collapsedBackgroundClan = 'Kiasyd';
                var clanWeakness = weaknessKiasyd;
                var headerBackgroundClan = 'var(--Kiasyd-background-logo)';
                break;
            case 'Lasombra':
                var collapsedBackgroundClan = 'Lasombra';
                var clanWeakness = weaknessLasombra;
                var headerBackgroundClan = 'var(--Lasombra-background-logo)';
                break;
            case 'Malkavian':
                var collapsedBackgroundClan = 'Malkavian';
                var clanWeakness = weaknessMalkavian;
                var headerBackgroundClan = 'var(--Malkavian-background-logo)';
                break;
            case 'Malkavian Antitribu':
                var collapsedBackgroundClan = 'Malkavian-Antitribu';
                var clanWeakness = weaknessMalkavianAntitribu;
                var headerBackgroundClan = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Nosferatu':
                var collapsedBackgroundClan = 'Nosferatu';
                var clanWeakness = weaknessNosferatu;
                var headerBackgroundClan = 'var(--Nosferatu-background-logo)';
                break;
            case 'Nosferatu Antitribu':
                var collapsedBackgroundClan = 'Nosferatu-Antitribu';
                var clanWeakness = weaknessNosferatuAntitribu;
                var headerBackgroundClan = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case 'Followers of Set':
                var collapsedBackgroundClan = 'Followers-of-Set';
                var clanWeakness = weaknessFollowersOfSet;
                var headerBackgroundClan = 'var(--Followers-of-Set-background-logo)';
                break;
            case 'Serpents of Light':
                var collapsedBackgroundClan = 'Serpents-of-Light';
                var clanWeakness = weaknessSerpentsOfLight;
                var headerBackgroundClan = 'var(--Serpents-of-Light-background-logo)';
                break;
            case 'Ravnos':
                var collapsedBackgroundClan = 'Ravnos';
                var clanWeakness = weaknessRavnos;
                var headerBackgroundClan = 'var(--Ravnos-background-logo)';
                break;
            case 'Ravnos Antitribu':
                var collapsedBackgroundClan = 'Ravnos-Antitribu';
                var clanWeakness = weaknessRavnosAntitribu;
                var headerBackgroundClan = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case 'Salubri':
                var collapsedBackgroundClan = 'Salubri';
                var clanWeakness = weaknessSalubri;
                var headerBackgroundClan = 'var(--Salubri-background-logo)';
                break;
            case 'Salubri Antitribu':
                var collapsedBackgroundClan = 'Salubri-Antitribu';
                var clanWeakness = weaknessSalubriAntitribu;
                var headerBackgroundClan = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case 'Samedi':
                var collapsedBackgroundClan = 'Samedi';
                var clanWeakness = weaknessSamedi;
                var headerBackgroundClan = 'var(--Samedi-background-logo)';
                break;
            case 'Toreador':
                var collapsedBackgroundClan = 'Toreador';
                var clanWeakness = weaknessToreador;
                var headerBackgroundClan = 'var(--Toreador-background-logo)';
                break;
            case 'Toreador Antitribu':
                var collapsedBackgroundClan = 'Toreador-Antitribu';
                var clanWeakness = weaknessToreadorAntitribu;
                var headerBackgroundClan = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case 'Tremere':
                var collapsedBackgroundClan = 'Tremere';
                var clanWeakness = weaknessTremere;
                var headerBackgroundClan = 'var(--Tremere-background-logo)';
                break;
            case 'Tremere Antitribu':
                var collapsedBackgroundClan = 'Tremere-Antitribu';
                var clanWeakness = weaknessTremereAntitribu;
                var headerBackgroundClan = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case 'Tzimisce':
                var collapsedBackgroundClan = 'Tzimisce';
                var clanWeakness = weaknessTzimisce;
                var headerBackgroundClan = 'var(--Tzimisce-background-logo)';
                break;
        };
        collapsedColumn.classList.add(collapsedBackgroundClan);
        document.querySelector(activeTab + '.weakness p').innerHTML = clanWeakness;
        if (document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClan
        };
    }
    else {
        // nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown') != null && (statblockCSSclassHover.endsWith('.vtm-v20-vampire') || statblockCSSclassHover.endsWith('.vtm-v20-vampire-en'))) {
        var clanNameHover = document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown > p').innerHTML;
        var collapsedColumnHover = document.querySelector(statblockCSSpathHover + '.collapse-container');
        switch (clanNameHover) {
            case 'Assamite':
                var collapsedBackgroundClanHover = 'Assamite';
                var clanWeaknessHover = weaknessAssamite;
                var headerBackgroundClanHover = 'var(--Assamite-background-logo)';
                break;
            case 'Assamite Antitribu':
                var collapsedBackgroundClanHover = 'Assamite-Antitribu';
                var clanWeaknessHover = weaknessAssamiteAntitribu;
                var headerBackgroundClanHover = 'var(--Assamite-Antitribu-background-logo)';
                break;
            case 'Baali':
                var collapsedBackgroundClanHover = 'Baali';
                var clanWeaknessHover = weaknessBaali;
                var headerBackgroundClanHover = 'var(--Baali-background-logo)';
                break;
            case 'Brujah':
                var collapsedBackgroundClanHover = 'Brujah';
                var clanWeaknessHover = weaknessBrujah;
                var headerBackgroundClanHover = 'var(--Brujah-background-logo)';
                break;
            case 'Brujah Antitribu':
                var collapsedBackgroundClanHover = 'Brujah-Antitribu';
                var clanWeaknessHover = weaknessBrujahAntitribu;
                var headerBackgroundClanHover = 'var(--Brujah-Antitribu-background-logo)';
                break;
            case 'True Brujah':
                var collapsedBackgroundClanHover = 'True-Brujah';
                var clanWeaknessHover = weaknessTrueBrujah;
                var headerBackgroundClanHover = 'var(--True-Brujah-background-logo)';
                break;
            case 'Cappadocians':
                var collapsedBackgroundClanHover = 'Cappadocians';
                var clanWeaknessHover = weaknessCappadocians;
                var headerBackgroundClanHover = 'var(--Cappadocians-background-logo)';
                break;
            case 'Caitiff':
                var collapsedBackgroundClanHover = 'Caitiff';
                var clanWeaknessHover = weaknessCaitiff;
                var headerBackgroundClanHover = 'var(--Caitiff-background-logo)';
                break;
            case 'Pander':
                var collapsedBackgroundClanHover = 'Caitiff-Antitribu-Pander';
                var clanWeaknessHover = weaknessCaitiffAntitribuPander;
                var headerBackgroundClanHover = 'var(--Caitiff-Antitribu-Pander-background-logo)';
                break;
            case 'Ventrue':
                var collapsedBackgroundClanHover = 'Ventrue';
                var clanWeaknessHover = weaknessVentrue;
                var headerBackgroundClanHover = 'var(--Ventrue-background-logo)';
                break;
            case 'Ventrue Antitribu':
                var collapsedBackgroundClanHover = 'Ventrue-Antitribu';
                var clanWeaknessHover = weaknessVentrueAntitribu;
                var headerBackgroundClanHover = 'var(--Ventrue-Antitribu-background-logo)';
                break;
            case 'Gangrel':
                var collapsedBackgroundClanHover = 'Gangrel';
                var clanWeaknessHover = weaknessGangrel;
                var headerBackgroundClanHover = 'var(--Gangrel-background-logo)';
                break;
            case 'Country Gangrel':
                var collapsedBackgroundClanHover = 'Country-Gangrel';
                var clanWeaknessHover = weaknessCountryGangrel;
                var headerBackgroundClanHover = 'var(--Country-Gangrel-background-logo)';
                break;
            case 'City Gangrel':
                var collapsedBackgroundClanHover = 'City-Gangrel';
                var clanWeaknessHover = weaknessCityGangrel;
                var headerBackgroundClanHover = 'var(--City-Gangrel-background-logo)';
                break;
            case 'Giovanni':
                var collapsedBackgroundClanHover = 'Giovanni';
                var clanWeaknessHover = weaknessGiovanni;
                var headerBackgroundClanHover = 'var(--Giovanni-background-logo)';
                break;
            case 'Daughters of Cacophony':
                var collapsedBackgroundClanHover = 'Daughters-of-Cacophony';
                var clanWeaknessHover = weaknessDaughtersOfCacophony;
                var headerBackgroundClanHover = 'var(--Daughters-of-Cacophony-background-logo)';
                break;
            case 'Kiasyd':
                var collapsedBackgroundClanHover = 'Kiasyd';
                var clanWeaknessHover = weaknessKiasyd;
                var headerBackgroundClanHover = 'var(--Kiasyd-background-logo)';
                break;
            case 'Lasombra':
                var collapsedBackgroundClanHover = 'Lasombra';
                var clanWeaknessHover = weaknessLasombra;
                var headerBackgroundClanHover = 'var(--Lasombra-background-logo)';
                break;
            case 'Malkavian':
                var collapsedBackgroundClanHover = 'Malkavian';
                var clanWeaknessHover = weaknessMalkavian;
                var headerBackgroundClanHover = 'var(--Malkavian-background-logo)';
                break;
            case 'Malkavian Antitribu':
                var collapsedBackgroundClanHover = 'Malkavian-Antitribu';
                var clanWeaknessHover = weaknessMalkavianAntitribu;
                var headerBackgroundClanHover = 'var(--Malkavian-Antitribu-background-logo)';
                break;
            case 'Nosferatu':
                var collapsedBackgroundClanHover = 'Nosferatu';
                var clanWeaknessHover = weaknessNosferatu;
                var headerBackgroundClanHover = 'var(--Nosferatu-background-logo)';
                break;
            case 'Nosferatu Antitribu':
                var collapsedBackgroundClanHover = 'Nosferatu-Antitribu';
                var clanWeaknessHover = weaknessNosferatuAntitribu;
                var headerBackgroundClanHover = 'var(--Nosferatu-Antitribu-background-logo)';
                break;
            case 'Followers of Set':
                var collapsedBackgroundClanHover = 'Followers-of-Set';
                var clanWeaknessHover = weaknessFollowersOfSet;
                var headerBackgroundClanHover = 'var(--Followers-of-Set-background-logo)';
                break;
            case 'Serpents of Light':
                var collapsedBackgroundClanHover = 'Serpents-of-Light';
                var clanWeaknessHover = weaknessSerpentsOfLight;
                var headerBackgroundClanHover = 'var(--Serpents-of-Light-background-logo)';
                break;
            case 'Ravnos':
                var collapsedBackgroundClanHover = 'Ravnos';
                var clanWeaknessHover = weaknessRavnos;
                var headerBackgroundClanHover = 'var(--Ravnos-background-logo)';
                break;
            case 'Ravnos Antitribu':
                var collapsedBackgroundClanHover = 'Ravnos-Antitribu';
                var clanWeaknessHover = weaknessRavnosAntitribu;
                var headerBackgroundClanHover = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case 'Salubri':
                var collapsedBackgroundClanHover = 'Salubri';
                var clanWeaknessHover = weaknessSalubri;
                var headerBackgroundClanHover = 'var(--Salubri-background-logo)';
                break;
            case 'Salubri Antitribu':
                var collapsedBackgroundClanHover = 'Salubri-Antitribu';
                var clanWeaknessHover = weaknessSalubriAntitribu;
                var headerBackgroundClanHover = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case 'Samedi':
                var collapsedBackgroundClanHover = 'Samedi';
                var clanWeaknessHover = weaknessSamedi;
                var headerBackgroundClanHover = 'var(--Samedi-background-logo)';
                break;
            case 'Toreador':
                var collapsedBackgroundClanHover = 'Toreador';
                var clanWeaknessHover = weaknessToreador;
                var headerBackgroundClanHover = 'var(--Toreador-background-logo)';
                break;
            case 'Toreador Antitribu':
                var collapsedBackgroundClanHover = 'Toreador-Antitribu';
                var clanWeaknessHover = weaknessToreadorAntitribu;
                var headerBackgroundClanHover = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case 'Tremere':
                var collapsedBackgroundClanHover = 'Tremere';
                var clanWeaknessHover = weaknessTremere;
                var headerBackgroundClanHover = 'var(--Tremere-background-logo)';
                break;
            case 'Tremere Antitribu':
                var collapsedBackgroundClanHover = 'Tremere-Antitribu';
                var clanWeaknessHover = weaknessTremereAntitribu;
                var headerBackgroundClanHover = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case 'Tzimisce':
                var collapsedBackgroundClanHover = 'Tzimisce';
                var clanWeaknessHover = weaknessTzimisce;
                var headerBackgroundClanHover = 'var(--Tzimisce-background-logo)';
                break;
        };
        collapsedColumnHover.classList.add(collapsedBackgroundClanHover);
        document.querySelector(statblockCSSpathHover + '.weakness p').innerHTML = clanWeaknessHover;
        if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClanHover
        };
    }
    else {
        // nothing
    }


    // is there a Dark Ages Vampire statblock?
    if (document.querySelector(activeTab + '.line.clan .statblock-markdown') != null && (statblockCSSclass.endsWith('.vtm-v20-vampire-dark-ages') || statblockCSSclass.endsWith('.vtm-v20-vampire-dark-ages-en'))) {
        // define clan
        var clanName = document.querySelector(activeTab + '.line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - название клана')
        // define the area where a clan image should be placed 
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (clanName) {
            case 'Assamite':
                // corresponding css-class is assigned for each clan
                var collapsedBackgroundClan = 'Assamite';
                // and clan weakness is also added
                var clanWeakness = weaknessAssamiteDarkAges;
                break;
            case 'Brujah':
                var collapsedBackgroundClan = 'Brujah';
                var clanWeakness = weaknessBrujahDarkAges;
                break;
            case 'Ventrue':
                var collapsedBackgroundClan = 'Ventrue';
                var clanWeakness = weaknessVentrueDarkAges;
                break;
            case 'Cappadocians':
                var collapsedBackgroundClan = 'Cappadocians';
                var clanWeakness = weaknessCappadociansDarkAges;
                break;
            case ('Followers of Set'):
                var collapsedBackgroundClan = 'Followers-of-Set';
                var clanWeakness = weaknessFollowersOfSetDarkAges;
                break;
            case 'Gangrel':
                var collapsedBackgroundClan = 'Gangrel';
                var clanWeakness = weaknessGangrelDarkAges;
                break;
            case 'Lasombra':
                var collapsedBackgroundClan = 'Lasombra';
                var clanWeakness = weaknessLasombraDarkAges;
                break;
            case 'Malkavian':
                var collapsedBackgroundClan = 'Malkavian';
                var clanWeakness = weaknessMalkavianDarkAges;
                break;
            case 'Nosferatu':
                var collapsedBackgroundClan = 'Nosferatu';
                var clanWeakness = weaknessNosferatuDarkAges;
                break;
            case ('Ravnos'):
                var collapsedBackgroundClan = 'Ravnos';
                var clanWeakness = weaknessRavnosDarkAges;
                break;
            case 'Toreador':
                var collapsedBackgroundClan = 'Toreador';
                var clanWeakness = weaknessToreadorDarkAges;
                break;
            case 'Tremere':
                var collapsedBackgroundClan = 'Tremere';
                var clanWeakness = weaknessTremereDarkAges;
                break;
            case 'Tzimisce':
                var collapsedBackgroundClan = 'Tzimisce';
                var clanWeakness = weaknessTzimisceDarkAges;
                break;
            case 'Ahrimanes':
                var collapsedBackgroundClan = 'Ahrimanes';
                var clanWeakness = weaknessAhrimanesDarkAges;
                break;
            case 'Anda':
                var collapsedBackgroundClan = 'Anda';
                var clanWeakness = weaknessAndaDarkAges;
                break;
            case 'Baali':
                var collapsedBackgroundClan = 'Baali';
                var clanWeakness = weaknessBaaliDarkAges;
                break;
            case 'Bonsam':
                var collapsedBackgroundClan = 'Bonsam';
                var clanWeakness = weaknessBonsamDarkAges;
                break;
            case 'Gargoyles':
                var collapsedBackgroundClan = 'Gargoyles';
                var clanWeakness = weaknessGargoylesDarkAges;
                break;
            case 'Danava':
                var collapsedBackgroundClan = 'Danava';
                var clanWeakness = weaknessDanavaDarkAges;
                break;
            case 'Children of Osiris':
                var collapsedBackgroundClan = 'Children-of-Osiris';
                var clanWeakness = weaknessChildrenOfOsirisDarkAges;
                break;
            case 'Giovanni':
                var collapsedBackgroundClan = 'Giovanni';
                var clanWeakness = weaknessGiovanniDarkAges;
                break;
            case 'Impundulu':
                var collapsedBackgroundClan = 'Impundulu';
                var clanWeakness = weaknessImpunduluDarkAges;
                break;
            case 'True Brujah':
                var collapsedBackgroundClan = 'TrueBrujah';
                var clanWeakness = weaknessTrueBrujahDarkAges;
                break;
            case 'Kiasyd':
                var collapsedBackgroundClan = 'Kiasyd';
                var clanWeakness = weaknessKiasydDarkAges;
                break;
            case 'Lamia':
                var collapsedBackgroundClan = 'Lamia';
                var clanWeakness = weaknessLamiaDarkAges;
                break;
            case 'Lhiannan':
                var collapsedBackgroundClan = 'Lhiannan';
                var clanWeakness = weaknessLhiannanDarkAges;
                break;
            case 'Nagaraja':
                var collapsedBackgroundClan = 'Nagaraja';
                var clanWeakness = weaknessNagarajaDarkAges;
                break;
            case 'Nictuku':
                var collapsedBackgroundClan = 'Nictuku';
                var clanWeakness = weaknessNictukuDarkAges;
                break;
            case 'Ramanga':
                var collapsedBackgroundClan = 'Ramanga';
                var clanWeakness = weaknessRamangaDarkAges;
                break;
            case 'Salubri':
                var collapsedBackgroundClan = 'Salubri';
                break;
            case 'Salubri (Healer Caste)':
                var collapsedBackgroundClan = 'SalubriHealers';
                var clanWeakness = weaknessSalubriHealersDarkAges;
                break;
            case 'Salubri (Warriors Caste)':
                var collapsedBackgroundClan = 'SalubriWarriors';
                var clanWeakness = weaknessSalubriWarriorsDarkAges;
                break;
            case 'Salubri (Watchers Caste)':
                var collapsedBackgroundClan = 'SalubriWatchers';
                var clanWeakness = weaknessSalubriWatchersDarkAges;
                break;
        };
        collapsedColumn.classList.add(collapsedBackgroundClan);
        document.querySelector('.weakness p').innerHTML = clanWeakness;
    }
    else {
        // nothing
    }

    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown') != null && (statblockCSSclassHover.endsWith('.vtm-v20-vampire-dark-ages') || statblockCSSclassHover.endsWith('.vtm-v20-vampire-dark-ages-en'))) {
        var clanNameHover = document.querySelector(statblockCSSpathHover + ' .line.clan .statblock-markdown > p').innerHTML;
        var collapsedColumnHover = document.querySelector(statblockCSSpathHover + ' .collapse-container');
        switch (clanNameHover) {
            case 'Assamite':
                // corresponding css-class is assigned for each clan 
                var collapsedBackgroundClanHover = 'Assamite';
                // and clan weakness is also added
                var clanWeaknessHover = weaknessAssamiteDarkAges;
                break;
            case 'Brujah':
                var collapsedBackgroundClanHover = 'Brujah';
                var clanWeaknessHover = weaknessBrujahDarkAges;
                break;
            case 'Ventrue':
                var collapsedBackgroundClanHover = 'Ventrue';
                var clanWeaknessHover = weaknessVentrueDarkAges;
                break;
            case 'Cappadocians':
                var collapsedBackgroundClanHover = 'Cappadocians';
                var clanWeaknessHover = weaknessCappadociansDarkAges;
                break;
            case 'Followers of Set':
                var collapsedBackgroundClanHover = 'Followers-of-Set';
                var clanWeaknessHover = weaknessFollowersOfSetDarkAges;
                break;
            case 'Gangrel':
                var collapsedBackgroundClanHover = 'Gangrel';
                var clanWeaknessHover = weaknessGangrelDarkAges;
                break;
            case 'Lasombra':
                var collapsedBackgroundClanHover = 'Lasombra';
                var clanWeaknessHover = weaknessLasombraDarkAges;
                break;
            case 'Malkavian':
                var collapsedBackgroundClanHover = 'Malkavian';
                var clanWeaknessHover = weaknessMalkavianDarkAges;
                break;
            case 'Nosferatu':
                var collapsedBackgroundClanHover = 'Nosferatu';
                var clanWeaknessHover = weaknessNosferatuDarkAges;
                break;
            case 'Ravnos':
                var collapsedBackgroundClanHover = 'Ravnos';
                var clanWeaknessHover = weaknessRavnosDarkAges;
                break;
            case 'Toreador':
                var collapsedBackgroundClanHover = 'Toreador';
                var clanWeaknessHover = weaknessToreadorDarkAges;
                break;
            case 'Tremere':
                var collapsedBackgroundClanHover = 'Tremere';
                var clanWeaknessHover = weaknessTremereDarkAges;
                break;
            case 'Tzimisce':
                var collapsedBackgroundClanHover = 'Tzimisce';
                var clanWeaknessHover = weaknessTzimisceDarkAges;
                break;
            case 'Ahrimanes':
                var collapsedBackgroundClanHover = 'Ahrimanes';
                var clanWeaknessHover = weaknessAhrimanesDarkAges;
                break;
            case 'Anda':
                var collapsedBackgroundClanHover = 'Anda';
                var clanWeaknessHover = weaknessAndaDarkAges;
                break;
            case 'Baali':
                var collapsedBackgroundClanHover = 'Baali';
                var clanWeaknessHover = weaknessBaaliDarkAges;
                break;
            case 'Bonsam':
                var collapsedBackgroundClanHover = 'Bonsam';
                var clanWeaknessHover = weaknessBonsamDarkAges;
                break;
            case 'Gargoyles':
                var collapsedBackgroundClanHover = 'Gargoyles';
                var clanWeaknessHover = weaknessGargoylesDarkAges;
                break;
            case 'Danava':
                var collapsedBackgroundClanHover = 'Danava';
                var clanWeaknessHover = weaknessDanavaDarkAges;
                break;
            case 'Children of Osiris':
                var collapsedBackgroundClanHover = 'Children-of-Osiris';
                var clanWeaknessHover = weaknessChildrenOfOsirisDarkAges;
                break;
            case 'Giovanni':
                var collapsedBackgroundClanHover = 'Giovanni';
                var clanWeaknessHover = weaknessGiovanniDarkAges;
                break;
            case 'Impundulu':
                var collapsedBackgroundClanHover = 'Impundulu';
                var clanWeaknessHover = weaknessImpunduluDarkAges;
                break;
            case 'True Brujah':
                var collapsedBackgroundClanHover = 'TrueBrujah';
                var clanWeaknessHover = weaknessTrueBrujahDarkAges;
                break;
            case 'Kiasyd':
                var collapsedBackgroundClanHover = 'Kiasyd';
                var clanWeaknessHover = weaknessKiasydDarkAges;
                break;
            case 'Lamia':
                var collapsedBackgroundClanHover = 'Lamia';
                var clanWeaknessHover = weaknessLamiaDarkAges;
                break;
            case 'Lhiannan':
                var collapsedBackgroundClanHover = 'Lhiannan';
                var clanWeaknessHover = weaknessLhiannanDarkAges;
                break;
            case 'Nagaraja':
                var collapsedBackgroundClanHover = 'Nagaraja';
                var clanWeaknessHover = weaknessNagarajaDarkAges;
                break;
            case 'Nictuku':
                var collapsedBackgroundClanHover = 'Nictuku';
                var clanWeaknessHover = weaknessNictukuDarkAges;
                break;
            case 'Ramanga':
                var collapsedBackgroundClanHover = 'Ramanga';
                var clanWeaknessHover = weaknessRamangaDarkAges;
                break;
            case 'Salubri':
                var collapsedBackgroundClanHover = 'Salubri';
                break;
            case 'Salubri (Healer Caste)':
                var collapsedBackgroundClanHover = 'SalubriHealers';
                var clanWeaknessHover = weaknessSalubriHealersDarkAges;
                break;
            case 'Salubri (Warriors Caste)':
                var collapsedBackgroundClanHover = 'SalubriWarriors';
                var clanWeaknessHover = weaknessSalubriWarriorsDarkAges;
                break;
            case 'Salubri (Watchers Caste)':
                var collapsedBackgroundClanHover = 'SalubriWatchers';
                var clanWeaknessHover = weaknessSalubriWatchersDarkAges;
                break;
        };
        collapsedColumnHover.classList.add(collapsedBackgroundClanHover);
        document.querySelector('.popover.hover-popover .weakness p').innerHTML = clanWeaknessHover;
    }
    else {
        //nothing
    }


    // is there Werewolf statblock?
    if (document.querySelector(activeTab + '.line.tribe .statblock-markdown') != null && (statblockCSSclass.endsWith('.wta-w20-werewolf') || statblockCSSclass.endsWith('.wta-w20-werewolf-en'))) {
        // define tribe
        var tribeName = document.querySelector(activeTab + '.line.tribe .statblock-markdown > p').innerHTML;
        console.log(tribeName + ' - название племени')
        // define the area where a tribe image should be placed
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (tribeName) {
            case 'Black Furies':
                // corresponding css-class is assigned for each tribe 
                var collapsedBackgroundClan = 'BlackFuries';
                break;
            case 'Black Spiral Dancers':
                var collapsedBackgroundClan = 'BlackSpiralDancers';
                break;
            case 'Bone Gnawers':
                var collapsedBackgroundClan = 'BoneGnawers';
                break;
            case 'Bunyip':
                var collapsedBackgroundClan = 'Bunyip';
                break;
            case 'Children of Gaia':
                var collapsedBackgroundClan = 'Children-of-Gaia';
                break;
            case 'Croatan':
                var collapsedBackgroundClan = 'Croatan';
                break;
            case 'Fianna':
                var collapsedBackgroundClan = 'Fianna';
                break;
            case 'Get of Fenris':
                var collapsedBackgroundClan = 'Get-of-Fenris';
                break;
            case 'Glass Walkers':
                var collapsedBackgroundClan = 'GlassWalkers';
                break;
            case ('Red Talons'):
                var collapsedBackgroundClan = 'RedTalons';
                break;
            case 'Shadow Lords':
                var collapsedBackgroundClan = 'ShadowLords';
                break;
            case 'Silent Striders':
                var collapsedBackgroundClan = 'SilentStriders';
                break;
            case 'Silver Fangs':
                var collapsedBackgroundClan = 'SilverFangs';
                break;
            case 'Stargazers':
                var collapsedBackgroundClan = 'Stargazers';
                break;
            case 'Uktena':
                var collapsedBackgroundClan = 'Uktena';
                break;
            case 'Wendigo':
                var collapsedBackgroundClan = 'Wendigo';
                break;
            case 'White Howlers':
                var collapsedBackgroundClan = 'WhiteHowlers';
                break;
            case 'Ajaba':
                var collapsedBackgroundClan = 'Ajaba';
                break;
            case 'Ananasi':
                var collapsedBackgroundClan = 'Ananasi';
                break;
            case 'Bastet':
                var collapsedBackgroundClan = 'Bastet';
                break;
            case 'Corax':
                var collapsedBackgroundClan = 'Corax';
                break;
            case 'Gurahl':
                var collapsedBackgroundClan = 'Gurahl';
                break;
            case 'Kitsune':
                var collapsedBackgroundClan = 'Kitsune';
                break;
            case 'Mokole':
                var collapsedBackgroundClan = 'Mokole';
                break;
            case 'Nagah':
                var collapsedBackgroundClan = 'Nagah';
                break;
            case 'Nuwisha':
                var collapsedBackgroundClan = 'Nuwisha';
                break;
            case 'Ratkin':
                var collapsedBackgroundClan = 'Ratkin';
                break;
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


    // is there Mage statblock?
    if (document.querySelector(activeTab + '.line.affiliation .statblock-markdown') != null && (statblockCSSclass.endsWith('.mta-m20-mage') || statblockCSSclass.endsWith('.mta-m20-mage-en'))) {
        // define affiliation
        var affiliationName = document.querySelector(activeTab + '.line.affiliation .statblock-markdown > p').innerHTML;
        console.log(affiliationName + ' - название секты')
        // define the area where a tribe image should be placed
        var collapsedColumn = document.querySelector(activeTab + '.collapse-container');
        switch (affiliationName) {
            case 'The Akashic Brotherhood':
            case 'Akashic Brotherhood':
            case 'Akashayana':
                // corresponding css-class is assigned
                var collapsedBackgroundClan = 'AkashicBrotherhood';
                var headerBackgroundClan = 'var(--AkashicBrotherhood-background-logo)';
                break;
            case 'The Celestial Chorus':
            case 'Celestial Chorus':
                var collapsedBackgroundClan = 'CelestialChorus';
                var headerBackgroundClan = 'var(--CelestialChorus-background-logo)';
                break;
            case 'The Cult of Ecstasy':
            case 'Cult of Ecstasy':
            case 'Sahajiya':
                var collapsedBackgroundClan = 'Cult-of-Ecstasy';
                var headerBackgroundClan = 'var(--Cult-of-Ecstasy-background-logo)';
                break;
            case 'The Dreamspeakers':
            case 'Dreamspeakers':
            case 'Kha’vadi':
                var collapsedBackgroundClan = 'Dreamspeakers';
                var headerBackgroundClan = 'var(--Dreamspeakers-background-logo)';
                break;
            case 'The Euthanatos':
            case 'Euthanatos':
            case 'Chakravanti':
                var collapsedBackgroundClan = 'Euthanatos';
                var headerBackgroundClan = 'var(--Euthanatos-background-logo)';
                break;
            case 'The Order of Hermes':
            case 'Order of Hermes':
                var collapsedBackgroundClan = 'Order-of-Hermes';
                var headerBackgroundClan = 'var(--Order-of-Hermes-background-logo)';
                break;
            case 'The Sons of Ether':
            case 'Sons of Ether':
            case 'Society of Ether':
                var collapsedBackgroundClan = 'Sons-of-Ether';
                var headerBackgroundClan = 'var(--Sons-of-Ether-background-logo)';
                break;
            case 'The Verbena':
            case 'Verbena':
                var collapsedBackgroundClan = 'Verbena';
                var headerBackgroundClan = 'var(--Verbena-background-logo)';
                break;
            case 'The Virtual Adepts':
            case 'Virtual Adepts':
                var collapsedBackgroundClan = 'VirtualAdepts';
                var headerBackgroundClan = 'var(--VirtualAdepts-background-logo)';
                break;
            case 'The Ahl-i-Batin':
            case 'Ahl-i-Batin':
                var collapsedBackgroundClan = 'Ahl-i-Batin';
                var headerBackgroundClan = 'var(--Ahl-i-Batin-background-logo)';
                break;
            case 'The Bata’a':
            case 'Bata’a':
            case 'The Bataa':
            case 'Bataa':
                var collapsedBackgroundClan = 'Bataa';
                var headerBackgroundClan = 'var(--Bataa-background-logo)';
                break;
            case 'The Children of Knowledge':
            case 'Children of Knowledge':
            case 'Thу True Solificati':
            case 'True Solificati':
                var collapsedBackgroundClan = 'Children-of-Knowledge';
                var headerBackgroundClan = 'var(--Children-of-Knowledge-background-logo)';
                break;
            case 'The Hollow Ones':
            case 'Hollow Ones':
                var collapsedBackgroundClan = 'HollowOnes';
                var headerBackgroundClan = 'var(--HollowOnes-background-logo)';
                break;
            case 'The Kopa Loei':
            case 'Kopa Loei':
                var collapsedBackgroundClan = 'KopaLoei';
                var headerBackgroundClan = 'var(--KopaLoei-background-logo)';
                break;
            case 'The Ngoma':
            case 'Ngoma':
                var collapsedBackgroundClan = 'Ngoma';
                var headerBackgroundClan = 'var(--Ngoma-background-logo)';
                break;
            case 'Orphans':
                var collapsedBackgroundClan = 'Orphans';
                var headerBackgroundClan = 'var(--Orphans-background-logo)';
                break;
            case 'The Sisters of Hippolyta':
            case 'Sisters of Hippolyta':
            case 'The Hippolytoi':
            case 'Hippolytoi':
                var collapsedBackgroundClan = 'Sisters-of-Hippolyta';
                var headerBackgroundClan = 'var(--Sisters-of-Hippolyta-background-logo)';
                break;
            case 'The Templar Knights':
            case 'Templar Knights':
                var collapsedBackgroundClan = 'TemplarKnights';
                var headerBackgroundClan = 'var(--TemplarKnights-background-logo)';
                break;
            case 'The WuLung':
            case 'WuLung':
            case 'The Wu Lung':
            case 'Wu Lung':
                var collapsedBackgroundClan = 'WuLung';
                var headerBackgroundClan = 'var(--WuLung-background-logo)';
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

    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.affiliation .statblock-markdown') != null && (statblockCSSclassHover.endsWith('.mta-m20-mage') || statblockCSSclassHover.endsWith('.mta-m20-mage-en'))) {
        var affiliationNameHover = document.querySelector(statblockCSSpathHover + ' .line.affiliation .statblock-markdown > p').innerHTML;
        var collapsedColumnHover = document.querySelector(statblockCSSpathHover + ' .collapse-container');
        switch (affiliationNameHover) {
            case 'The Akashic Brotherhood':
            case 'Akashic Brotherhood':
            case 'Akashayana':
                // corresponding css-class is assigned
                var collapsedBackgroundClanHover = 'AkashicBrotherhood';
                var headerBackgroundClanHover = 'var(--AkashicBrotherhood-background-logo)';
                break;
            case 'The Celestial Chorus':
            case 'Celestial Chorus':
                var collapsedBackgroundClanHover = 'CelestialChorus';
                var headerBackgroundClanHover = 'var(--CelestialChorus-background-logo)';
                break;
            case 'The Cult of Ecstasy':
            case 'Cult of Ecstasy':
            case 'Sahajiya':
                var collapsedBackgroundClanHover = 'Cult-of-Ecstasy';
                var headerBackgroundClanHover = 'var(--Cult-of-Ecstasy-background-logo)';
                break;
            case 'The Dreamspeakers':
            case 'Dreamspeakers':
            case 'Kha’vadi':
                var collapsedBackgroundClanHover = 'Dreamspeakers';
                var headerBackgroundClanHover = 'var(--Dreamspeakers-background-logo)';
                break;
            case 'The Euthanatos':
            case 'Euthanatos':
            case 'Chakravanti':
                var collapsedBackgroundClanHover = 'Euthanatos';
                var headerBackgroundClanHover = 'var(--Euthanatos-background-logo)';
                break;
            case 'The Order of Hermes':
            case 'Order of Hermes':
                var collapsedBackgroundClanHover = 'Order-of-Hermes';
                var headerBackgroundClanHover = 'var(--Order-of-Hermes-background-logo)';
                break;
            case 'The Sons of Ether':
            case 'Sons of Ether':
            case 'Society of Ether':
                var collapsedBackgroundClanHover = 'Sons-of-Ether';
                var headerBackgroundClanHover = 'var(--Sons-of-Ether-background-logo)';
                break;
            case 'The Verbena':
            case 'Verbena':
                var collapsedBackgroundClanHover = 'Verbena';
                var headerBackgroundClanHover = 'var(--Verbena-background-logo)';
                break;
            case 'The Virtual Adepts':
            case 'Virtual Adepts':
                var collapsedBackgroundClanHover = 'VirtualAdepts';
                var headerBackgroundClanHover = 'var(--VirtualAdepts-background-logo)';
                break;
            case 'The Ahl-i-Batin':
            case 'Ahl-i-Batin':
                var collapsedBackgroundClanHover = 'Ahl-i-Batin';
                var headerBackgroundClanHover = 'var(--Ahl-i-Batin-background-logo)';
                break;
            case 'The Bata’a':
            case 'Bata’a':
            case 'The Bataa':
            case 'Bataa':
                var collapsedBackgroundClanHover = 'Bataa';
                var headerBackgroundClanHover = 'var(--Bataa-background-logo)';
                break;
            case 'The Children of Knowledge':
            case 'Children of Knowledge':
            case 'Thу True Solificati':
            case 'True Solificati':
                var collapsedBackgroundClanHover = 'Children-of-Knowledge';
                var headerBackgroundClanHover = 'var(--Children-of-Knowledge-background-logo)';
                break;
            case 'The Hollow Ones':
            case 'Hollow Ones':
                var collapsedBackgroundClanHover = 'HollowOnes';
                var headerBackgroundClanHover = 'var(--HollowOnes-background-logo)';
                break;
            case 'The Kopa Loei':
            case 'Kopa Loei':
                var collapsedBackgroundClanHover = 'KopaLoei';
                var headerBackgroundClanHover = 'var(--KopaLoei-background-logo)';
                break;
            case 'The Ngoma':
            case 'Ngoma':
                var collapsedBackgroundClanHover = 'Ngoma';
                var headerBackgroundClanHover = 'var(--Ngoma-background-logo)';
                break;
            case 'Orphans':
                var collapsedBackgroundClanHover = 'Orphans';
                var headerBackgroundClanHover = 'var(--Orphans-background-logo)';
                break;
            case 'The Sisters of Hippolyta':
            case 'Sisters of Hippolyta':
            case 'The Hippolytoi':
            case 'Hippolytoi':
                var collapsedBackgroundClanHover = 'Sisters-of-Hippolyta';
                var headerBackgroundClanHover = 'var(--Sisters-of-Hippolyta-background-logo)';
                break;
            case 'The Templar Knights':
            case 'Templar Knights':
                var collapsedBackgroundClanHover = 'TemplarKnights';
                var headerBackgroundClanHover = 'var(--TemplarKnights-background-logo)';
                break;
            case 'The WuLung':
            case 'WuLung':
            case 'The Wu Lung':
            case 'Wu Lung':
                var collapsedBackgroundClanHover = 'WuLung';
                var headerBackgroundClanHover = 'var(--WuLung-background-logo)';
                break;
        };
        collapsedColumnHover.classList.add(collapsedBackgroundClanHover);
        if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClanHover
        };

    }
    else {
        //nothing
    }



    // setting to display vampire's weakness
    if (document.querySelector(activeTab + '.line.show_weakness p') != null) {
        var showWeakness = document.querySelector(activeTab + '.line.show_weakness p').innerHTML;
        switch (showWeakness) {
            case ('no'):
                // console.log('do you wanna see the weakness? ' + showWeakness)
                document.querySelector(activeTab + '.property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                // console.log('do you wanna see the weakness? ' + showWeakness)
                document.querySelector(activeTab + '.property-container:has(> .line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        // console.log('the weakness will be displayed');
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.show_weakness p') != null) {
        var showWeaknessHover = document.querySelector(statblockCSSpathHover + '.line.show_weakness p').innerHTML;
        switch (showWeaknessHover) {
            case ('no'):
                // console.log('do you wanna see the weakness in hover? ' + showWeaknessHover)
                document.querySelector(statblockCSSpathHover + ' .property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                // console.log('do you wanna see the weakness in hover ' + showWeaknessHover)
                document.querySelector(statblockCSSpathHover + '.property-container:has(.line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        // console.log('the weakness in hover will be displayed');
    }



    // Set up blood per turn value, based on the generation
    if (document.querySelector(activeTab + '.line.generation .statblock-markdown p') != null) {
        // find the generation
        var generationFull = document.querySelector(activeTab + '.line.generation .statblock-markdown').textContent;
        // pick only two first symbols, in case if the generation has info about diablery (like 9 1̶0̶)
        var generation = generationFull.slice(0, 2);
        // remove spaces, if the generation is 8 or 9
        var generation = generation.replace(/\s/g, '');
        console.log('the generation of this Kindred is ' + generation);
        switch (generation) {
            case '13':
                document.querySelector(activeTab + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '12':
                document.querySelector(activeTab + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '11':
                document.querySelector(activeTab + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '10':
                document.querySelector(activeTab + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '9':
                document.querySelector(activeTab + '.line.blood_per_turn p').innerHTML = '2'; break;
            case '8':
                document.querySelector(activeTab + '.line.blood_per_turn p').innerHTML = '3'; break;
        }
    }
    else {
        // nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.generation .statblock-markdown > p') != null) {
        var generationFullHover = document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p').textContent;
        var generationHover = generationFullHover.slice(0, 2);
        var generationHover = generationHover.replace(/\s/g, '');
        console.log('the generation in hover - ' + generationHover);
        switch (generationHover) {
            case '13':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '12':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '11':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '10':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn p').innerHTML = '1'; break;
            case '9':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn p').innerHTML = '2'; break;
            case '8':
                document.querySelector(statblockCSSpathHover + '.line.blood_per_turn p').innerHTML = '3'; break;
        }
    }




    // you can type character's name (in level 2 heading) in the note above the statblock, and if this heading is the same as character name in the statblock, it will be hidden in the reading view, but remains in the outlina panel
    if (document.querySelector('.workspace-leaf.mod-active .markdown-preview-sizer > .el-h2 h2') != null) {
        var outlineName = document.querySelector('.workspace-leaf.mod-active .markdown-preview-sizer > .el-h2 h2').innerText
        console.log(outlineName + ' - H2 name from the note');
        const characterName = document.querySelector(activeTab + 'h1.heading .inline').innerHTML
        console.log('the name from the statblock - ' + characterName)
        if (outlineName = characterName && outlineName != null) {
            document.querySelector('.workspace-leaf.mod-active .markdown-preview-sizer > .el-h2 h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .markdown-preview-sizer > .el-h2 h2') != null) {
        var outlineNameHover = document.querySelector('.popover.hover-popover .markdown-preview-sizer  > .el-h2 h2').innerText
        //  console.log('note's name in a hover - ' + outlineName_hover)
        const characterNameHover = document.querySelector(statblockCSSpathHover + 'h1.heading .inline').innerHTML
        //  console.log('character's name from statblock in a hover = ' + characterName_hover)
        if (outlineNameHover = characterNameHover) {
            document.querySelector('.popover.hover-popover .markdown-preview-sizer > .el-h2 h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }


    // Some various modifications for attributes, abilities and disciplines

    // set up the names of all Attributes and Abilities 
    const basicAttributes = ['.strength', '.dexterity', '.stamina', '.charisma', '.manipulation', '.appearance', '.perception', '.intelligence', '.wits'];
    const basicTalents = ['.athletics', '.alertness', '.brawl', '.intimidation', '.expression', '.leadership', '.streetwise', '.subterfuge', '.awareness', '.empathy']
    const basicSkills = ['.drive', '.larceny', '.survival', '.performance', '.animalken', '.crafts', '.stealth', '.firearms', '.melee', '.etiquette']
    const basicKnowledges = ['.academics', '.science', '.law', '.computer', '.medicine', '.occult', '.politics', '.investigation', '.finance', '.technology']
    const additionalDarkAgesAbilities = ['.legerdemain', '.ride', '.commerce', '.archery', '.enigmas', '.hearthwisdom', '.seneschal', '.theology']
    // combine all into one list\array
    const allTraits = basicAttributes.concat(basicTalents, basicSkills, basicKnowledges, additionalDarkAgesAbilities);
    for (let x = 0; x < allTraits.length; x++) {
        if (document.querySelector(activeTab + allTraits[x]) != null) {
            // let's find the name of the property and its value
            var nameAbility = document.querySelector(activeTab + allTraits[x] + ' .property-name').innerHTML;
            var valueAbility = document.querySelector(activeTab + allTraits[x] + ' p:not(:has(> .dice-roller))');
            // the code for usual dots
            if (valueAbility !== null) {
                // console.log(nameAbility + ' has name length ' + nameAbility.length + ' and value  ' + valueAbility);
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(activeTab + '.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(activeTab + allTraits[x] + ' p').style.fontSize = '13px';
                    document.querySelector(activeTab + allTraits[x] + ' p').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' p').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(activeTab + allTraits[x] + ' p').innerHTML = 'at least 1'
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers; some changes might be required as all these values were originally set for Russian version
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(activeTab + allTraits[x] + ' p').style.fontSize = '14px';
                    document.querySelector(activeTab + allTraits[x] + ' p').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' p').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(activeTab + allTraits[x] + ' p').innerHTML = 'X'
                }
            }
            // same code, but for Dice Roller
            else {
                valueAbility = document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').innerHTML;
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    // console.log('who goes there, to see the ugly Nosferaty? it's ' + allTraits[x]);
                    document.querySelector(activeTab + '.line.appearance .property-name').style.textDecoration = 'line-through';
                    document.querySelector(activeTab + '.appearance .dice-roller-result').innerHTML = 0;
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.fontSize = '9px';
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.fontFamily = 'SmallCircles';
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.textAlign = 'center';
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.verticalAlign = 'top';
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.fontWeight = 'normal'
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(allTraits[x]))) {
                    // console.log('is there a zero value??? yes, in ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').innerHTML = 'at least 1';
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers
                else if ((nameAbility.length >= 11 && valueAbility > 9)
                    || (nameAbility.length >= 12 && valueAbility > 8)
                    || (nameAbility.length >= 13 && valueAbility > 7)
                    || (nameAbility.length >= 14 && valueAbility > 6)
                    || (nameAbility.length >= 15 && valueAbility > 5)) {
                    // console.log('were the dots replaced with numbers??? yes, in ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility == 10) {
                    // console.log('who has 10? it's ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .dice-roller-result').innerHTML = 'X'
                }
            }
        }
    }

    // all Attributes and Abilities in hover
    for (let x = 0; x < allTraits.length; x++) {
        if (document.querySelector(statblockCSSpathHover + allTraits[x]) != null) {
            // let's find the name of the property and its value
            var nameAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-name').innerHTML;
            var valueAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' p:not(:has(> .dice-roller))');
            // the code for usual dots
            if (valueAbility !== null) {
                // console.log(nameAbility + ' in hover  has name length ' + nameAbility.length + ' and value  ' + valueAbility);
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanNameHover !== 'undefined' && (clanNameHover.includes('Nosferatu') || clanNameHover.includes('Samedi')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(statblockCSSpathHover + '.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').innerHTML = 'at least 1'
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers; some changes might be required as all these values were originally set for Russian version
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' p').innerHTML = 'X'
                }
            }
            // same code, but for Dice Roller
            else {
                valueAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').innerHTML;
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanNameHover !== 'undefined' && (clanNameHover.includes('Носферату') || clanNameHover.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(statblockCSSpathHover + '.line.appearance .property-name').style.textDecoration = 'line-through';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').innerHTML = 0;
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.display = 'block';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.fontSize = '9px';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.fontFamily = 'SmallCircles';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.textAlign = 'center';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.verticalAlign = 'top';
                    document.querySelector(statblockCSSpathHover + '.appearance .dice-roller-result').style.fontWeight = 'normal'
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').innerHTML = 'at least 1';
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers; some changes might be required as all these values were originally set for Russian version
                else if ((nameAbility.length >= 11 && valueAbility > 9)
                    || (nameAbility.length >= 12 && valueAbility > 8)
                    || (nameAbility.length >= 13 && valueAbility > 7)
                    || (nameAbility.length >= 14 && valueAbility > 6)
                    || (nameAbility.length >= 15 && valueAbility > 5)) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility == 10) {
                    // console.log('who has 10 in hover? it's ' + allTraits[x]);
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').innerHTML = 'X'
                }
            }
        }
    }


    // Disciplines
    // Some high values will be transformed from dots to digits, based on the lenght of a disciple's name, to keep columns width
    if (document.querySelector(activeTab + '.discipline1_name p')) {
        // get all the data from disciplines column, including unnecessary ones
        var disciplinesList = document.querySelectorAll(activeTab + '.disciplines-column p');
        // console.log(disciplinesList);
        // get the disciplines (they all have odd indexes) and their values
        for (let i = 0; i < disciplinesList.length; i += 2) {
            // if the name contains a link
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
            // if the name is just a text
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
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.discipline1_name p')) {
        var disciplinesList = document.querySelectorAll(statblockCSSpathHover + '.disciplines-column p');
        for (let i = 0; i < disciplinesList.length; i += 2) {
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



    // bearing and it's value are displayed based on the path and its value
    if (document.querySelector(activeTab + '.line.path .statblock-markdown > p') != null) {
        // find the path, is it the humanity or not?
        var path = document.querySelector(activeTab + '.line.path .statblock-markdown > p');
        // if the path is not presented...
        if (path === null) {
            // ...bearing line will be hidden
            document.querySelector(activeTab + '.bearing').style.display = 'none'
        }
        // if the path isn't the humanity...
        else if (path.innerHTML != (('HUMANITY') || ('Humanity'))) {
            // ...bearing line will be hidden
            document.querySelector(activeTab + '.bearing').style.display = 'none';
            // ... arrow markers around the title will be removed
            document.querySelector(activeTab + '.statblock-item-container.path-block:has(> .path)').style.backgroundImage = 'none';
            // let's get the value of non-humanity path
            var pathModifier = document.querySelector(activeTab + '.line.path_value p').innerHTML;
            // replace 10 with X
            if (pathModifier = 10) {
                document.querySelector(activeTab + '.path_value p').innerHTML = 'X';
            }
        }
        else {
            // let's get the value of humanity path
            if (document.querySelector(activeTab + '.line.path_value p') != null) {
                var pathModifier = document.querySelector(activeTab + '.line.path_value p').innerHTML;
                switch (pathModifier) {
                    // replace 10 with X
                    case '10':
                        document.querySelector(activeTab + '.line.path_value p').innerHTML = 'X';
                    // and then correspinding bearing values will be assigned
                    case 'X':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy ( -2 )'; break;
                    case '9':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy ( -1 )'; break;
                    case '8':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy ( -1 )'; break;
                    case '7':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy'; break;
                    case '6':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy'; break;
                    case '5':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy'; break;
                    case '4':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy'; break;
                    case '3':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy ( +1 )'; break;
                    case '2':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy ( +1 )'; break;
                    case '1':
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'Normalcy ( +2 )'; break;
                    default:
                        document.querySelector(activeTab + '.line.bearing p').innerHTML = 'You are the Beast!';
                        if (document.querySelector(activeTab + '.line.bearing p').innerHTML === null) {
                            console.log('bearing line is missing')
                        }
                }
            }
            else { }
        }
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.path .statblock-markdown p') != null) {
        var pathHover = document.querySelector(statblockCSSpathHover + '.line.path .statblock-markdown p');
        console.log(pathHover + 'is there the path in hover?')
        if (pathHover === null) {
            document.querySelector(statblockCSSpathHover + '.line.bearing').style.display = 'none'
        }
        else if (pathHover.innerHTML != (('HUMANITY') || ('Humanity'))) {
            document.querySelector(statblockCSSpathHover + '.bearing').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.path-block:has(> .path)').style.backgroundImage = 'none';
            var pathModifierHover = document.querySelector(statblockCSSpathHover + '.line.path_value p').innerHTML;
            if (pathModifierHover = 10) {
                document.querySelector(statblockCSSpathHover + '.path_value p').innerHTML = 'X';
            }
        }
        else {
            var pathModifierHover = document.querySelector(statblockCSSpathHover + '.line.path_value p').innerHTML;
            switch (pathModifierHover) {
                case '10':
                    document.querySelector(statblockCSSpathHover + '.line.path_value p').innerHTML = 'X';
                case 'X':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy ( -2 )'; break;
                case '9':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy ( -1 )'; break;
                case '8':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy ( -1 )'; break;
                case '7':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy'; break;
                case '6':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy'; break;
                case '5':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy'; break;
                case '4':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy'; break;
                case '3':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy ( +1 )'; break;
                case '2':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy ( +1 )'; break;
                case '1':
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'Normalcy ( +2 )'; break;
                default:
                    document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML = 'You are the Beast!';
                    if (document.querySelector(statblockCSSpathHover + '.line.bearing p').innerHTML === null) {
                        console.log('bearing line in hover is missing')
                    }
            }
        }
    }


    // Replace more 10s with Xs for Willpower

    // set up some willpower css classes to work with
    const willpowerOptions = ['.willpower_main', '.willpower_current'];
    // let's check if the willpower block exists in the statblock
    if (document.querySelector(activeTab + '.willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            // find the simple main willpower value or current one
            if (document.querySelector(activeTab + willpowerOptions[i] + ' p') != null) {
                var willpowerValue = document.querySelector(activeTab + willpowerOptions[i] + ' p');
                // if it is and equal to 10
                if (willpowerValue != null) {
                    if (willpowerValue.innerHTML == 10) {
                        // replace 10 with X
                        document.querySelector(activeTab + willpowerOptions[i] + ' p').innerHTML = 'X'
                    }
                }
            }
            // looking for Dice Roller 
            if (document.querySelector(activeTab + willpowerOptions[i] + ' .dice-roller-result') != null) {
                // if it exists
                var willpowerValue = document.querySelector(activeTab + willpowerOptions[i] + ' .dice-roller-result').innerHTML;
                if (willpowerValue == 10) {
                    // replace 10 with X
                    document.querySelector(activeTab + willpowerOptions[i] + ' .dice-roller-result').innerHTML = 'X'
                };
            }
            else {
                // do nothing
            }
        }
    }

    // same code, but for hover
    if (document.querySelector(statblockCSSpathHover + '.willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            var willpowerValue = document.querySelector(statblockCSSpathHover + willpowerOptions[i] + ' p');
            if (willpowerValue != null) {
                if (willpowerValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + willpowerOptions[i] + ' p').innerHTML = 'X'
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


    // The great recalculation of blood, to use one parameter\number - then show all the needen line and hide others
    if (document.querySelector(activeTab + '.line.blood') != null) {
        // first line of blood
        const bloodCurrent = document.querySelector(activeTab + '.line.blood p').innerHTML;
        console.log('blood value = ' + bloodCurrent)
        if (bloodCurrent <= 9) {
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is less than 9')
        } else if (bloodCurrent == 10) {
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is equal to 10 or X')
        } else if (bloodCurrent < 20) {
            var bloodCurrentTwo = bloodCurrent - 10;
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 p').innerHTML = bloodCurrentTwo;
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is less than 20')
        } else if (bloodCurrent == 20) {
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is equal to 20')
        } else if (bloodCurrent < 30) {
            var bloodCurrentThree = bloodCurrent - 20;
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 p').innerHTML = bloodCurrentThree;
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is less than 30')
        } else if (bloodCurrent == 30) {
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 p').innerHTML = 'X';;
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is equal to 30')
        } else if (bloodCurrent < 40) {
            var bloodCurrentFour = bloodCurrent - 30;
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 p').innerHTML = 'X';
            document.querySelector(activeTab + '.line.blood_current4 p').innerHTML = bloodCurrentFour;
            // console.log('small check when bloodpool is less than 40')
        } else if (bloodCurrent == '40') {
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 p').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current4 p').innerHTML = 'X';
            // console.log('small check when bloodpool is equal to 40')
        } else if (bloodCurrent >= 41) {
            document.querySelector(activeTab + '.line.blood p').innerHTML = 'X';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector(activeTab + '.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrent + '.  Time to think about your Humanity!';
            // console.log('small check when bloodpool is greather than 40')
        } else {
            // do nothing
            console.log('something went wrong with bloodpool')
        }
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.blood p') != null) {
        const bloodCurrentHover = document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML;
        console.log('blood value in hover = ' + bloodCurrentHover)
        if (bloodCurrentHover <= 9) {
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is less than 9 in hover')
        } else if (bloodCurrentHover == 10) {
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is equal to 10 or X in hover')
        } else if (bloodCurrentHover < 20) {
            var bloodCurrentTwoHover = bloodCurrentHover - 10;
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 p').innerHTML = bloodCurrentTwoHover;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is less than 20 in hover')
        } else if (bloodCurrentHover == 20) {
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is equal to 20 in hover')
        } else if (bloodCurrentHover < 30) {
            var bloodCurrentThreeHover = bloodCurrentHover - 20;
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 p').innerHTML = bloodCurrentThreeHover;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is less than 30 in hover')
        } else if (bloodCurrentHover == 30) {
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 p').innerHTML = 'X';;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            // console.log('small check when bloodpool is equal to 30 in hover')
        } else if (bloodCurrentHover < 40) {
            var bloodCurrentFourHover = bloodCurrentHover - 30;
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.line.blood_current4 p').innerHTML = bloodCurrentFourHover;
            // console.log('small check when bloodpool is less than 40 in hover')
        } else if (bloodCurrentHover == '40') {
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current4 p').innerHTML = 'X';
            // console.log('small check when bloodpool is equal to 40 in hover')
        } else if (bloodCurrentHover >= 41) {
            document.querySelector(statblockCSSpathHover + '.line.blood p').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrentHover + '.  Time to think about your Humanity!';
            // console.log('small check when bloodpool is greather than 40 in hover')
        } else {
            // do nothing
            console.log('something went wrong with bloodpool in hover')
        }
    }


    //  WEREWOLVES


    // define where to show merits and flaws, on the left or right - for WEREWOLVES
    if (document.querySelector(activeTab + '.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlaws = document.querySelector(activeTab + '.line.where-to-show-merits-and-flaws p').innerHTML;
        console.log('where to show merits and flaws? left or right? = ' + whereToShowMeritsAndFlaws)
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
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlawsHover = document.querySelector('.popover.hover-popover .line.where-to-show-merits-and-flaws p').innerHTML;
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


    // set up some specific werewolf's characteristics to search
    const werewolfOptions = ['rage', 'gnosis', 'glory', 'honor', 'wisdom'];
    for (let y = 0; y < werewolfOptions.length; y++) {
        // if the corresponding block exists ...
        if (document.querySelector(activeTab + '.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('the block for ' + werewolfOptions[y].toUpperCase() + ' was found');
            // looking for the simple dots
            optionValue = document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main p')
            // if they are here...
            if (optionValue != null) {
                // and euqal to 10
                if (optionValue.innerHTML == 10) {
                    // replace it with X
                    document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main p').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of ' + werewolfOptions[y].toUpperCase());
                }
                // if not 10 - aliright then
                else {
                    // console.log('simple dots of ' + werewolfOptions[y].toUpperCase() + ' are fine')
                }
            }
            // if there are no simple dots - there must be a Dice Roller
            else {
                var optionValue = document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                // if euqal to 10
                if (optionValue == 10) {
                    // replace it with X
                    document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of ' + werewolfOptions[y].toUpperCase());
                }
                // if not 10 - aliright then
                else {
                    // console.log('Dice Roller of ' + werewolfOptions[y].toUpperCase() + ' is fine')
                }
            }
        }
        else if (document.querySelector('.wta-v20-werewolf') == null) {
            // nothing
        }
        else {
            // console.log('something went wrong with ' + werewolfOptions[y].toUpperCase())
        }

        // same code, but for a statblock in hover
        if (document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('the block for ' + werewolfOptions[y].toUpperCase() + ' was found in hover');
            optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main p')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main p').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of ' + werewolfOptions[y].toUpperCase() + ' in hover');
                }
                else {
                    // console.log('simple dots of ' + werewolfOptions[y].toUpperCase() + ' are fine in hover')
                }
            }
            else {
                var optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of '  + werewolfOptions[y].toUpperCase() + ' in hover');
                }
                else {
                    // console.log('Dice Roller of ' + werewolfOptions[y].toUpperCase() + ' is fine in hover')
                }
            }
        }
        else if (document.querySelector(statblockCSSpathHover) == null) {
            // nothing
        }
        else {
            // console.log('something went wrong with ' + werewolfOptions[y].toUpperCase())
        }
    }

    // specific werewolf's characteristics, current values
    for (let z = 0; z < werewolfOptions.length; z++) {
        // если вообще есть соответствующий блок...
        if (document.querySelector(activeTab + '.' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('the block for current ' + werewolfOptions[z].toUpperCase() + ' was found');
            optionValue = document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current p')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current p').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of current ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('simple dots of current ' + werewolfOptions[z].toUpperCase() + ' are fine')
                }
            }
            else {
                var optionValue = document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of current ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('Dice Roller current of ' + werewolfOptions[z].toUpperCase() + ' is fine')
                }
            }
        }
        else if (document.querySelector(activeTab) == null) {
            // nothing
        }
        else {
            // console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' что-то пошло не так')
        }
        // same code, but for a statblock in hover
        if (document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('the block for current ' + werewolfOptions[z].toUpperCase() + ' was found in hover');
            optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current p')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current p').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of current ' + werewolfOptions[z].toUpperCase() + ' in hover');
                }
                else {
                    // console.log('simple dots of current ' + werewolfOptions[z].toUpperCase() + ' are fine in hover')
                }
            }
            else {
                var optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of current ' + werewolfOptions[z].toUpperCase()) + ' in hover';
                }
                else {
                    // console.log('Dice Roller current of  ' + werewolfOptions[z].toUpperCase() + ' is fine in hover')
                }
            }
        }
        else if (document.querySelector(statblockCSSpathHover) == null) {
            // nothing
        }
        else {
            // console.log('something went wrong with ' + werewolfOptions[z].toUpperCase() + ' in hover')
        }
    }



})