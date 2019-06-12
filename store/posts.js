import client from '../plugins/contentful';

export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, payload) {
        state.posts = payload;
    }
}

export const actions = {
    async getPosts({commit}) {
        const response = await client.getEntries({
            content_type: 'course'
        });
        //console.log(response);
        response.items.forEach((item) => {
            delete item.fields.client;
            delete item.fields.lessons;
            //console.log();

            if (response.items.length > 0) {
                commit('setPosts', response.items);
            }
        });
    }
}
