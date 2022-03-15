const initialState = {
  data: [
    {
      id: 1,
      title: "Lunch",
      timestamp: "2022-01-01 00:00:00",
      iscomplete: true,
    },
  ],
};

export const tasksReducer = (state = initialState, action) => {
  if (action.type === "CLEAR_TASKS") {
    return {
      data: [],
    };
  }
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      data: [...state.data, action.data],
    };
  }
  if (action.type === "COMPLETE_TASK") {
    const filtered = state.data.filter((item) => item.id === action.data);
    // filtered[0].iscomplete = true;
    console.log("-=-=-=---->", filtered);
    return {
      ...state,
      data: [...state.data, filtered[0]],
    };
  }
  return state;
};
