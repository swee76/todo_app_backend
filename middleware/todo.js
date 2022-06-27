import TodoCard from '../models/todo'

export const createTodo = async (ctx) => {
    const { userId, titleName, description, date, attachmentList, status } = ctx.request.body

    const newTodo = {
        userId: userId,
        titleName: titleName,
        description: description,
        date: date,
        attachmentList: attachmentList,
        status: status
    }

    await TodoCard.create(newTodo).then((newTodo) => {
        ctx.response.status = 200
        ctx.body = {
            message: "Todo Created Successfully",
            newTodo
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "Todo Creation Error",
            err
        }
    })
}

export const getTodoList = async (ctx) => {
    const { userId } = ctx.request.params;

    await TodoCard.find({ userId }).then((todos) => {
        ctx.response.status = 200
        ctx.body = {
            message: "All Todos Fetched Successfully",
            todos
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "Todo Fetching Error",
            err
        }
    })
}

export const updateTodo = async (ctx) => {
    const { todoId, userId, titleName, description, date, attachmentList, status } = ctx.request.body

    const updatedTodo = {
        userId: userId,
        titleName: titleName,
        description: description,
        date: date,
        attachmentList: attachmentList,
        status: status
    }

    await TodoCard.findOneAndUpdate({ _id: todoId }, updatedTodo, { new: true }).then((todo) => {
        ctx.response.status = 200
        ctx.body = {
            message: "Todos Updated Successfully",
            todo
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "Todo Updating Error",
            err
        }
    })
}

export const deleteTodo = async (ctx) => {
    const { userId, todoId } = ctx.request.body

    await TodoCard.findOneAndRemove({ userId: userId, _id: todoId }).then((todo)=>{
        ctx.response.status = 200
        ctx.body = {
            message: "Todos Deleted Successfully",
            todo
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "Todo Deleting Error",
            err
        }
    })
}