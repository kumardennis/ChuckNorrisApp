const initState = {
  facts: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_FACT") {
    let factdata = action.payload;

    return {
      ...state,
      facts: state.facts.concat(factdata)
    };
  }
  return state;
};

export default rootReducer;
