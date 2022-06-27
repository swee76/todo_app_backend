import koaRouter from 'koa-router';
const router = new koaRouter(({ prefix: '/todo' }));

import { createTodo, getTodoList, updateTodo, deleteTodo } from '../middleware/todo'

router.post('/create-todo', createTodo)
router.get('/fetch-todo', getTodoList)
router.put('/update-todo', updateTodo)
router.delete('/delete-todo', deleteTodo)

module.exports = router