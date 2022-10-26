import nc from 'next-connect';
import { getUsers, addUser } from '../../../controller/userController'

const handler = nc()
.get(getUsers)
.post(addUser)


export default handler;