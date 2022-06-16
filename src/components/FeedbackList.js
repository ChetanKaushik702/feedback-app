import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./FeedbackContext";

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedbacks Yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedbackItem key={item.id} feedback={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
