export {
  populateModal
}

const populateModal = (originalData, keyType, caseType, stateMethods, selectID, account) => {
  
  if(account){
    for(let key in account){ (stateMethods.createType(caseType, key, account[key])) }
  }
  
  if(selectID){
    stateMethods.createType(caseType, '_id', selectID)
    selectID
    for(let key in originalData[keyType]){
    if(originalData[keyType][key]._id == selectID){
        // console.log(originalData[keyType][key])
        let object = originalData[keyType][key]

        for(let keyOfObject in object){
          // console.log(keyOfObject)
          stateMethods.createType(caseType, keyOfObject, object[keyOfObject])

          if(Array.isArray(object[keyOfObject]) && object[keyOfObject].length > 0){

            // if(!object[keyOfObject][0]['location']) stateMethods.createType(caseType, keyOfObject, object[keyOfObject][0])
            if(!object[keyOfObject][0]['location']) stateMethods.createType(caseType, keyOfObject, object[keyOfObject])

            // if(object[keyOfObject][0]['location']) return stateMethods.createType(caseType, keyOfObject, object[keyOfObject])

          }

        }

      }
    }
  }
}