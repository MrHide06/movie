import { GET_SLIDER, GET_SLIDER_SUCCESS, GET_SLIDER_FAILED} from '../Action/SliderAction'

const initailState = {
    data: [],
    error: null,
}

const getSlider = (state = initailState, action) => {
    switch (action.type){
        case GET_SLIDER:
            return{
                ...state,
            }
        case GET_SLIDER_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        case GET_SLIDER_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getSlider