<script setup>

let props = defineProps({
    card: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div>
        <h2 class="blog-post-title"><router-link :to="{ name: 'BlogPage', params: { blogId: card.id } }">{{ card.title }}</router-link></h2>
        <p class="blog-post-meta">{{ card.postDate }} by <a href="#">{{ card.author }}</a></p>

        <p class="blog-post-tease">{{ card.summary }}</p>
    </div>
</template>

<style lang="scss" scoped></style>