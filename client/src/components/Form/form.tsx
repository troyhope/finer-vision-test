import { useState, FormEvent } from "react";

import useMultistepform from "../../hooks/useMultistepForm";

import Card from "../UI/card";
import FormCard from "../UI/form-card";
import StepAccordion from "../UI/step-accordion";
import Button from "../UI/button";

import DetailsForm from "../Forms/details-form";
import CommentsForm from "../Forms/comments-form";
import FinalCommentsForm from "../Forms/final-comments-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  gender: string;
  dob: string;
  comments: string;
  day: string;
  month: string;
  year: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  gender: "",
  dob: "",
  comments: "",
  day: "",
  month: "",
  year: "",
};

const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { isFirstStep, isSecondStep, isThirdStep, goTo, next } =
    useMultistepform();

  async function addUserData() {
    const userFormData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      number: data.number,
      gender: data.gender,
      dob: data.dob,
      comments: data.comments,
    };

    await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(userFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setData(INITIAL_DATA);
    goTo(1);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isThirdStep) return next();

    let valid =
      data.firstName.length > 0 &&
      data.lastName.length > 0 &&
      data.email.length > 0 &&
      data.number.length > 0 &&
      data.gender.length > 0 &&
      data.dob.length > 0 &&
      data.comments.length > 0;

    if (valid) {
      addUserData();
      alert("Form Successfully Submitted");
    } else {
      alert("You have not completed all the steps, please check your details");
    }
  }

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <StepAccordion
          stepTitle="Step 1: Your details"
          onClick={() => {
            goTo(1);
          }}
        />
        <>
          {isFirstStep && (
            <FormCard>
              <DetailsForm {...data} updateFields={updateFields} />
              <Button buttonType={"next"} type="submit">
                Next &#62;
              </Button>
            </FormCard>
          )}
        </>
        <>
          <StepAccordion
            stepTitle="Step 2: More comments"
            onClick={() => {
              goTo(2);
            }}
          />

          <>
            {isSecondStep && (
              <FormCard>
                <CommentsForm {...data} updateFields={updateFields} />
                <Button buttonType="next" type="submit">
                  Next &#62;
                </Button>
              </FormCard>
            )}
          </>
        </>
        <StepAccordion
          stepTitle="Step 3: Final comments"
          onClick={() => {
            goTo(3);
          }}
        />
        <>
          {isThirdStep && (
            <FormCard>
              <FinalCommentsForm {...data} updateFields={updateFields} />
              <Button buttonType="submit_button" type="submit">
                Next &#62;
              </Button>
            </FormCard>
          )}
        </>
      </form>
    </Card>
  );
};

export default Form;
