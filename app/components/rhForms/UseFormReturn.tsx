import type {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";
import React from "react";
import { useForm } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
// SOMETHING IS MISSING
// const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
//   <input ref={ref} {...props} />
// ));

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

// SOMETHING IS MISSING
// const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
//   ({ options, ...props }, ref) => (
//     <select ref={ref} {...props}>
//       {options.map(({ label, value }) => (
//         <option value={value}>{label}</option>
//       ))}
//     </select>
//   )
// );

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
  sex: string;
};

export default function App() {
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register }) => (
        <>
          {/* <Input {...register("firstName")} />
          <Input {...register("lastName")} />
          <Select
            {...register("sex")}
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Other", value: "other" },
            ]}
          />
          <Input type="submit" /> */}
        </>
      )}
    </Form>
  );
}
