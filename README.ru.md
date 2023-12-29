Несколько частично интерактивных бланков персонажей старого Мира Тьмы (для двадцатой редакции, она же v20, она же "Классические правила"). Этакое дополнение, предназначенное для [Fantasy Statblocks](https://github.com/javalent/fantasy-statblocks) и [Obsidian](https://github.com/obsidianmd).
На данный момент, доступны бланки для **вампиров**, **смертных**, **правительственных агентов** (рескин смертных) и **оборотней** (в разработке).

# Общее

## Вампиры
Для начала, примеры бланков для вампиров, на русском и английском:

<p align="center">
    <img src='imgs/en_vampire.png' width='395'>
    <img src='imgs/ru_vampire.png' width='428'>
</p>

Остальные персонажи доступны пока только на русском языке - но это можно изменить в ваших настройках Fantasy Statblocks, а после отправить мне пулл-реквест. Если возникнут вопросы - обращайтесь!

## Оборотни, смертные и агенты

Под спойлером - остальные примеры.

<details>
    <summary>Оборотни (в разработке)</summary>
        <p align="center">
            <img src='imgs/ru_werewolf.png' width='450'>
        </p>
</details>

<details>
    <summary>Смертные</summary>
        <p align="center">
            <img src='imgs/ru_mortal.png' width='450'>
        </p>
</details>

<details>
    <summary>Правительственные агенты</summary>
        <p align="center">
            <img src='imgs/ru_agent.png' width='450'>
        </p>
</details>

## Заголовки/шапки

Также добавил возможность использовать только верхнюю часть листа как "шапку" заметки, если лист целиком по каким-то причинам не нужен. Просто оставьте пустыми все поля, за исключением "Основной информации", или добавьте `cssclasses: wod-header` к свойствам заметки.

<p align="center">
    <img align="center" src='imgs/header_vampire.png' width='395'>
    <img align="center" src='imgs/header_werewolf.png' width='395'>
</p>
<p align="center">
    <img align="center" src='imgs/header_mortal.png' width='395'>
    <img align="center" src='imgs/header_agent.png' width='395'>
</p>

# Описание

Статблок состоит из трех компонентов: сам файл статблока в формате JSON, CSS-сниппет и JS-скрипт.

**JSON + CSS**
<br>

- файл CSS содержит всю графику - красивые текстуры фонов, логотипы кланов, и так далее;
- все точки и квадраты - это отдельные кастомные шрифты (тоже хранятся внутри CSS), в которых заменены цифры. Соответственно, значения от 0 до 9 отображаются с легкостью (а в большинстве случаев нужно 5 или меньше); но вместо 10 нужно использовать Х, если не планируете запускать JS-скрипт;
- есть поддержка плагина [Dice Roller](https://github.com/javalent/dice-roller);
- в качестве значения для натуры, маски, амплуа, для названий дисциплин, достоинств и недостатков можно указывать ссылки на заметки внутри хранилища.

**JS-скрипт**
<br>

Он нужен для упрощения работы с заполнением листа, автоматизации некоторых полей, и визуальных красивостей:
- перед статблоком можно добавить заголовок второго уровня (H2), совпадающий с именем персонажа - сам заголовок будет скрыт, но останется в оглавлении;
- логотип клана появится на фоне, в соответствии с полем "Клан";
- аналогично будет заполнен и блок "Изъян";
- поле "Предел траты в ход" прописывается автоматически, в зависимости от значения в поле "Поколение";
- все Характеристики по умолчанию равны 1;
- если у параметра слишком длинное имя, а его значение превышает 5, точки могут быть заменены на цифры, чтобы дизайн не корежило;
- если у вампира указан путь "Человечность", будет автоматически укзаан столп "Нормальность" и добавлен модификатор социальных взаимодействий; 
- можно спокойно писать 10 вместо Х и не заморачиваться;
- в "Запас крови" будут добавляться новые строки, если значение больше 10, 20, и так далее. Максимум - 40; 

Почти все из вышеперечисленного можно заполнить руками (кроме логотипа клана), так что скрипт нужен лишь для удобства.

> Для запуска скрипта нужен плагин [Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview). 

За основу взят дизайн официальной русскоязычной версии бланков персонажа, выпущенных Студией 101.

## Некоторые ограничения
Все это началось как маленький проект для себя и группы друзей, с которыми мы играем в Мир Тьмы, так что на первом месте стоит, пожалуй, мое собственное удобство и интерес. Поэтому простор для кастомизации не так широк. Например, фиксированная ширина бланка - 680px, бланк нельзя разбить на несколько столбцов (верней, можно, но вся верстка поедет). С другой стороны, большинство полей скрываются, если не заполнены, так что бланк в любом случае не займет много места.

Также стоит упомянуть, что здесь полно говнокода :) Это лишь мое хобби. Если есть замечания - пишите, или присылайте пулл-реквесты.

# Как пользоваться

What should you do to start using these statblocks?

1. Download JSON file for a needed character, `world-of-darkness-statblocks.css`, and `WoDCharsheets.js` (or `WoDCharsheets-en.js` for English version);
2. Install [Fantasy Statblocks](https://github.com/javalent/fantasy-statblocks) plugin and enable it;
3. Go to Fantasy Statblocks and upload the JSON using the "Import From JSON" button. The new layout must appear in the list below.
4. Copy `world-of-darkness-statblocks.css` into your Obsidian "snippets" folder, then go to Obsidian's Appearance settings and enable it;
5. Copy `WoDCharsheets.js` (or `WoDCharsheets-en.js`) **into the folder inside your Obsidian vault**;
6. Install [Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview) plugin and enable it;
7. Create a new note;
8. At the beginning of a note, add:
````
```dataviewjs
dv.executeJs(await dv.io.load("/z_Z manuals/WoDCharsheets.js"))
```
````
`"/z_Z manuals/WoDCharsheets.js"` - it's my path to the JS file inside my Obsidian vault, you must replace it with your own.

1. Copy the blank layout of your character from below and paste it into your note;
2.    Done! Now you can start filling a charsheet!

<p align="center">
    <img src='imgs/dataview_example.png' width='650'>
</p>

<details>
    <summary>Вампир (EN)</summary>

    ```statblock
    columnWidth: 680
    column: 1
    layout: VtM v20 Vampire
    dice: true

                            #### GENERAL INFO ####

    name: 
    desc: 
    clan: 
    generation: 
    sire: 
    nature: 
    demeanor: 
    concept: 

    img: 
    img_title: 
    img_alt: 
    img_alt_title: 

                            #### Attributes ####

    Attributes: Attributes

    Physical: Physical
    Strength: 0
    Dexterity: 0
    Stamina: 0

    Social: Social
    Charisma: 0
    Manipulation: 0
    Appearance: 0

    Mental: Mental
    Perception: 0
    Intelligence: 0
    Wits: 0

                                #### Abilities ####

    Abilities: Abilities

    Talents: Talents
    alertness: 0
    athletics: 0
    awareness: 0
    brawl: 0
    empathy: 0
    expression: 0
    intimidation: 0
    leadership: 0
    streetwise: 0
    subterfuge: 0
    new_talent: 
    new_talent_value: 

    Skills: Skills
    animalken: 0
    crafts: 0
    drive: 0
    etiquette: 0
    firearms: 0
    larceny: 0
    melee: 0
    performance: 0
    stealth: 0
    survival: 0
    new_skill: 
    new_skill_value: 

    Knowledges: Knowledges
    academics: 0
    computer: 0
    finance: 0
    investigation: 0
    law: 0
    medicine: 0
    occult: 0
    politics: 0
    science: 0
    technology: 0
    new_knowledge: 
    new_knowledge_value: 

                                #### Advantages #### 

    Advantages: Advantages

    Disciplines: DISCIPLINES
    discipline1_name: 
    discipline1_value: 
    discipline2_name: 
    discipline2_value: 
    discipline3_name: 
    discipline3_value: 
    discipline4_name: 
    discipline4_value: 
    discipline5_name: 
    discipline5_value: 
    discipline6_name: 
    discipline6_value: 

    Backgrounds: BACKGROUNDS
    background1_name: 
    background1_value: 
    background2_name: 
    background2_value: 
    background3_name: 
    background3_value: 
    background4_name: 
    background4_value: 
    background5_name: 
    background5_value: 
    background6_name: 
    background6_value: 

    Virtues: VIRTUES
    conscience: 0
    selfcontrol: 0
    courage: 0

                        #### ДОСТОИНСТВА / НЕДОСТАТКИ ####

    Merits: MERITS
    merit1_name: 
    merit1_value: 
    merit2_name: 
    merit2_value: 
    merit3_name: 
    merit3_value: 
    merit4_name: 
    merit4_value: 
    merit5_name: 
    merit5_value: 
    merit6_name: 
    merit6_value: 

    Flaws: FLAWS
    flaw1_name: 
    flaw1_value: 
    flaw2_name: 
    flaw2_value: 
    flaw3_name: 
    flaw3_value: 
    flaw4_name: 
    flaw4_value: 
    flaw5_name: 
    flaw5_value: 
    flaw6_name: 
    flaw6_value: 

                        #### PATH / WILLPOWER / BLOOD ####

    path: HUMANITY
    path_value: 

    willpower: WILLPOWER
    willpower_main: 
    willpower_current: 

    bloodpool: BLOODPOOL
    blood: 

    Health: HEALTH
    aggravated: 
    lethal: 
    bashing: 

    Specialties: SPECIALTIES
    specialty1_origin: 
    specialty1_name: 
    specialty2_origin: 
    specialty2_name: 
    specialty3_origin: 
    specialty3_name: 
    specialty4_origin: 
    specialty4_name: 
    specialty5_origin: 
    specialty5_name: 
    specialty6_origin: 
    specialty6_name: 

    show_weakness: no

</details>

<br>

<details>
    <summary>Оборотень (RU)</summary>

    ```statblock
    columnWidth: 680
    column: 1
    layout: WtA v20 Werewolf
    dice: true

                            #### ОСНОВНАЯ ИНФОРМАЦИЯ ####

    name: 
    desc: 
    breed: 
    auspice: 
    tribe: 
    pack_name: 
    totem: 
    nature: 
    demeanor: 
    concept: 

    img: 
    img_title: 
    img_alt: 
    img_alt_title: 

                                #### ХАРАКТЕРИСТИКИ ####

    Attributes: Характеристики

    Physical: ФИЗИЧЕСКИЕ
    Strength: 0
    Dexterity: 0
    Stamina: 0

    Social: СОЦИАЛЬНЫЕ
    Charisma: 0
    Manipulation: 0
    Appearance: 0

    Mental: МЕНТАЛЬНЫЕ
    Perception: 0
    Intelligence: 0
    Wits: 0

                                #### СПОСОБНОСТИ ####

    Abilities: Способности

    Talents: ТАЛАНТЫ
    athletics: 0 # Атлетика
    alertness: 0 # Бдительность
    brawl: 0 # Драка
    intimidation: 0 # Запугивание
    expression: 0 # Красноречие
    leadership: 0
    primalurge: 0 # Первобытный инстинкт
    streetwise: 0 # Уличное чутье
    subterfuge: 0 # Хитрость
    empathy: 0
    new_talent: 
    new_talent_value: 

    Skills: НАВЫКИ
    drive: 0
    larceny: 0 # Воровство
    survival: 0
    performance: 0
    animalken: 0
    crafts: 0
    stealth: 0
    firearms: 0
    melee: 0
    etiquette: 0
    new_skill:
    new_skill_value:

    Knowledges: ЗНАНИЯ
    academics: 0
    science: 0
    enigmas: 0 # Загадки
    law: 0
    computer: 0
    medicine: 0
    occult: 0
    rituals: 0 # Ритуалы
    investigation: 0
    technology: 0
    new_knowledge:
    new_knowledge_value:

                            #### ПРЕИМУЩЕСТВА ####

    Advantages: Преимущества

    Backgrounds: ФАКТЫ  БИОГРАФИИ
    background1_name: 
    background1_value: 
    background2_name: 
    background2_value: 
    background3_name: 
    background3_value: 
    background4_name: 
    background4_value: 
    background5_name: 
    background5_value: 
    background6_name: 
    background6_value: 

    Gifts: ДАРЫ
    gift1: 
    gift2: 
    gift3: 
    gift4: 
    gift5: 
    gift6: 
    gift7: 
    gift8: 
    gift9: 
    gift10: 

                        #### ДОСТОИНСТВА / НЕДОСТАТКИ ####

    where-to-show-merits-and-flaws: right

    Merits: ДОСТОИНСТВА
    merit1_name: 
    merit1_value: 
    merit2_name: 
    merit2_value: 
    merit3_name: 
    merit3_value: 
    merit4_name: 
    merit4_value: 
    merit5_name: 
    merit5_value: 

    Flaws: НЕДОСТАТКИ
    flaw1_name: 
    flaw1_value: 
    flaw2_name: 
    flaw2_value: 
    flaw3_name: 
    flaw3_value: 
    flaw4_name: 
    flaw4_value: 
    flaw5_name: 
    flaw5_value:

                            #### ПОЧЕТ / ВОЛЯ / ЗДОРОВЬЕ ####

    Renown: Почет

    glory: Слава
    glory_main: 0
    glory_current: 0

    honor: Честь
    honor_main: 0
    honor_current: 0

    wisdom: Мудрость
    wisdom_main: 0
    wisdom_current: 0


    rage: Ярость
    rage_main: 0
    rage_current: 0

    gnosis: Гнозис
    gnosis_main: 0
    gnosis_current: 0

    willpower: Воля
    willpower_main: 0
    willpower_current: 0


    Health: Здоровье
    aggravated: 
    lethal: 
    bashing: 

    Specialties: 
    specialty1_origin: 
    specialty1_name: 
    specialty2_origin: 
    specialty2_name: 
    specialty3_origin: 
    specialty3_name: 
    specialty4_origin: 
    specialty4_name: 
    specialty5_origin: 
    specialty5_name: 
    specialty6_origin: 
    specialty6_name: 
    ```

</details>

<br>

<details>
    <summary>Смертный (RU)</summary>

    ```statblock
    columnWidth: 680
    column: 1
    layout: WoD v20 Mortal
    dice: true

                            #### ОСНОВНАЯ ИНФОРМАЦИЯ ####

    name: 
    desc: 
    nature: 
    demeanor: 
    concept: 

    img: 
    img_title: 
    img_alt: 
    img_alt_title: 

                            #### ХАРАКТЕРИСТИКИ ####

    Attributes: Характеристики

    Physical: ФИЗИЧЕСКИЕ
    Strength: 0
    Dexterity: 0
    Stamina: 0

    Social: СОЦИАЛЬНЫЕ
    Charisma: 0
    Manipulation: 0
    Appearance: 0

    Mental: МЕНТАЛЬНЫЕ
    Perception: 0
    Intelligence: 0
    Wits: 0

                                #### СПОСОБНОСТИ ####

    Abilities: Способности

    Talents: ТАЛАНТЫ
    athletics: 0 # Атлетика
    alertness: 0 # Бдительность
    brawl: 0 # Драка
    intimidation: 0 # Запугивание
    expression: 0 # Красноречие
    leadership: 0
    streetwise: 0 # Уличное чутье
    subterfuge: 0 # Хитрость
    awareness: 0 # Шестое чувство
    empathy: 0
    new_talent: 
    new_talent_value: 

    Skills: НАВЫКИ
    drive: 0
    larceny: 0 # Воровство
    survival: 0
    performance: 0
    animalken: 0
    crafts: 0
    stealth: 0
    firearms: 0
    melee: 0
    etiquette: 0
    new_skill: 
    new_skill_value: 

    Knowledges: ЗНАНИЯ
    academics: 0
    science: 0
    law: 0
    computer: 0 # Информатика
    medicine: 0
    occult: 0
    politics: 0
    investigation: 0
    finance: 0
    technology: 0 # Электроника
    new_knowledge:
    new_knowledge_value:

                                #### ПРЕИМУЩЕСТВА ####

    Advantages: Преимущества

    Disciplines: ДАРЫ И ПАРАМЕТРЫ
    discipline1_name: 
    discipline1_value: 
    discipline2_name: 
    discipline2_value: 
    discipline3_name: 
    discipline3_value: 
    discipline4_name: 
    discipline4_value: 
    discipline5_name: 
    discipline5_value: 
    discipline6_name: 
    discipline6_value: 

    Backgrounds: ФАКТЫ  БИОГРАФИИ
    background1_name: 
    background1_value: 
    background2_name: 
    background2_value: 
    background3_name: 
    background3_value: 
    background4_name: 
    background4_value: 
    background5_name: 
    background5_value: 
    background6_name: 
    background6_value: 

    Virtues: ДОБРОДЕТЕЛИ
    conscience: 0
    selfcontrol: 0
    courage: 0

                        #### ДОСТОИНСТВА / НЕДОСТАТКИ ####

    Merits: ДОСТОИНСТВА
    merit1_name: 
    merit1_value: 
    merit2_name: 
    merit2_value: 
    merit3_name: 
    merit3_value: 
    merit4_name: 
    merit4_value: 
    merit5_name: 
    merit5_value: 
    merit6_name: 
    merit6_value: 

    Flaws: НЕДОСТАТКИ
    flaw1_name: 
    flaw1_value: 
    flaw2_name: 
    flaw2_value: 
    flaw3_name: 
    flaw3_value: 
    flaw4_name: 
    flaw4_value: 
    flaw5_name: 
    flaw5_value: 
    flaw6_name: 
    flaw6_value: 

                        #### ЧЕЛОВЕЧНОСТЬ / ВОЛЯ / ЗДОРОВЬЕ ####

    humanity: ЧЕЛОВЕЧНОСТЬ
    humanity_value: 0

    willpower: ВОЛЯ
    willpower_main: 0
    willpower_current: 0 

    Health: ЗДОРОВЬЕ
    bashing: 0
    lethal: 0

                                #### СПЕЦИАЛИЗАЦИЯ ####

    Specialties: Специализация
    specialty1_origin: 
    specialty1_name: 
    specialty2_origin: 
    specialty2_name: 
    specialty3_origin: 
    specialty3_name: 
    specialty4_origin: 
    specialty4_name: 
    specialty5_origin: 
    specialty5_name: 
    specialty6_origin: 
    specialty6_name: 

                                    #### ОРУЖИЕ ####

    weapon1_name: пистолет
    damage1: 4
    range1: 20
    firerate1: 4
    clip1: 15
    conceal1: ПК
    ```

</details>

<br>

<details>
    <summary>Агент (RU)</summary>

    ```statblock
    column: 1
    columnWidth: 680
    layout: WoD v20 Agent
    dice: true

                            #### ОСНОВНАЯ ИНФОРМАЦИЯ ####

    name: 
    desc: 
    nature: 
    demeanor: 
    concept: 
    agency: 
    rank: 
    codename: 

    img: 
    img_title: 
    img_alt: 
    img_alt_title: 

                            #### ХАРАКТЕРИСТИКИ ####

    Attributes: Характеристики

    Physical: ФИЗИЧЕСКИЕ
    Strength: 0
    Dexterity: 0
    Stamina: 0

    Social: СОЦИАЛЬНЫЕ
    Charisma: 0
    Manipulation: 0
    Appearance: 0

    Mental: МЕНТАЛЬНЫЕ
    Perception: 0
    Intelligence: 0
    Wits: 0

                                #### СПОСОБНОСТИ ####

    Abilities: Способности

    Talents: ТАЛАНТЫ
    athletics: 0 # Атлетика
    alertness: 0 # Бдительность
    brawl: 0 # Драка
    intimidation: 0 # Запугивание
    expression: 0 # Красноречие
    leadership: 0
    streetwise: 0 # Уличное чутье
    subterfuge: 0 # Хитрость
    awareness: 0 # Шестое чувство
    empathy: 0
    new_talent: 
    new_talent_value: 

    Skills: НАВЫКИ
    drive: 0
    larceny: 0 # Воровство
    survival: 0
    performance: 0
    animalken: 0
    crafts: 0
    stealth: 0
    firearms: 0
    melee: 0
    etiquette: 0
    new_skill: 
    new_skill_value: 

    Knowledges: ЗНАНИЯ
    academics: 0
    science: 0
    law: 0
    computer: 0 # Информатика
    medicine: 0
    occult: 0
    politics: 0
    investigation: 0
    finance: 0
    technology: 0 # Электроника
    new_knowledge: 
    new_knowledge_value: 

                                #### ПРЕИМУЩЕСТВА ####

    Advantages: Преимущества

    Backgrounds: ФАКТЫ  БИОГРАФИИ
    background1_name: 
    background1_value: 
    background2_name: 
    background2_value: 
    background3_name: 
    background3_value: 
    background4_name: 
    background4_value: 
    background5_name: 
    background5_value: 

    Virtues: ДОБРОДЕТЕЛИ
    conscience: 0
    selfcontrol: 0
    courage: 0

                        #### ДОСТОИНСТВА / НЕДОСТАТКИ ####

    Merits: ДОСТОИНСТВА
    merit1_name: 
    merit1_value: 
    merit2_name: 
    merit2_value: 
    merit3_name: 
    merit3_value: 
    merit4_name: 
    merit4_value: 

    Flaws: НЕДОСТАТКИ
    flaw1_name: 
    flaw1_value: 
    flaw2_name: 
    flaw2_value: 
    flaw3_name: 
    flaw3_value: 
    flaw4_name: 
    flaw4_value: 
    flaw5_name: 
    flaw5_value: 
    flaw6_name: 
    flaw6_value: 
    flaw7_name: 
    flaw7_value: 


                        #### ЧЕЛОВЕЧНОСТЬ / ВОЛЯ / ЗДОРОВЬЕ ####


    humanity: ЧЕЛОВЕЧНОСТЬ
    humanity_value: 0

    willpower: ВОЛЯ
    willpower_main: 0
    willpower_current: 0

    Health: здоровье
    bashing: 0
    lethal: 0

                                #### СПЕЦИАЛИЗАЦИЯ ####

    Specialties: Специализация
    specialty1_origin: 
    specialty1_name: 
    specialty2_origin: 
    specialty2_name: 
    specialty3_origin: 
    specialty3_name: 
    specialty4_origin: 
    specialty4_name: 
    specialty5_origin: 
    specialty5_name: 
    specialty6_origin: 
    specialty6_name: 
    ```

</details>

## Часто задаваемые вопросы

**В**: Зачем мне запускать непонятный JS-скрипт внутри моего хранилища Obsidian?
<br>
**О**: В целом, можно обойтись без него и использовать только CSS-файл. Без скрипта:
- не появится логотип клана на фоне;
- обязательно нужно будет использовать 'Х' вместо '10';
- нужно вручную добавить ряд полей, а именно `bearing` (столп и его значение), `blood_per_turn` (предел траты крови в ход) и, при необходимости, `blood_current2`, `blood_current3`, `blood_current4` (значения соответственно второй, третьей и четвертой строчки крови).

**В**: Когда я добавляю JSON в Fantasy Statblock, появляется сообщение о JS-скрипте внутри! Что это?
<br>
**О**: Внутри О JSON'a есть много простых блоков кода, чтобы можно было кидать кубы, если установлен плагин [Dice Roller](https://github.com/javalent/dice-roller). 

**В**: В моем статблоке нет шрифтов, которые есть на скриншотах! 
<br>
**О**: Я не могу добавить шрифты в репозиторий, это было бы нарушением правил площадки. Но вы можете найти их отдельно и установить на свой компьютер, тогда статблок их подхватит.<br>
Для вампиров и смертных, используются шрифты Marta и Trajan Pro 3.<br>
Для оборотней - Marta and KistyCC.<br>
Для агентов - GNUTypewriter.<br>
А еще статблок поддерживает замечательный плагин [Style Settings](https://github.com/mgmeyers/obsidian-style-settings/), так что можно заменить указанные шрифты на любые другие (если они так же установлены).
<p align="center">
    <img src='imgs/style_settings.png' width='650'>
</p>

<!--
**Q**: Alright, I did it, but still can't see the fonts on my mobile!
<br>
**A**: -->

**В**: У моего вампира поле "Изъян" пустое! 
<br>
**О**: Я не могу добавить такие длинные цитаты из правил, правообладатели против. Но в начале JS-скрипта есть специальные поля для изънов всех кланов, например, `const weaknessBrujah = '';`. Откройте скрипт (хотя бы блокнотом) и добавьте текст изъяна между кавычками. Если вы не используете JS-скрипт, просто добавьте в статблок поле `weakness` и нужный текст для него.

**Q**: C'mon, 10mb css file? Why it is so huge?
**В**: CSS-файл размером 10 мегабайт? Не слишком ли много
<br>
**О**: В файле хранится все графические элементы (в кодировке base64) для всех статблоков, особенно много места занимают фоновые текстуры. Все это я разместил в самом конце файла, и заодно разбил на блоки с комментариями вида `/*  ВСЕ ГРАФИЧЕСКИЕ МАТЕРИАЛЫ ДЛЯ АГЕНТОВ  */`. Если, например, вам нужны только вампиры, то подобные блоки для других персонажей можно смело удалить. 

## Epilogue 
Well, that’s all, folks! Please let me know what you think about this layout, and how it can be improved. For example, still not sure about the way the Specialties are displayed, but can’t think up something better.
I am also a little bit sad that, in general, this layout is just an info page. Storytelling System assumes that you combine two of your stats, Intelligence + Academics, for example, and then roll all the dice. If you know how it can be achieved – please let me know!