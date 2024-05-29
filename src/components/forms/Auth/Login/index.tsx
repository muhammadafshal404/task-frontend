import { useState } from "react";
import { styles } from "./styles";
import { FormStyles } from "../../styles";
import Loader from "../../../common/Loader";
import Title from "antd/lib/typography/Title";
import { useNavigate } from "react-router-dom";
import { combineStyles } from "../../../../utils";
import logo from "../../../../assets/logo/logo.png";
import { loginUser } from "../../../../apis/auth.api";
import { MESSAGES, ROUTES } from "../../../../utils/constant";
import { MailOutlined, UnlockOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, notification } from "antd";
import { useSignin } from "../../../../hooks/useLogin";

interface response {
  statusCode: number;
  err: any;
  data: [];
  access_token: any;
  statusText: string;
}

const initialValues = {
  username: null,
  password: null,
};

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useSignin();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoader(true);
    const payload = {
      email: values?.email.toLowerCase(),
      password: values?.password,
    };
    const response: response = await loginUser(payload);
    if (response?.access_token) {
      localStorage.setItem("token", JSON.stringify(response?.access_token));
      await login(JSON.stringify(response?.access_token));
      notification.open({
        message: MESSAGES.LOGIN_SUCCESS,
      });
      setLoader(false);
      navigate(ROUTES.ROOT);
    } else {
      if (response?.err) {
        notification.open({
          message: response?.err?.message,
        });
        setLoader(false);
      } else {
        setLoader(false);
        notification.open({
          message: MESSAGES.LOGIN_ERROR,
        });
      }
    }
  };

  return (
    <div style={styles.loginForm}>
      <div style={FormStyles.loginContainer}>
        <a href="">
          <div>
            <img style={styles.centeredImage} src={logo} alt="Logo" />
          </div>
        </a>
        <Title level={3} style={styles.title}>
          Login
        </Title>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <Form.Item
            name="email"
            style={FormStyles.loginTextfield}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
              {
                required: true,
                message: "Please enter your email address!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={styles.input} />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            style={FormStyles.loginTextfield}
            rules={[
              {
                required: true,
                message: "Please enter a password!",
              },
              {
                min: 8, // Minimum password length (customize as needed)
                message: "Password must be at least 8 characters long!",
              },
              {
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number!",
              },
            ]}
          >
            <Input.Password
              prefix={
                <UnlockOutlined
                  style={combineStyles([
                    styles.input,
                    FormStyles.passwordInput,
                  ])}
                />
              }
              placeholder="Password"
            />
          </Form.Item>
          <Row justify="center">
            <Col>
              <Form.Item>
                <Button
                  style={FormStyles.loginButton}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row>{loader ? <Loader /> : <></>}</Row>
      </div>
    </div>
  );
};

export default LoginForm;
