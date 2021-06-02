const races = [
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/30/Charactercreate-races_human-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/7/7a/Charactercreate-races_human-female.png' },
    id: 1,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/9/90/Charactercreate-races_orc-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/ff/Charactercreate-races_orc-female.png' },
    id: 2,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/a/a3/Charactercreate-races_dwarf-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/2/22/Charactercreate-races_dwarf-female.png' },
    id: 3,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/Charactercreate-races_nightelf-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/a/a7/Charactercreate-races_nightelf-female.png' },
    id: 4,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/b/bf/Charactercreate-races_undead-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/d/dd/Charactercreate-races_undead-female.png' },
    id: 5,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-races_tauren-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/a/ac/Charactercreate-races_tauren-female.png' },
    id: 6,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/a/a0/Charactercreate-races_gnome-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/a/a6/Charactercreate-races_gnome-female.png' },
    id: 7,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-races_troll-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/f4/Charactercreate-races_troll-female.png' },
    id: 8,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/9/91/Charactercreate-races_goblin-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/b/b7/Charactercreate-races_goblin-female.png' },
    id: 9,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/2/2a/Charactercreate-races_bloodelf-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/f7/Charactercreate-races_bloodelf-female.png' },
    id: 10,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/31/Charactercreate-races_draenei-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/6/61/Charactercreate-races_draenei-female.png' },
    id: 11,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/e/e9/Charactercreate-races_worgen-male2.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/f2/Charactercreate-races_worgen-female2.png' },
    id: 22,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/Charactercreate-races_panda-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/8/8a/Charactercreate-races_panda-female.png' },
    id: 24,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/Charactercreate-races_nightborne-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/0/08/Charactercreate-races_nightborne-female.png' },
    id: 27,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/b/b5/Charactercreate-races_highmountain-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/c/ca/Charactercreate-races_highmountain-female.png' },
    id: 28,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/6/67/Charactercreate-races_voidelf-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/c/c2/Charactercreate-races_voidelf-female.png' },
    id: 29,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/2/21/Charactercreate-races_lightforged-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/9/9c/Charactercreate-races_lightforged-female.png' },
    id: 30,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/1/14/CharacterCreate-Races_ZandalariTroll-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/1/11/Charactercreate-races_ZandalariTroll-female.png' },
    id: 31,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/4/46/CharacterCreate-Races_kultiranhuman-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-races_kultiranhuman-female.png' },
    id: 32,
  },
  {
    icon: {
      male: 'https://static.wikia.nocookie.net/wowpedia/images/1/11/Charactercreate-races_darkirondwarf-male.png',
      female: 'https://static.wikia.nocookie.net/wowpedia/images/3/3c/Charactercreate-races_darkirondwarf-female.png',
    },
    id: 34,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/CharacterCreate-Races_vulpera-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/2/2e/Charactercreate-races_vulpera-female.png' },
    id: 35,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/4/46/Charactercreate-races_maghar-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/5/52/Charactercreate-races_maghar-female.png' },
    id: 36,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/a/a2/CharacterCreate-Races_mechagnome-male.png', female: 'https://static.wikia.nocookie.net/wowpedia/images/3/39/Charactercreate-races_mechagnome-female.png' },
    id: 37,
  },
];

module.exports = races;
