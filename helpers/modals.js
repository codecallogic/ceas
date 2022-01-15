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
}

export {
  populateModal
}