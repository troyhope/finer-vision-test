import "./final-comment-form.css";

type FinalComment = {
  comments: string;
};

type FinalCommentProps = FinalComment & {
  updateFields: (fields: Partial<FinalComment>) => void;
};

const FinalCommentsForm = ({ comments, updateFields }: FinalCommentProps) => {
  return (
    <>
      <label>Comments</label>
      <textarea
        autoFocus
        required
        rows={7}
        cols={38}
        value={comments}
        onChange={(e) => updateFields({ comments: e.target.value })}
      ></textarea>
    </>
  );
};

export default FinalCommentsForm;
