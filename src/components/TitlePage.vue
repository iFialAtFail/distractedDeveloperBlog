<script setup>

</script>

<template>
    <div class="blog-masthead">
        <div class="container">
            <!--Put Title and background image here-->
            <h1 class="title">iFialAtFail's Blog</h1>
        </div>
    </div>
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

        <div class="row">

            <div class="col-sm-8 blog-main">

                <div class="blog-card">
                    <h2 class="blog-post-title">Sample blog post</h2>
                    <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

                    <p class="blog-post-tease">This blog site will initially start off as a simple HTML w/ Bootstrap
                        project and get spun up from there.</p>

                </div><!-- /.blog-post -->

                <div class="blog-post">
                    <h2 class="blog-post-title">Another blog post</h2>
                    <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>
                    <p class="blog-post-tease">This blog site will initially start off as a simple HTML w/ Bootstrap
                        project and get spun up from there.</p>
                </div><!-- /.blog-post -->

                <nav>
                    <ul class="pager">
                        <li><a href="#">Previous</a></li>
                        <li><a href="#">Next</a></li>
                    </ul>
                </nav>

            </div><!-- /.blog-main -->
        </div>
    </div><!-- /.container -->

    <footer class="blog-footer">
        <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                href="https://twitter.com/mdo">@mdo</a>.</p>
        <p>
            <a href="#">Back to top</a>
        </p>
    </footer>
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
