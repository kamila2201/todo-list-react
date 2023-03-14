import "./style.css";

const Buttons = ({tasks}) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button className="buttons__button">
        {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button 
      className="buttons__button"
      disabled={props.tasks.every(task => task.done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
};

export default Buttons;