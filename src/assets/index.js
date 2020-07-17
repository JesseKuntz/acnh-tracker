const specimens = {
  fish: [
    {name: 'Bitterling', img: 'bitterling'},
    {name: 'Carp', img: 'carp'},
    {name: 'Crucian Carp', img: 'cruciancarp'},
    {name: 'Koi', img: 'koi'},
    {name: 'Dace', img: 'dace'},
    {name: 'Pale Chub', img: 'palechub'},
    {name: 'Popeyed Goldfish', img: 'popeyedgoldfish'},
    {name: 'Ranchu Goldfish', img: 'ranchugoldfish'},
    {name: 'Goldfish', img: 'goldfish'},
    {name: 'Killifish', img: 'killifish'},
    {name: 'Crawfish', img: 'crawfish'},
    {name: 'Soft-Shelled Turtle', img: 'softshelledturtle'},
    {name: 'Snapping Turtle', img: 'snappingturtle'},
    {name: 'Tadpole', img: 'tadpole'},
    {name: 'Frog', img: 'frog'},
    {name: 'Freshwater Goby', img: 'freshwatergoby'},
    {name: 'Loach', img: 'loach'},
    {name: 'Catfish', img: 'catfish'},
    {name: 'Giant Snakehead', img: 'giantsnakehead'},
    {name: 'Bluegill', img: 'bluegill'},
    {name: 'Yellow Perch', img: 'yellowperch'},
    {name: 'Black Bass', img: 'blackbass'},
    {name: 'Tilapia', img: 'tilapia'},
    {name: 'Pike', img: 'pike'},
    {name: 'Pond Smelt', img: 'pondsmelt'},
    {name: 'Sweetfish', img: 'sweetfish'},
    {name: 'Cherry Salmon', img: 'cherrysalmon'},
    {name: 'Char', img: 'char'},
    {name: 'Golden Trout', img: 'goldentrout'},
    {name: 'Stringfish', img: 'stringfish'},
    {name: 'Salmon', img: 'salmon'},
    {name: 'King Salmon', img: 'kingsalmon'},
    {name: 'Mitten Crab', img: 'mittencrab'},
    {name: 'Guppy', img: 'guppy'},
    {name: 'Nibble Fish', img: 'nibblefish'},
    {name: 'Angelfish', img: 'angelfish'},
    {name: 'Betta', img: 'betta'},
    {name: 'Neon Tetra', img: 'neontetra'},
    {name: 'Rainbowfish', img: 'rainbowfish'},
    {name: 'Piranha', img: 'piranha'},
    {name: 'Arowana', img: 'arowana'},
    {name: 'Dorado', img: 'dorado'},
    {name: 'Gar', img: 'gar'},
    {name: 'Arapaima', img: 'arapaima'},
    {name: 'Saddled Bichir', img: 'saddledbichir'},
    {name: 'Sturgeon', img: 'sturgeon'},
    {name: 'Sea Butterfly', img: 'seabutterfly'},
    {name: 'Sea Horse', img: 'seahorse'},
    {name: 'Clown Fish', img: 'clownfish'},
    {name: 'Sturgeonfish', img: 'surgeonfish'},
    {name: 'Butterfly Fish', img: 'butterflyfish'},
    {name: 'Napoleonfish', img: 'napoleonfish'},
    {name: 'Zebra Turkeyfish', img: 'zebraturkeyfish'},
    {name: 'Blowfish', img: 'blowfish'},
    {name: 'Puffer Fish', img: 'pufferfish'},
    {name: 'Anchovy', img: 'anchovy'},
    {name: 'Horse Mackerel', img: 'horsemackerel'},
    {name: 'Barred Knifejaw', img: 'barredknifejaw'},
    {name: 'Sea Bass', img: 'seabass'},
    {name: 'Red Snapper', img: 'redsnapper'},
    {name: 'Dab', img: 'dab'},
    {name: 'Olive Flounder', img: 'oliveflounder'},
    {name: 'Squid', img: 'squid'},
    {name: 'Moray Eel', img: 'morayeel'},
    {name: 'Ribbon Eel', img: 'ribboneel'},
    {name: 'Tuna', img: 'tuna'},
    {name: 'Blue Marlin', img: 'bluemarlin'},
    {name: 'Giant Trevally', img: 'gianttrevally'},
    {name: 'Mahi-Mahi', img: 'mahimahi'},
    {name: 'Ocean Sunfish', img: 'oceansunfish'},
    {name: 'Ray', img: 'ray'},
    {name: 'Saw Shark', img: 'sawshark'},
    {name: 'Hammerhead Shark', img: 'hammerheadshark'},
    {name: 'Great White Shark', img: 'greatwhiteshark'},
    {name: 'Whale Shark', img: 'whaleshark'},
    {name: 'Suckerfish', img: 'suckerfish'},
    {name: 'Football Fish', img: 'footballfish'},
    {name: 'Oarfish', img: 'oarfish'},
    {name: 'Barreleye', img: 'barreleye'},
    {name: 'Coelacanth', img: 'coelacanth'},
  ],
  bug: [
    {name: 'Common Butterfly', img: 'commonbutterfly'},
    {name: 'Yellow Butterfly', img: 'yellowbutterfly'},
    {name: 'Tiger Butterfly', img: 'tigerbutterfly'},
    {name: 'Peacock Butterfly', img: 'tigerbutterfly'},
    {name: 'Common Bluebottle', img: 'commonbluebottle'},
    {name: 'Paper Kite Butterfly', img: 'paperkitebutterfly'},
    {name: 'Great Purple Emporer', img: 'greatpurpleemperor'},
    {name: 'Monarch Butterfly', img: 'monarchbutterfly'},
    {name: 'Emporer Butterfly', img: 'emperorbutterfly'},
    {name: 'Agrias Butterfly', img: 'agriasbutterfly'},
    {name: 'Rajah Brooke\'s Birdwing', img: 'rajahbrookesbirdwing'},
    {name: 'Queen Alexandra\'s Birdwing', img: 'queenalexandrasbirdwing'},
    {name: 'Moth', img: 'moth'},
    {name: 'Atlas Moth', img: 'atlasmoth'},
    {name: 'Madagascan Sunset Moth', img: 'madagascansunsetmoth'},
    {name: 'Long Locust', img: 'longlocust'},
    {name: 'Migratory Locust', img: 'migratorylocust'},
    {name: 'Rice Grasshopper', img: 'ricegrasshopper'},
    {name: 'Grasshopper', img: 'grasshopper'},
    {name: 'Cricket', img: 'cricket'},
    {name: 'Bell Cricket', img: 'bellcricket'},
    {name: 'Mantis', img: 'mantis'},
    {name: 'Orchid Mantis', img: 'orchidmantis'},
    {name: 'Honeybee', img: 'honeybee'},
    {name: 'Wasp', img: 'wasp'},
    {name: 'Brown Cicada', img: 'browncicada'},
    {name: 'Robust Cicada', img: 'robustcicada'},
    {name: 'Giant Cicada', img: 'giantcicada'},
    {name: 'Walker Cicada', img: 'walkercicada'},
    {name: 'Evening Cicada', img: 'eveningcicada'},
    {name: 'Cicada Shell', img: 'cicadashell'},
    {name: 'Red Dragonfly', img: 'reddragonfly'},
    {name: 'Darner Dragonfly', img: 'darnerdragonfly'},
    {name: 'Banded Dragonfly', img: 'bandeddragonfly'},
    {name: 'Damselfly', img: 'damselfly'},
    {name: 'Firefly', img: 'firefly'},
    {name: 'Mole Cricket', img: 'molecricket'},
    {name: 'Pondskater', img: 'pondskater'},
    {name: 'Diving Beetle', img: 'divingbeetle'},
    {name: 'Giant Water Bug', img: 'giantwaterbug'},
    {name: 'Stinkbug', img: 'stinkbug'},
    {name: 'Man-Faced Stinkbug', img: 'manfacedstinkbug'},
    {name: 'Ladybug', img: 'ladybug'},
    {name: 'Tiger Beetle', img: 'tigerbeetle'},
    {name: 'Jewel Beetle', img: 'jewelbeetle'},
    {name: 'Violin Beetle', img: 'violinbeetle'},
    {name: 'Citrus Long-Horned Beetle', img: 'citruslonghornedbeetle'},
    {name: 'Rosalia Batesi Beetle', img: 'rosaliabatesibeetle'},
    {name: 'Blue Weevil Beetll', img: 'blueweevilbeetle'},
    {name: 'Dung Beetle', img: 'dungbeetle'},
    {name: 'Earth-Boring Dung Beetle', img: 'earthboringdungbeetle'},
    {name: 'Scarab Beetle', img: 'scarabbeetle'},
    {name: 'Drone Beetle', img: 'dronebeetle'},
    {name: 'Goliath Beetle', img: 'goliathbeetle'},
    {name: 'Saw Stag', img: 'sawstag'},
    {name: 'Miyama Stag', img: 'miyamastag'},
    {name: 'Giant Stag', img: 'giantstag'},
    {name: 'Rainbow Stag', img: 'rainbowstag'},
    {name: 'Cyclommatus Stag', img: 'cyclommatusstag'},
    {name: 'Golden Stag', img: 'goldenstag'},
    {name: 'Giraffe Stag', img: 'giraffestag'},
    {name: 'Horned Dynastid', img: 'horneddynastid'},
    {name: 'Horned Atlas', img: 'hornedatlas'},
    {name: 'Horned Elephant', img: 'hornedelephant'},
    {name: 'Horned Hercules', img: 'hornedhercules'},
    {name: 'Walking Stick', img: 'walkingstick'},
    {name: 'Walking Leaf', img: 'walkingleaf'},
    {name: 'Bagworm', img: 'bagworm'},
    {name: 'Ant', img: 'ant'},
    {name: 'Hermit Crab', img: 'hermitcrab'},
    {name: 'Wharf Roach', img: 'wharfroach'},
    {name: 'Fly', img: 'fly'},
    {name: 'Mosquito', img: 'mosquito'},
    {name: 'Flea', img: 'flea'},
    {name: 'Snail', img: 'snail'},
    {name: 'Pillbug', img: 'pillbug'},
    {name: 'Centipede', img: 'centipede'},
    {name: 'Spider', img: 'spider'},
    {name: 'Tarantula', img: 'tarantula'},
    {name: 'Scorpion', img: 'scorpion'},
  ],
  'sea creature': [],
}

export default specimens;