const races = [
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/30/Charactercreate-races_human-male.png/revision/latest/scale-to-width-down/120?cb=20200517135240', female: 'https://static.wikia.nocookie.net/wowpedia/images/7/7a/Charactercreate-races_human-female.png/revision/latest/scale-to-width-down/120?cb=20200517135248' },
    id: 1,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/9/90/Charactercreate-races_orc-male.png/revision/latest/scale-to-width-down/120?cb=20200517185004', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/ff/Charactercreate-races_orc-female.png/revision/latest/scale-to-width-down/120?cb=20200517185023' },
    id: 2,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/a/a3/Charactercreate-races_dwarf-male.png/revision/latest/scale-to-width-down/120?cb=20200517135049', female: 'https://static.wikia.nocookie.net/wowpedia/images/2/22/Charactercreate-races_dwarf-female.png/revision/latest/scale-to-width-down/120?cb=20200517135056' },
    id: 3,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/Charactercreate-races_nightelf-male.png/revision/latest/scale-to-width-down/120?cb=20200517135304', female: 'https://static.wikia.nocookie.net/wowpedia/images/a/a7/Charactercreate-races_nightelf-female.png/revision/latest/scale-to-width-down/120?cb=20200517135310' },
    id: 4,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/b/bf/Charactercreate-races_undead-male.png/revision/latest/scale-to-width-down/120?cb=20200517185109', female: 'https://static.wikia.nocookie.net/wowpedia/images/d/dd/Charactercreate-races_undead-female.png/revision/latest/scale-to-width-down/120?cb=20200517185115' },
    id: 5,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-races_tauren-male.png/revision/latest/scale-to-width-down/120?cb=20200517185028', female: 'https://static.wikia.nocookie.net/wowpedia/images/a/ac/Charactercreate-races_tauren-female.png/revision/latest/scale-to-width-down/120?cb=20200517185034' },
    id: 6,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/a/a0/Charactercreate-races_gnome-male.png/revision/latest/scale-to-width-down/120?cb=20200517135215', female: 'https://static.wikia.nocookie.net/wowpedia/images/a/a6/Charactercreate-races_gnome-female.png/revision/latest/scale-to-width-down/120?cb=20200517135226' },
    id: 7,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-races_troll-male.png/revision/latest/scale-to-width-down/120?cb=20200517185041', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/f4/Charactercreate-races_troll-female.png/revision/latest/scale-to-width-down/120?cb=20200517185051' },
    id: 8,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/9/91/Charactercreate-races_goblin-male.png/revision/latest/scale-to-width-down/120?cb=20200517185122', female: 'https://static.wikia.nocookie.net/wowpedia/images/b/b7/Charactercreate-races_goblin-female.png/revision/latest/scale-to-width-down/120?cb=20200517185128' },
    id: 9,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/2/2a/Charactercreate-races_bloodelf-male.png/revision/latest/scale-to-width-down/119?cb=20200517184943', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/f7/Charactercreate-races_bloodelf-female.png/revision/latest/scale-to-width-down/119?cb=20200517184956' },
    id: 10,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/31/Charactercreate-races_draenei-male.png/revision/latest/scale-to-width-down/120?cb=20200517134855', female: 'https://static.wikia.nocookie.net/wowpedia/images/6/61/Charactercreate-races_draenei-female.png/revision/latest/scale-to-width-down/120?cb=20200517134927' },
    id: 11,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/e/e9/Charactercreate-races_worgen-male2.png/revision/latest/scale-to-width-down/120?cb=20200517135405', female: 'https://static.wikia.nocookie.net/wowpedia/images/f/f2/Charactercreate-races_worgen-female2.png/revision/latest/scale-to-width-down/120?cb=20200517135413' },
    id: 22,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/Charactercreate-races_panda-male.png/revision/latest/scale-to-width-down/120?cb=20200517141502', female: 'https://static.wikia.nocookie.net/wowpedia/images/8/8a/Charactercreate-races_panda-female.png/revision/latest/scale-to-width-down/120?cb=20200517141508' },
    id: 24,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/Charactercreate-races_nightborne-male.png/revision/latest/scale-to-width-down/120?cb=20200517185234', female: 'https://static.wikia.nocookie.net/wowpedia/images/0/08/Charactercreate-races_nightborne-female.png/revision/latest/scale-to-width-down/120?cb=20200517185144' },
    id: 27,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/b/b5/Charactercreate-races_highmountain-male.png/revision/latest/scale-to-width-down/120?cb=20200517185241', female: 'https://static.wikia.nocookie.net/wowpedia/images/c/ca/Charactercreate-races_highmountain-female.png/revision/latest/scale-to-width-down/120?cb=20200517185135' },
    id: 28,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/6/67/Charactercreate-races_voidelf-male.png/revision/latest/scale-to-width-down/120?cb=20200517141139', female: 'https://static.wikia.nocookie.net/wowpedia/images/c/c2/Charactercreate-races_voidelf-female.png/revision/latest/scale-to-width-down/120?cb=20200517141148' },
    id: 29,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/2/21/Charactercreate-races_lightforged-male.png/revision/latest/scale-to-width-down/120?cb=20200517141106', female: 'https://static.wikia.nocookie.net/wowpedia/images/9/9c/Charactercreate-races_lightforged-female.png/revision/latest/scale-to-width-down/120?cb=20200517141116' },
    id: 30,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/1/14/CharacterCreate-Races_ZandalariTroll-male.png/revision/latest/scale-to-width-down/120?cb=20200517185218', female: 'https://static.wikia.nocookie.net/wowpedia/images/1/11/Charactercreate-races_ZandalariTroll-female.png/revision/latest/scale-to-width-down/120?cb=20200517185156' },
    id: 31,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/4/46/CharacterCreate-Races_kultiranhuman-male.png/revision/latest/scale-to-width-down/120?cb=20200517141223', female: 'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Charactercreate-races_kultiranhuman-female.png/revision/latest/scale-to-width-down/120?cb=20200517141235' },
    id: 32,
  },
  {
    icon: {
      male: 'https://static.wikia.nocookie.net/wowpedia/images/1/11/Charactercreate-races_darkirondwarf-male.png/revision/latest/scale-to-width-down/120?cb=20200517141201',
      female: 'https://static.wikia.nocookie.net/wowpedia/images/3/3c/Charactercreate-races_darkirondwarf-female.png/revision/latest/scale-to-width-down/120?cb=20200517141208',
    },
    id: 34,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/CharacterCreate-Races_vulpera-male.png/revision/latest/scale-to-width-down/120?cb=20200517185212', female: 'https://static.wikia.nocookie.net/wowpedia/images/2/2e/Charactercreate-races_vulpera-female.png/revision/latest/scale-to-width-down/120?cb=20200517185203' },
    id: 35,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/4/46/Charactercreate-races_maghar-male.png/revision/latest/scale-to-width-down/120?cb=20200517185228', female: 'https://static.wikia.nocookie.net/wowpedia/images/5/52/Charactercreate-races_maghar-female.png/revision/latest/scale-to-width-down/120?cb=20200517185150' },
    id: 36,
  },
  {
    icon: { male: 'https://static.wikia.nocookie.net/wowpedia/images/a/a2/CharacterCreate-Races_mechagnome-male.png/revision/latest/scale-to-width-down/120?cb=20200517141241', female: 'https://static.wikia.nocookie.net/wowpedia/images/3/39/Charactercreate-races_mechagnome-female.png/revision/latest/scale-to-width-down/120?cb=20200517141247' },
    id: 37,
  },
];

module.exports = races;
