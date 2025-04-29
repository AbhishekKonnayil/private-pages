import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              className="w-full border border-gray-300  p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter firstname"
            ></input>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              className="w-full border border-gray-300  p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter lastname"
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-300  p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            ></input>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300  p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="password"
            ></input>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300  p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="password"
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 rounded-lg w-full  py-3 text-white hover:bg-blue-600 transition-colors duration-200"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-gray-600 text-sm">Already have an account?</h1>
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
