<script setup>

import BlogCard from './BlogCard.vue'
import { useBlogStore } from '../data/BlogStore.js'
import { storeToRefs } from 'pinia'

const blogStore = useBlogStore()
const { blogs, isLoading, error } = storeToRefs(blogStore)
blogStore.fetchBlogs()


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
                <div v-if="error">Error: {{ error }}</div>
                <div v-else-if="isLoading">Loading blog posts...</div>
                <div v-else>
                    <div class="blogCards" v-for="summary in blogs" :card="summary">
                        <BlogCard :card="summary" />
                        <br>
                    </div>
                </div><!--End vElse-->
            </div><!-- /.blog-main -->
        </div><!--End Row-->
    </div><!-- /.container -->

    
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}
</style>
