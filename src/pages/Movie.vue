<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="movie.imageSource" alt="" class="w-100" />
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <p>{{ movie.name }}</p>
          <button @click="goBack" class="btn btn-sm btn-info">Back</button>
          <router-link :to="{ name: 'home' }" class="btn btn-sm btn-danger"
            >Back to Home</router-link
          >
        </div>
        <p>{{ movie.year }}</p>

        <div class="my-3">
          <router-link
            :to="{ name: 'movieOverview', params: { id: movie.id } }"
            class="px-3 py-1 border border-primary mx-2 rounded text-decoration-none text-dark"
            >Overview</router-link
          >
          <router-link
            :to="{ name: 'movieTrailer', params: { id: movie.id } }"
            class="px-3 py-1 border border-primary mx-2 rounded text-decoration-none text-dark"
            >Trailer</router-link
          >
          <router-link
            :to="{ name: 'movieArtists', params: { id: movie.id } }"
            class="px-3 py-1 border border-primary mx-2 rounded text-decoration-none text-dark"
            >Artists</router-link
          >
        </div>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, inject, computed } from 'vue'
const route = useRoute()
const router = useRouter()

const movieId = parseInt(route.params.id)
const movies = inject('movies')

const movie = computed(() => {
  return movies.value.find((movie) => {
    return movie.id === movieId
  })
})

const goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped></style>
