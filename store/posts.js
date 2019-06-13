import client from '../plugins/contentful';

export const state = () => ({
    posts: [],
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

            const recommendedCourse = {
                title: item.fields.client.fields.recommendedCourse.fields.title,
                meta: `${item.fields.client.fields.recommendedCourse.fields.lessons.length} Lessons • ${item.fields.client.fields.recommendedCourse.fields.duration}`,
                description: item.fields.client.fields.recommendedCourse.fields.coursePromoDescription,
                image: item.fields.client.fields.recommendedCourse.fields.heroImage.fields.file.url,
                urlSlug: item.fields.client.fields.recommendedCourse.fields.urlSlug,
            }
            delete item.fields.client.fields.recommendedCourse;
            delete item.fields.lessons;

            item.fields.client.fields.recommendedCourse = recommendedCourse;
            //console.log(recommendedCourse);
            if (response.items.length > 0) {
                commit('setPosts', response.items);
            }
        });
    }
}
