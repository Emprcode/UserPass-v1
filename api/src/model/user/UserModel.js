import UserSchema from "./UserSchema.js"


// register


export const postUser = (userObj) => {
    return UserSchema(userObj).save()
}


//getSingleUser

export const getSingleUser = ({filter})=> {
    return UserSchema.findOne(filter)

}