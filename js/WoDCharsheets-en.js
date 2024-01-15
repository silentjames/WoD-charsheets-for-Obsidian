async function sleep(ms) { // sleep is needed to wait for a note and a statblok to be fully loaded
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(120).then(() => {

    // find the statblock's layout name and opened active tab
    const statblockVampireName = '.vtm-v20-vampire-en'
    const activeTab = '.workspace-leaf.mod-active ' + statblockVampireName;

    // the list of weaknesses for all the supported clans
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
    const weaknessSalubri = '';
    const weaknessSalubriAntitribu = '';
    const weaknessSamedi = '';
    const weaknessToreador = '';
    const weaknessToreadorAntitribu = '';
    const weaknessTremere = '';
    const weaknessTremereAntitribu = '';
    const weaknessTzimisce = '';
    const weaknessVentrue = '';
    const weaknessVentrueAntitribu = '';


    // define a clan, and set up different background and weakness for each clan
    if (document.querySelector(activeTab + ' .line.clan .statblock-markdown') != null) {
        var clanName = document.querySelector(activeTab + ' .line.clan .statblock-markdown > p').innerHTML;
        console.log(clanName + ' - the clan')
        // define the area where a clan image should be placed 
        const collapsedColumn = document.querySelector(activeTab + ' .collapse-container');
        switch (clanName) {
            case ('Assamite'):
                // corresponding css-class is assigned for each clan 
                var collapsedBackgroundClan = 'Assamite';
                // and clan weakness is also added
                var clanWeakness = weaknessAssamite;
                // if note has 'csslacss: wod-header', clan logo will be displayed there, as background for general character info
                var headerBackgroundClan = 'var(--Assamite-background-logo)';
                break;
            case ('Assamite Antitribu'):
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
            case ('Followers of Set'):
                var collapsedBackgroundClan = 'Followers-of-Set';
                var clanWeakness = weaknessFollowersOfSet;
                var headerBackgroundClan = 'var(--Followers-of-Set-background-logo)';
                break;
            case ('Serpents of Light'):
                var collapsedBackgroundClan = 'Serpents-of-Light';
                var clanWeakness = weaknessSerpentsOfLight;
                var headerBackgroundClan = 'var(--Serpents-of-Light-background-logo)';
                break;
            case ('Ravnos'):
                var collapsedBackgroundClan = 'Ravnos';
                var clanWeakness = weaknessRavnos;
                var headerBackgroundClan = 'var(--Ravnos-background-logo)';
                break;
            case ('Ravnos Antitribu'):
                var collapsedBackgroundClan = 'Ravnos-Antitribu';
                var clanWeakness = weaknessRavnosAntitribu;
                var headerBackgroundClan = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case ('Salubri'):
                var collapsedBackgroundClan = 'Salubri';
                var clanWeakness = weaknessSalubri;
                var headerBackgroundClan = 'var(--Salubri-background-logo)';
                break;
            case ('Salubri Antitribu'):
                var collapsedBackgroundClan = 'Salubri-Antitribu';
                var clanWeakness = weaknessSalubriAntitribu;
                var headerBackgroundClan = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case ('Samedi'):
                var collapsedBackgroundClan = 'Samedi';
                var clanWeakness = weaknessSamedi;
                var headerBackgroundClan = 'var(--Samedi-background-logo)';
                break;
            case ('Toreador'):
                var collapsedBackgroundClan = 'Toreador';
                var clanWeakness = weaknessToreador;
                var headerBackgroundClan = 'var(--Toreador-background-logo)';
                break;
            case ('Toreador Antitribu'):
                var collapsedBackgroundClan = 'Toreador-Antitribu';
                var clanWeakness = weaknessToreadorAntitribu;
                var headerBackgroundClan = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case ('Tremere'):
                var collapsedBackgroundClan = 'Tremere';
                var clanWeakness = weaknessTremere;
                var headerBackgroundClan = 'var(--Tremere-background-logo)';
                break;
            case ('Tremere Antitribu'):
                var collapsedBackgroundClan = 'Tremere-Antitribu';
                var clanWeakness = weaknessTremereAntitribu;
                var headerBackgroundClan = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case ('Tzimisce'):
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
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .line.clan .statblock-markdown > p') != null) {
        var clanNameHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .line.clan .statblock-markdown > p').innerHTML;
        const collapsedColumnHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .collapse-container');
        switch (clanNameHover) {
            case ('Assamite'):
                var collapsedBackgroundClanHover = 'Assamite';
                var clanWeaknessHover = weaknessAssamite;
                var headerBackgroundClanHover = 'var(--Assamite-background-logo)';
                break;
            case ('Assamite Antitribu'):
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
            case ('Followers of Set'):
                var collapsedBackgroundClanHover = 'Followers-of-Set';
                var clanWeaknessHover = weaknessFollowersOfSet;
                var headerBackgroundClanHover = 'var(--Followers-of-Set-background-logo)';
                break;
            case ('Serpents of Light'):
                var collapsedBackgroundClanHover = 'Serpents-of-Light';
                var clanWeaknessHover = weaknessSerpentsOfLight;
                var headerBackgroundClanHover = 'var(--Serpents-of-Light-background-logo)';
                break;
            case ('Ravnos'):
                var collapsedBackgroundClanHover = 'Ravnos';
                var clanWeaknessHover = weaknessRavnos;
                var headerBackgroundClanHover = 'var(--Ravnos-background-logo)';
                break;
            case ('Ravnos Antitribu'):
                var collapsedBackgroundClanHover = 'Ravnos-Antitribu';
                var clanWeaknessHover = weaknessRavnosAntitribu;
                var headerBackgroundClanHover = 'var(--Ravnos-Antitribu-background-logo)';
                break;
            case ('Salubri'):
                var collapsedBackgroundClanHover = 'Salubri';
                var clanWeaknessHover = weaknessSalubri;
                var headerBackgroundClanHover = 'var(--Salubri-background-logo)';
                break;
            case ('Salubri Antitribu'):
                var collapsedBackgroundClanHover = 'Salubri-Antitribu';
                var clanWeaknessHover = weaknessSalubriAntitribu;
                var headerBackgroundClanHover = 'var(--Salubri-Antitribu-background-logo)';
                break;
            case ('Samedi'):
                var collapsedBackgroundClanHover = 'Samedi';
                var clanWeaknessHover = weaknessSamedi;
                var headerBackgroundClanHover = 'var(--Samedi-background-logo)';
                break;
            case ('Toreador'):
                var collapsedBackgroundClanHover = 'Toreador';
                var clanWeaknessHover = weaknessToreador;
                var headerBackgroundClanHover = 'var(--Toreador-background-logo)';
                break;
            case ('Toreador Antitribu'):
                var collapsedBackgroundClanHover = 'Toreador-Antitribu';
                var clanWeaknessHover = weaknessToreadorAntitribu;
                var headerBackgroundClanHover = 'var(--Toreador-Antitribu-background-logo)';
                break;
            case ('Tremere'):
                var collapsedBackgroundClanHover = 'Tremere';
                var clanWeaknessHover = weaknessTremere;
                var headerBackgroundClanHover = 'var(--Tremere-background-logo)';
                break;
            case ('Tremere Antitribu'):
                var collapsedBackgroundClanHover = 'Tremere-Antitribu';
                var clanWeaknessHover = weaknessTremereAntitribu;
                var headerBackgroundClanHover = 'var(--Tremere-Antitribu-background-logo)';
                break;
            case ('Tzimisce'):
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


    // setting to display merits and flaws left or right
    if (document.querySelector('.line.show_weakness .statblock-rendered-text-content') != null) {
        const showWeakness = document.querySelector('.line.show_weakness .statblock-rendered-text-content').innerHTML;
        switch (showWeakness) {
            case ('no'):
                console.log('do you wanna see the weakness? ' + showWeakness)
                document.querySelector('.property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                console.log('do you wanna see the weakness? ' + showWeakness)
                document.querySelector('.property-container:has(.line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        console.log('the weakness will be displayed');
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .line.show_weakness .statblock-rendered-text-content') != null) {
        const showWeaknessHover = document.querySelector('.popover.hover-popover .line.show_weakness .statblock-rendered-text-content').innerHTML;
        switch (showWeaknessHover) {
            case ('no'):
                console.log('do you wanna see the weakness in hover? ' + showWeaknessHover)
                document.querySelector('.popover.hover-popover .property-container:has(> .line.weakness)').style.display = 'none';
                break;
            case ('false'):
                console.log('do you wanna see the weakness in hover ' + showWeaknessHover)
                document.querySelector('.popover.hover-popover .property-container:has(.line.weakness)').style.display = 'none';
                break;
        }
    }
    else {
        console.log('the weakness in hover will be displayed');
    }




    // Set up blood per turn value, based on the generation
    if (document.querySelector('.line.generation .statblock-markdown p') != null) {
        // find the generation
        var generationFull = document.querySelector('.line.generation .statblock-markdown').textContent;
        // pick only two first symbols, in case if the generation has info about diablery (like 9  ̶1̶0̶)
        var generation = generationFull.slice(0, 2);
        // remove spaces, if the generation is 8 or 9
        var generation = generation.replace(/\s/g, '');
        console.log('the generation of this Kindred is ' + generation);
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
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p') != null) {
        const generationFullHover = document.querySelector('.popover.hover-popover .line.generation .statblock-markdown > p').textContent;
        var generationHover = generationFullHover.slice(0, 2);
        var generationHover = generationHover.replace(/\s/g, '');
        console.log('generation in hover - ' + generationHover);
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





    // you can type character's name (in level 2 heading) in the note above the statblock, and if this heading is the same as character name in the statblock, it will be hidden in the reading view, but remains in the outlina panel
    if (document.querySelector('.workspace-leaf.mod-active .markdown-reading-view h2') != null) {
        var outlineName = document.querySelector('.workspace-leaf.mod-active .markdown-reading-view h2').innerText
        console.log(outlineName + ' - H2 name from the note');
        const characterName = document.querySelector('.workspace-leaf.mod-active h1.heading .statblock-rendered-text-content').innerHTML
        console.log('the name from the statblock - ' + characterName)
        if (outlineName.includes(characterName)) {
            document.querySelector('.workspace-leaf.mod-active .markdown-reading-view h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover h2') != null) {
        var outlineName_hover = document.querySelector('.popover.hover-popover h2').innerText
        //  console.log('note's name in a hover - ' + outlineName_hover)
        const characterName_hover = document.querySelector('.popover.hover-popover h1.heading .statblock-rendered-text-content').innerHTML
        //  console.log('character's name from statblock in a hover = ' + characterName_hover)
        if (outlineName_hover.includes(characterName_hover)) {
            document.querySelector('.popover.hover-popover h2').style.display = 'none';
        }
    }
    else {
        // do nothing
    }



    // Some various modifications for attributes, abilities and disciplines

    // set up the names of all Attributes and Abilities 
    const allAttributes = ['.strength', '.dexterity', '.stamina', '.charisma', '.manipulation', '.appearance', '.perception', '.intelligence', '.wits'];
    const allTalents = ['.athletics', '.alertness', '.brawl', '.intimidation', '.expression', '.leadership', '.streetwise', '.subterfuge', '.awareness', '.empathy']
    const allSkills = ['.drive', '.larceny', '.survival', '.performance', '.animalken', '.crafts', '.stealth', '.firearms', '.melee', '.etiquette']
    const allKnowledges = ['.academics', '.science', '.law', '.computer', '.medicine', '.occult', '.politics', '.investigation', '.finance', '.technology']
    // combine all into one list\array
    const vampireAbilities = allAttributes.concat(allTalents, allSkills, allKnowledges);
    for (let x = 0; x < vampireAbilities.length; x++) {
        if (document.querySelector(vampireAbilities[x]) != null) {
            // let's find the name of the property and its value
            var nameAbility = document.querySelector(vampireAbilities[x] + ' .property-name').innerHTML;
            var valueAbility = document.querySelector(vampireAbilities[x] + ' .statblock-rendered-text-content');
            // the code for usual dots
            if (valueAbility !== null) {
                // special case - if the appearance is 0 and the clan has 'Nosferatu' or 'Samedi', the appearance line will be strikethrough
                if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (vampireAbilities[x].includes('.appearance'))) {
                    document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through';
                }
                // if attributes value is 0, there will be warning 
                else if ((valueAbility.innerHTML === 'null' || valueAbility.innerHTML == 0) && (allAttributes.includes(vampireAbilities[x]))) {
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                    document.querySelector(vampireAbilities[x] + ' .statblock-rendered-text-content').innerHTML = 'at least 1'
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers; some changes might be required as all these values were originally set for Russian version
                else if ((nameAbility.length >= 11 && valueAbility.innerHTML > 9)
                    || (nameAbility.length >= 12 && valueAbility.innerHTML > 8)
                    || (nameAbility.length >= 13 && valueAbility.innerHTML > 7)
                    || (nameAbility.length >= 14 && valueAbility.innerHTML > 6)
                    || (nameAbility.length >= 15 && valueAbility.innerHTML > 5)) {
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontSize = '14px';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.fontFamily = 'Marta';
                    document.querySelector(vampireAbilities[x] + ' .property-text').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility.innerHTML == 10) {
                    document.querySelector(vampireAbilities[x] + ' .statblock-rendered-text-content').innerHTML = 'X'
                }
            }
            // same code, but for Dice Roller
            else {
                valueAbility = document.querySelector(vampireAbilities[x] + ' .dice-roller-result').innerHTML;
                // console.log(nameAbility + ' - это ' + nameAbility.length + ' и ' + valueAbility);
                // если привлекательность 0 и в имени клана есть "Носферату" или "Самеди", то строка привлекательности зачеркивается
                if ((valueAbility === 'null' || valueAbility == 0) && (typeof clanName !== 'undefined' && (clanName.includes('Носферату') || clanName.includes('Самеди')))
                    && (vampireAbilities[x].includes('.appearance'))) {
                    // console.log('who goes there, to see the ugly Nosferaty? it's ' + vampireAbilities[x]);
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
                // if attributes value is 0, there will be warning 
                else if ((valueAbility === 'null' || valueAbility == 0) && (allAttributes.includes(vampireAbilities[x]))) {
                    // console.log('is there a zero value??? yes, in ' + vampireAbilities[x]);
                    document.querySelector(vampireAbilities[x] + ' .roller-result').style.display = 'none';
                    document.querySelector(vampireAbilities[x] + ' .dice-original').style.display = 'block';
                    document.querySelector(vampireAbilities[x] + ' .dice-original').style.margin = '-1px 0px 0px 0px';
                    document.querySelector(vampireAbilities[x] + ' .dice-original').innerHTML = 'at least 1';
                }
                // if the name is is too long and the value is too big, the dots could be replaced with numbers
                else if ((nameAbility.length >= 11 && valueAbility > 9)
                    || (nameAbility.length >= 12 && valueAbility > 8)
                    || (nameAbility.length >= 13 && valueAbility > 7)
                    || (nameAbility.length >= 14 && valueAbility > 6)
                    || (nameAbility.length >= 15 && valueAbility > 5)) {
                    // console.log('were the dots replaced with numbers??? yes, in ' + vampireAbilities[x]);
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').style.fontSize = '14px';
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').style.fontFamily = 'Marta';
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').style.margin = '-1px 0px 0px 0px'
                }
                // replace 10s with Xs
                else if (valueAbility == 10) {
                    // console.log('who has 10? it's ' + vampireAbilities[x]);
                    document.querySelector(vampireAbilities[x] + ' .dice-roller-result').innerHTML = 'X'
                }
            }
        }
    }


    // Disciplines
    // Some high values will be transformed from dots to digits, based on the lenght of a disciple's name, to keep columns width
    if (document.querySelector('.discipline1_name .statblock-rendered-text-content')) {
        // get all the data from disciplines column, including unnecessary ones
        var disciplinesList = document.querySelectorAll('.disciplines-column .statblock-rendered-text-content');
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



    // bearing and it's value are displayed based on the path and its value
    if (document.querySelector('.line.path .statblock-rendered-text-content') != null) {
        // find the path, is it the humanity or not?
        const path = document.querySelector('.path .statblock-rendered-text-content');
        // if the path is not presented...
        if (path === null) {
            // ...bearing line will be hidden
            document.querySelector('.bearing').style.display = 'none'
        }
        // if the path isn't the humanity...
        else if (path.innerHTML != ('HUMANITY')) {
            // ...bearing line will be hidden
            document.querySelector('.bearing').style.display = 'none';
            // let's get the value of non-humanity path
            var pathModifier = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML;
            // replace 10 with X
            if (pathModifier = 10) {
                document.querySelector('.path_value .statblock-rendered-text-content').innerHTML = 'X';
            }
        }
        else {
            // let's get the value of humanity path
            var pathModifier = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML;
            switch (pathModifier) {
                // replace 10 with X
                case '10':
                    document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML = 'X';
                // and then correspinding bearing values will be assigned
                case 'X':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( -2 )'; break;
                case '9':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( -1 )'; break;
                case '8':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( -1 )'; break;
                case '7':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '6':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '5':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '4':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '3':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( +1 )'; break;
                case '2':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( +1 )'; break;
                case '1':
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( +2 )'; break;
                default:
                    document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML = 'You are the Beast!';
                    if (document.querySelector('.line.bearing .statblock-rendered-text-content').innerHTML === null) {
                        console.log('bearing line is missing')
                    }
            }
        }
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .path .statblock-rendered-text-content') != null) {
        const pathHover = document.querySelector('.popover.hover-popover .path .statblock-rendered-text-content');
        console.log(pathHover + 'is there the path in hover?')
        if (pathHover === null) {
            document.querySelector('.popover.hover-popover .line.bearing').style.display = 'none'
        }
        else if (pathHover.innerHTML != ('HUMANITY')) {
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
                        console.log('bearing line in hover is missing')
                    }
            }
        }
    }


    // Replace more 10s with Xs for Willpower

    // set up some willpower css classes to work with
    const willpowerOptions = ['.willpower_main', '.willpower_current'];
    // let's check if the willpower block exists in the statblock
    if (document.querySelector('.willpower-block .line.willpower_main') != null) {
        for (let i = 0; i < willpowerOptions.length; i++) {
            // find the simple main willpower value or current one
            var willpowerValue = document.querySelector(willpowerOptions[i] + ' .statblock-rendered-text-content');
            // if it is and equal to 10
            if (willpowerValue != null) {
                if (willpowerValue.innerHTML == 10) {
                    // replace 10 with X
                    document.querySelector(willpowerOptions[i] + ' .statblock-rendered-text-content').innerHTML = 'X'
                }
            }
            // if the simple value is missing, so there should be Dice Roller 
            else {
                willpowerValue = document.querySelector(willpowerOptions[i] + ' span.dice-roller-result').innerHTML;
                if (willpowerValue == 10) {
                    document.querySelector(willpowerOptions[i] + ' span.dice-roller-result').innerHTML = 'X'
                };
            }
        }
    }
    // same code, but for hover
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


    // The great recalculation of blood, to use one parameter\number - then show all the needen line and hide others
    if (document.querySelector('.line.blood') != null) {
        // first line of blood
        const bloodCurrent = document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML;
        console.log('blood value = ' + bloodCurrent)
        if (bloodCurrent <= 9) {
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 9')
        } else if (bloodCurrent == 10) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 10 or X')
        } else if (bloodCurrent < 20) {
            var bloodCurrentTwo = bloodCurrent - 10;
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentTwo;
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 20')
        } else if (bloodCurrent == 20) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 20')
        } else if (bloodCurrent < 30) {
            var bloodCurrentThree = bloodCurrent - 20;
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentThree;
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 30')
        } else if (bloodCurrent == 30) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';;
            document.querySelector('.property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 30')
        } else if (bloodCurrent < 40) {
            var bloodCurrentFour = bloodCurrent - 30;
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentFour;
            console.log('small check when bloodpool is less than 40')
        } else if (bloodCurrent == '40') {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = 'X';
            console.log('small check when bloodpool is equal to 40')
        } else if (bloodCurrent >= 41) {
            document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector('.statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector('.statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector('.line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrent + '.  Time to think about your Humanity!';
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
    if (document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline') != null) {
        const bloodCurrentHover = document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML;
        console.log('blood value in hover = ' + bloodCurrentHover)
        if (bloodCurrentHover <= 9) {
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 9 in hover')
        } else if (bloodCurrentHover == 10) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 10 or X in hover')
        } else if (bloodCurrentHover < 20) {
            var bloodCurrentTwoHover = bloodCurrentHover - 10;
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentTwoHover;
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 20 in hover')
        } else if (bloodCurrentHover == 20) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'none';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 20 in hover')
        } else if (bloodCurrentHover < 30) {
            var bloodCurrentThreeHover = bloodCurrentHover - 20;
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentThreeHover;
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is less than 30 in hover')
        } else if (bloodCurrentHover == 30) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';;
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current4)').style.display = 'none';
            console.log('small check when bloodpool is equal to 30 in hover')
        } else if (bloodCurrentHover < 40) {
            var bloodCurrentFourHover = bloodCurrentHover - 30;
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = bloodCurrentFourHover;
            console.log('small check when bloodpool is less than 40 in hover')
        } else if (bloodCurrentHover == '40') {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current2)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current2 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current3 .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .property-container:has(> .blood_current3)').style.display = 'block';
            document.querySelector('.popover.hover-popover .line.blood_current4 .statblock-rendered-text-content.inline').innerHTML = 'X';
            console.log('small check when bloodpool is equal to 40 in hover')
        } else if (bloodCurrentHover >= 41) {
            document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML = 'X';
            document.querySelector('.popover.hover-popover .statblock-item-container.property-container:has(> .line.blood_current2)').innerHTML = '';
            document.querySelector('.popover.hover-popover .statblock-item-container.property-container:has(> .line.blood_current3)').innerHTML = '';
            document.querySelector('.popover.hover-popover .statblock-item-container.property-container:has(> .line.blood_current4)').innerHTML = '';
            document.querySelector('.popover.hover-popover .line.blood_per_turn').innerHTML = 'A current value of BLOOD cannot be more than 40. Now it is ' + bloodCurrentHover + '.  Time to think about your Humanity!';
            console.log('small check when bloodpool is greather than 40 in hover')
        } else {
            // do nothing
            console.log('something went wrong with bloodpool in hover')
        }
    }


    //  WEREWOLVES


    // define where to show merits and flaws, on the left or right - for WEREWOLVES
    if (document.querySelector('.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlaws = document.querySelector('.line.where-to-show-merits-and-flaws .statblock-rendered-text-content').innerHTML;
        console.log('where to show merits and flaws? left or right? = ' + whereToShowMeritsAndFlaws)
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
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var whereToShowMeritsAndFlaws_hover = document.querySelector('.popover.hover-popover .line.where-to-show-merits-and-flaws .statblock-rendered-text-content').innerHTML;
        switch (whereToShowMeritsAndFlaws_hover) {
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


    // set up some specific werewolf's characteristics to search
    const werewolfOptions = ['rage', 'gnosis', 'glory', 'honor', 'wisdom'];
    for (let y = 0; y < werewolfOptions.length; y++) {
        // if the corresponding block exists ...
        if (document.querySelector('.' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('the block for ' + werewolfOptions[y].toUpperCase() + ' was found');
            // looking for the simple dots
            optionValue = document.querySelector('.' + werewolfOptions[y] + '_main .statblock-rendered-text-content')
            // if they are here...
            if (optionValue != null) {
                // and euqal to 10
                if (optionValue.innerHTML == 10) {
                    // replace it with X
                    document.querySelector('.' + werewolfOptions[y] + '_main .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of ' + werewolfOptions[y].toUpperCase());
                }
                // if not 10 - aliright then
                else {
                    // console.log('simple dots of ' + werewolfOptions[y].toUpperCase() + ' are fine')
                }
            }
            // if there are no simple dots - there must be a Dice Roller
            else {
                var optionValue = document.querySelector('.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                // if euqal to 10
                if (optionValue == 10) {
                    // replace it with X
                    document.querySelector('.' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of ' + werewolfOptions[y].toUpperCase());
                }
                // if not 10 - aliright then
                else {
                    // console.log('Dice Roller of ' + werewolfOptions[y].toUpperCase() + ' is fine')
                }
            }
        }
        else if (document.querySelector('.wta-v20-werewolf') == null) {
            //nothing
        }
        else {
            console.log('c ' + werewolfOptions[y].toUpperCase() + ' что-то пошло не так')
        }
        // same code, but for a statblock in hover
        if (document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '-block .line.' + werewolfOptions[y] + '_main') != null) {
            // console.log('the block for ' + werewolfOptions[y].toUpperCase() + ' was found in hover');
            optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main .statblock-rendered-text-content')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of ' + werewolfOptions[y].toUpperCase() + ' in hover');
                }
                else {
                    // console.log('simple dots of ' + werewolfOptions[y].toUpperCase() + ' are fine in hover')
                }
            }
            else {
                var optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[y] + '_main span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of '  + werewolfOptions[y].toUpperCase() + ' in hover');
                }
                else {
                    // console.log('Dice Roller of ' + werewolfOptions[y].toUpperCase() + ' is fine in hover')
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

    // specific werewolf's characteristics, current values
    for (let z = 0; z < werewolfOptions.length; z++) {
        // если вообще есть соответствующий блок...
        if (document.querySelector('.' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('the block for current ' + werewolfOptions[z].toUpperCase() + ' was found');
            // ищем 
            optionValue = document.querySelector('.' + werewolfOptions[z] + '_current .statblock-rendered-text-content')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector('.' + werewolfOptions[z] + '_current .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of current ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('simple dots of current ' + werewolfOptions[z].toUpperCase() + ' are fine')
                }
            }
            else {
                var optionValue = document.querySelector('.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector('.' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of current ' + werewolfOptions[z].toUpperCase());
                }
                else {
                    // console.log('Dice Roller current of ' + werewolfOptions[z].toUpperCase() + ' is fine')
                }
            }
        }
        else if (document.querySelector('.wta-v20-werewolf') == null) {
            //nothing
        }
        else {
            console.log('с запасом ' + werewolfOptions[z].toUpperCase() + ' что-то пошло не так')
        }
        // same code, but for a statblock in hover
        if (document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '-block .line.' + werewolfOptions[z] + '_current') != null) {
            // console.log('the block for current ' + werewolfOptions[z].toUpperCase() + ' was found in hover');
            optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current .statblock-rendered-text-content')
            if (optionValue != null) {
                if (optionValue.innerHTML == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current .statblock-rendered-text-content').innerHTML = 'X';
                    // console.log('replacing 10 for the simple dots of current ' + werewolfOptions[z].toUpperCase() + ' in hover');
                }
                else {
                    // console.log('simple dots of current ' + werewolfOptions[z].toUpperCase() + ' are fine in hover')
                }
            }
            else {
                var optionValue = document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML;
                if (optionValue == 10) {
                    document.querySelector('.popover.hover-popover .' + werewolfOptions[z] + '_current span.dice-roller-result').innerHTML = 'X';
                    // console.log('replacing 10 for Dice Roller of current ' + werewolfOptions[z].toUpperCase()) + ' in hover';
                }
                else {
                    // console.log('Dice Roller current of  ' + werewolfOptions[z].toUpperCase() + ' is fine in hover')
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