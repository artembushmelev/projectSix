export type CountStateType = {
  count: number;
};

export type ActionType = {
  type: "INCREMENT" | "DECRIMENT";
};

const initialState: CountStateType = {
  count: 0,
};

export const countReducer = (state: typeof initialState = initialState, action: ActionType): CountStateType => {
  switch (action.type) {
    case "DECRIMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export const DecrimentAC = () => {
  return { type: "DECRIMENT" };
};

export const IncrementAC = () => {
  return { type: "INCREMENT" };
};
