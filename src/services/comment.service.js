import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/comment/';

class CommentService {
    async addComment(comment) {
        return await axios.post(API_URL + 'create', {
            ticket: comment.ticketid,
            user: comment.userid,
            comment: comment.comment,
        }, {
            headers: authHeader()
        })
            .then(response => {
                return response.data
            }).catch(error => {
                console.log(error);
            })
            ;
    }
}
export default new CommentService();