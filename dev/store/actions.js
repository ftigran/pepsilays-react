export const ACTION_CHANGE_USER='ACTION_CHANGE_USER'

export const changeUser = (user)=>{
  console.log(user)
    return {
        type: ACTION_CHANGE_USER,
        payload: user
      }
}