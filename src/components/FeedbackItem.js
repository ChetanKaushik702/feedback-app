import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const FeedbackItem = ({ feedback, deleteFeedbackById }) => {
  const [rating, setRating] = useState(feedback.rating);
  const [text, setText] = useState(feedback.text);

  const handleClick = (id) => {
    deleteFeedbackById(id);
  };

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleClick(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
