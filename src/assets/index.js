const specimens = {
  fish: [
    {
      name: 'Bitterling',
      img: 'bitterling',
      catchData: {
        price: '900',
        location: 'River',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'March', 'November', 'December'],
          southern: ['May', 'June', 'July', 'August', 'September'],
        },
      },
    },
    {
      name: 'Pale chub',
      img: 'palechub',
      catchData: {
        price: '200',
        location: 'River',
        time: '9 AM - 4 PM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Crucian carp',
      img: 'cruciancarp',
      catchData: {
        price: '160',
        location: 'River',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Dace',
      img: 'dace',
      catchData: {
        price: '240',
        location: 'River',
        time: '4 PM - 9 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Carp',
      img: 'carp',
      catchData: {
        price: '300',
        location: 'Pond',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Koi',
      img: 'koi',
      catchData: {
        price: '4,000',
        location: 'Pond',
        time: '4 PM - 9 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Goldfish',
      img: 'goldfish',
      catchData: {
        price: '1,300',
        location: 'Pond',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Pop-eyed goldfish',
      img: 'popeyedgoldfish',
      catchData: {
        price: '1,300',
        location: 'Pond',
        time: '9 AM - 4 PM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Ranchu goldfish',
      img: 'ranchugoldfish',
      catchData: {
        price: '4,500',
        location: 'Pond',
        time: '9 AM - 4 PM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Killifish',
      img: 'killifish',
      catchData: {
        price: '300',
        location: 'Pond',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Crawfish',
      img: 'crawfish',
      catchData: {
        price: '200',
        location: 'Pond',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Soft-shelled turtle',
      img: 'softshelledturtle',
      catchData: {
        price: '3,750',
        location: 'River',
        time: '4 PM - 9 AM',
        months: {
          northern: ['August', 'September'],
          southern: ['February', 'March'],
        },
      },
    },
    {
      name: 'Snapping Turtle',
      img: 'snappingturtle',
      catchData: {
        price: '5,000',
        location: 'River',
        time: '9 PM - 4 AM',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Tadpole',
      img: 'tadpole',
      catchData: {
        price: '100',
        location: 'Pond',
        time: 'All day',
        months: {
          northern: ['March', 'April', 'May', 'June', 'July'],
          southern: ['January', 'September', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Frog',
      img: 'frog',
      catchData: {
        price: '120',
        location: 'Pond',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'November', 'December'],
        },
      },
    },
    {
      name: 'Freshwater goby',
      img: 'freshwatergoby',
      catchData: {
        price: '400',
        location: 'River',
        time: '4 PM - 9 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Loach',
      img: 'loach',
      catchData: {
        price: '400',
        location: 'River',
        time: 'All day',
        months: {
          northern: ['March', 'April', 'May'],
          southern: ['September', 'October', 'November'],
        },
      },
    },
    {
      name: 'Catfish',
      img: 'catfish',
      catchData: {
        price: '800',
        location: 'Pond',
        time: '4 PM - 9 AM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Giant snakehead',
      img: 'giantsnakehead',
      catchData: {
        price: '5,500',
        location: 'Pond',
        time: '9 AM - 4 PM',
        months: {
          northern: ['June', 'July', 'August'],
          southern: ['January', 'February', 'December'],
        },
      },
    },
    {
      name: 'Bluegill',
      img: 'bluegill',
      catchData: {
        price: '180',
        location: 'River',
        time: '9 AM - 4 PM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Yellow perch',
      img: 'yellowperch',
      catchData: {
        price: '300',
        location: 'River',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
          southern: ['April', 'May', 'June', 'July', 'August', 'September'],
        },
      },
    },
    {
      name: 'Black bass',
      img: 'blackbass',
      catchData: {
        price: '400',
        location: 'River',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Tilapia',
      img: 'tilapia',
      catchData: {
        price: '800',
        location: 'River',
        time: 'All day',
        months: {
          northern: ['June', 'July', 'August', 'September', 'October'],
          southern: ['January', 'February', 'March', 'April', 'December'],
        },
      },
    },
    {
      name: 'Pike',
      img: 'pike',
      catchData: {
        price: '1,800',
        location: 'River',
        time: 'All day',
        months: {
          northern: ['September', 'October', 'November', 'December'],
          southern: ['March', 'April', 'May', 'June'],
        },
      },
    },
    {
      name: 'Pond smelt',
      img: 'pondsmelt',
      catchData: {
        price: '500',
        location: 'River',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'December'],
          southern: ['June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Sweetfish',
      img: 'sweetfish',
      catchData: {
        price: '900',
        location: 'River',
        time: 'All day',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Cherry salmon',
      img: 'cherrysalmon',
      catchData: {
        price: '1,000',
        location: 'River (Clifftop)',
        time: '4 PM - 9 AM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
          ],
          southern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Char',
      img: 'char',
      catchData: {
        price: '3,800',
        location: 'River (Clifftop) Pond',
        time: '4 PM - 9 AM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
          ],
          southern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Golden trout',
      img: 'goldentrout',
      catchData: {
        price: '15,000',
        location: 'River (Clifftop)',
        time: '4 PM - 9 AM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
          ],
          southern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
          ],
        },
      },
    },
    {
      name: 'Stringfish',
      img: 'stringfish',
      catchData: {
        price: '15,000',
        location: 'River (Clifftop)',
        time: '4 PM - 9 AM',
        months: {
          northern: ['January', 'February', 'March', 'December'],
          southern: ['June', 'July', 'August', 'September'],
        },
      },
    },
    {
      name: 'Salmon',
      img: 'salmon',
      catchData: {
        price: '700',
        location: 'River (Mouth)',
        time: 'All day',
        months: { northern: ['September'], southern: ['March'] },
      },
    },
    {
      name: 'King salmon',
      img: 'kingsalmon',
      catchData: {
        price: '1,800',
        location: 'River (Mouth)',
        time: 'All day',
        months: { northern: ['September'], southern: ['March'] },
      },
    },
    {
      name: 'Mitten crab',
      img: 'mittencrab',
      catchData: {
        price: '2,000',
        location: 'River',
        time: '4 PM - 9 AM',
        months: {
          northern: ['September', 'October', 'November'],
          southern: ['March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Guppy',
      img: 'guppy',
      catchData: {
        price: '1,300',
        location: 'River',
        time: '9 AM - 4 PM',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Nibble fish',
      img: 'nibblefish',
      catchData: {
        price: '1,500',
        location: 'River',
        time: '9 AM - 4 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Angelfish',
      img: 'angelfish',
      catchData: {
        price: '3,000',
        location: 'River',
        time: '4 PM - 9 AM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Betta',
      img: 'betta',
      catchData: {
        price: '2,500',
        location: 'River',
        time: '9 AM - 4 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Neon tetra',
      img: 'neontetra',
      catchData: {
        price: '500',
        location: 'River',
        time: '9 AM - 4 PM',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Rainbowfish',
      img: 'rainbowfish',
      catchData: {
        price: '800',
        location: 'River',
        time: '9 AM - 4 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Piranha',
      img: 'piranha',
      catchData: {
        price: '2,500',
        location: 'River',
        time: '9 AM - 4 PM & 9 PM - 4 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Arowana',
      img: 'arowana',
      catchData: {
        price: '10,000',
        location: 'River',
        time: '4 PM - 9 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Dorado',
      img: 'dorado',
      catchData: {
        price: '15,000',
        location: 'River',
        time: '4 AM - 9 PM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Gar',
      img: 'gar',
      catchData: {
        price: '6,000',
        location: 'Pond',
        time: '4 PM - 9 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Arapaima',
      img: 'arapaima',
      catchData: {
        price: '10,000',
        location: 'River',
        time: '4 PM - 9 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Saddled bichir',
      img: 'saddledbichir',
      catchData: {
        price: '4,000',
        location: 'River',
        time: '9 PM - 4 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Sturgeon',
      img: 'sturgeon',
      catchData: {
        price: '10,000',
        location: 'River (Mouth)',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
          ],
        },
      },
    },
    {
      name: 'Sea butterfly',
      img: 'seabutterfly',
      catchData: {
        price: '1,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'March', 'December'],
          southern: ['June', 'July', 'August', 'September'],
        },
      },
    },
    {
      name: 'Sea horse',
      img: 'seahorse',
      catchData: {
        price: '1,100',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Clown fish',
      img: 'clownfish',
      catchData: {
        price: '650',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Surgeonfish',
      img: 'surgeonfish',
      catchData: {
        price: '1,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Butterfly fish',
      img: 'butterflyfish',
      catchData: {
        price: '1,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Napoleonfish',
      img: 'napoleonfish',
      catchData: {
        price: '10,000',
        location: 'Sea',
        time: '4 AM - 9 PM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Zebra turkeyfish',
      img: 'zebraturkeyfish',
      catchData: {
        price: '500',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Blowfish',
      img: 'blowfish',
      catchData: {
        price: '5,000',
        location: 'Sea',
        time: '9 PM - 4 AM',
        months: {
          northern: ['January', 'February', 'November', 'December'],
          southern: ['May', 'June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Puffer fish',
      img: 'pufferfish',
      catchData: {
        price: '250',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Anchovy',
      img: 'anchovy',
      catchData: {
        price: '200',
        location: 'Sea',
        time: '4 AM - 9 PM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Horse mackerel',
      img: 'horsemackerel',
      catchData: {
        price: '150',
        location: 'Sea',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Barred knifejaw',
      img: 'barredknifejaw',
      catchData: {
        price: '5,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Sea bass',
      img: 'seabass',
      catchData: {
        price: '400',
        location: 'Sea',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Red snapper',
      img: 'redsnapper',
      catchData: {
        price: '3,000',
        location: 'Sea',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Dab',
      img: 'dab',
      catchData: {
        price: '300',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'October',
            'November',
            'December',
          ],
          southern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
        },
      },
    },
    {
      name: 'Olive flounder',
      img: 'oliveflounder',
      catchData: {
        price: '800',
        location: 'Sea',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Squid',
      img: 'squid',
      catchData: {
        price: '500',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'December',
          ],
          southern: [
            'January',
            'February',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Moray eel',
      img: 'morayeel',
      catchData: {
        price: '2,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['August', 'September', 'October'],
          southern: ['February', 'March', 'April'],
        },
      },
    },
    {
      name: 'Ribbon eel',
      img: 'ribboneel',
      catchData: {
        price: '600',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['June', 'July', 'August', 'September', 'October'],
          southern: ['January', 'February', 'March', 'April', 'December'],
        },
      },
    },
    {
      name: 'Tuna',
      img: 'tuna',
      catchData: {
        price: '7,000',
        location: 'Pier',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
          southern: ['May', 'June', 'July', 'August', 'September', 'October'],
        },
      },
    },
    {
      name: 'Blue marlin',
      img: 'bluemarlin',
      catchData: {
        price: '10,000',
        location: 'Pier',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'July',
            'August',
            'September',
            'November',
            'December',
          ],
          southern: [
            'January',
            'February',
            'March',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
        },
      },
    },
    {
      name: 'Giant trevally',
      img: 'gianttrevally',
      catchData: {
        price: '4,500',
        location: 'Pier',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Mahi-mahi',
      img: 'mahimahi',
      catchData: {
        price: '6,000',
        location: 'Pier',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Ocean sunfish',
      img: 'oceansunfish',
      catchData: {
        price: '4,000',
        location: 'Sea',
        time: '4 AM - 9 PM',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Ray',
      img: 'ray',
      catchData: {
        price: '3,000',
        location: 'Sea',
        time: '4 AM - 9 PM',
        months: {
          northern: ['August', 'September', 'October', 'November'],
          southern: ['February', 'March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Saw shark',
      img: 'sawshark',
      catchData: {
        price: '12,000',
        location: 'Sea',
        time: '4 PM - 9 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Hammerhead shark',
      img: 'hammerheadshark',
      catchData: {
        price: '8,000',
        location: 'Sea',
        time: '4 PM - 9 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Great white shark',
      img: 'greatwhiteshark',
      catchData: {
        price: '15,000',
        location: 'Sea',
        time: '4 PM - 9 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Whale shark',
      img: 'whaleshark',
      catchData: {
        price: '13,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Suckerfish',
      img: 'suckerfish',
      catchData: {
        price: '1,500',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Football fish',
      img: 'footballfish',
      catchData: {
        price: '2,500',
        location: 'Sea',
        time: '4 PM - 9 AM',
        months: {
          northern: ['January', 'February', 'March', 'November', 'December'],
          southern: ['May', 'June', 'July', 'August', 'September'],
        },
      },
    },
    {
      name: 'Oarfish',
      img: 'oarfish',
      catchData: {
        price: '9,000',
        location: 'Sea',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'December',
          ],
          southern: [
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
        },
      },
    },
    {
      name: 'Barreleye',
      img: 'barreleye',
      catchData: {
        price: '15,000',
        location: 'Sea',
        time: '9 PM - 4 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Coelacanth',
      img: 'coelacanth',
      catchData: {
        price: '15,000',
        location: 'Sea',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
  ],
  bug: [
    {
      name: 'Common butterfly',
      img: 'commonbutterfly',
      catchData: {
        price: '160',
        location: 'Flying',
        time: '4 AM - 7 PM',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Yellow butterfly',
      img: 'yellowbutterfly',
      catchData: {
        price: '160',
        location: 'Flying',
        time: '4 AM - 7 PM',
        months: {
          northern: ['March', 'April', 'May', 'June', 'September', 'October'],
          southern: [
            'March',
            'April',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Tiger butterfly',
      img: 'tigerbutterfly',
      catchData: {
        price: '240',
        location: 'Flying',
        time: '4 AM - 7 PM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
          ],
          southern: [
            'January',
            'February',
            'March',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Peacock butterfly',
      img: 'peacockbutterfly',
      catchData: {
        price: '2,500',
        location: 'Flying by Hybrid Flowers',
        time: '4 AM - 7 PM',
        months: {
          northern: ['March', 'April', 'May', 'June'],
          southern: ['September', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Common bluebottle',
      img: 'commonbluebottle',
      catchData: {
        price: '300',
        location: 'Flying',
        time: '4 AM - 7 PM',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Paper kite butterfly',
      img: 'paperkitebutterfly',
      catchData: {
        price: '1,000',
        location: 'Flying',
        time: '8 AM - 7 PM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Great purple emperor',
      img: 'greatpurpleemperor',
      catchData: {
        price: '3,000',
        location: 'Flying',
        time: '4 AM - 7 PM',
        months: {
          northern: ['May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'November', 'December'],
        },
      },
    },
    {
      name: 'Monarch butterfly',
      img: 'monarchbutterfly',
      catchData: {
        price: '140',
        location: 'Flying',
        time: '4 AM - 5 PM',
        months: {
          northern: ['September', 'October', 'November'],
          southern: ['March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Emperor butterfly',
      img: 'emperorbutterfly',
      catchData: {
        price: '4,000',
        location: 'Flying',
        time: '5 PM - 8 AM',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'June',
            'July',
            'August',
            'September',
            'December',
          ],
          southern: [
            'January',
            'February',
            'March',
            'June',
            'July',
            'August',
            'September',
            'December',
          ],
        },
      },
    },
    {
      name: 'Agrias butterfly',
      img: 'agriasbutterfly',
      catchData: {
        price: '3,000',
        location: 'Flying',
        time: '8 AM - 5 PM',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: "Rajah Brooke's birdwing",
      img: 'rajahbrookesbirdwing',
      catchData: {
        price: '2,500',
        location: 'Flying',
        time: '8 AM - 5 PM',
        months: {
          northern: [
            'January',
            'February',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'December',
          ],
          southern: [
            'January',
            'February',
            'March',
            'June',
            'July',
            'August',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: "Queen Alexandra's birdwing",
      img: 'queenalexandrasbirdwing',
      catchData: {
        price: '4,000',
        location: 'Flying',
        time: '8 AM - 4 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Moth',
      img: 'moth',
      catchData: {
        price: '130',
        location: 'Flying by Light',
        time: '7 PM - 4 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Atlas moth',
      img: 'atlasmoth',
      catchData: {
        price: '3,000',
        location: 'On Trees',
        time: '7 PM - 4 AM',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Madagascan sunset moth',
      img: 'madagascansunsetmoth',
      catchData: {
        price: '2,500',
        location: 'Flying',
        time: '8 AM - 4 PM',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Long locust',
      img: 'longlocust',
      catchData: {
        price: '200',
        location: 'On the Ground',
        time: '8 AM - 7 PM',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Migratory locust',
      img: 'migratorylocust',
      catchData: {
        price: '600',
        location: 'On the Ground',
        time: '8 AM - 7 PM',
        months: {
          northern: ['August', 'September', 'October', 'November'],
          southern: ['February', 'March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Rice grasshopper',
      img: 'ricegrasshopper',
      catchData: {
        price: '160',
        location: 'On the Ground',
        time: '8 AM - 7 PM',
        months: {
          northern: ['August', 'September', 'October', 'November'],
          southern: ['February', 'March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Grasshopper',
      img: 'grasshopper',
      catchData: {
        price: '160',
        location: 'On the Ground',
        time: '8 AM - 5 PM',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Cricket',
      img: 'cricket',
      catchData: {
        price: '130',
        location: 'On the Ground',
        time: '5 PM - 8 AM',
        months: {
          northern: ['September', 'October', 'November'],
          southern: ['March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Bell cricket',
      img: 'bellcricket',
      catchData: {
        price: '430',
        location: 'On the Ground',
        time: '5 PM - 8 AM',
        months: {
          northern: ['September', 'October'],
          southern: ['March', 'April'],
        },
      },
    },
    {
      name: 'Mantis',
      img: 'mantis',
      catchData: {
        price: '430',
        location: 'On Flowers',
        time: '8 AM - 5 PM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Orchid mantis',
      img: 'orchidmantis',
      catchData: {
        price: '2,400',
        location: 'On Flowers (White)',
        time: '8 AM - 5 PM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Honeybee',
      img: 'honeybee',
      catchData: {
        price: '200',
        location: 'Flying',
        time: '8 AM - 5 PM',
        months: {
          northern: ['March', 'April', 'May', 'June', 'July'],
          southern: ['January', 'September', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Wasp',
      img: 'wasp',
      catchData: {
        price: '2,500',
        location: 'Shaking Trees',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Brown cicada',
      img: 'browncicada',
      catchData: {
        price: '250',
        location: 'On Trees',
        time: '8 AM - 5 PM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Robust cicada',
      img: 'robustcicada',
      catchData: {
        price: '300',
        location: 'On Trees',
        time: '8 AM - 5 PM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Giant cicada',
      img: 'giantcicada',
      catchData: {
        price: '500',
        location: 'On Trees',
        time: '8 AM - 5 PM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Walker cicada',
      img: 'walkercicada',
      catchData: {
        price: '400',
        location: 'On Trees',
        time: '8 AM - 5 PM',
        months: {
          northern: ['August', 'September'],
          southern: ['February', 'March'],
        },
      },
    },
    {
      name: 'Evening cicada',
      img: 'eveningcicada',
      catchData: {
        price: '550',
        location: 'On Trees',
        time: '4 AM - 8 AM & 4 PM - 7 PM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Cicada shell',
      img: 'cicadashell',
      catchData: {
        price: '10',
        location: 'On Trees',
        time: 'All day',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Red dragonfly',
      img: 'reddragonfly',
      catchData: {
        price: '180',
        location: 'Flying',
        time: '8 AM - 7 PM',
        months: {
          northern: ['September', 'October'],
          southern: ['March', 'April'],
        },
      },
    },
    {
      name: 'Darner dragonfly',
      img: 'darnerdragonfly',
      catchData: {
        price: '230',
        location: 'Flying',
        time: '8 AM - 5 PM',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Banded dragonfly',
      img: 'bandeddragonfly',
      catchData: {
        price: '4,500',
        location: 'Flying',
        time: '8 AM - 5 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Damselfly',
      img: 'damselfly',
      catchData: {
        price: '500',
        location: 'Flying',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'November', 'December'],
          southern: ['May', 'June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Firefly',
      img: 'firefly',
      catchData: {
        price: '300',
        location: 'Flying',
        time: '7 PM - 4 AM',
        months: { northern: ['June'], southern: ['December'] },
      },
    },
    {
      name: 'Mole cricket',
      img: 'molecricket',
      catchData: {
        price: '500',
        location: 'Underground',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'November',
            'December',
          ],
          southern: [
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
        },
      },
    },
    {
      name: 'Pondskater',
      img: 'pondskater',
      catchData: {
        price: '130',
        location: 'On Ponds and Rivers',
        time: '8 AM - 7 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Diving beetle',
      img: 'divingbeetle',
      catchData: {
        price: '800',
        location: 'On Ponds and Rivers',
        time: '8 AM - 7 PM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Giant water bug',
      img: 'giantwaterbug',
      catchData: {
        price: '2,000',
        location: 'On Ponds and Rivers',
        time: '7 PM - 8 AM',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August', 'September'],
          southern: [
            'January',
            'February',
            'March',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Stinkbug',
      img: 'stinkbug',
      catchData: {
        price: '120',
        location: 'On Flowers',
        time: 'All day',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Man-faced stink bug',
      img: 'manfacedstinkbug',
      catchData: {
        price: '1,000',
        location: 'On Flowers',
        time: '7 PM - 8 AM',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Ladybug',
      img: 'ladybug',
      catchData: {
        price: '200',
        location: 'On Flowers',
        time: '8 AM - 5 PM',
        months: {
          northern: ['March', 'April', 'May', 'June', 'October'],
          southern: ['April', 'September', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Tiger beetle',
      img: 'tigerbeetle',
      catchData: {
        price: '1,500',
        location: 'On the Ground',
        time: 'All day',
        months: {
          northern: [
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Jewel beetle',
      img: 'jewelbeetle',
      catchData: {
        price: '2,400',
        location: 'On Tree Stumps',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Violin beetle',
      img: 'violinbeetle',
      catchData: {
        price: '450',
        location: 'On Tree Stumps',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'September', 'October', 'November'],
          southern: ['March', 'April', 'May', 'November', 'December'],
        },
      },
    },
    {
      name: 'Citrus long-horned beetle',
      img: 'citruslonghornedbeetle',
      catchData: {
        price: '350',
        location: 'On Tree Stumps',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Rosalia batesi beetle',
      img: 'rosaliabatesibeetle',
      catchData: {
        price: '3,000',
        location: 'On Tree Stumps',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Blue weevil beetle',
      img: 'blueweevilbeetle',
      catchData: {
        price: '800',
        location: 'On Trees (Coconut)',
        time: 'All day',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Dung beetle',
      img: 'dungbeetle',
      catchData: {
        price: '3,000',
        location: 'On the Ground (rolling snowballs)',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'December'],
          southern: ['June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Earth-boring dung beetle',
      img: 'earthboringdungbeetle',
      catchData: {
        price: '300',
        location: 'On the Ground',
        time: 'All day',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Scarab beetle',
      img: 'scarabbeetle',
      catchData: {
        price: '10,000',
        location: 'On Trees',
        time: '11 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Drone beetle',
      img: 'dronebeetle',
      catchData: {
        price: '200',
        location: 'On Trees',
        time: 'All day',
        months: {
          northern: ['June', 'July', 'August'],
          southern: ['January', 'February', 'December'],
        },
      },
    },
    {
      name: 'Goliath beetle',
      img: 'goliathbeetle',
      catchData: {
        price: '8,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Saw stag',
      img: 'sawstag',
      catchData: {
        price: '2,000',
        location: 'On Trees',
        time: 'All day',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Miyama stag',
      img: 'miyamastag',
      catchData: {
        price: '1,000',
        location: 'On Trees',
        time: 'All day',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Giant stag',
      img: 'giantstag',
      catchData: {
        price: '10,000',
        location: 'On Trees',
        time: '11 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Rainbow stag',
      img: 'rainbowstag',
      catchData: {
        price: '6,000',
        location: 'On Trees',
        time: '7 PM - 8 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Cyclommatus stag',
      img: 'cyclommatusstag',
      catchData: {
        price: '8,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Golden stag',
      img: 'goldenstag',
      catchData: {
        price: '12,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Giraffe stag',
      img: 'giraffestag',
      catchData: {
        price: '12,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Horned dynastid',
      img: 'horneddynastid',
      catchData: {
        price: '1,350',
        location: 'On Trees',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Horned atlas',
      img: 'hornedatlas',
      catchData: {
        price: '8,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Horned elephant',
      img: 'hornedelephant',
      catchData: {
        price: '8,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Horned hercules',
      img: 'hornedhercules',
      catchData: {
        price: '12,000',
        location: 'On Trees (Coconut)',
        time: '5 PM - 8 AM',
        months: {
          northern: ['July', 'August'],
          southern: ['January', 'February'],
        },
      },
    },
    {
      name: 'Walking stick',
      img: 'walkingstick',
      catchData: {
        price: '600',
        location: 'On Trees',
        time: '4 AM - 8 AM & 5 PM - 7 PM',
        months: {
          northern: ['July', 'August', 'September', 'October', 'November'],
          southern: ['January', 'February', 'March', 'April', 'May'],
        },
      },
    },
    {
      name: 'Walking leaf',
      img: 'walkingleaf',
      catchData: {
        price: '600',
        location: 'Under Trees Disguised as Leaves',
        time: 'All day',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Bagworm',
      img: 'bagworm',
      catchData: {
        price: '600',
        location: 'Shaking Trees',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Ant',
      img: 'ant',
      catchData: {
        price: '80',
        location: 'On rotten food',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Hermit crab',
      img: 'hermitcrab',
      catchData: {
        price: '1,000',
        location: 'Beach disguised as Shells',
        time: '7 PM - 8 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Wharf roach',
      img: 'wharfroach',
      catchData: {
        price: '200',
        location: 'On Beach Rocks',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Fly',
      img: 'fly',
      catchData: {
        price: '60',
        location: 'On Trash Items',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Mosquito',
      img: 'mosquito',
      catchData: {
        price: '130',
        location: 'Flying',
        time: '5 PM - 4 AM',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Flea',
      img: 'flea',
      catchData: {
        price: '70',
        location: "Villager's Heads",
        time: 'All day',
        months: {
          northern: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Snail',
      img: 'snail',
      catchData: {
        price: '250',
        location: 'On Rocks and Bushes (Rain)',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Pill bug',
      img: 'pillbug',
      catchData: {
        price: '250',
        location: 'Hitting Rocks',
        time: '11 PM - 4 PM',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Centipede',
      img: 'centipede',
      catchData: {
        price: '300',
        location: 'Hitting Rocks',
        time: '4 PM - 11 PM',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Spider',
      img: 'spider',
      catchData: {
        price: '600',
        location: 'Shaking Trees',
        time: '7 PM - 8 AM',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Tarantula',
      img: 'tarantula',
      catchData: {
        price: '8,000',
        location: 'On the Ground',
        time: '7 PM - 4 AM',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
          southern: ['May', 'June', 'July', 'August', 'September', 'October'],
        },
      },
    },
    {
      name: 'Scorpion',
      img: 'scorpion',
      catchData: {
        price: '8,000',
        location: 'On the Ground',
        time: '7 PM - 4 AM',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
  ],
  'sea-creature': [
    {
      name: 'Seaweed',
      img: 'seaweed',
      catchData: {
        price: '600',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'October',
            'November',
            'December',
          ],
          southern: [
            'January',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Sea grapes',
      img: 'seagrapes',
      catchData: {
        price: '900',
        time: 'All day',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Sea cucumber',
      img: 'seacucumber',
      catchData: {
        price: '500',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
          southern: ['May', 'June', 'July', 'August', 'September', 'October'],
        },
      },
    },
    {
      name: 'Sea pig',
      img: 'seapig',
      catchData: {
        price: '10,000',
        time: '4pm - 9am',
        months: {
          northern: ['January', 'February', 'November', 'December'],
          southern: ['May', 'June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Sea star',
      img: 'seastar',
      catchData: {
        price: '500',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Sea urchin',
      img: 'seaurchin',
      catchData: {
        price: '1,700',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Slate pencil urchin',
      img: 'slatepencilurchin',
      catchData: {
        price: '2,000',
        time: '4pm - 9am',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Sea anemone',
      img: 'seaanemone',
      catchData: {
        price: '500',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Moon jellyfish',
      img: 'moonjellyfish',
      catchData: {
        price: '600',
        time: 'All day',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Sea slug',
      img: 'seaslug',
      catchData: {
        price: '600',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Pearl oyster',
      img: 'pearloyster',
      catchData: {
        price: '2,800',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Mussel',
      img: 'mussel',
      catchData: {
        price: '1,500',
        time: 'All day',
        months: {
          northern: [
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'December',
          ],
        },
      },
    },
    {
      name: 'Oyster',
      img: 'oyster',
      catchData: {
        price: '1,100',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: ['March', 'April', 'May', 'June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Scallop',
      img: 'scallop',
      catchData: {
        price: '1,200',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Whelk',
      img: 'whelk',
      catchData: {
        price: '1,000',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Turban shell',
      img: 'turbanshell',
      catchData: {
        price: '1,000',
        time: 'All day',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
          ],
        },
      },
    },
    {
      name: 'Abalone',
      img: 'abalone',
      catchData: {
        price: '2,000',
        time: '4pm - 9am',
        months: {
          northern: [
            'January',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'December',
          ],
        },
      },
    },
    {
      name: 'Gigas giant clam',
      img: 'gigasgiantclam',
      catchData: {
        price: '15,000',
        time: 'All day',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'November', 'December'],
        },
      },
    },
    {
      name: 'Chambered nautilus',
      img: 'chamberednautilus',
      catchData: {
        price: '1,800',
        time: '4pm - 9am',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'June',
            'September',
            'October',
            'November',
          ],
          southern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Octopus',
      img: 'octopus',
      catchData: {
        price: '1,200',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Umbrella octopus',
      img: 'umbrellaoctopus',
      catchData: {
        price: '6,000',
        time: 'All day',
        months: {
          northern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
          ],
          southern: [
            'March',
            'April',
            'May',
            'September',
            'October',
            'November',
          ],
        },
      },
    },
    {
      name: 'Vampire squid',
      img: 'vampiresquid',
      catchData: {
        price: '10,000',
        time: '4pm - 9am',
        months: {
          northern: ['May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'November', 'December'],
        },
      },
    },
    {
      name: 'Firefly squid',
      img: 'fireflysquid',
      catchData: {
        price: '1,400',
        time: '9pm - 4am',
        months: {
          northern: ['March', 'April', 'May', 'June'],
          southern: ['September', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Gazami crab',
      img: 'gazamicrab',
      catchData: {
        price: '2,200',
        time: 'All day',
        months: {
          northern: [
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'December',
          ],
        },
      },
    },
    {
      name: 'Dungeness crab',
      img: 'dungenesscrab',
      catchData: {
        price: '1,900',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'November',
            'December',
          ],
          southern: [
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
        },
      },
    },
    {
      name: 'Snow crab',
      img: 'snowcrab',
      catchData: {
        price: '6,000',
        time: 'All day',
        months: {
          northern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
          southern: ['May', 'June', 'July', 'August', 'September', 'October'],
        },
      },
    },
    {
      name: 'Red king crab',
      img: 'redkingcrab',
      catchData: {
        price: '8,000',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'March', 'November', 'December'],
          southern: ['May', 'June', 'July', 'August', 'September'],
        },
      },
    },
    {
      name: 'Acorn barnacle',
      img: 'acornbarnacle',
      catchData: {
        price: '600',
        time: 'All day',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Spider crab',
      img: 'spidercrab',
      catchData: {
        price: '12,000',
        time: 'All day',
        months: {
          northern: ['March', 'April'],
          southern: ['September', 'October'],
        },
      },
    },
    {
      name: 'Tiger prawn',
      img: 'tigerprawn',
      catchData: {
        price: '3,000',
        time: '4pm - 9am',
        months: {
          northern: ['June', 'July', 'August', 'September'],
          southern: ['January', 'February', 'March', 'December'],
        },
      },
    },
    {
      name: 'Sweet shrimp',
      img: 'sweetshrimp',
      catchData: {
        price: '1,400',
        time: '4pm - 9am',
        months: {
          northern: [
            'January',
            'February',
            'September',
            'October',
            'November',
            'December',
          ],
          southern: ['March', 'April', 'May', 'June', 'July', 'August'],
        },
      },
    },
    {
      name: 'Mantis shrimp',
      img: 'mantisshrimp',
      catchData: {
        price: '2,500',
        time: '4pm - 9am',
        months: { northern: ['Every Month'], southern: ['Every Month'] },
      },
    },
    {
      name: 'Spiny lobster',
      img: 'spinylobster',
      catchData: {
        price: '5,000',
        time: '9pm - 4am',
        months: {
          northern: ['October', 'November', 'December'],
          southern: ['April', 'May', 'June'],
        },
      },
    },
    {
      name: 'Lobster',
      img: 'lobster',
      catchData: {
        price: '4,500',
        time: 'All day',
        months: {
          northern: ['January', 'April', 'May', 'June', 'December'],
          southern: ['June', 'July', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Giant isopod',
      img: 'giantisopod',
      catchData: {
        price: '12,000',
        time: '9am - 4pm & 9pm - 4am',
        months: {
          northern: ['July', 'August', 'September', 'October'],
          southern: ['January', 'February', 'March', 'April'],
        },
      },
    },
    {
      name: 'Horseshoe Crab',
      img: 'horseshoecrab',
      catchData: {
        price: '2,500',
        time: '9pm - 4am',
        months: {
          northern: ['July', 'August', 'September'],
          southern: ['January', 'February', 'March'],
        },
      },
    },
    {
      name: 'Sea pineapple',
      img: 'seapineapple',
      catchData: {
        price: '1,500',
        time: 'All day',
        months: {
          northern: ['April', 'May', 'June', 'July', 'August'],
          southern: ['January', 'February', 'October', 'November', 'December'],
        },
      },
    },
    {
      name: 'Spotted garden eel',
      img: 'spottedgardeneel',
      catchData: {
        price: '1,100',
        time: '4am - 9pm',
        months: {
          northern: ['May', 'June', 'July', 'August', 'September', 'October'],
          southern: [
            'January',
            'February',
            'March',
            'April',
            'November',
            'December',
          ],
        },
      },
    },
    {
      name: 'Flatworm',
      img: 'flatworm',
      catchData: {
        price: '700',
        time: '4pm - 9am',
        months: {
          northern: ['August', 'September'],
          southern: ['February', 'March'],
        },
      },
    },
    {
      name: "Venus' flower basket",
      img: 'venusflowerbasket',
      catchData: {
        price: '5,000',
        time: 'All day',
        months: {
          northern: ['January', 'February', 'October', 'November', 'December'],
          southern: ['April', 'May', 'June', 'July', 'August'],
        },
      },
    },
  ],
};

export default specimens;
