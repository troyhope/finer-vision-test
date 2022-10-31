import "./form-card.css";

type Props = {
  children?: React.ReactNode;
};

const FormCard = ({ children }: Props) => (
  <div className="form-card-container">{children}</div>
);
export default FormCard;
