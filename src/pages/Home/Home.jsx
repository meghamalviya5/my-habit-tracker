import React, { useContext, useState } from "react";
import NewHabitModal from "../../Modals/NewHabitModal";
import HabitDetailsModal from "../../Modals/HabitDetailsModal";
import { HabitContext } from "../../context/HabitContext";

const Home = () => {
  const [showModal, setShowModal] = useState({
    newHabitModal: false,
    habitDetailsModal: false,
  });

  const { state, dispatch } = useContext(HabitContext);

  const openNewHabitModal = () => {
    setShowModal((prevState) => ({ ...prevState, newHabitModal: true }));
  };

  const openHabitDetailsModal = async (habitName) => {
    // const habitToEdit = state.habits.find(
    //   (habit) => habit.name.toLowerCase() === habitName.toLowerCase()
    // );
    // await dispatch({ type: "SET_EDIT_DETAILS", payload: habitToEdit });
    setShowModal((prevState) => ({ ...prevState, habitDetailsModal: true }));
  };

  return (
    <div>
      <button onClick={openNewHabitModal}>Add a New Habit</button>
      {showModal.newHabitModal ? (
        <NewHabitModal setModal={setShowModal} />
      ) : null}
      {showModal.habitDetailsModal ? (
        <HabitDetailsModal setModal={setShowModal} />
      ) : null}
      <div>
        {state?.habits?.map((habit) => (
          <div>
            <button
              className="btn-details"
              onClick={() => openHabitDetailsModal(habit.name)}
            >
              {habit.name}
            </button>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_HABIT", payload: habit.name })
              }
            >
              Delete
            </button>
            <button
              onClick={() => {
                dispatch({ type: "ARCHIVE_HABIT", payload: habit.name });
                dispatch({ type: "DELETE_HABIT", payload: habit.name });
              }}
            >
              Archive
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
