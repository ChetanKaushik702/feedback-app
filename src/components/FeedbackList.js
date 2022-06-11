import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks }) => {
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

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
