// THIS IS A RECAP OF ALL TYPES USE IN REACT HOOK FORM

// export type UseFormReturn<
//   TFieldValues extends FieldValues = FieldValues,
//   TContext = any
// > = {
//   watch: UseFormWatch<TFieldValues>;
//   getValues: UseFormGetValues<TFieldValues>;
//   getFieldState: UseFormGetFieldState<TFieldValues>;
//   setError: UseFormSetError<TFieldValues>;
//   clearErrors: UseFormClearErrors<TFieldValues>;
//   setValue: UseFormSetValue<TFieldValues>;
//   trigger: UseFormTrigger<TFieldValues>;
//   formState: FormState<TFieldValues>;
//   resetField: UseFormResetField<TFieldValues>;
//   reset: UseFormReset<TFieldValues>;
//   handleSubmit: UseFormHandleSubmit<TFieldValues>;
//   unregister: UseFormUnregister<TFieldValues>;
//   control: Control<TFieldValues, TContext>;
//   register: UseFormRegister<TFieldValues>;
//   setFocus: UseFormSetFocus<TFieldValues>;
// };
// export type UseFormProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TContext extends object = object
// > = Partial<{
//   mode: Mode;
//   reValidateMode: Mode;
//   defaultValues: DeepPartial<TFieldValues>;
//   resolver: Resolver<TFieldValues, TContext>;
//   context: TContext;
//   shouldFocusError: boolean;
//   shouldUnregister: boolean;
//   criteriaMode: "firstError" | "all";
// }>;
// export type UseFieldArrayReturn<
//   TFieldValues extends FieldValues = FieldValues,
//   TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
//   TKeyName extends string = "id"
// > = {
//   swap: (indexA: number, indexB: number) => void;
//   move: (indexA: number, indexB: number) => void;
//   prepend: (
//     value:
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
//     options?: FieldArrayMethodProps
//   ) => void;
//   append: (
//     value:
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
//     options?: FieldArrayMethodProps
//   ) => void;
//   remove: (index?: number | number[]) => void;
//   insert: (
//     index: number,
//     value:
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
//     options?: FieldArrayMethodProps
//   ) => void;
//   update: (
//     index: number,
//     value: Partial<FieldArray<TFieldValues, TFieldArrayName>>
//   ) => void;
//   replace: (
//     value:
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>
//       | Partial<FieldArray<TFieldValues, TFieldArrayName>>[]
//   ) => void;
//   fields: FieldArrayWithId<TFieldValues, TFieldArrayName, TKeyName>[];
// };
// export type UseFieldArrayProps<
//   TKeyName extends string = "id",
//   TControl extends Control = Control
// > = {
//   name: string;
//   keyName?: TKeyName;
//   control?: TControl;
//   rules?: Pick<
//     RegisterOptions<TFieldValues>,
//     "maxLength" | "minLength" | "validate" | "required"
//   >;
// };
// export type UseControllerReturn<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// > = {
//   field: ControllerRenderProps<TFieldValues, TName>;
//   formState: UseFormStateReturn<TFieldValues>;
//   fieldState: ControllerFieldState;
// };
// export type UseControllerProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// > = {
//   name: TName;
//   rules?: Omit<
//     RegisterOptions<TFieldValues, TName>,
//     "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
//   >;
//   shouldUnregister?: boolean;
//   defaultValue?: FieldPathValue<TFieldValues, TName>;
//   control?: Control<TFieldValues>;
// };
// export type FieldError = {
//   type: string;
//   ref?: Ref;
//   types?: MultipleFieldErrors;
//   message?: Message;
// };
// export type FieldErrors<T extends FieldValues = FieldValues> = Partial<
//   FieldValues extends IsAny<FieldValues>
//     ? any
//     : FieldErrorsImpl<DeepRequired<T>>
// > & {
//   root?: Record<string, GlobalError> & GlobalError;
// };
// export type Field = {
//   ref: Ref;
//   mutationWatcher?: MutationWatcher;
//   options?: RadioOrCheckboxOption[];
// } & RegisterOptions;

// export type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;

// export type FieldValues = Record<string, any>;

// export type FieldArrayWithId<
//   TFieldValues extends FieldValues = FieldValues,
//   TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
//   TKeyName extends string = "id"
// > = FieldArray<TFieldValues, TFieldArrayName> & Record<TKeyName, string>;

// export type Mode = {
//   onBlur: "onBlur";
//   onChange: "onChange";
//   onSubmit: "onSubmit";
//   onTouched: "onTouched";
//   all: "all";
// };

// export type RegisterOptions = Partial<{
//   required: Message | ValidationRule<boolean>;
//   min: ValidationRule<number | string>;
//   max: ValidationRule<number | string>;
//   maxLength: ValidationRule<number | string>;
//   minLength: ValidationRule<number | string>;
//   pattern: ValidationRule<RegExp>;
//   validate: Validate | Record<string, Validate>;
// }>;

// export type FormStateProxy<TFieldValues extends FieldValues = FieldValues> = {
//   isDirty: boolean;
//   dirtyFields: Dirtied<TFieldValues>;
//   isSubmitted: boolean;
//   submitCount: number;
//   touched: FieldNames<TFieldValues>;
//   isSubmitting: boolean;
//   isValid: boolean;
//   errors: FieldErrors<TFieldValues>;
// };
