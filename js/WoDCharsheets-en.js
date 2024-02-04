async function sleep(ms) { // sleep is needed to wait for a note and a statblok to be fully loaded
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(120).then(() => {

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
    // Shabbat
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
    // Independent clans
    const weaknessAssamite = '';
    const weaknessFollowersOfSet = '';
    const weaknessGiovanni = '';
    const weaknessRavnos = '';
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


    // find the statblock's layout name and active tab that has it
    const statblockClassList = document.querySelector('.workspace-leaf.mod-active .obsidian-statblock-plugin.statblock').classList
    var allClasses = statblockClassList.value.toString()
    var regex = /[a-z]{3}-[a-z]{1}20-[a-z-]{0,20}/gm;
    var statblockCSSclass = '.' + allClasses.match(regex);
    // console.log(statblockCSSclass + ' |=| statblock css-class')
    const activeTab = '.workspace-leaf.mod-active ' + statblockCSSclass + ' ';

    // find statblock in hover
    if (document.querySelector('.popover.hover-popover') != null) {
        var statblockClassListHover = document.querySelector('.popover.hover-popover .obsidian-statblock-plugin.statblock').classList;
        var allClassesHover = statblockClassListHover.value.toString()
        var statblockCSSclassHover = '.' + allClassesHover.match(regex);
        // console.log(statblockCSSclassHover + ' |=| css-класс статблока в ховере')
        var statblockCSSpathHover = '.popover.hover-popover ' + statblockCSSclassHover + ' ';
    }


    // define a clan, and set up different background and weakness for each clan
    if (document.querySelector(activeTab + '.line.clan .statblock-markdown') != null && (statblockCSSclass.endsWith('.vtm-v20-vampire') || statblockCSSclass.endsWith('.vtm-v20-vampire-en'))) {
        // define clan
        var clanName = document.querySelector(activeTab + '.line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - the clan')
        // define the area where a clan image should be placed 
        const collapsedColumn = document.querySelector(activeTab + '.collapse-container');
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
        document.querySelector('.weakness .inline').innerHTML = clanWeakness;
        if (document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.view-content:has(.wod-header) ' + statblockCSSclass + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClan
        };
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown') != null && (statblockCSSclassHover.endsWith('.vtm-v20-vampire') || statblockCSSclassHover.endsWith('.vtm-v20-vampire-en'))) {
        var clanNameHover = document.querySelector(statblockCSSpathHover + '.line.clan .statblock-markdown > p').innerHTML;
        const collapsedColumnHover = document.querySelector(statblockCSSpathHover + '.collapse-container');
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
        document.querySelector(statblockCSSpathHover + '.weakness .inline').innerHTML = clanWeaknessHover;
        if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container') != null) {
            document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockCSSclassHover + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = headerBackgroundClanHover
        };
    }
    else {
        //nothing
    }


    // setting to display wampire's weakness
    if (document.querySelector(activeTab + '.line.show_weakness .inline') != null) {
        const showWeakness = document.querySelector(activeTab + '.line.show_weakness .inline').innerHTML;
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
    if (document.querySelector(statblockCSSpathHover + '.line.show_weakness .inline') != null) {
        const showWeaknessHover = document.querySelector(statblockCSSpathHover + '.line.show_weakness .inline').innerHTML;
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
        // pick only two first symbols, in case if the generation has info about diablery (like 9  ̶1̶0̶)
        var generation = generationFull.slice(0, 2);
        // remove spaces, if the generation is 8 or 9
        var generation = generation.replace(/\s/g, '');
        console.log('the generation of this Kindred is ' + generation);
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
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.generation .statblock-markdown > p') != null) {
        const generationFullHover = document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p').textContent;
        var generationHover = generationFullHover.slice(0, 2);
        var generationHover = generationHover.replace(/\s/g, '');
        console.log('the generation in hover - ' + generationHover);
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
            var valueAbility = document.querySelector(activeTab + allTraits[x] + ' .inline');
            // the code for usual dots
            if (valueAbility !== null) {
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(activeTab + '.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontSize = '13px';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(activeTab + allTraits[x] + ' .inline').innerHTML = 'at least 1'
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers; some changes might be required as all these values were originally set for Russian version
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(activeTab + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(activeTab + allTraits[x] + ' .inline').innerHTML = 'X'
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
                    document.querySelector(activeTab + '.appearance .dice-roller-result').style.display = 'none';
                    document.querySelector(activeTab + '.appearance .dice-original').innerHTML = 0;
                    document.querySelector(activeTab + '.appearance .dice-original').style.display = 'block';
                    document.querySelector(activeTab + '.appearance .dice-original').style.fontSize = '9px';
                    document.querySelector(activeTab + '.appearance .dice-original').style.fontFamily = 'SmallCircles';
                    document.querySelector(activeTab + '.appearance .dice-original').style.textAlign = 'center';
                    document.querySelector(activeTab + '.appearance .dice-original').style.verticalAlign = 'top';
                    document.querySelector(activeTab + '.appearance .dice-original').style.fontWeight = 'normal'
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(allTraits[x]))) {
                    // console.log('is there a zero value??? yes, in ' + allTraits[x]);
                    document.querySelector(activeTab + allTraits[x] + ' .roller-result').style.display = 'none';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').style.display = 'block';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').style.fontSize = '13px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(activeTab + allTraits[x] + ' .dice-original').innerHTML = 'at least 1';
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
            var valueAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .inline');
            // the code for usual dots
            if (valueAbility !== null) {
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanNameHover !== 'undefined' && (clanNameHover.includes('Nosferatu') || clanNameHover.includes('Samedi')))
                    && (allTraits[x].includes('.appearance'))) {
                    document.querySelector(statblockCSSpathHover + '.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontSize = '13px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .inline').innerHTML = 'at least 1'
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers; some changes might be required as all these values were originally set for Russian version
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .inline').innerHTML = 'X'
                }
            }
            // same code, but for Dice Roller
            else {
                valueAbility = document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-roller-result').innerHTML;
                // special case - if the Appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (allTraits[x].includes('.appearance'))) {
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
                // if attributes value is 0, there will be warning 
                else if ((valueAbility === 'null' || valueAbility == 0) && (basicAttributes.includes(allTraits[x]))) {
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .roller-result').style.display = 'none';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').style.display = 'block';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').style.fontSize = '13px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(statblockCSSpathHover + allTraits[x] + ' .dice-original').innerHTML = 'at least 1';
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
    if (document.querySelector(activeTab + '.discipline1_name .inline')) {
        // get all the data from disciplines column, including unnecessary ones
        var disciplinesList = document.querySelectorAll(activeTab + '.disciplines-column .inline');
        // console.log(disciplinesList);
        // get the disciplines (they all have odd indexes) and their values
        for (let i = 1; i < disciplinesList.length; i += 2) {
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



    // bearing and it's value are displayed based on the path and its value
    if (document.querySelector(activeTab + '.line.path .inline') != null) {
        // find the path, is it the humanity or not?
        const path = document.querySelector(activeTab + '.path .inline');
        // if the path is not presented...
        if (path === null) {
            // ...bearing line will be hidden
            document.querySelector(activeTab + '.bearing').style.display = 'none'
        }
        // if the path isn't the humanity...
        else if (path.innerHTML != ('HUMANITY')) {
            // ...bearing line will be hidden
            document.querySelector(activeTab + '.bearing').style.display = 'none';
            // let's get the value of non-humanity path
            var pathModifier = document.querySelector(activeTab + '.line.path_value .inline').innerHTML;
            // replace 10 with X
            if (pathModifier = 10) {
                document.querySelector(activeTab + '.path_value .inline').innerHTML = 'X';
            }
        }
        else {
            // let's get the value of humanity path
            var pathModifier = document.querySelector(activeTab + '.line.path_value .inline').innerHTML;
            switch (pathModifier) {
                // replace 10 with X
                case '10':
                    document.querySelector(activeTab + '.line.path_value .inline').innerHTML = 'X';
                // and then correspinding bearing values will be assigned
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
                    document.querySelector(activeTab + '.line.bearing .inline').innerHTML = 'You are the Beast!';
                    if (document.querySelector(activeTab + '.line.bearing .inline').innerHTML === null) {
                        console.log('bearing line is missing')
                    }
            }
        }
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.path .inline') != null) {
        const pathHover = document.querySelector(statblockCSSpathHover + '.path .inline');
        console.log(pathHover + 'is there the path in hover?')
        if (pathHover === null) {
            document.querySelector(statblockCSSpathHover + '.line.bearing').style.display = 'none'
        }
        else if (pathHover.innerHTML != ('HUMANITY')) {
            document.querySelector(statblockCSSpathHover + '.bearing').style.display = 'none';
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
                    document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML = 'You are the Beast!';
                    if (document.querySelector(statblockCSSpathHover + '.line.bearing .inline').innerHTML === null) {
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
            if (document.querySelector(activeTab + willpowerOptions[i] + ' .inline') != null) {
                var willpowerValue = document.querySelector(activeTab + willpowerOptions[i] + ' .inline');
                // if it is and equal to 10
                if (willpowerValue != null) {
                    if (willpowerValue.innerHTML == 10) {
                        // replace 10 with X
                        document.querySelector(activeTab + willpowerOptions[i] + ' .inline').innerHTML = 'X'
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


    // The great recalculation of blood, to use one parameter\number - then show all the needen line and hide others
    if (document.querySelector(activeTab + '.line.blood') != null) {
        // first line of blood
        const bloodCurrent = document.querySelector(activeTab + '.line.blood .inline').innerHTML;
        console.log('blood value = ' + bloodCurrent)
        if (bloodCurrent <= 9) {
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 9')
        } else if (bloodCurrent == 10) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 10 or X')
        } else if (bloodCurrent < 20) {
            var bloodCurrentTwo = bloodCurrent - 10;
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = bloodCurrentTwo;
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 20')
        } else if (bloodCurrent == 20) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 20')
        } else if (bloodCurrent < 30) {
            var bloodCurrentThree = bloodCurrent - 20;
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = bloodCurrentThree;
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 30')
        } else if (bloodCurrent == 30) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = 'X';;
            document.querySelector(activeTab + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 30')
        } else if (bloodCurrent < 40) {
            var bloodCurrentFour = bloodCurrent - 30;
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.line.blood_current4 .inline').innerHTML = bloodCurrentFour;
            console.log('small check when bloodpool is less than 40')
        } else if (bloodCurrent == '40') {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(activeTab + '.line.blood_current4 .inline').innerHTML = 'X';
            console.log('small check when bloodpool is equal to 40')
        } else if (bloodCurrent >= 41) {
            document.querySelector(activeTab + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector(activeTab + '.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector(activeTab + '.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrent + '.  Time to think about your Humanity!';
            console.log('small check when bloodpool is greather than 40')
        } else {
            // do nothing
            console.log('something went wrong with bloodpool')
        }
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector(statblockCSSpathHover + '.line.blood .inline') != null) {
        const bloodCurrentHover = document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML;
        console.log('blood value in hover = ' + bloodCurrentHover)
        if (bloodCurrentHover <= 9) {
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 9 in hover')
        } else if (bloodCurrentHover == 10) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 10 or X in hover')
        } else if (bloodCurrentHover < 20) {
            var bloodCurrentTwoHover = bloodCurrentHover - 10;
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = bloodCurrentTwoHover;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 20 in hover')
        } else if (bloodCurrentHover == 20) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 20 in hover')
        } else if (bloodCurrentHover < 30) {
            var bloodCurrentThreeHover = bloodCurrentHover - 20;
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = bloodCurrentThreeHover;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 30 in hover')
        } else if (bloodCurrentHover == 30) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = 'X';;
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 30 in hover')
        } else if (bloodCurrentHover < 40) {
            var bloodCurrentFourHover = bloodCurrentHover - 30;
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.line.blood_current4 .inline').innerHTML = bloodCurrentFourHover;
            console.log('small check when bloodpool is less than 40 in hover')
        } else if (bloodCurrentHover == '40') {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current2 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current3 .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector(statblockCSSpathHover + '.line.blood_current4 .inline').innerHTML = 'X';
            console.log('small check when bloodpool is equal to 40 in hover')
        } else if (bloodCurrentHover >= 41) {
            document.querySelector(statblockCSSpathHover + '.line.blood .inline').innerHTML = 'X';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector(statblockCSSpathHover + '.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrentHover + '.  Time to think about your Humanity!';
            console.log('small check when bloodpool is greather than 40 in hover')
        } else {
            // do nothing
            console.log('something went wrong with bloodpool in hover')
        }
    }


    //  WEREWOLVES


    // define where to show merits and flaws, on the left or right - for WEREWOLVES
    if (document.querySelector(activeTab + '.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlaws = document.querySelector(activeTab + '.line.where-to-show-merits-and-flaws .inline').innerHTML;
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


    // set up some specific werewolf's characteristics to search
    const werewolfOptions = ['rage', 'gnosis', 'glory', 'honor', 'wisdom'];
    for (let y = 0; y < werewolfOptions.length; y++) {
        // if the corresponding block exists ...
        if (document.querySelector(activeTab + '.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('the block for ' + werewolfOptions[y].toUpperCase() + ' was found');
            // looking for the simple dots
            optionValue = document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main .inline')
            // if they are here...
            if (optionValue != null) {
                // and euqal to 10
                if (optionValue.innerHTML == 10) {
                    // replace it with X
                    document.querySelector(activeTab + '.' + werewolfOptions[y] + '_main .inline').innerHTML = 'X';
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
            optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main .inline')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[y] + '_main .inline').innerHTML = 'X';
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
            // ищем 
            optionValue = document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current .inline')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(activeTab + '.' + werewolfOptions[z] + '_current .inline').innerHTML = 'X';
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
            optionValue = document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current .inline')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector(statblockCSSpathHover + '.' + werewolfOptions[z] + '_current .inline').innerHTML = 'X';
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