<script setup>

import { useBlogStore } from '../data/BlogStore.js'
import { storeToRefs } from 'pinia'

let props = defineProps({
  blogId: {
    type: String,
    required: true
  }
})

const blogStore = useBlogStore()
const { blog, error } = storeToRefs(blogStore)
blogStore.fetchBlogById(props.blogId)

</script>

<template>
  <div class="col-sm-8 blog-main">
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-if="blog" class="blog-post">
        <h2 class="blog-post-title">{{ blog.title }}</h2>
        <p class="blog-post-meta">{{ blog.postDate }} by <a href="#">{{ blog.author }}</a></p>
        <div v-html="blog.content"></div>
      </div><!-- /.blog-post -->
      <div v-else>Loading...</div>
    </div>
    <nav>
      <ul class="pager">
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
      </ul>
    </nav>

  </div><!-- /.blog-main -->

  <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
    <div class="sidebar-module sidebar-module-inset">
      <h4>About</h4>
      <p>Mike Manley is a Software Engineer, Father, Disc Golfer, and perpetual learner.</p>
    </div>
    <br>
    <div class="sidebar-module">
      <h4>Find me in places:</h4>
      <ol class="list-unstyled">
        <li><a href="https://github.com/iFialAtFail/">GitHub</a></li>
        <li><a href="https://www.twitter.com/ifialatfail">Twitter</a></li>
      </ol>
    </div>
  </div><!-- /.blog-sidebar -->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
