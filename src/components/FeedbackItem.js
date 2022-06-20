import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import FeedbackContext from "./FeedbackContext";

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedbackById, editFeedback } = useContext(FeedbackContext);
  const handleClick = (id) => {
    deleteFeedbackById(id);
  };

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleClick(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
