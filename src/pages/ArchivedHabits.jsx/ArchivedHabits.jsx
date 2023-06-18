import React, { useContext, useState } from "react";
import { HabitContext } from "../../context/HabitContext";

const ArchivedHabits = () => {
  const { state, dispatch } = useContext(HabitContext);
  return (
    <div>
      <div>
        {state?.archivedHabits?.map((habit) => (
          <div>
            <button className="btn-details">{habit.name}</button>
            {/* <button
              onClick={() =>
                dispatch({
                  type: "DELETE_HABIT_FROM_ARCHIVE",
                  payload: habit.name,
                })
              }
            >
              Delete
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivedHabits;
