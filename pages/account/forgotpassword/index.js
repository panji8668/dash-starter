import Link from 'next/link';
import {Logo,XButton} from '../../../components/ui'
import { useState } from 'react';

const ForgotPassword = props => {
    const {loading,setLoading} = useState(false)


    return (
<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <Logo />
            <p className="text-sm text-center">
              Enter your email address and we&apos;ll send you an email with
              instructions to reset your password.
            </p>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
            <XButton
                block
                size="md"
                shape="round"
                loading={loading}
                variant="solid"
                type="submit"
              >
                Sign In
              </XButton>
            </div>
          </form>
        </div>

        <div className="mt-10 flex text-center justify-center">
          <p className="mr-2 mt-0 text-center text-sm text-gray-600">
            Already have an Account ?
          </p>
          <Link href="/account/signin">
            <a className="text-sm text-indigo-600">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default ForgotPassword;