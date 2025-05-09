import { useState } from "react";
import { notification } from "antd";
import emailjs from "emailjs-com";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || "";
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || "";
const USER_ID = process.env.REACT_APP_USER_ID || "";

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));
    if (Object.values(errors).every((error) => error === "")) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            message: values.message,
            time: new Date().toLocaleString("es-AR"),
          },
          USER_ID
        );
        notification["success"]({
          message: "Éxito",
          description: "Tu mensaje fue enviado correctamente.",
        });

        // Limpiar el formulario
        event.target.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));
      } catch (error) {
        console.error("EmailJS error", error);

        notification["error"]({
          message: "Error",
          description:
            "Hubo un problema al enviar el mensaje. Por favor, intenta más tarde.",
        });
      }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
