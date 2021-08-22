const initialState = {
    name: 'Julian'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state, 
            name: 'Reza'
        }
    }
    return state;
}

export default globalReducer;