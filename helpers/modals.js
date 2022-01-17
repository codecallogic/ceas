const populateModal = (originalData, dataType, methodType, methods, selectID, setElementText) => {
  if(methodType == 'createAdmin'){
    for(let key in originalData[dataType]){
      if(originalData[dataType][key]._id == selectID){
        let object = originalData[dataType][key]
        for(let keyOfObject in object){
          methods.createAdmin(keyOfObject, object[keyOfObject])
        }
      }
    }
  }

  if(methodType == 'createComponent'){
    for(let key in originalData[dataType]){
      if(originalData[dataType][key]._id == selectID){
        let object = originalData[dataType][key]
        for(let keyOfObject in object){
          methods.createComponent(keyOfObject, object[keyOfObject])
        }
      }
    }
  }

  if(methodType == 'createFaculty'){
    for(let key in originalData[dataType]){
      if(originalData[dataType][key]._id == selectID){
        let object = originalData[dataType][key]
        for(let keyOfObject in object){
          methods.createFaculty(keyOfObject, object[keyOfObject])
          if(Array.isArray(object[keyOfObject]) && object[keyOfObject].length > 0) methods.createFaculty(keyOfObject, object[keyOfObject][0].name)
        }
      }
    }
  }

  if(methodType == 'createStudent'){
    for(let key in originalData[dataType]){
      if(originalData[dataType][key]._id == selectID){
        let object = originalData[dataType][key]
        for(let keyOfObject in object){
          methods.createStudent(keyOfObject, object[keyOfObject])
          if(Array.isArray(object[keyOfObject]) && object[keyOfObject].length > 0) methods.createStudent(keyOfObject, object[keyOfObject][0].name)
        }
      }
    }
  }
}

const manageFormSubmission = (modal, data, allData, setElementText, selectID, reduxMethod) => {

  if(modal == 'update_admin'){for(let key in data){setElementText(key, data[key])}}

  if(modal == 'update_component'){
    for(let key in data){
      if(Array.isArray(data[key]) && data[key].length > 0){
        setElementText(key, data[key][0].name)
      }
     
      if(key !== 'leader') setElementText(key, data[key])
    }
    
    allData.components.forEach((item) => {
      if(item._id == selectID){
        for(let key in item){
          if(Array.isArray(item[key]) && item[key].length > 0) reduxMethod(key, item[key][0]._id)
        }
      }
    })
  }
  
  if(modal == 'update_faculty'){

    for(let key in data){
      if(Array.isArray(data[key]) && data[key].length > 0){setElementText(key, data[key][0].name)}
      setElementText(key, data[key])
    }

    allData.faculty.forEach((item) => {
      if(item._id == selectID){
        for(let key in item){
          if(Array.isArray(item[key]) && item[key].length > 0) reduxMethod(key, item[key][0]._id)
        }
      }
    })
    
  }

  if(modal == 'update_student'){

    for(let key in data){
      if(Array.isArray(data[key]) && data[key].length > 0){setElementText(key, data[key][0].name)}
      setElementText(key, data[key])
    }

    allData.students.forEach((item) => {
      if(item._id == selectID){
        for(let key in item){
          if(Array.isArray(item[key]) && item[key].length > 0) reduxMethod(key, item[key][0]._id)
        }
      }
    })
    
  }
}

export {
  populateModal,
  manageFormSubmission
}