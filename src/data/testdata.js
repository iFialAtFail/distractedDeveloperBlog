
export function getBlogPostData(id) {
    return {
        id: id,
        title: "My Blog Post Title For ID " + id,
        postDate: "January 1, 2014",
        author: "Mike Manley",
        blogContent: "Labore velit dolor nisi Lorem id eiusmod sint."
            + "<pre><code>Example code block</code></pre>"
            + "Mollit cupidatat aliqua ut voluptate tempor. Officia adipisicing irure dolor in proident commodo fugiat quis ex occaecat eiusmod ad.\nDolore velit in ut adipisicing adipisicing cillum. Laborum laborum tempor sunt tempor nisi laborum commodo pariatur dolor ipsum dolore enim do. Ea est irure fugiat dolor excepteur id eiusmod laboris. Deserunt laboris aliqua tempor reprehenderit nulla. Reprehenderit anim quis non incididunt elit commodo in ullamco. Ea tempor elit culpa laboris laboris minim do veniam fugiat incididunt exercitation ex."
    }
}

export function getBlogCards() {
    let blogPosts = []
    for (let i = 0; i < 5; i++) {
        blogPosts.push(getBlogCard(i))
    }
    return blogPosts
}

function getBlogCard(numId) {
    return {
        id: numId,
        title: "Blog Post " + numId,
        postDate: "January " + numId + ", 2023",
        author: "Mike Manley",
        summary: "Pariatur labore aliquip commodo velit non nisi anim Lorem proident ipsum in sint. Dolore eu ullamco reprehenderit minim. Velit tempor mollit reprehenderit elit eu ut laborum occaecat. Eu consequat consequat excepteur laborum. Qui cupidatat adipisicing quis laboris dolor..."
    }
}