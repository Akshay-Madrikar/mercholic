const COLLECTION_DATA = {
  divine: {
      id: 1,
      name: 'Divine',
      imageUrl: 'https://i.ibb.co/cYxn5XN/divine.jpg',
      linkUrl: 'explore/rapper/divine',
      items: [
          {
              id: 2,
              name: 'GullyGang T-shirt',
              imageUrl: 'https://i.ibb.co/SsD19Cd/divine-merch-1.jpg',
              price: 250
          },
          {
              id: 3,
              name: 'GullyGang Hoodie',
              imageUrl: 'https://i.ibb.co/7Cj7Wny/divine-merch-2.jpg',
              price: 180
          }
      ]
  },
  naezy: {
      id: 2,
      name: 'Naezy',
      imageUrl: 'https://i.ibb.co/MNCgTYH/Naezy.jpg',
      linkUrl: 'explore/rapper/naezy',
      items: [
          {
              id: 3,
              name: 'Black B70',
              imageUrl: 'https://i.ibb.co/r2tWpxB/naezy-merch-1.jpg',
              price: 350
          },
          {
              id: 4,
              name: 'Bohot Hard Tshirt',
              imageUrl: 'https://i.ibb.co/StTFNKQ/naezy-merch-2.jpg',
              price: 250
          }
      ]
  },
  seedhemaut: {
      id: 3,
      name: 'Seedhe Maut',
      imageUrl: 'https://i.ibb.co/brrQgLC/Seedhe-Maut.jpg',
      linkUrl: 'explore/rapper/seedhe-maut',
      items: [
          {
              id: 5,
              name: 'SM Hoodie',
              imageUrl: 'https://i.ibb.co/TtZL1pt/seedhe-maut-merch-1.jpg',
              price: 180
          },
          {
              id: 6,
              name: 'Byaan Album Poster',
              imageUrl: 'https://i.ibb.co/Nt1HgK3/seedhe-maut-merch-2.jpg',
              price: 140
          }
      ]
  },
  prabhdeep: {
      id: 4,
      name: 'Prabhdeep',
      imageUrl: 'https://i.ibb.co/1GN3PYP/Prabhdeep.jpg',
      linkUrl: 'explore/rapper/prabhdeep',
      items: [
          {
              id: 7,
              name: 'King Gold',
              imageUrl: 'https://i.ibb.co/NLnbYMK/prabhdeep-merch-1.jpg',
              price: 180
          },
          {
              id: 8,
              name: 'King Fanny',
              imageUrl: 'https://i.ibb.co/Hrv1J2V/prabhdeep-merch-2.jpg',
              price: 140
          }
      ]
  },

  bhuvanbham: {
    id: 5,
    name: 'Bhuvan Bham',
    imageUrl: 'https://i.ibb.co/Fqp8xh2/Bhuvam-bham.jpg',
    linkUrl: 'explore/youtuber/bhuvanbham',
    items: [
      {
        id: 9,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 2800
      },
      {
        id: 10,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 1800
      }
    ]
  },

  beyounick: {
    id: 6,
    name: 'Beyounick',
    imageUrl: 'https://i.ibb.co/HCkggF9/Beyounick.jpg',
    linkUrl: 'explore/youtuber/beyounick',
    items: [
      {
        id: 11,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 1100
      },
      {
        id: 12,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 1600
      }
    ]
  },
  
  beerbiceps: {
    id: 7,
    name: 'BeerBiceps',
    imageUrl: 'https://i.ibb.co/ydSvrJH/Beerbiceps.jpg',
    linkUrl: 'explore/youtuber/beerbiceps',
    items: [
      {
        id: 13,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 1600
      },
      {
        id: 14,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 1600
      }
    ]
  },
  
  mostlysane: {
    id: 8,
    name: 'MostlySane',
    imageUrl: 'https://i.ibb.co/5c8NRsL/Mostlysane.jpg',
    linkUrl: 'explore/youtuber/mostlysane',
    items: [
      {
        id: 15,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 16,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },
  
  amitagarwal: {
    id: 9,
    name: 'Amit Agarwal',
    imageUrl: 'https://i.ibb.co/0YZc2hW/Amit-Agarwal.jpg',
    linkUrl: 'explore/blogger/amitagarwal',
    items: [
      {
        id: 17,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 1250
      },
      {
        id: 18,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 900
      }
    ]
  },
  
  shardasharma: {
    id: 10,
    name: 'Sharda Sharma',
    imageUrl: 'https://i.ibb.co/vQ7BPjm/Shradha-Sharma.jpg',
    linkUrl: 'explore/blogger/shardasharma',
    items: [
      {
        id: 19,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 900
      },
      {
        id: 20,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 1650
      }
    ]
  },
  
  abhijeetmukherjee: {
    id: 11,
    name: 'Abhijeet Mukherjee',
    imageUrl: 'https://i.ibb.co/crTYWKd/Abhijeet-Mukherjee.jpg',
    linkUrl: 'explore/blogger/abhijeetmukherjee',
    items: [
      {
        id: 21,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 1850
      },
      {
        id: 22,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 1650
      }
    ]
  },
  
  nandinishenoy: {
    id: 12,
    name: 'Nandini Shenoy',
    imageUrl: 'https://i.ibb.co/L0FCyGP/Nandini-Shenoy.png',
    linkUrl: 'explore/blogger/nandinishenoy',
    items: [
      {
        id: 23,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 24,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  andrewmead: {
    id: 13,
    name: 'Andrew Mead',
    imageUrl: 'https://i.ibb.co/Wf6bz7V/Andrew-Mead.jpg',
    linkUrl: 'explore/contentcreator/andrewmead',
    items: [
      {
        id: 25,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 26,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  andreineagoie: {
    id: 14,
    name: 'Andrei Neagoie',
    imageUrl: 'https://i.ibb.co/NVS9ZSK/Andrei-Neagoie.jpg',
    linkUrl: 'explore/contentcreator/andreineagoie',
    items: [
      {
        id: 27,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 28,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  maxmilian: {
    id: 15,
    name: 'Maximilian',
    imageUrl: 'https://i.ibb.co/QnvLmg0/Maximilian-Schwarzmuller.jpg',
    linkUrl: 'explore/contentcreator/maximilian',
    items: [
      {
        id: 29,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 30,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  yihuazhang: {
    id: 16,
    name: 'Yihua Zhang',
    imageUrl: 'https://i.ibb.co/k4byJFx/Yihua-Zhang.jpg',
    linkUrl: 'explore/contentcreator/yihuazhang',
    items: [
      {
        id: 31,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 32,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  meghnakaur: {
    id: 17,
    name: 'Meghna Kaur',
    imageUrl: 'https://i.ibb.co/kMhKQgf/Meghna-Kaur.jpg',
    linkUrl: 'explore/influencer/meghnakaur',
    items: [
      {
        id: 33,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 34,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  komalpandey: {
    id: 18,
    name: 'Komal Pandey',
    imageUrl: 'https://i.ibb.co/2qfm2dY/Komal-Pandey.jpg',
    linkUrl: 'explore/influencer/komalpandey',
    items: [
      {
        id: 35,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 36,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  kritikakhurana: {
    id: 19,
    name: 'Kritika Khurana',
    imageUrl: 'https://i.ibb.co/MNd1hFr/Kritika-Khurana.jpg',
    linkUrl: 'explore/influencer/kritikakhurana',
    items: [
      {
        id: 37,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 38,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  divadhawan: {
    id: 20,
    name: 'Diva Dhawan',
    imageUrl: 'https://i.ibb.co/7NKhTjX/Diva-Dhawan.jpg',
    linkUrl: 'explore/influencer/divadhawan',
    items: [
      {
        id: 39,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 40,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  vidyavox: {
    id: 21,
    name: 'Vidya Vox',
    imageUrl: 'https://i.ibb.co/9WNmKnn/Vidya-Vox.jpg',
    linkUrl: 'explore/popartist/vidyavox',
    items: [
      {
        id: 41,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 42,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  shirleysetia: {
    id: 22,
    name: 'Shirley Setia',
    imageUrl: 'https://i.ibb.co/x3wvz4w/Shirley-Setia.jpg',
    linkUrl: 'explore/popartist/shirleysetia',
    items: [
      {
        id: 43,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 44,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  ritviz: {
    id: 23,
    name: 'Ritviz',
    imageUrl: 'https://i.ibb.co/vZdVtyq/Ritviz.jpg',
    linkUrl: 'explore/popartist/ritviz',
    items: [
      {
        id: 45,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 46,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },

  prateekkuhad: {
    id: 24,
    name: 'Prateek Kuhad',
    imageUrl: 'https://i.ibb.co/KKr2yr2/Prateek-Kuhad.png',
    linkUrl: 'explore/popartist/prateekkuhad',
    items: [
      {
        id: 47,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 48,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  }
};

export default COLLECTION_DATA;