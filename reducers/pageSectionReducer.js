const initialState = {
  type:'',
  path: '',
  order: '',
  title: '',
  image: '',
  previousImage: '',
  description: '',
}
export const pageSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_SECTION':
      return {
        ...state,
        [action.name]: action.value
      }
    break;

    case 'RESET_SECTION':
      return initialState

    default:
     return state
    }
}