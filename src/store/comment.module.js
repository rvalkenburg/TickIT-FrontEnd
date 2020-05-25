import CommentService from '../services/comment.service';

export const comment = {
    namespaced: true,

    state: {
        newCompany: ''
    },

    actions: {
        async create({ commit }, comment) {
            await CommentService.addComment(comment)
                .then(response => {
                    commit('newComment', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    mutations: {
        newComment(state, comment) {
            state.company = comment;
        },
    },
    getters: {
        newComment: state => state.newCompany
    },
};
