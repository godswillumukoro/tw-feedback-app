import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const {feedbackEditData} = useContext(FeedbackContext)
  useEffect(() => {
    setSelected(feedbackEditData.item.rating)
  }, [feedbackEditData])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      <li>
        <input
          id="1"
          type="radio"
          name="rating"
          value="1"
          checked={selected === 1}
          onChange={handleChange}
        />
        <label htmlFor="1">😡</label>
      </li>
      <li>
        <input
          id="5"
          type="radio"
          name="rating"
          value="5"
          checked={selected === 5}
          onChange={handleChange}
        />
        <label htmlFor="5">😐</label>
      </li>
      <li>
        <input
          id="10"
          type="radio"
          name="rating"
          value="10"
          checked={selected === 10}
          onChange={handleChange}
        />
        <label htmlFor="10">😁</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
