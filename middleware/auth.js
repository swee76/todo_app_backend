import User from '../models/user';

export const createUser = async (ctx) => {
    const { username, password } = ctx.request.body;

    const newUser = {
        username,
        password
    }

    await User.create(newUser).then((newUser) => {
        ctx.response.status = 200
        ctx.body = {
            message: "User Created Successfully",
            newUser
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "User Create Error",
            err
        }
    })
}

export const loginUser = async (ctx) => {
    const { username, password } = ctx.request.body
    await User.findOne({
        username: username,
        password: password
    }).then((user) => {
        ctx.response.status = 200
        ctx.body = {
            message: "Login successfull",
            user
        }
    })
        .catch((err) => {
            ctx.response.status = 400
            ctx.body = {
                message: "Login Failed",
                err
            }
        })
}

export const deleteUser = async (ctx) => {
    const { userId } = ctx.request.body;

    await User.findOneAndRemove({ _id: userId }).then((user) => {
        ctx.response.status = 200
        ctx.body = {
            message: "Deleted Successfully",
            user
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "User not found",
            err
        }
    })
}

export const updateUser = async (ctx) => {
    const { userId, password } = ctx.request.body

    const updatedPassword = {
        password: password
    }

    await User.findOneAndUpdate({ _id: userId }, updatedPassword, { new: true }).then((user) => {
        ctx.response.status = 200
        ctx.body = {
            message: "User Updated Successfully",
            user
        }
    }).catch((err) => {
        ctx.response.status = 400
        ctx.body = {
            message: "User Update Error",
            err
        }
    })
}