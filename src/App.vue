<script setup>
import TitlePage from './components/TitlePage.vue'
</script>

<template>
  <div class="container">

    <header class="titleContainer">
      <!-- Title and Image -->
      <h1 class="title">The Distracted Developer's Blog</h1>
      <img src="./assets/LakeShoreCropped.jpg">
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.titleContainer {
  position: relative; /* Establish a positioning context for the title */
  display: flex; /* Enable flexbox layout for alignment */
  justify-content: center; /* Center the image and title horizontally */
  align-items: center; /* Center the image and title vertically */
}
header img {
  object-fit: contain;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.titleContainer h1 {
  position: absolute; /* Position the title independently within the container */
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the title within the image */
  color: white; /* Adjust text color as needed for readability */
  text-shadow: 2px 2px 4px black; /* Optional: Add text shadow for better contrast */
}
</style>
