import {legacy_createStore as createStore,combineReducers} from 'redux'
import wallReducer from '../Reducers/wall.reducer'
const combine = combineReducers({
    wallReducer
})

const store = createStore(combine,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store