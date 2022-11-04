import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
      <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            SkyKart
          </h1>

          <form className="mt-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-800">
                Name
              </label>
              <input
                type="name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
           
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Sign up
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup