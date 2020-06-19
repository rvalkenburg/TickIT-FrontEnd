import axios from 'axios';
import authHeader from './auth-header';
import { config } from './config'

class CommentService {
    async addComment(comment) {
        return await axios.post(config.apiUrlL + '/comment/create', {
            ticket: comment.ticketid,
            user: comment.userid,
            comment: comment.comment,
        }, {
            headers: authHeader()
        })
    }
}
export default new CommentService();