let blogPosts = {
    "summaries" : [
        {
            id: 1,
            title: "My Blog Post Title For ID " + 1,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            blogContent: "Labore velit dolor nisi Lorem id eiusmod sint. Oasdfa"
                + "<pre><code>Example code block</code></pre>"
                + "Mollit cupidatat aliqua ut voluptate tempor. Officia adipisicing irure dolor in proident commodo fugiat quis ex occaecat eiusmod ad.\nDolore velit in ut adipisicing adipisicing cillum. Laborum laborum tempor sunt tempor nisi laborum commodo pariatur dolor ipsum dolore enim do. Ea est irure fugiat dolor excepteur id eiusmod laboris. Deserunt laboris aliqua tempor reprehenderit nulla. Reprehenderit anim quis non incididunt elit commodo in ullamco. Ea tempor elit culpa laboris laboris minim do veniam fugiat incididunt exercitation ex."
        },
        {
            id: 2,
            title: "My Blog Post Title For ID " + 2,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            blogContent: "Labore velit dolor nisi Lorem id eiusmod sint.asdfadsf"
                + "<pre><code>Example code block</code></pre>"
                + "Mollit cupidatat aliqua ut voluptate tempor. Officia adipisicing irure dolor in proident commodo fugiat quis ex occaecat eiusmod ad.\nDolore velit in ut adipisicing adipisicing cillum. Laborum laborum tempor sunt tempor nisi laborum commodo pariatur dolor ipsum dolore enim do. Ea est irure fugiat dolor excepteur id eiusmod laboris. Deserunt laboris aliqua tempor reprehenderit nulla. Reprehenderit anim quis non incididunt elit commodo in ullamco. Ea tempor elit culpa laboris laboris minim do veniam fugiat incididunt exercitation ex."
        },
        {
            id: 3,
            title: "My Blog Post Title For ID " + 3,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            blogContent: "Labore velit dolor nisi Lorem id eiusmod sint.qewrqewr"
                + "<pre><code>Example code block</code></pre>"
                + "Mollit cupidatat aliqua ut voluptate tempor. Officia adipisicing irure dolor in proident commodo fugiat quis ex occaecat eiusmod ad.\nDolore velit in ut adipisicing adipisicing cillum. Laborum laborum tempor sunt tempor nisi laborum commodo pariatur dolor ipsum dolore enim do. Ea est irure fugiat dolor excepteur id eiusmod laboris. Deserunt laboris aliqua tempor reprehenderit nulla. Reprehenderit anim quis non incididunt elit commodo in ullamco. Ea tempor elit culpa laboris laboris minim do veniam fugiat incididunt exercitation ex."
        },
        {
            id: 4,
            title: "My Blog Post Title For ID " + 4,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            blogContent: "Labore velit dolor nisi Lorem id eiusmod sint. rtyurytu"
                + "<pre><code>Example code block</code></pre>"
                + "Mollit cupidatat aliqua ut voluptate tempor. Officia adipisicing irure dolor in proident commodo fugiat quis ex occaecat eiusmod ad.\nDolore velit in ut adipisicing adipisicing cillum. Laborum laborum tempor sunt tempor nisi laborum commodo pariatur dolor ipsum dolore enim do. Ea est irure fugiat dolor excepteur id eiusmod laboris. Deserunt laboris aliqua tempor reprehenderit nulla. Reprehenderit anim quis non incididunt elit commodo in ullamco. Ea tempor elit culpa laboris laboris minim do veniam fugiat incididunt exercitation ex."
        },
        {
            id: 5,
            title: "My Blog Post Title For ID " + 5,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            blogContent: "Labore velit dolor nisi Lorem id eiusmod sint. bnmnbmbnm"
                + "<pre><code>Example code block</code></pre>"
                + "Mollit cupidatat aliqua ut voluptate tempor. Officia adipisicing irure dolor in proident commodo fugiat quis ex occaecat eiusmod ad.\nDolore velit in ut adipisicing adipisicing cillum. Laborum laborum tempor sunt tempor nisi laborum commodo pariatur dolor ipsum dolore enim do. Ea est irure fugiat dolor excepteur id eiusmod laboris. Deserunt laboris aliqua tempor reprehenderit nulla. Reprehenderit anim quis non incididunt elit commodo in ullamco. Ea tempor elit culpa laboris laboris minim do veniam fugiat incididunt exercitation ex."
        }
    ]
}

let blogSummaries = {
    summaries : [
        {
            id: 1,
            title: "My Blog Post Title For ID " + 1,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            summary: "Labore velit dolor nisi Lorem id eiusmod sint..."
        },
        {
            id: 2,
            title: "My Blog Post Title For ID " + 2,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            summary: "Labore velit dolor nisi Lorem id eiusmod sint..."
        },
        {
            id: 3,
            title: "My Blog Post Title For ID " + 3,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            summary: "Labore velit dolor nisi Lorem id eiusmod sint...."
        },
        {
            id: 4,
            title: "My Blog Post Title For ID " + 4,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            summary: "Labore velit dolor nisi Lorem id eiusmod sint..."
        },
        {
            id: 5,
            title: "My Blog Post Title For ID " + 5,
            postDate: "January 1, 2014",
            author: "Mike Manley",
            summary: "Labore velit dolor nisi Lorem id eiusmod sint..."
        }
    ] 
}

export function getBlogPost(id) {
    return blogPosts.posts.find( p => p.id == id)
}

export function getBlogCards() {
    return blogSummaries["summaries"]
}
