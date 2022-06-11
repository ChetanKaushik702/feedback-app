import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const FeedbackItem = ({ feedback }) => {
  const [rating, setRating] = useState(feedback.rating);
  const [text, setText] = useState(feedback.text);

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
