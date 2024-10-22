<template>
  <div class="container pt-5" style="min-height: 85vh">
    <div class="row my-3">
      <h5 class="my-3">Explore All movies</h5>

      <div class="d-flex">
        <select v-model="category" @change="filteredByCategory" class="form-control me-5">
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="biography">Biography</option>
          <option value="drama">Drama</option>
          <option value="history">History</option>
        </select>
        <input type="text" v-model="searchInput" @input="filteredByName" class="form-control" />
      </div>
    </div>

    <div class="row g-3">
      <div v-for="movie in movieList" :key="movie.id" class="col-md-4">
        <div class="card card-body p-0 overflow-hidden">
          <img
            :src="movie.imageSource"
            alt=""
            class="w-100 object-fit-cover"
            style="height: 250px"
          />
          <div class="px-2 py-4">
            <h6>{{ movie.name.toUpperCase() }}</h6>
            <p>{{ movie.year }} | {{ movie.category.toUpperCase() }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="star d-flex">
                <!-- Full Stars -->

                <svg
                  v-for="num in movie.stars"
                  :key="num"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill ms-2 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>

                <!-- Empty Stars -->

                <svg
                  v-for="num in 5 - movie.stars"
                  :key="num"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star ms-2 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                  />
                </svg>
              </div>
              <router-link
                :to="`/movies/${movie.id}`"
                class="btn btn-warning btn-sm mt-3 rounded-pill"
                >အသေးစိတ်</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import { useMovieStore } from '../store/movie'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const movieStore = useMovieStore()
const { movies } = storeToRefs(movieStore)

const movieList = ref(movies.value)

// filter by category
const category = ref('all')
const filteredByCategory = (event) => {
  if (category.value == 'all') {
    return (movieList.value = movies.value)
  } else {
    movieList.value = movies.value.filter((movie) => {
      return movie.category === category.value
    })
  }
}

// filter by name
const searchInput = ref('')
const filteredByName = () => {
  if (searchInput.value === '') {
    return (movieList.value = movies.value)
  } else {
    movieList.value = movies.value.filter((movie) => {
      return movie.name.toLowerCase().includes(searchInput.value.toLowerCase())
    })
  }
}

// go to detail
const router = useRouter()
const goToDetail = (id) => {
  // router.push(`/movies/${id}`)
  // router.push({ path: `/movies/${id}` })
  router.push({ name: 'movie', params: { id: id } })
}
</script>

<style lang="scss" scoped></style>
