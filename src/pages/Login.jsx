import { Form, Link, useActionData } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};
function Login() {
  const data = useActionData();
  const { signin } = useLogin();
  const { registerWithGoogle } = useRegister();
  useEffect(() => {
    if (data) {
      signin(data);
    }
  }, [data]);
  return (
    <div className="h-screen grid place-content-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="email"
          defaultvalue="yourgmail@gmail.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultvalue="00000000"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          onClick={registerWithGoogle}
          className="btn btn-primary w-full  mb-5"
        >
          <FcGoogle className="text-3xl" />
          <span className="text-2xl">Google</span>
        </button>
        <p className="text-center">
          Not a member yet ?
          <Link to="/register" className="capitalize link">
            Registration
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
