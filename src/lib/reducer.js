export const initialState = {
    user: null,
    update: null
}

const reducer = (state, action) => {
    switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_UPDATE':
      return {
        ...state,
        update: action.update
      }
    default:
      return state
    }
  }
  
  export default reducer