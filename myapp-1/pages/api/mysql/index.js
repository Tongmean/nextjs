import nc from 'next-connect';
import {getEmployees, postEmployee} from '../../../controller/employeeeController'
const handler = nc()
.get(getEmployees)
.post(postEmployee);



export default handler;