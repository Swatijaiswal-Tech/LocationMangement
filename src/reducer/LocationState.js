import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  locationList: [],
  locationById: null,
}

// Create context
export const LocationContext = createContext(initialState);

// Provider component
export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  // Actions
  async function getLocations() {
    try {
      dispatch({
        type: 'GET_LOCATIONS',
        payload: ''
      });
    } catch (err) {
      dispatch({
        type: 'LOCATION_ERROR',
        payload: ''
      });
    }
  }

  async function deleteLocation(id) {
    try {
      dispatch({
        type: 'DELETE_LOCATION',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'LOCATION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addLocation(location) {
   
    try {
      dispatch({
        type: 'ADD_LOCATION',
        payload: location,
      });
    } catch (err) {
      dispatch({
        type: 'LOCATION_ERROR',
        payload: null
      });
    }
  }

  async function setLocationById(location) {
    try {
      dispatch({
        type: 'LOCATION_BY_ID',
        payload: location,
      });

    } catch (err) {
      dispatch({
        type: 'LOCATION_ERROR',
        payload: null
      });
    }
  }

  async function editLocation(location) {

    try {
      dispatch({
        type: 'EDIT_LOCATION',
        payload: location,
      });

    } catch (err) {
      dispatch({
        type: 'LOCATION_ERROR',
        payload: null
      });
    }
  }

  return (
    <LocationContext.Provider value={{
      locationList: state.locationList,
      locationById: state.locationById,
      error: state.error,
      loading: state.loading,
      getLocations,
      deleteLocation,
      addLocation,
      editLocation,
      setLocationById
    }}>
      {children}
    </LocationContext.Provider>
  )
}