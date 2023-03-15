import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import SmallSpinner from "../../Components/Spinner/SmallSpinner";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col lg:w-2/5 md:w-4/5 max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log in</h1>
          <p className="text-sm text-gray-400">Log in to access your account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <PrimaryButton
              onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
              type="submit"
              classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
            >
              {/* {loading ? <SmallSpinner /> : "Sign in"} */}
              Log In
            </PrimaryButton>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline text-gray-400">
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
