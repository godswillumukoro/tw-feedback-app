import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes } from "react-icons/fa";
// import PropTypes from "prop-types";
import Card from "./utils/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  if(item.rating === 1) {
    item.rating = '☹️'
  } else if(item.rating === 5) {
    item.rating = '😐'

  } else if(item.rating === 10) {
    item.rating = '🙂'
  }

  return (
    <div className="container">
      <Card darkTheme={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="#CC9A4F" />
        </button>
        <div className="tex-display">{item.comment}</div>
      </Card>
    </div>
  );

  //   <button onClick={handleClick}>ADD</button>
  // const handleClick =() => {
  //     setNumber((previousValue) => {
  //         console.log(previousValue);
  //         return previousValue + 1
  //     })
  // }
}

// FeedbackItem.propTypes = {
//   num: PropTypes.string,
//   comment: PropTypes.string,
// };

export default FeedbackItem;
