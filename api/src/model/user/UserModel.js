import UserSchema from "./UserSchema.js"


// register


export const postUser = (userObj) => {
    return UserSchema(userObj).save()
}


//getSingleUser

export const getSingleUser = ({_id})=> {
    return UserSchema.findOne(_id)

}