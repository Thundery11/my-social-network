import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name="login"
            component="input"
            type="text"
            placeholder="Login"
          />
        </div>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <span>
            <Field name="rememberMe" component="input" type="checkbox" />{" "}
            Remember me
          </span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
