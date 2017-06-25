import api from '../api';

const FETCH_DATA_START = 'FETCH_DATA_START';
const SUCCESS_BY_ID_DATA = 'SUCCESS_BY_ID_DATA';
const SUCCESS_DISCOVERY_DATA = 'SUCCESS_DISCOVERY_DATA';
const FETCH_DATA_ERROR_ACTION = 'FETCH_DATA_ERROR_ACTION';

const INITIAL_STATE = {
  asyncLoading: false,
  asyncError: null,
  asyncDataDiscovery: null,
  asyncDataById: null
}

// Reducers
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_DATA_START:
      return { ...state, asyncLoading: true, asyncError: null }
    case SUCCESS_DISCOVERY_DATA:
      return { ...state, asyncLoading: false, asyncDataDiscovery: action.data }
    case SUCCESS_BY_ID_DATA:
      return { ...state, asyncLoading: false, asyncDataById: action.data }
    case FETCH_DATA_ERROR_ACTION:
      return { ...state, asyncLoading: false, asyncError: action.err }
    default:
      return state
  }
}


// Action creators
function fetchDataStart(){
  return{
    type: 'FETCH_DATA_START'
  }
}


function fetchDataDiscoverySuccess(data){
  return {
    type: 'SUCCESS_DISCOVERY_DATA',
    data
  }
}
function fetchDataByIdSuccess(data){
  return {
    type: 'SUCCESS_BY_ID_DATA',
    data
  }
}

function fetchDataError(err){
  return {
    type: 'FETCH_DATA_ERROR_ACTION',
    err
  }
}
export function getDiscovery(){
  return function ( dispatch ) {
    dispatch( fetchDataStart() );

    api.getDiscovery()
      .then( data => {
        return dispatch( fetchDataDiscoverySuccess(data) );
      })
      .catch( err => dispatch(fetchDataError(err)) );
  }
}

export function getById(id){
  return function ( dispatch ) {
    dispatch( fetchDataStart() );

    api.getById(id)
      .then( data => {
        return dispatch( fetchDataByIdSuccess(data) );
      })
      .catch( err => dispatch(fetchDataError(err)) );
  }
}
