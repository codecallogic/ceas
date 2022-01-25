const initialState = {
  previousImage: '',
  image: '',
  title: '',
  name: '',
  profession: '',
  department: '',
  email: '',
  website: '',
  officePhone: '',
  officeLocation: '',
  centerAssociation: '',
  componentOne: '',
  componentTwo: '',
  componentThree: '',
  researchInterests: ''
}

export const facultyReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_FACULTY':
      return {
        ...state,
        [action.name]: action.value
      }

    case 'RESET_FACULTY':
      return initialState
    
    default:
      return state
  }
}