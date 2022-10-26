import nc from 'next-connect';
import db from '../../../connection/mysql'
import { getEmployee, putEmployee, deleteEmployee } from '../../../controller/employeeeController';
const handler = nc()
.get(getEmployee)
.put(putEmployee)
.delete(deleteEmployee);

export default handler;