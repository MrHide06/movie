import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger";
import SliderReducer from './Reducer/SliderReducer'

export default createStore(SliderReducer, applyMiddleware(thunk, logger))