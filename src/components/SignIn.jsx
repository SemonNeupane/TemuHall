import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
