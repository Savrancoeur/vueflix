<template>
  <main>
    <nav class="navbar navbar-expand-lg position-fixed w-100 z-3" :class="navBgColor">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">Vueflix</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'movies' }" class="nav-link">Movies</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="p-3">
      <p class="text-center bg-dark text-white">&copy; All rights reserved by Savrancoeur</p>
    </footer>
  </main>
</template>

<script setup>
import { ref, provide, computed } from 'vue'

const scrollY = ref(0)

window.addEventListener('scroll', () => {
  scrollY.value = window.scrollY
})

const navBgColor = computed(() => {
  return scrollY.value > 50 ? 'bg-info' : 'bg-transparent'
})
</script>

<style scoped></style>
