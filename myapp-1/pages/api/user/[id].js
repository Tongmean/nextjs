import nc from 'next-connect';
import {getUser, deleteUser, putUser} from '../../../controller/userController';

const handler = nc()
.get(getUser)
.delete(deleteUser)
.put(putUser)

export default handler;