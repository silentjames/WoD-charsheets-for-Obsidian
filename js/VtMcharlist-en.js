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
        const collapsedColumn = document.querySelector(activeTab + ' .collapse-container'); // define the area where a clan image should be placed 
        switch (clanName) {
            case 'Assamite':
                // corresponding css-class is assigned for each clan 
                collapsedColumn.classList.add('Assamite');
                // and clan weakness is also added
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessAssamite;
                // if note has 'csslacss: wod-header', clan logo will be displayed there, as background for general character info
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Assamite-background-logo)' };
                break;
            case 'Assamite Antitribu':
                collapsedColumn.classList.add('Assamite-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessAssamiteAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Assamite-Antitribu-background-logo)' };
                break;
            case 'Baali':
                collapsedColumn.classList.add('Baali');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessBaali;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Baali-background-logo)' };
                break;
            case 'Brujah':
                collapsedColumn.classList.add('Brujah');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessBrujah;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Brujah-background-logo)' };
                break;
            case 'Brujah Antitribu':
                collapsedColumn.classList.add('Brujah-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessBrujahAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Brujah-Antitribu-background-logo)' };
                break;
            case 'True Brujah':
                collapsedColumn.classList.add('True-Brujah');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessTrueBrujah;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--True-Brujah-background-logo)' };
                break;
            case 'Cappadocians':
                collapsedColumn.classList.add('Cappadocians');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessCappadocians;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Cappadocians-background-logo)' };
                break;
            case 'Caitiff':
                collapsedColumn.classList.add('Caitiff');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessCaitiff;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Caitiff-background-logo)' };
                break;
            case 'Pander':
                collapsedColumn.classList.add('Caitiff-Antitribu-Pander');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessCaitiffAntitribuPander;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Caitiff-Antitribu-Pander-background-logo)' };
                break;
            case 'Ventrue':
                collapsedColumn.classList.add('Ventrue');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessVentrue;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ventrue-background-logo)' };
                break;
            case 'Ventrue Antitribu':
                collapsedColumn.classList.add('Ventrue-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessVentrueAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ventrue-Antitribu-background-logo)' };
                break;
            case 'Gangrel':
                collapsedColumn.classList.add('Gangrel');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessGangrel;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Gangrel-background-logo)' };
                break;
            case 'Country Gangrel':
                collapsedColumn.classList.add('Country-Gangrel');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessCountryGangrel;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Country-Gangrel-background-logo)' };
                break;
            case 'City Gangrel':
                collapsedColumn.classList.add('City-Gangrel');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessCityGangrel;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--City-Gangrel-background-logo)' };
                break;
            case 'Giovanni':
                collapsedColumn.classList.add('Giovanni');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessGiovanni;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Giovanni-background-logo)' };
                break;
            case 'Daughters of Cacophony':
                collapsedColumn.classList.add('Daughters-of-Cacophony');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessDaughtersOfCacophony;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Daughters-of-Cacophony-background-logo)' };
                break;
            case 'Kiasyd':
                collapsedColumn.classList.add('Kiasyd');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessKiasyd;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Kiasyd-background-logo)' };
                break;
            case 'Lasombra':
                collapsedColumn.classList.add('Lasombra');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessLasombra;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Lasombra-background-logo)' };
                break;
            case 'Malkavian':
                collapsedColumn.classList.add('Malkavian');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessMalkavian;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Malkavian-background-logo)' };
                break;
            case 'Malkavian Antitribu':
                collapsedColumn.classList.add('Malkavian-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessMalkavianAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Malkavian-Antitribu-background-logo)' };
                break;
            case 'Nosferatu':
                collapsedColumn.classList.add('Nosferatu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessNosferatu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Nosferatu-background-logo)' };
                break;
            case 'Nosferatu Antitribu':
                collapsedColumn.classList.add('Nosferatu-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessNosferatuAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Nosferatu-Antitribu-background-logo)' };
                break;
            case ('Followers of Set'):
                collapsedColumn.classList.add('Followers-of-Set');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessFollowersOfSet;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Followers-of-Set-background-logo)' };
                break;
            case ('Serpents of Light'):
                collapsedColumn.classList.add('Serpents-of-Light');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessSerpentsOfLight;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Serpents-of-Light-background-logo)' };
                break;
            case ('Ravnos'):
                collapsedColumn.classList.add('Ravnos');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessRavnos;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ravnos-background-logo)' };
                break;
            case ('Ravnos Antitribu'):
                collapsedColumn.classList.add('Ravnos-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessRavnosAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ravnos-Antitribu-background-logo)' };
                break;
            case ('Salubri'):
                collapsedColumn.classList.add('Salubri');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessSalubri;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Salubri-background-logo)' };
                break;
            case ('Salubri Antitribu'):
                collapsedColumn.classList.add('Salubri-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessSalubriAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Salubri-Antitribu-background-logo)' };
                break;
            case ('Samedi'):
                collapsedColumn.classList.add('Samedi');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessSamedi;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Samedi-background-logo)' };
                break;
            case ('Toreador'):
                collapsedColumn.classList.add('Toreador');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessToreador;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Toreador-background-logo)' };
                break;
            case ('Toreador Antitribu'):
                collapsedColumn.classList.add('Toreador-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessToreadorAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Toreador-Antitribu-background-logo)' };
                break;
            case ('Tremere'):
                collapsedColumn.classList.add('Tremere');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessTremere;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Tremere-background-logo)' };
                break;
            case ('Tremere Antitribu'):
                collapsedColumn.classList.add('Tremere-Antitribu');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessTremereAntitribu;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Tremere-Antitribu-background-logo)' };
                break;
            case ('Tzimisce'):
                collapsedColumn.classList.add('Tzimisce');
                document.querySelector('.weakness .statblock-rendered-text-content').innerHTML = weaknessTzimisce;
                if (document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.view-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Tzimisce-background-logo)' };
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
    if (document.querySelector('.popover.hover-popover' + statblockVampireName + ' .line.clan .statblock-markdown > p') != null) {
        var clanNameHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .line.clan .statblock-markdown > p').innerHTML;
        const collapsedColumnHover = document.querySelector('.popover.hover-popover ' + statblockVampireName + ' .collapse-container'); // define the hover area for the background 
        switch (clanNameHover) {
            case ('Assamite'):
                collapsedColumnHover.classList.add('Assamite');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessAssamite;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Assamite-background-logo)' };
                break;
            case ('Assamite Antitribu'):
                collapsedColumnHover.classList.add('Assamite-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessAssamiteAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Assamite-Antitribu-background-logo)' };
                break;
            case 'Baali':
                collapsedColumnHover.classList.add('Baali');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessBaali;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Baali-background-logo)' };
                break;
            case 'Brujah':
                collapsedColumnHover.classList.add('Brujah');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessBrujah;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Brujah-background-logo)' };
                break;
            case 'Brujah Antitribu':
                collapsedColumnHover.classList.add('Brujah-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessBrujahAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Brujah-Antitribu-background-logo)' };
                break;
            case 'True Brujah':
                collapsedColumnHover.classList.add('True-Brujah');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessTrueBrujah;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--True-Brujah-background-logo)' };
                break;
            case 'Cappadocians':
                collapsedColumnHover.classList.add('Cappadocians');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessCappadocians;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Cappadocians-background-logo)' };
                break;
            case 'Caitiff':
                collapsedColumnHover.classList.add('Caitiff');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessCaitiff;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Caitiff-background-logo)' };
                break;
            case 'Pander':
                collapsedColumnHover.classList.add('Caitiff-Antitribu-Pander');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessCaitiffAntitribuPander;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Caitiff-Antitribu-Pander-background-logo)' };
                break;
            case 'Ventrue':
                collapsedColumnHover.classList.add('Ventrue');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessVentrue;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ventrue-background-logo)' };
                break;
            case 'Ventrue Antitribu':
                collapsedColumnHover.classList.add('Ventrue-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessVentrueAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ventrue-Antitribu-background-logo)' };
                break;
            case 'Gangrel':
                collapsedColumnHover.classList.add('Gangrel');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessGangrel;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Gangrel-background-logo)' };
                break;
            case 'Country Gangrel':
                collapsedColumnHover.classList.add('Country-Gangrel');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessCountryGangrel;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Country-Gangrel-background-logo)' };
                break;
            case 'City Gangrel':
                collapsedColumnHover.classList.add('City-Gangrel');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessCityGangrel;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--City-Gangrel-background-logo)' };
                break;
            case 'Giovanni':
                collapsedColumnHover.classList.add('Giovanni');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessGiovanni;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Giovanni-background-logo)' };
                break;
            case 'Daughters of Cacophony':
                collapsedColumnHover.classList.add('Daughters-of-Cacophony');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessDaughtersOfCacophony;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Daughters-of-Cacophony-background-logo)' };
                break;
            case 'Kiasyd':
                collapsedColumnHover.classList.add('Kiasyd');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessKiasyd;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Kiasyd-background-logo)' };
                break;
            case 'Lasombra':
                collapsedColumnHover.classList.add('Lasombra');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessLasombra;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Lasombra-background-logo)' };
                break;
            case 'Malkavian':
                collapsedColumnHover.classList.add('Malkavian');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessMalkavian;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Malkavian-background-logo)' };
                break;
            case 'Malkavian Antitribu':
                collapsedColumnHover.classList.add('Malkavian-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessMalkavianAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Malkavian-Antitribu-background-logo)' };
                break;
            case 'Nosferatu':
                collapsedColumnHover.classList.add('Nosferatu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessNosferatu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Nosferatu-background-logo)' };
                break;
            case 'Nosferatu Antitribu':
                collapsedColumnHover.classList.add('Nosferatu-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessNosferatuAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Nosferatu-Antitribu-background-logo)' };
                break;
            case ('Followers of Set'):
                collapsedColumnHover.classList.add('Followers-of-Set');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessFollowersOfSet;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Followers-of-Set-background-logo)' };
                break;
            case ('Serpents of Light'):
                collapsedColumnHover.classList.add('Serpents-of-Light');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessSerpentsOfLight;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Serpents-of-Light-background-logo)' };
                break;
            case ('Ravnos'):
                collapsedColumnHover.classList.add('Ravnos');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessRavnos;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ravnos-background-logo)' };
                break;
            case ('Ravnos Antitribu'):
                collapsedColumnHover.classList.add('Ravnos-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessRavnosAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Ravnos-Antitribu-background-logo)' };
                break;
            case ('Salubri'):
                collapsedColumnHover.classList.add('Salubri');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessSalubri;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Salubri-background-logo)' };
                break;
            case ('Salubri Antitribu'):
                collapsedColumnHover.classList.add('Salubri-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessSalubriAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Salubri-Antitribu-background-logo)' };
                break;
            case ('Samedi'):
                collapsedColumnHover.classList.add('Samedi');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessSamedi;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Samedi-background-logo)' };
                break;
            case ('Toreador'):
                collapsedColumnHover.classList.add('Toreador');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessToreador;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Toreador-background-logo)' };
                break;
            case ('Toreador Antitribu'):
                collapsedColumnHover.classList.add('Toreador-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessToreadorAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Toreador-Antitribu-background-logo)' };
                break;
            case ('Tremere'):
                collapsedColumnHover.classList.add('Tremere');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessTremere;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Tremere-background-logo)' };
                break;
            case ('Tremere Antitribu'):
                collapsedColumnHover.classList.add('Tremere-Antitribu');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessTremereAntitribu;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Tremere-Antitribu-background-logo)' };
                break;
            case ('Tzimisce'):
                collapsedColumnHover.classList.add('Tzimisce');
                document.querySelector('.popover.hover-popover .weakness .statblock-rendered-text-content').innerHTML = weaknessTzimisce;
                if (document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container') != null) { document.querySelector('.popover.hover-popover .markdown-embed-content:has(.wod-header) ' + statblockVampireName + ' .general-info-group > .statblock-inline-item.group-container').style.backgroundImage = 'var(--Tzimisce-background-logo)' };
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

    // Some various modifications for attributes, abilities and disciplines; mostly copied from Russian version, so some changes might be needed
    // Physical - Attributes
    if (document.querySelector('.strength')) {
        var valueStrength = document.querySelector('.strength .statblock-rendered-text-content');  // strength
        if (valueStrength != null) { // strength value always will be at least 1
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
        else { // same code, but for Dice Roller
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
        var valueDexterity = document.querySelector('.dexterity .statblock-rendered-text-content');  // dexterity
        if (valueDexterity != null) { // dexterity value always will be at least 1
            if (valueDexterity.innerHTML == '-') {
                document.querySelector('.dexterity .property-text').style.fontSize = '14px';
                document.querySelector('.dexterity .property-text').style.fontFamily = 'Marta';
                document.querySelector('.dexterity .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.dexterity .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueDexterity.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.dexterity .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueStamina = document.querySelector('.stamina .statblock-rendered-text-content');  // stamina
        if (valueStamina != null) { // stamina value always will be at least 1
            if (valueStamina.innerHTML == '-') {
                document.querySelector('.stamina .property-text').style.fontSize = '14px';
                document.querySelector('.stamina .property-text').style.fontFamily = 'Marta';
                document.querySelector('.stamina .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.stamina .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueStamina.innerHTML >= 9) { // if the value is 9 or more, dots will be replaced with digits
                document.querySelector('.stamina .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.stamina .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.stamina .statblock-rendered-text-content').style.margin = '-1px 0px 0px 0px';
            }
        }
        else { // same code, but for Dice Roller
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


    // Social Attributes
    if (document.querySelector('.charisma')) {
        var valueCharisma = document.querySelector('.charisma .statblock-rendered-text-content');  // charisma
        if (valueCharisma != null) { // charisma value always will be at least 1
            if (valueCharisma.innerHTML == '-') {
                document.querySelector('.charisma .property-text').style.fontSize = '14px';
                document.querySelector('.charisma .property-text').style.fontFamily = 'Marta';
                document.querySelector('.charisma .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.charisma .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueCharisma.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.charisma .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueManipulation = document.querySelector('.manipulation .statblock-rendered-text-content');  // manipulation
        if (valueManipulation != null) { // manipulation value always will be at least 1
            if (valueManipulation.innerHTML == '-') {
                document.querySelector('.manipulation .property-text').style.fontSize = '14px';
                document.querySelector('.manipulation .property-text').style.fontFamily = 'Marta';
                document.querySelector('.manipulation .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.manipulation .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueManipulation.innerHTML >= 9) { // if the value is 9 or more, dots will be replaced with digits
                document.querySelector('.manipulation .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.manipulation .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.manipulation .statblock-rendered-text-content').style.margin = '-1px 0px 0px 0px';
            }
        }
        else { // same code, but for Dice Roller
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
        var valueAppearance = document.querySelector('.appearance .statblock-rendered-text-content');  // appearance
        if (valueAppearance != null) { // appearance value always will be at least 1
            if (valueAppearance.innerHTML == '-') {
                document.querySelector('.appearance .statblock-rendered-text-content').innerHTML = 0;
                document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through'
            }
            if (valueAppearance.innerHTML == 0) { // strikethrough text if the value is 0 (hello Nosferatu)
                document.querySelector('.line.appearance .property-name').style.textDecoration = 'line-through'
            }
            if (valueAppearance.innerHTML > 5) { // if the value is greater than 5, dots will be replaced with digits
                document.querySelector('.appearance .property-text').style.fontSize = '14px';
                document.querySelector('.appearance .property-text').style.fontFamily = 'Marta';
                document.querySelector('.appearance .property-text').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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


    // Mental Attributes

    if (document.querySelector('.perception')) {
        var valuePerception = document.querySelector('.perception .statblock-rendered-text-content');  // perception
        if (valuePerception != null) { // perception value always will be at least 1
            if (valuePerception.innerHTML == '-') {
                document.querySelector('.perception .property-text').style.fontSize = '14px';
                document.querySelector('.perception .property-text').style.fontFamily = 'Marta';
                document.querySelector('.perception .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.perception .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valuePerception.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.perception .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueIntelligence = document.querySelector('.intelligence .statblock-rendered-text-content');  // intelligence
        if (valueIntelligence != null) { // intelligence value always will be at least 1
            if (valueIntelligence.innerHTML == '-') {
                document.querySelector('.intelligence .property-text').style.fontSize = '14px';
                document.querySelector('.intelligence .property-text').style.fontFamily = 'Marta';
                document.querySelector('.intelligence .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.intelligence .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueIntelligence.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.intelligence .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueWits = document.querySelector('.wits .statblock-rendered-text-content');  // wits
        if (valueWits != null) { // wits value always will be at least 1
            if (valueWits.innerHTML == '-') {
                document.querySelector('.wits .property-text').style.fontSize = '14px';
                document.querySelector('.wits .property-text').style.fontFamily = 'Marta';
                document.querySelector('.wits .property-text').style.margin = '-1px 0px 0px 0px'
                document.querySelector('.wits .statblock-rendered-text-content').innerHTML = 'must be at least 1'
            }
            if (valueWits.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.wits .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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


    // Abilities - Talents
    if (document.querySelector('.athletics')) {
        var valueAthletics = document.querySelector('.athletics .statblock-rendered-text-content');  // athletics
        if (valueAthletics != null) { // usual code
            if (valueAthletics.innerHTML == '-') {
                document.querySelector('.athletics .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAthletics.innerHTML == 10) { // replaces dots with digits for '10'
                document.querySelector('.athletics .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueAlertness = document.querySelector('.alertness .statblock-rendered-text-content');  // alertness
        if (valueAlertness != null) { // usual code
            if (valueAlertness.innerHTML == '-') {
                document.querySelector('.alertness .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAlertness.innerHTML == 10) { // replaces dots with digits for '10'
                document.querySelector('.alertness .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.alertness .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.alertness .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueBrawl = document.querySelector('.brawl .statblock-rendered-text-content');  // brawl
        if (valueBrawl != null) { // usual code
            if (valueBrawl.innerHTML == '-') {
                document.querySelector('.brawl .statblock-rendered-text-content').innerHTML = 1
            }
            if (valueBrawl.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.brawl .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueIntimidation = document.querySelector('.intimidation .statblock-rendered-text-content');  // intimidation
        if (valueIntimidation != null) { // usual code
            if (valueIntimidation.innerHTML == '-') {
                document.querySelector('.intimidation .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueIntimidation.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.intimidation .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueExpression = document.querySelector('.expression .statblock-rendered-text-content');  // expression
        if (valueExpression != null) { // usual code
            if (valueExpression.innerHTML == '-') {
                document.querySelector('.expression .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueExpression.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.expression .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueLeadership = document.querySelector('.leadership .statblock-rendered-text-content');  // leadership
        if (valueLeadership != null) { // usual code
            if (valueLeadership.innerHTML == '-') {
                document.querySelector('.leadership .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueLeadership.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.leadership .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueStreetwise = document.querySelector('.streetwise .statblock-rendered-text-content');  // streetwise
        if (valueStreetwise != null) { // usual code
            if (valueStreetwise.innerHTML == '-') {
                document.querySelector('.streetwise .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueStreetwise.innerHTML > 9) { // if the value is greater than 9, dots will be replaced with digits
                document.querySelector('.streetwise .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.streetwise .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.streetwise .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueSubterfuge = document.querySelector('.subterfuge .statblock-rendered-text-content');  // subterfuge
        if (valueSubterfuge != null) { // usual code
            if (valueSubterfuge.innerHTML == '-') {
                document.querySelector('.subterfuge .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueSubterfuge.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.subterfuge .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueAwareness = document.querySelector('.awareness .statblock-rendered-text-content');  // awareness
        if (valueAwareness != null) { // usual code
            if (valueAwareness.innerHTML == '-') {
                document.querySelector('.awareness .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAwareness.innerHTML > 7) { // if the value is greater than 7, dots will be replaced with digits
                document.querySelector('.awareness .dice-roller-result').style.fontSize = '14px';
                document.querySelector('.awareness .dice-roller-result').style.fontFamily = 'Marta';
                document.querySelector('.awareness .dice-roller-result').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueEmpathy = document.querySelector('.empathy .statblock-rendered-text-content');  // empathy
        if (valueEmpathy != null) { // usual code
            if (valueEmpathy.innerHTML == '-') {
                document.querySelector('.empathy .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueEmpathy.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.empathy .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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


    // Abilities - Skills

    if (document.querySelector('.drive')) {
        var valueDrive = document.querySelector('.drive .statblock-rendered-text-content');  // drive
        if (valueDrive != null) { // usual code
            if (valueDrive.innerHTML == '-') {
                document.querySelector('.drive .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueDrive.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.drive .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueLarceny = document.querySelector('.larceny .statblock-rendered-text-content');  // larceny
        if (valueLarceny != null) { // usual code
            if (valueLarceny.innerHTML == '-') {
                document.querySelector('.larceny .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueLarceny.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.larceny .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueSurvival = document.querySelector('.survival .statblock-rendered-text-content');  // survival
        if (valueSurvival != null) { // usual code
            if (valueSurvival.innerHTML == '-') {
                document.querySelector('.survival .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueSurvival.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.survival .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valuePerformance = document.querySelector('.performance .statblock-rendered-text-content');  // performance
        if (valuePerformance != null) { // usual code
            if (valuePerformance.innerHTML == '-') {
                document.querySelector('.performance .statblock-rendered-text-content').innerHTML = 0
            }
            if (valuePerformance.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.performance .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueAnimalken = document.querySelector('.animalken .statblock-rendered-text-content');  // animal ken
        if (valueAnimalken != null) { // usual code
            if (valueAnimalken.innerHTML == '-') {
                document.querySelector('.animalken .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAnimalken.innerHTML > 6) { // if the value is greater than 6, dots will be replaced with digits
                document.querySelector('.animalken .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.animalken .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.animalken .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueCrafts = document.querySelector('.crafts .statblock-rendered-text-content');  // crafts
        if (valueCrafts != null) { // usual code
            if (valueCrafts.innerHTML == '-') {
                document.querySelector('.crafts .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueCrafts.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.crafts .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueStealth = document.querySelector('.stealth .statblock-rendered-text-content');  // stealth
        if (valueStealth != null) { // usual code
            if (valueStealth.innerHTML == '-') {
                document.querySelector('.stealth .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueStealth.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.stealth .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueFirearms = document.querySelector('.firearms .statblock-rendered-text-content');  // firearms
        if (valueFirearms != null) { // usual code
            if (valueFirearms.innerHTML == '-') {
                document.querySelector('.firearms .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueFirearms.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.firearms .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueMelee = document.querySelector('.melee .statblock-rendered-text-content');  // melee
        if (valueMelee != null) { // usual code
            if (valueMelee.innerHTML == '-') {
                document.querySelector('.melee .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueMelee.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.melee .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueEtiquette = document.querySelector('.etiquette .statblock-rendered-text-content');  // etiquette
        if (valueEtiquette != null) { // usual code
            if (valueEtiquette.innerHTML == '-') {
                document.querySelector('.etiquette .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueEtiquette.innerHTML == 10) { // replaces 10 with X
                document.querySelector('.etiquette .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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


    // Abilities - Knowledges

    if (document.querySelector('.academics')) {
        var valueAcademics = document.querySelector('.academics .statblock-rendered-text-content');  // academics
        if (valueAcademics != null) { // usual code
            if (valueAcademics.innerHTML == '-') {
                document.querySelector('.academics .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueAcademics.innerHTML > 8) { // if the value is greater than 8, dots will be replaced with digits
                document.querySelector('.academics .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.academics .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.academics .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueScience = document.querySelector('.science .statblock-rendered-text-content');  // science
        if (valueScience != null) { // usual code
            if (valueScience.innerHTML == '-') {
                document.querySelector('.science .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueScience.innerHTML > 8) { // if the value is greater than 8, dots will be replaced with digits
                document.querySelector('.science .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.science .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.science .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueLaw = document.querySelector('.law .statblock-rendered-text-content');  // law
        if (valueLaw != null) { // usual code
            if (valueLaw.innerHTML == '-') {
                document.querySelector('.law .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueLaw.innerHTML == 10) {
                document.querySelector('.law .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueComputer = document.querySelector('.computer .statblock-rendered-text-content');  // computer
        if (valueComputer != null) { // usual code
            if (valueComputer.innerHTML == '-') {
                document.querySelector('.computer .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueComputer.innerHTML > 8) { // if the value is greater than 8, dots will be replaced with digits
                document.querySelector('.computer .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.computer .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.computer .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueMedicine = document.querySelector('.medicine .statblock-rendered-text-content');  // medicine
        if (valueMedicine != null) { // usual code
            if (valueMedicine.innerHTML == '-') {
                document.querySelector('.medicine .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueMedicine.innerHTML == 10) {
                document.querySelector('.medicine .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueOccult = document.querySelector('.occult .statblock-rendered-text-content');  // occult
        if (valueOccult != null) { // usual code
            if (valueOccult.innerHTML == '-') {
                document.querySelector('.occult .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueOccult.innerHTML == 10) {
                document.querySelector('.occult .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valuePolitics = document.querySelector('.politics .statblock-rendered-text-content');  // politics
        if (valuePolitics != null) { // usual code
            if (valuePolitics.innerHTML == '-') {
                document.querySelector('.politics .statblock-rendered-text-content').innerHTML = 0
            }
            if (valuePolitics.innerHTML == 10) {
                document.querySelector('.politics .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueInvestigation = document.querySelector('.investigation .statblock-rendered-text-content');  // investigation
        if (valueInvestigation != null) { // usual code
            if (valueInvestigation.innerHTML == '-') {
                document.querySelector('.investigation .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueInvestigation.innerHTML > 8) { // if the value is greater than 8, dots will be replaced with digits
                document.querySelector('.investigation .statblock-rendered-text-content').style.fontSize = '14px';
                document.querySelector('.investigation .statblock-rendered-text-content').style.fontFamily = 'Marta';
                document.querySelector('.investigation .statblock-rendered-text-content').style.margin = '-2px 0px 0px 0px'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueFinance = document.querySelector('.finance .statblock-rendered-text-content');  // finance
        if (valueFinance != null) { // usual code
            if (valueFinance.innerHTML == '-') {
                document.querySelector('.finance .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueFinance.innerHTML == 10) {
                document.querySelector('.finance .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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
        var valueTechnology = document.querySelector('.technology .statblock-rendered-text-content');  // technology
        if (valueTechnology != null) { // usual code
            if (valueTechnology.innerHTML == '-') {
                document.querySelector('.technology .statblock-rendered-text-content').innerHTML = 0
            }
            if (valueTechnology.innerHTML == 10) {
                document.querySelector('.technology .statblock-rendered-text-content').innerHTML = 'X'
            };
        }
        else { // same code, but for Dice Roller
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



    // Disciplines
    // Some high values will be transformed from dots to digits, based on the lenght of a disciple's name, to keep columns width.
    if (document.querySelector('.discipline1_name .statblock-rendered-text-content')) {
        var disciplinesList = document.querySelectorAll('.disciplines-column .statblock-rendered-text-content');
        // console.log(disciplinesList);
        for (let i = 1; i < disciplinesList.length; i += 2) {
            if (disciplinesList[i].innerHTML.startsWith('<a data')) {
                if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
            }
            else if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
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
                if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
                if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
                    disciplinesList[i + 1].style.fontSize = '14px';
                    disciplinesList[i + 1].style.fontFamily = 'Marta';
                    disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
                }
            }
            else if (disciplinesList[i].innerText.length >= 11 && disciplinesList[i + 1].innerText > 9) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 12 && disciplinesList[i + 1].innerText > 8) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 13 && disciplinesList[i + 1].innerText > 7) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 14 && disciplinesList[i + 1].innerText > 6) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
            if (disciplinesList[i].innerText.length >= 15 && disciplinesList[i + 1].innerText > 5) {
                disciplinesList[i + 1].style.fontSize = '14px';
                disciplinesList[i + 1].style.fontFamily = 'Marta';
                disciplinesList[i + 1].style.margin = '-2px 0px 0px 0px'
            }
        }
    }




    // define where to show merits and flaws, on the left or right - for WEREWOLVES
    if (document.querySelector('.merits-and-flaws-column-left .line.where-to-show-merits-and-flaws') != null) {
        var WhereToShowMeritsAndFlaws = document.querySelector('.line.where-to-show-merits-and-flaws .statblock-rendered-text-content').innerHTML;
        console.log('where to show merits and flaws? left or right? = ' + WhereToShowMeritsAndFlaws)
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






    // bearing and it's value are displayed based on the path and its value
    if (document.querySelector('.line.path .statblock-rendered-text-content') != null) {
        const path = document.querySelector('.path .statblock-rendered-text-content'); // find the path, is it the humanity or not?
        if (path === null) { // if the path is not presented...
            document.querySelector('.bearing').style.display = 'none'
        } // ...bearing line will be hidden
        else if (path.innerHTML != ('HUMANITY')) { // if the path isn't the humanity...
            document.querySelector('.bearing').style.display = 'none'; // ...bearing line will be hidden
            var pathModifier = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML; // let's get the value of non-humanity path
            if (pathModifier = 10) { // replace 10 with X
                document.querySelector('.path_value .statblock-rendered-text-content').innerHTML = 'X';
            }
        }
        else {
            var pathModifier = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML; // let's get the value of humanity path
            switch (pathModifier) {
                case '10': // replace 10 with X
                    document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML = 'X';
                case 'X': // and then correspinding bearing values will be assigned
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
        const pathHover = document.querySelector('.popover.hover-popover .path .statblock-rendered-text-content'); // find the path, is it the humanity or not?
        console.log(pathHover + 'is there the path in hover?')
        if (pathHover === null) { // if the path is not presented...
            document.querySelector('.popover.hover-popover .line.bearing').style.display = 'none'
        } // ...bearing line will be hidden
        else if (pathHover.innerHTML != ('ЧЕЛОВЕЧНОСТЬ')) { // if the path isn't the humanity...
            document.querySelector('.popover.hover-popover .bearing').style.display = 'none'; // ...bearing line will be hidden
            var pathModifierHover = document.querySelector('.line.path_value .statblock-rendered-text-content').innerHTML; // let's get the value of non-humanity path
            if (pathModifierHover = 10) {
                document.querySelector('.popover.hover-popover .path_value .statblock-rendered-text-content').innerHTML = 'X';
            }
        }
        else {
            var pathModifierHover = document.querySelector('.popover.hover-popover .line.path_value .statblock-rendered-text-content').innerHTML; // let's get the value of humanity path
            switch (pathModifierHover) {
                case '10': // replace 10 with X
                    document.querySelector('.popover.hover-popover .line.path_value .statblock-rendered-text-content').innerHTML = 'X';
                case 'X': // and then correspinding bearing values will be assigned
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( -2 )'; break;
                case '9':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( -1 )'; break;
                case '8':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( -1 )'; break;
                case '7':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '6':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '5':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '4':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy'; break;
                case '3':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( +1 )'; break;
                case '2':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( +1 )'; break;
                case '1':
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'Normalcy ( +2 )'; break;
                default:
                    document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML = 'You are the Beast!';
                    if (document.querySelector('.popover.hover-popover .line.bearing .statblock-rendered-text-content').innerHTML === null) {
                        console.log('bearing line in hover is missing')
                    }
            }
        }
    }


    // Replace more 10s with Xs
    if (document.querySelector('.willpower-block .line.willpower_main') != null) {
        var willpowerValue = document.querySelector('.willpower_main .statblock-rendered-text-content')  // willpower
        if (willpowerValue != null) { // willpower 
            if (willpowerValue.innerHTML == 10) {
                document.querySelector('.willpower_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            willpowerValue = document.querySelector('.willpower_main span.dice-roller-result').innerHTML;
            if (willpowerValue == 10) {
                document.querySelector('.willpower_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with willpower')
    }
    // same code, but for hover
    if (document.querySelector('.popover.hover-popover .willpower-block .line.willpower_main') != null) {
        var willpowerValue = document.querySelector('.popover.hover-popover .willpower_main .statblock-rendered-text-content')  // willpower
        if (willpowerValue != null) { // willpower 
            if (willpowerValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .willpower_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // for dice roller
            willpowerValue = document.querySelector('.popover.hover-popover .willpower_main span.dice-roller-result').innerHTML;
            if (willpowerValue == 10) {
                document.querySelector('.popover.hover-popover .willpower_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with willpower in hover')
    }


    if (document.querySelector('.willpower-block .line.willpower_current') != null) {
        var willpowerCurrentValue = document.querySelector('.willpower_current .statblock-rendered-text-content')  // willpower pool
        if (willpowerCurrentValue != null) { // willpower pool 
            if (willpowerCurrentValue.innerHTML == 10) {
                document.querySelector('.willpower_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            willpowerCurrentValue = document.querySelector('.willpower_current span.dice-roller-result').innerHTML;
            if (willpowerCurrentValue == 10) {
                document.querySelector('.willpower_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .willpower-block .line.willpower_current') != null) {
        var willpowerCurrentValue = document.querySelector('.popover.hover-popover .willpower_current .statblock-rendered-text-content')  // willpower pool
        if (willpowerCurrentValue != null) { // willpower pool 
            if (willpowerCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .willpower_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            willpowerCurrentValue = document.querySelector('.popover.hover-popover .willpower_current span.dice-roller-result').innerHTML;
            if (willpowerCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .willpower_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
    }


    // The great recalculation of blood, to use one parameter\number - then show all the needen line and hide others
    if (document.querySelector('.line.blood') != null) {
        const bloodCurrent = document.querySelector('.line.blood .statblock-rendered-text-content.inline').innerHTML; // first line of blood
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
        const bloodCurrentHover = document.querySelector('.popover.hover-popover .line.blood .statblock-rendered-text-content.inline').innerHTML; // first line of blood
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
    if (document.querySelector('.rage-block .line.rage_main') != null) {
        var rageValue = document.querySelector('.rage_main .statblock-rendered-text-content')  // Rage
        if (rageValue != null) { // usual code 
            if (rageValue.innerHTML == 10) {
                document.querySelector('.rage_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
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
        console.log('something went wrong with the main rage')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .rage-block .line.rage_main') != null) {
        var rageValue = document.querySelector('.popover.hover-popover .rage_main .statblock-rendered-text-content')  // rage
        if (rageValue != null) { // usual code 
            if (rageValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .rage_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
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
        console.log('something went wrong with the main rage in the hover')
    }


    if (document.querySelector('.rage-block .line.rage_current') != null) {
        var rageCurrentValue = document.querySelector('.rage_current .statblock-rendered-text-content')  // rage pool
        if (rageCurrentValue != null) { // usual code 
            if (rageCurrentValue.innerHTML == 10) {
                document.querySelector('.rage_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            rageCurrentValue = document.querySelector('.rage_current span.dice-roller-result').innerHTML;
            if (rageCurrentValue == 10) {
                document.querySelector('.rage_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current rage')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .rage-block .line.rage_current') != null) {
        var rageCurrentValue = document.querySelector('.popover.hover-popover .rage_current .statblock-rendered-text-content')  // rage pool
        if (rageCurrentValue != null) { // usual code 
            if (rageCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .rage_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            rageCurrentValue = document.querySelector('.popover.hover-popover .rage_current span.dice-roller-result').innerHTML;
            if (rageCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .rage_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current rage in the hover')
    }


    if (document.querySelector('.gnosis-block .line.gnosis_main') != null) {
        var gnosisValue = document.querySelector('.gnosis_main .statblock-rendered-text-content')  // Gnosis
        if (gnosisValue != null) { // usual code 
            if (gnosisValue.innerHTML == 10) {
                document.querySelector('.gnosis_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            gnosisValue = document.querySelector('.gnosis_main span.dice-roller-result').innerHTML;
            if (gnosisValue == 10) {
                document.querySelector('.gnosis_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main gnosis')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .gnosis-block .line.gnosis_main') != null) {
        var gnosisValue = document.querySelector('.popover.hover-popover .gnosis_main .statblock-rendered-text-content')  // gnosis main
        if (gnosisValue != null) { // usual code 
            if (gnosisValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .gnosis_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            gnosisValue = document.querySelector('.popover.hover-popover .gnosis_main span.dice-roller-result').innerHTML;
            if (gnosisValue == 10) {
                document.querySelector('.popover.hover-popover .gnosis_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main gnosis in the hover')
    }

    if (document.querySelector('.gnosis-block .line.gnosis_current') != null) {
        var gnosisCurrentValue = document.querySelector('.gnosis_current .statblock-rendered-text-content')  // gnosis pool
        if (gnosisCurrentValue != null) { // usual code 
            if (gnosisCurrentValue.innerHTML == 10) {
                document.querySelector('.gnosis_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            gnosisCurrentValue = document.querySelector('.gnosis_current span.dice-roller-result').innerHTML;
            if (gnosisCurrentValue == 10) {
                document.querySelector('.gnosis_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current gnosis')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .gnosis-block .line.gnosis_current') != null) {
        var gnosisCurrentValue = document.querySelector('.popover.hover-popover .gnosis_current .statblock-rendered-text-content')  // gnosis pool
        if (gnosisCurrentValue != null) { // usual code 
            if (gnosisCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .gnosis_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            gnosisCurrentValue = document.querySelector('.popover.hover-popover .gnosis_current span.dice-roller-result').innerHTML;
            if (gnosisCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .gnosis_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main gnosis in the hover')
    }


    if (document.querySelector('.glory-block .line.glory_main') != null) {
        var gloryValue = document.querySelector('.glory_main .statblock-rendered-text-content')  // Glory
        if (gloryValue != null) { // usual code 
            if (gloryValue.innerHTML == 10) {
                document.querySelector('.glory_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            gloryValue = document.querySelector('.glory_main span.dice-roller-result').innerHTML;
            if (gloryValue == 10) {
                document.querySelector('.glory_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main glory')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .glory-block .line.glory_main') != null) {
        var gloryValue = document.querySelector('.popover.hover-popover .glory_main .statblock-rendered-text-content')  // Glory
        if (gloryValue != null) { // usual code 
            if (gloryValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .glory_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            gloryValue = document.querySelector('.popover.hover-popover .glory_main span.dice-roller-result').innerHTML;
            if (gloryValue == 10) {
                document.querySelector('.popover.hover-popover .glory_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main glory in the hover')
    }


    if (document.querySelector('.glory-block .line.glory_current') != null) {
        var gloryCurrentValue = document.querySelector('.glory_current .statblock-rendered-text-content')  // glory pool
        if (gloryCurrentValue != null) { // usual code 
            if (gloryCurrentValue.innerHTML == 10) {
                document.querySelector('.glory_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            gloryCurrentValue = document.querySelector('.glory_current span.dice-roller-result').innerHTML;
            if (gloryCurrentValue == 10) {
                document.querySelector('.glory_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current glory')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .glory-block .line.glory_current') != null) {
        var gloryCurrentValue = document.querySelector('.popover.hover-popover .glory_current .statblock-rendered-text-content')  // glory pool
        if (gloryCurrentValue != null) { // usual code 
            if (gloryCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .glory_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            gloryCurrentValue = document.querySelector('.popover.hover-popover .glory_current span.dice-roller-result').innerHTML;
            if (gloryCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .glory_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current glory in the hover')
    }


    if (document.querySelector('.honor-block .line.honor_main') != null) {
        var honorValue = document.querySelector('.honor_main .statblock-rendered-text-content')  // Honor
        if (honorValue != null) { // usual code 
            if (honorValue.innerHTML == 10) {
                document.querySelector('.honor_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            honorValue = document.querySelector('.honor_main span.dice-roller-result').innerHTML;
            if (honorValue == 10) {
                document.querySelector('.honor_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main honor')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .honor-block .line.honor_main') != null) {
        var honorValue = document.querySelector('.popover.hover-popover .honor_main .statblock-rendered-text-content')  // Honor
        if (honorValue != null) { // usual code 
            if (honorValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .honor_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            honorValue = document.querySelector('.popover.hover-popover .honor_main span.dice-roller-result').innerHTML;
            if (honorValue == 10) {
                document.querySelector('.popover.hover-popover .honor_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main honor in the hover')
    }


    if (document.querySelector('.honor-block .line.honor_current') != null) {
        var honorCurrentValue = document.querySelector('.honor_current .statblock-rendered-text-content')  // honor pool
        if (honorCurrentValue != null) { // usual code 
            if (honorCurrentValue.innerHTML == 10) {
                document.querySelector('.honor_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            honorCurrentValue = document.querySelector('.honor_current span.dice-roller-result').innerHTML;
            if (honorCurrentValue == 10) {
                document.querySelector('.honor_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current glory')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .honor-block .line.honor_current') != null) {
        var honorCurrentValue = document.querySelector('.popover.hover-popover .honor_current .statblock-rendered-text-content')  // honor pool
        if (honorCurrentValue != null) { // usual code 
            if (honorCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .honor_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            honorCurrentValue = document.querySelector('.popover.hover-popover .honor_current span.dice-roller-result').innerHTML;
            if (honorCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .honor_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current glory in the hover')
    }


    if (document.querySelector('.wisdom-block .line.wisdom_main') != null) {
        var wisdomValue = document.querySelector('.wisdom_main .statblock-rendered-text-content')  // Wisdom
        if (wisdomValue != null) { // usual code 
            if (wisdomValue.innerHTML == 10) {
                document.querySelector('.wisdom_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            wisdomValue = document.querySelector('.wisdom_main span.dice-roller-result').innerHTML;
            if (wisdomValue == 10) {
                document.querySelector('.wisdom_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main wisdom')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .wisdom-block .line.wisdom_main') != null) {
        var wisdomValue = document.querySelector('.popover.hover-popover .wisdom_main .statblock-rendered-text-content')  // Wisdom
        if (wisdomValue != null) { // usual code 
            if (wisdomValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .wisdom_main .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            wisdomValue = document.querySelector('.popover.hover-popover .wisdom_main span.dice-roller-result').innerHTML;
            if (wisdomValue == 10) {
                document.querySelector('.popover.hover-popover .wisdom_main span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the main wisodm in the hover')
    }


    if (document.querySelector('.wisdom-block .line.wisdom_current') != null) {
        var wisdomCurrentValue = document.querySelector('.wisdom_current .statblock-rendered-text-content')  // wisdom pool
        if (wisdomCurrentValue != null) { // usual code 
            if (wisdomCurrentValue.innerHTML == 10) {
                document.querySelector('.wisdom_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // same code, but for Dice Roller
            wisdomCurrentValue = document.querySelector('.wisdom_current span.dice-roller-result').innerHTML;
            if (wisdomCurrentValue == 10) {
                document.querySelector('.wisdom_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current wisdom')
    }
    // same code, but for a statblock in hover
    if (document.querySelector('.popover.hover-popover .wisdom-block .line.wisdom_current') != null) {
        var wisdomCurrentValue = document.querySelector('.popover.hover-popover .wisdom_current .statblock-rendered-text-content')  // wisdom pool
        if (wisdomCurrentValue != null) { // usual code 
            if (wisdomCurrentValue.innerHTML == 10) {
                document.querySelector('.popover.hover-popover .wisdom_current .statblock-rendered-text-content').innerHTML = 'X'
            }
        }
        else { // usual code
            wisdomCurrentValue = document.querySelector('.popover.hover-popover .wisdom_current span.dice-roller-result').innerHTML;
            if (wisdomCurrentValue == 10) {
                document.querySelector('.popover.hover-popover .wisdom_current span.dice-roller-result').innerHTML = 'X'
            };
        }
    }
    else {
        //nothing
        console.log('something went wrong with the current wisdom in the hover')
    }

















})   