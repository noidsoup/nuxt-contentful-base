<template>
    <div class="single-post">
        <div v-if="!isLoading" class="single-post__article">
            <ul>
                <li v-for="(post, index) in currentPost" :key="index">
                    {{post.fields.title}}
                </li>
            </ul>
           <!--  <div class="single-post__content" v-html="$md.render(currentPost.fields.content)"></div> -->
        </div>
        <p v-else class="single-post__loading">
            Loading
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        currentPost() {
            return this.$store.state.post.currentPost
        },
        isLoading() {
            return this.$store.state.post.isLoading
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('posts/getPosts', params.urlSlug)
        await store.dispatch('post/getPostBySlug', params.client)
    }
}
</script>
