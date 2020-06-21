import CommentService from '../services/comment.service';

export const comment = {
    namespaced: true,

    state: {
        comment: '',
        removedComment: ''
    },

    actions: {
        async create({ commit }, comment) {
            await CommentService.addComment(comment)
                .then(response => {
                    commit('newComment', response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async delete({ commit }, id) {
            await CommentService.deleteComment(id)
            .then(response => {
                commit('removedComment', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        },
    },
    mutations: {
        newComment(state, comment) {
            state.comment = comment;
        },
        removedComment(state, comment) {
            state.removedComment = comment;
        },
    },
    getters: {
        newComment: state => state.comment
    },
};
