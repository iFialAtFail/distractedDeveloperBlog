<script setup>

import { ref, watchEffect } from 'vue'
import { getBlogData } from '../main.js'

let props = defineProps({
  blogId: {
    type: String,
    required: true
  }
})

let blogData = ref('')

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever one of the reactive depndencies change
  // const url = `${API_URL}`
  // const response = await (await fetch(url)).json()
  // console.log(response)
  // gridHeaders.value = response.headers
  // gridData.value = response.body
  // console.log(response.body)
  blogData = getBlogData(props.blogId)

})
</script>

<template>
  <div class="col-sm-8 blog-main">

    <div class="blog-post">
      <h2 class="blog-post-title">{{ blogData.blogTitle }}</h2>
      <p class="blog-post-meta">{{ blogData.date }} by <a href="#">{{ blogData.author }}</a></p>

      <p>{{ blogData.blogContent }}</p>
      <hr>
      <blockquote>
        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </blockquote>
      <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      <h2>Heading</h2>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros.</p>
      <h3>Sub-heading</h3>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <pre><code>Example code block</code></pre>
      <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
      <h3>Sub-heading</h3>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
        lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus.</p>
      <ul>
        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
        <li>Donec id elit non mi porta gravida at eget metus.</li>
        <li>Nulla vitae elit libero, a pharetra augue.</li>
      </ul>
      <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
      </p>
      <ol>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
      </ol>
      <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
    </div><!-- /.blog-post -->

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
