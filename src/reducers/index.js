import { GET_HERO } from '../actions/index';

const initialState = {
    characterLoaded: [{name: 'gffhngf', description: 'vcdvdffbv', thumbnail: '000000'}]
}

function reducer(state = initialState, action){
    switch(action.type){
        case GET_HERO:
            return{
                ...state,
                characterLoaded:  action.payload.results
            }
        default:
            return state
    }
}

export default reducer;