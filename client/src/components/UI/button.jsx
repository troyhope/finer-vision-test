import "./button.css";

const BUTTON_TYPES_CLASSES = {
  submit_button: "submit_button",
  next: "next",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div className={`"button-container" ${BUTTON_TYPES_CLASSES[buttonType]}`}>
      <button {...otherProps}>{children}</button>
    </div>
  );
};

export default Button;
