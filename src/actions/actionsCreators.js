// Add user module

export function addUserModule(moduleId) {
  return {
    type: 'ADD_USER_MODULE',
    moduleId
  }
}

// Remove user module

export function removeUserModule(moduleId, index) {
  return {
    type: 'REMOVE_USER_MODULE',
    moduleId,
    index
  }
}