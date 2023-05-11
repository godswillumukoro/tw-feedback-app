import React from "react";
import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./utils/Card";
import Button from "./utils/Button";
import FeedbackContext from "../context/FeedbackContext";

function Form() {
  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEditData, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditData.editMode === true) {
      setBtnDisabled(false);
      setUserRating(feedbackEditData.item.rating);
      setUserReview(feedbackEditData.item.comment);
    }
  }, [feedbackEditData]);

  const handleTextChange = (e) => {
    if (userReview === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (userReview !== "" && userReview.trim().length <= 10) {
      setMessage("Please write at least 10 letters 🤗");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setUserReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userReview.trim().length > 10) {
      const newFeedback = {
        rating: userRating,
        comment: userReview,
      };
      if (feedbackEditData.editMode === true) {
        updateFeedback(feedbackEditData.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setUserReview("");
      setMessage("Thanks for your feedback!");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>
            We truly value your opinion and would love to hear your feedback on
            your experience here. Is there anything that you particularly
            enjoyed, or any areas where you think we could improve?
          </h2>
          <RatingSelect select={(userRating) => setUserRating(userRating)} />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              name=""
              id=""
              placeholder="Write a review"
              value={userReview}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </Card>
  );
}

export default Form;
