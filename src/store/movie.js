import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([
    {
      id: 1,
      name: 'Into The Wild',
      category: 'biography',
      imageSource: '/images/poster6.png',
      year: 2017,
      isTop: true,
      stars: 5
    },

    {
      id: 2,
      name: 'Darkest Hour',
      category: 'history',
      imageSource: '/images/poster5.png',
      year: 2018,
      isTop: false,
      stars: 4
    },

    {
      id: 3,
      name: 'The Shawshank Redemption',
      category: 'drama',
      imageSource: '/images/poster4.png',
      year: 1998,
      isTop: true,
      stars: 5
    },

    {
      id: 4,
      name: 'Indiana Jones',
      category: 'adventure',
      imageSource: '/images/poster7.png',
      year: 2003,
      isTop: true,
      stars: 5
    },

    {
      id: 5,
      name: 'Jaws',
      category: 'adventure',
      imageSource: '/images/poster8.png',
      year: 2014,
      isTop: false,
      stars: 4
    },

    {
      id: 6,
      name: 'Jurassic Park',
      category: 'action',
      imageSource: '/images/poster9.png',
      year: 2012,
      isTop: true,
      stars: 4
    },

    {
      id: 7,
      name: 'Avengers: Infinity War',
      category: 'action',
      imageSource: '/images/poster10.png',
      year: 2016,
      isTop: true,
      stars: 5
    },

    {
      id: 8,
      name: 'The Manager',
      category: 'biography',
      imageSource: '/images/poster11.png',
      year: 2020,
      isTop: false,
      stars: 3
    },

    {
      id: 9,
      name: 'Rivers',
      category: 'drama',
      imageSource: '/images/poster12.png',
      year: 2022,
      isTop: false,
      stars: 3
    },

    {
      id: 10,
      name: 'Agent',
      category: 'action',
      imageSource: '/images/poster13.png',
      year: 2023,
      isTop: false,
      stars: 3
    },

    {
      id: 11,
      name: 'The Hobbits',
      category: 'adventure',
      imageSource: '/images/poster14.png',
      year: 2000,
      isTop: true,
      stars: 5
    },

    {
      id: 12,
      name: 'Fast X',
      category: 'action',
      imageSource: '/images/poster15.png',
      year: 2023,
      isTop: false,
      stars: 4
    }
  ])

  return { movies }
})
