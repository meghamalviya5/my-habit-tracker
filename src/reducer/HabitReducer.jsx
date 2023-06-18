console.log("in reducer");

export const habitReducer = (state, action) => {
  switch (action.type) {
    case "SET_HABIT_DETAILS":
      return {
        ...state,
        addHabit: {
          ...state.addHabit,
          [action.payload.key]: action.payload.value,
        },
      };
    case "ADD_HABIT":
      return {
        ...state,
        commonId: state.commonId + 1,
        habits: [...state.habits, { ...action.payload, id: state.commonId }],
      };

    case "SET_EDIT_HABIT":
      return { ...state, editHabit: action.payload };

    case "EDIT_HABIT":
      const updatedHabits = [...state.habits].map((habit) => {
        if (habit.id === action.payload.id) return action.payload;
        else return habit;
      });

      return { ...state, habits: updatedHabits };

    case "DELETE_HABIT":
      const updated = [...state.habits].filter((habit) => {
        console.log(habit.name !== action.payload, "....delete");
        return habit.name !== action.payload;
      });
      return { ...state, habits: updated };

    case "DELETE_HABIT_FROM_ARCHIVE":
      const updatedh = [...state.habits].filter((habit) => {
        console.log(habit.name !== action.payload, "....delete");
        return habit.name !== action.payload;
      });
      return { ...state, habits: updated };

    case "ARCHIVE_HABIT":
      const habitToArchive = state.habits.find(
        (habit) => habit.name.toLowerCase() === action.payload.toLowerCase()
      );
      return {
        ...state,
        archivedHabits: [...state.archivedHabits, habitToArchive],
      };

    default:
      return { state };
  }
};
