import axios from 'axios';
import authHeader from './auth-header';
import { config } from './config'

class CommentService {
    async addComment(comment) {
        return await axios.post(config.apiUrl + '/comment', {
            ticket: comment.ticketid,
            user: comment.userid,
            comment: comment.comment,
        }, {
            headers: authHeader()
        })
    }
    async deleteComment(id) {
        console.log(id)
        return await axios.delete(config.apiUrl + '/comment/' + id,{
            headers: authHeader()
        })
    }
}
export default new CommentService();