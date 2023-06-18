import React, { useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { HabitContext } from "../context/HabitContext";

const HabitDetailsModal = ({ modalValues, setModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setModal((prevState) => ({ ...prevState, habitDetailsModal: false }));
    }
  };

  const { state, dispatch, handleEdit } = useContext(HabitContext);

  console.log("skjnfsj in state in details ---- ", state);
  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        {/* <h2>This is a Modal</h2> */}
        <form>
          <div>
            <label id="habit-name">Name:</label>
            <input
              type="text"
              placeholder="Enter Habit"
              id="habit-name"
              value={state?.editHabit?.name}
              onChange={(e) =>
                dispatch({
                  type: "SET_EDIT_HABIT_DETAILS",
                  payload: { key: "name", value: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label id="habit-repeat">REPEAT:</label>
            <select
              id="habit-repeat"
              onChange={(e) =>
                dispatch({
                  type: "SET_EDIT_HABIT_DETAILS",
                  payload: { key: "repeat", value: e.target.value },
                })
              }
              value={state?.editHabit?.repeat}
            >
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
          <div>
            <label id="habit-goal">GOAL:</label>
            <select
              id="habit-goal"
              onChange={(e) =>
                dispatch({
                  type: "SET_EDIT_HABIT_DETAILS",
                  payload: { key: "goal", value: e.target.value },
                })
              }
              value={state?.editHabit?.goal}
            >
              <option value="1 time Daily">1 time Daily</option>
              <option value="2 times Daily">2 times Daily</option>
              <option value="3 times Daily">3 times Daily</option>
            </select>
          </div>
          <div>
            <label id="habit-time-of-day">TIME OF DAY:</label>
            <select
              id="habit-time-of-day"
              onChange={(e) =>
                dispatch({
                  type: "SET_EDIT_HABIT_DETAILS",
                  payload: { key: "timeOfday", value: e.target.value },
                })
              }
              value={state?.editHabit?.timeOfday}
            >
              <option value="Any Time">Any Time</option>
              <option value="Noon">Noon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div>
            <label id="habit-start-date">START DATE:</label>
            <select
              id="habit-start-date"
              onChange={(e) =>
                dispatch({
                  type: "SET_EDIT_HABIT_DETAILS",
                  payload: { key: "startDate", value: e.target.value },
                })
              }
              value={state?.editHabit?.startDate}
            >
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
            </select>
          </div>
          <button
            type="button"
            className="btn-cancel"
            onClick={() =>
              setModal((prevState) => ({
                ...prevState,
                habitDetailsModal: false,
              }))
            }
          >
            X
          </button>
          <button
            type="submit"
            className="btn-edit"
            onClick={() => {
              setModal((prevState) => ({
                ...prevState,
                habitDetailsModal: false,
              }));
              handleEdit();
            }}
          >
            Edit
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default HabitDetailsModal;
