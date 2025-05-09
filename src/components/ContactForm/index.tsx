import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle" className="contact-row">
        <Col
          lg={{ span: 12, order: 1 }} // En desktop: primero el formulario
          md={{ span: 11, order: 1 }}
          sm={{ span: 24, order: 2 }} // En mobile: segundo
          xs={{ span: 24, order: 2 }}
          className="form-column"
        >
          <Slide direction="left" triggerOnce style={{ width: "100%" }}>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="mensaje"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{"Enviar"}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>

        <Col
          lg={{ span: 12, order: 2 }} // En desktop: segundo el texto
          md={{ span: 12, order: 2 }}
          sm={{ span: 24, order: 1 }} // En mobile: primero
          xs={{ span: 24, order: 1 }}
          className="content-column"
        >
          <Slide direction="right" triggerOnce style={{ marginLeft: "5%" }}>
            <Block title={title} content={content} />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
