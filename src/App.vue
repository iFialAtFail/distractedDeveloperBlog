<script setup>
import TitlePage from './components/TitlePage.vue'
</script>

<template>
  <div class="container">

    <header class="titleContainer">
      <!-- Title and Image -->
      <div class="title">
        <router-link class="titleLink wavy" :to="{ name: 'BlogMain' }">
          <span style="--i:1">T</span>
          <span style="--i:2">h</span>
          <span style="--i:3">e</span>
          <span style="--i:4"> </span>
          <span style="--i:5">D</span>
          <span style="--i:6">i</span>
          <span style="--i:7">s</span>
          <span style="--i:8">t</span>
          <span style="--i:9">r</span>
          <span style="--i:10">a</span>
          <span style="--i:11">c</span>
          <span style="--i:12">t</span>
          <span style="--i:13">e</span>
          <span style="--i:14">d</span>
          <span style="--i:15"> </span>
          <span style="--i:16">D</span>
          <span style="--i:17">e</span>
          <span style="--i:18">v</span>
          <span style="--i:19">e</span>
          <span style="--i:20">l</span>
          <span style="--i:21">o</span>
          <span style="--i:22">p</span>
          <span style="--i:23">e</span>
          <span style="--i:24">r</span>
          <span style="--i:25">'</span>
          <span style="--i:26">s</span>
          <span style="--i:27"> </span>
          <span style="--i:28">B</span>
          <span style="--i:29">l</span>
          <span style="--i:30">o</span>
          <span style="--i:31">g</span>
        </router-link>
      </div>
      <img src="./assets/LakeShoreCropped.jpg">
    </header>

    <main class="container-content">
      <br>
      <hr>
      <br>
      <router-view />
    </main>
    <footer class="blog-footer">


      <a href="#" aria-label="Back To Top">
        <svg width="32" height="32" viewBox="0 0 100 100">
          <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" fill="white" />
          <polyline points="20,50 50,25 80,50" fill="none" stroke="black" stroke-width="10" />
          <polyline points="20,70 50,45 80,70" fill="none" stroke="black" stroke-width="10" />
        </svg>
      </a>
    </footer>
  </div>
</template>

<style scoped>
.titleContainer {
  container-type: inline-size;
  container-name: container;
  position: relative;
  /* Establish a positioning context for the title */
  display: flex;
  /* Enable flexbox layout for alignment */
  justify-content: center;
  /* Center the image and title horizontally */
  align-items: center;
  /* Center the image and title vertically */
}

.title {
  display: flex;
  position: absolute;
  /* Position the title independently within the container */
  top: 75%;
  justify-content: center;
  /* Center the title within the image */
  color: white;
  text-shadow: 3px 3px 5px black;
  font-size: 6cqw;
  font-weight: 500;
}

.titleLink {
  color: white;
}

.blog-footer {
  position: fixed;
  bottom: 1.8rem;
  right: 1.8rem;
  z-index: 100;
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
  border-radius: 15px;
}

.wavy span {
  animation: none;
  animation-play-state: initial;
}

@media (hover:hover) {
  .wavy:hover span {
    display: inline-block;
    background-color: hsla(160, 0%, 37%, 0.0);
    animation: animate 2s ease-in-out infinite;
    animation-delay: calc(0.05s * var(--i));
  }

  a:hover {
    background-color: hsla(160, 0%, 37%, 0.0);
  }

  .title:hover {
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
    color: #000;
  }

}


@keyframes animate {
  0% {
    transform: translateY(0px);
  }

  20% {
    transform: translateY(-10px);
  }

  40%,
  100% {
    transform: translateY(0px);
  }
}
</style>
