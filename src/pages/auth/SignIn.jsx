/* eslint-disable react/prop-types */

export default function SignIn({ setMode, handleSubmit }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div className="rounded-md shadow-xs -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block bg-white w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-t-md"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block bg-white w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-b-md"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 text-sm font-medium border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setMode("sign-up")}
              className="text-blue-600 hover:text-blue-500 cursor-pointer"
            >
              Don&apos;t have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
