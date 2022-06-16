import { useContext } from "react";
import FeedbackContext from "./FeedbackContext";

const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext);
  // calculating average rating
  let average =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedbacks.length;

  average = average.toFixed(1).replace(/[..]0%/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
