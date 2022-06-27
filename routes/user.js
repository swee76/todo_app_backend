import koaRouter from 'koa-router';
const router = new koaRouter(({ prefix: '/user' }));

import { createUser, loginUser, deleteUser, updateUser } from '../middleware/auth'

router.post('/create-user', createUser)
router.post('/login-user', loginUser)
router.delete('/delete-user', deleteUser)
router.put('/update-user', updateUser)

module.exports = router