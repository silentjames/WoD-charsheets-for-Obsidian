Some character sheets for World of Darkness (v20) characters, based on [Fantasy Statblock](https://github.com/javalent/fantasy-statblocks) and [Obsidian](https://github.com/obsidianmd).

First of all, examples in English and Russian:

<img src="https://user-images.githubusercontent.com/12649819/234894483-841cea0d-06ba-4732-a3d7-efeb48124689.png" width="400">   <img src="https://user-images.githubusercontent.com/12649819/234894513-43be6afb-3baf-44f6-bf9f-04ff2cc7bf69.png" width="424.685">

### General things
This statblock is based on custom layout (obviously), css snippet and js-script. To run the script, you’ll need Dataview plugin. I’ll describe css and js later. And one final warning – I’m not a software developer at all, so css and js are full of sh#tcode :)

### Some restrictions
This was started as small project for me and my friends only, so the final result is not really customisable at some points. For example, it’s made for 680px width, and cannot be split into two or more columns. On the other hand, I did my best to hide some rows or blocks if they are empty and/or not important – but you can change it in the layout.
I also based the design on the official Russian version of the character sheet. In general, Russian is 30-40% longer that English, so the statblock could have been not so width… But not yet.

### Layout + CSS 
- before the layout, you must put a piece of code for DataviewJS: `dv.executeJs(await dv.io.load("/z_Z manuals/VtMcharlist-en.js"))` with the path to the js-file **inside your Obsidian vault**;
- two images (instead of one) can be added, with subtexts;
- “Character sheet” row is collapsible area, closed by default;
- the rule replaced with arrow lines;
- internal links inside some lines (such as nature, demeanor, disciplines, flaws and merits) will be displayed as simple text, but still work;
- all dots and squares are separate custom fonts. Values from 0 to 9 can be displayed (in the most common cases, 5 or less are enough), but for "10" you must type "X" (if you don’t want to use js-script).

### Javascript
What js-script does:
- you can add the name of your character in H2 above the statblock, and it will be hidden in reading view – but remains in the outline panel;
- change the clan image background according to the “Clan” property;
- change “Blood per Turn” value according to “Generation” property;
- all Attributes are equal to 1 by default; 
- if some attributes/abilities/disciplines have more than 5 dots, dots could be replaced with simple numbers, according to the length of the corresponding name; 
- if the path of your Kindred is Humanity, “Normalcy“ will be added as the beading, with corresponding modifier. If it isn't, bearing line will be hidden;
- you can now set "10" property value as, well, "10", not "X";
- “Bloodpool” area will add new lines of squares if there are more blood than 10, 20, etc, up to 40 as max;
- “Weakness” is also filled automatically, according to the clan.
In general, almost all the things could be done manually (except clan image, I suppose), so the script just automates something.

### Third-party content
As already been said, it’s based on Russian translation of the game, and because of that I used Marta and Trajan Pro 3 fonts. Background image is taken from VtM Style Guide from Storytellers Vault; all the dots, squares, damage symbols are also separate fonts; arrows and clan’s logos are vector images. Everything was included in css file as base64 strings – but I’m not sure what can I share because of legal reasons. 
So I removed some “sensitive” content, but there is still a place for them in the files.

### Fonts

In previous paragraph I mentioned that some fonts, Marta and Trajan Pro 3, were used in this statblock; you can also see them on the screenshots. Of course, they can't be added here because of legal reasons.
But this statblock supports the great [Style Settings plugin](https://github.com/mgmeyers/obsidian-style-settings/), and if you have these fonts installed in your system, you can just select them in the settings. 
For Marta you'll need normal and italic, for Trajan Pro 3 - normal, bold and black.

![](/imgs/style%20settings.png)

### Epilogue 
Well, that’s all, folks! Please let me know what do you think about this layout, and how it can be improved. For example, still not sure about the way the Specialties are displayed, but can’t think up something better.
I also a little bit sad that, in general, this layout is just an info page. Storytelling System assumes that you combine two of your stats, Intelligence + Academics, for example, and then roll all the dice. If you know how it can be achieved – please let me know!