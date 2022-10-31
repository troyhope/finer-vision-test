import "./details-form.css";

type DetailsData = {
  firstName: string;
  lastName: string;
  email: string;
};

type DetailsFormProps = DetailsData & {
  updateFields: (fields: Partial<DetailsData>) => void;
};

const DetailsForm = ({
  firstName,
  lastName,
  email,
  updateFields,
}: DetailsFormProps) => {
  return (
    <>
      <div className="details-container">
        <div className="input-wrapper">
          <div>
            <label>First Name</label>
            <input
              autoFocus
              required
              type="text"
              value={firstName}
              onChange={(e) => updateFields({ firstName: e.target.value })}
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => updateFields({ lastName: e.target.value })}
            />
          </div>
        </div>
        <div className="email-wrapper">
          <label>Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
