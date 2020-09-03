export default (state, action) => {
    const { type, payload } = action;
  
    // console.log('action_payload  ', payload)
    console.log('action_type  ', type)
  
    switch (type) {
  
      case 'ADD_LOCATION':
        return {
          ...state,
          locationList: [payload, ...state.locationList]
        }
      case 'DELETE_LOCATION':
        return {
          ...state,
          locationList: state.locationList.filter(location => location.id !== payload)
        }
  
      case 'LOCATION_BY_ID':
        return {
          ...state,
          locationById: payload
        }
      case 'EDIT_LOCATION':
        return {
          ...state,
          locationList: [...state.locationList.filter(location => location.id !== payload.id), payload],
          locationById: null
        }
     
      default:
        return state;
    }
  }