import useForm from "@/hooks/useForm";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const style = {
    position: "relative",
    height: "0px",
    width: "0px",
    float: "left",
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues);
  const submitForm = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex justify-center auth-section">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleSubmit(submitForm)}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
            />
            <div data-lastpass-icon-root="" style={style}></div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
            />
            <div className="flex justify-end text-xs text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            <div data-lastpass-icon-root="" style={style}></div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <FaGoogle />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <FaFacebook />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Dont have an account?
          <Link
            rel="noopener noreferrer"
            to="/registration"
            className="underline text-gray-800"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
