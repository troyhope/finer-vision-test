import "./comments-form.css";

type CommentsDetail = {
  number: string;
  gender: string;
  dob: string;
  day: string;
  month: string;
  year: string;
};

type CommentsFormProps = CommentsDetail & {
  updateFields: (fields: Partial<CommentsDetail>) => void;
};

const CommentsForm = ({
  number,
  gender,
  dob,
  day,
  month,
  year,
  updateFields,
}: CommentsFormProps) => {
  console.log(dob);

  return (
    <>
      <div className="details-container">
        <div className="input-wrapper">
          <div>
            <label>Telephone</label>
            <input
              autoFocus
              required
              type="telephone"
              value={number}
              onChange={(e) => updateFields({ number: e.target.value })}
            />
          </div>
          <div>
            <label>Gender</label>
            <select
              required
              value={gender}
              onChange={(e) => updateFields({ gender: e.target.value })}
            >
              <option value="">Select Gender&nbsp;&nbsp;&nbsp;&nbsp;v</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="birthday-input">
          <label>Date of birth</label>
          <input
            required
            type="text"
            value={day}
            onChange={(e) => updateFields({ day: e.target.value })}
          />
          <input
            required
            type="text"
            value={month}
            onChange={(e) => updateFields({ month: e.target.value })}
          />
          <input
            required
            type="text"
            value={year}
            onChange={(e) => updateFields({ year: e.target.value })}
            onBlur={() => updateFields({ dob: day + "-" + month + "-" + year })}
          />
        </div>
      </div>
    </>
  );
};

export default CommentsForm;
