import "./step-accordian.css";

type StepAccordionProps = {
  stepTitle: string;
  onClick: React.MouseEventHandler;
};

const StepAccordion = ({ stepTitle, onClick }: StepAccordionProps) => {
  return (
    <section className="accordion-container">
      <div className="accordion-header" onClick={onClick}>
        <div className="title">{stepTitle}</div>
      </div>
    </section>
  );
};

export default StepAccordion;
