const initialState = {
    notes:[
        // {text:"fdsfds"},
        // {text:"fdsfds"},

    ]
};

const reducer = (state = initialState, action) => {

    if(action.type === "ADD_NOTE") {
        return {
            ...state,
            notes: state.notes.concat({
                text: "",
                id: new Date()
            })
        }
    }
    if(action.type ==="DEL_NOTE") {
        const newList = state.notes.filter((note) => note.id !== action.id);
        console.log(newList);
        return {
            ...state,
            notes: newList

        }
    }

    return state;
};

export default reducer;