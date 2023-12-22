import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

export function getBlogData(id) {
    return {
        id : id,
        blogTitle : "My Blog Title From Main.js",
        date : "January 1, 2014",
        author : "Mike Manley",
        blogContent : "This is the long running log content lorem ipsum blah blah blah" 
    }
}
