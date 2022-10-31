import "./button.css";

const BUTTON_TYPES_CLASSES = {
  submit_button: "submit_button",
  next: "next",
};

type Props = {
  children?: React.ReactNode;
  buttonType: keyof typeof BUTTON_TYPES_CLASSES;
  [key: string]: any;
};

const Button = ({ children, buttonType, ...otherProps }: Props) => {
  return (
    <div className={`"button-container" ${BUTTON_TYPES_CLASSES[buttonType]}`}>
      <button {...otherProps}>{children}</button>
    </div>
  );
};

export default Button;
