<script setup>
import TitlePage from './components/TitlePage.vue'
</script>

<template>
  <div class="container">

    <header class="titleContainer">
      <!-- Title and Image -->
      <div class="title">The Distracted Developer's Blog</div>
      <img src="./assets/LakeShoreCropped.jpg">
    </header>

    <main>
      <br>
      <hr>
      <br>
      <router-view />
    </main>
  </div>
</template>

<style scoped>

.titleContainer {
  container-type: inline-size;
  container-name: container;
  position: relative;  /* Establish a positioning context for the title */
  display: flex;  /* Enable flexbox layout for alignment */
  justify-content: center;  /* Center the image and title horizontally */
  align-items: center;  /* Center the image and title vertically */
}

.title {
  display: flex;
  position: absolute;  /* Position the title independently within the container */
  top: 75%;
  justify-content: center;  /* Center the title within the image */
  color: white;
  text-shadow: 3px 3px 5px black;
  font-size: 6cqw;
  font-weight:500;
}

@media (max-width: 580px) {
  .title {
    font-size: 6.5cqw;
  }
}


header img {
  object-fit: contain;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}


</style>
