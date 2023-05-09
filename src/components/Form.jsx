import React from "react";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./utils/Card";
import Button from "./utils/Button";

function Form({handleAdd}) {
  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (userReview === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (userReview !== "" && userReview.trim().length <= 10) {
      setMessage("Review must be at least 10 characters 😉");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setUserReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(userReview.trim().length>10) {
        const newFeedback = {
            rating: userRating,
            comment: userReview,
        }
        handleAdd(newFeedback)
        setUserReview('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
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
      </form>
    </Card>
  );
}

export default Form;
