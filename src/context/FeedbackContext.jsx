import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: '😡',
      comment: " The food was mediocre, and the service was slow. I expected more from this establishment, given its reputation. The only redeeming quality was the ambiance, which was lovely. However, I wouldn't recommend this restaurant based on my experience.",
    },
    {
      id: '5',
      rating: '😐',
      comment: "The service was prompt, and the food was delicious. I particularly enjoyed their signature dish, which was bursting with flavor. I highly recommend this restaurant for anyone looking for a great meal with excellent service",
    },
    {
      id: 3,
      rating: '😁',
      comment: "The food was outstanding, and the service was top-notch. The staff was friendly and attentive, making me feel welcome from the moment I walked in. I particularly enjoyed their seafood dishes, which were fresh and flavorful. I would definitely recommend this restaurant to anyone looking for a great meal in a cozy atmosphere",
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Sure you wanna delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
