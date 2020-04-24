import axios from 'axios'

export const GET_SLIDER = 'GET_SLIDER'
export const GET_SLIDER_SUCCESS = 'GET_SLIDER_SUCCESS'
export const GET_SLIDER_FAILED = 'GET_SLIDER_FAILED'

export function getSlider() {
    return {
        type: GET_SLIDER
    }
}

export function getSliderSuccess(result) {
    return {
        type: GET_SLIDER_SUCCESS,
        result
    }
}

export function getSliderFailed(error) {
    return {
        type: GET_SLIDER_FAILED,
        error
    }
}

export function getDataSlider() {
    return function(dispatch){
        dispatch(getSlider())

        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=138df19f642013d73bfd5a294d6c3893')
        .then(result => dispatch(getSliderSuccess(result.data)))
        .catch(error => dispatch(getSliderFailed(error.massage)))
    }
}