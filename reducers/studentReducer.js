const initialState = {
  previousImage: '',
  image: '',
  title: '',
  name: '',
  advisor: '',
  department: '',
  email: '',
  phone: '',
  location: '',
  centerAssociation: '',
  component: '',
  status: '',
  startDate: '',
  endDate: '',
  postGraduation: ''
}

export const studentReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_STUDENT':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'RESET_STUDENT':
      return initialState
    
    default:
      return state
  }
}