import React from "react";
import { doLogin } from "./action";

const LoginPage = async () => {
  return (
    <>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">welcome back</p>
          <form action={doLogin}>
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-600 ml-3 cursor-pointer"
                />
                Remember me
                <label />
              </div>
              <a href="#" className="text-primary">
                Forgot password
              </a>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- ./login with --> */}

      <p className="mt-4 text-center text-gray-600">
        Dont have account?
        <a className="text-primary">
          <button>Regist Now</button>
        </a>
      </p>
    </>
  );
};

export default LoginPage;
