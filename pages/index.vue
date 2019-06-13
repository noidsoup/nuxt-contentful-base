<template>
    <div class="container">
        <h2>Latest posts</h2>
        <ul v-if="posts">
            <li v-for="(post, index) in posts" :key="index">
                <nuxt-link :to="post.fields.client.fields.urlSlug + '/course-directory'">{{ post.fields.client.fields.urlSlug }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    asyncData (context) {
        return { clientName: context.env.CLIENT_NAME }
    },
    computed: {
        posts() {
            console.log(this.$store.state.posts.posts);
            return this.$store.state.posts.posts
        }
    },
/*     async fetch({ store, params }) {
        await store.dispatch('posts/getPosts', params.urlSlug)
    }, */
    mounted() {
        console.log(this.clientName);
        this.$router.replace({ path: `/` });
    },
}
</script>
