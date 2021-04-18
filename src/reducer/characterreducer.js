const initialState = {
  List  : [],
  viewdata:{}
}

function CharacterReducer(state = initialState, action) {
  switch (action.type) {
    case "LIST_DATA":
      return Object.assign({}, state, {
        List  : action.payload
      })
      case "VIEW_DATA":
        return Object.assign({}, state, {
          List  : action.payload,
          
        })
      default:
        return state
  }
}

export default CharacterReducer;
