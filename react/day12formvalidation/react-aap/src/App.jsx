import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [showData, setShowData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if (validation()) {
      setShowData(data);
    }

    setData({ email: "", password: "" });
  }
  console.log(showData);

  function validation() {
    let obj = {};
    let vali = true;

    if (!data.email.trim()) {
      obj.email = "invalid email";
      vali = false;
    }

    if (!data.password.trim()) {
      obj.password = "invalid password";
      vali = false;
    } else if (data.password.length <= 8) {
      obj.password = "must be 8 charactors";
      vali = false;
    }

    setError(obj);
    return vali;
  }

  return (
    <div className="bg-black h-[100vh]">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
          />
          {error.email && <p className="text-red-500">{error.email}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
          {error.password && <p className="text-red-500">{error.password}</p>}
        </div>
        <div className="flex items-start mb-5"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div className="text-amber-900">
        <h1>show Data</h1>
        {showData.email && <p>{showData.email}</p>}
        {showData.password && <p>{showData.password}</p>}
      </div>
    </div>
  );
};

export default App;
