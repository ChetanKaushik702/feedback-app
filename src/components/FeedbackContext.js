import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedbackById = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?"))
      setFeedbacks((items) => items.filter((item) => item.id !== id));
  };

  const addFeedback = (feedback) => {
    setFeedbacks((prevFeedbacks) => [feedback, ...prevFeedbacks]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbackById = (feedback) => {
    if (window.confirm("Are you sure you want to update the feedback?")) {
      setFeedbacks((items) => items.filter((item) => item.id !== feedback.id));
      addFeedback(feedback);
    }
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        deleteFeedbackById,
        addFeedback,
        editFeedback,
        updateFeedbackById,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
