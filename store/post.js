import client from '../plugins/contentful';

export const state = () => ({
    currentPost: {},
    isLoading: true
})

export const mutations = {
    setCurrentPost(state, payload) {
        state.currentPost = payload;
    },
    setLoading(state, payload) {
        state.isLoading = payload;
    }
}

export const actions = {
    async getPostBySlug({commit, rootState}, slug) {

        const courses = rootState.posts.posts;
        const clientCourses = courses.filter((course) => {
            return course.fields.client.fields.urlSlug === slug;
        });

        //console.log(clientCourses);

        commit('setLoading', true);
        commit('setCurrentPost', clientCourses);
        commit('setLoading', false);
    }
}
