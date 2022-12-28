import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { darkBlue, orange } from "../../styles/theme";
type Inputs = {
  lessonTopic: string;
  timeFrame: string;
};

export const InterestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label>What do you want to learn? </label>
        <Input defaultValue="test" {...register("lessonTopic")} />
      </InputGroup>

      <InputGroup>
        <label>How much time do you have?</label>
        <Input placeholder="10 hours.." {...register("timeFrame")} />
      </InputGroup>
      {/* errors will return when field validation fails  */}
      {errors.timeFrame && <span>This field is required</span>}

      <Submit type="submit" />
    </Form>
  );
};

const Submit = styled.input`
  padding: 0.5em 1em;
  width: 25%;
  background-color: ${darkBlue};
  border: 1px solid;
  border-radius: 0.25em;
  color: white;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  width: 100%;
`;
const Input = styled.input`
  margin-top: 0.5em;
  background-color: inherit;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid ${darkBlue};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
