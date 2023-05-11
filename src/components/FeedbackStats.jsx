import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  console.log(feedback);

  let reviews;
  let average =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  if (!feedback || feedback.length === 0) {
    reviews = "Sorry. No feedback so far";
  } else if (feedback.length === 1) {
    reviews = feedback.length + " Review";
  } else {
    reviews = feedback.length + " Reviews";
  }

  return (
    <div className="feedback-stats">
      <h4>{reviews} </h4>
      <h4>
        Average Rating:{" "}
        {Number.isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, "")}
      </h4>{" "}
      {/* One decimal place. If zero, take off the numbers after the decimal point */}
      {/* <h4>Average Rating: {average ? Math.floor(average) : 0}</h4> */}
    </div>
  );
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats;
