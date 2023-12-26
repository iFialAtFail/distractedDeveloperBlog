<script setup>
import { ref, watchEffect } from 'vue';
import BlogCard from './BlogCard.vue'
import { getBlogCards } from '../data/testdata.js'

let blogCards = ref([])

watchEffect(async () => {
    // this effect will run immediately and then
    // re-run whenever one of the reactive depndencies change
    // const url = `${API_URL}`
    // const response = await (await fetch(url)).json()
    // console.log(response)
    // gridHeaders.value = response.headers
    // gridData.value = response.body
    // console.log(response.body)
    blogCards = getBlogCards()

})


</script>

<template>
    <div class="container">

        <div class="blog-summary">
            <p class="lead blog-description">Welcome to my blog, a place where this ADHD riddled brain can use as a
                playground, either by developing the blog itself or by discussing or documenting various software
                development related topics.</p>
            <p>Topics you may find here, if the good 'ol ADHD lets me, are:</p>
            <ul>
                <li>Software Engineering topics</li>
                <li>Test Driven Development (TDD)</li>
                <li>Java</li>
                <li>Quarkus</li>
                <li>Microservices</li>
                <li>Agile</li>
            </ul>

        </div>
        <br>
        <div class="row">
            <div class="col-sm-8 blog-main">
                <div class="blogCards" v-for="blogCard in blogCards" :card="blogCard" >
                    <BlogCard :card="blogCard"/>
                    <br>
                </div>
            </div><!-- /.blog-main -->
        </div>
    </div><!-- /.container -->

    <footer class="blog-footer">
        <a href="#">Back to top</a>
    </footer>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}
</style>
