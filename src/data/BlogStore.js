import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useBlogStore = defineStore('blog', () => {
    const blogs = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    const fetchBlogs = async () => {
        isLoading.value = true
        error.value = null
        try {
            const url = import.meta.env.VITE_API_URI + import.meta.env.VITE_BLOG_ENDPOINT
            console.log(url)
            const response = await fetch(url)
            console.log(response)
            const body = await response.json()
            console.log(body)
            blogs.value = body.blogs
        } catch (error) {
            error.value = error
        } finally {
            isLoading.value = false
        }
    }
    return {
        blogs,
        isLoading,
        error,
        fetchBlogs,
    };
})

