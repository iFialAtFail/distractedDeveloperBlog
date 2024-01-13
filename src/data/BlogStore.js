import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useBlogStore = defineStore('blog', () => {
    const blogs = ref([])
    const blog = ref(null)//selected blog for individual page
    const isLoading = ref(false)
    const error = ref(null)

    const fetchBlogs = async () => {
        isLoading.value = true
        error.value = null
        try {
            const url = import.meta.env.VITE_API_URI + import.meta.env.VITE_BLOG_ENDPOINT
            console.log(url)
            const response = await fetch(url)
            const body = await response.json()
            blogs.value = body.blogs
        } catch (error) {
            error.value = error
        } finally {
            isLoading.value = false
        }
    }

    const fetchBlogById = async (id) => {
        if (blogs.value.length === 0) {
            await fetchBlogs()
        }
        if (blogs.value.length === 0) {
            error.value = "Blog not found"
        } else {
            const blogById = blogs.value.find(p => p.id == id)
            if (typeof blogById !== 'undefined' && blogById !== null) {
                blog.value = blogById
            } else {
                error.value = "Blog not found"
            }
        }
    }
    return {
        blogs,
        blog,
        isLoading,
        error,
        fetchBlogs,
        fetchBlogById
    };
})

