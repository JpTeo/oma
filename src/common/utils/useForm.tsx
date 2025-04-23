import { useState } from "react";
import { notification } from "antd";
import emailjs from "emailjs-com";

interface IValues {
  nombre: string;
  email: string;
  mensaje: string;
}

const initialValues: IValues = {
  nombre: "",
  email: "",
  mensaje: "",
};
const SERVICE_ID = "tu_service_id";
const TEMPLATE_ID = "tu_template_id";
const USER_ID = "tu_user_id"; // también puede llamarse publicKey

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
            name: values.nombre,
            email: values.email,
            message: values.mensaje,
          },
          USER_ID
        );

        event.target.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));

        notification["success"]({
          message: "Éxito",
          description: "Tu mensaje fue enviado correctamente.",
        });
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
