import { createContext, useReducer } from "react";
import { habitReducer } from "../reducer/HabitReducer";

console.log("in context");

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const initialState = {
    habits: [],
    archivedHabits: [],
    addHabit: { name: "", repeat: "", goal: "", timeOfday: "", startDate: "" },
    editHabit: { name: "", repeat: "", goal: "", timeOfday: "", startDate: "" },
    commonId: 101,
  };

  const [state, dispatch] = useReducer(habitReducer, initialState);

  const handleSave = () => {
    dispatch({ type: "ADD_HABIT", payload: state.addHabit });
  };

  const handleEdit = (selectedHabit) => {
    // const updatedHabits = [...state.habits].map(
    //   (habit) => habit.name.toLowerCase() === action.payload.name.toLowerCase()
    // );
    dispatch({ type: "EDIT_HABIT", payload: state.editHabit });
  };

  const valueProp = { state, dispatch, handleSave, handleEdit };

  console.log("habits... ", state.habits);
  return (
    <HabitContext.Provider value={valueProp}>{children}</HabitContext.Provider>
  );
};

export default HabitProvider;
