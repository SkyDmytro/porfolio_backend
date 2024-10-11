import yup from "yup";
export const emailSchema = yup.object().shape({
  email: yup.string().email().required().min(5),
  name: yup.string().required().min(2),
  message: yup.string().required(),
});