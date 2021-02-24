export const ACTION_CHANGE_USER='ACTION_CHANGE_USER'
export const ACTION_TOGGLE_ERROR='ACTION_TOGGLE_ERROR'

export const changeUser = (user)=>{
    return {
        type: ACTION_CHANGE_USER,
        payload: user
      }
}
export const toggleError = ()=>{
    return {
        type: ACTION_TOGGLE_ERROR,
      }
}