import "./card.css";

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => (
  <div className="card-container">{children}</div>
);
export default Card;
