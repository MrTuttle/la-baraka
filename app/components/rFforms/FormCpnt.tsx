// import { Form, Input, Select } from "./Components";
import Form from "./Form";
import { Input } from "./Input";
import { Select } from "./Select";

export default function FormCpnt() {
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      <Input name="lastName" />
      <Select name="gender" options={["female", "male", "other"]} />

      <Input type="submit" value="Submit" />
    </Form>
  );
}
