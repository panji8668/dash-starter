import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { XButton, Logo } from '../../../components/ui'
import useAuth from '../../../utils/hooks/useAuth'
import {Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Please enter your user name'),
  password: Yup.string().required('Please enter your password'),
  rememberMe: Yup.bool(),
})

function SignInPage(props) {

  const { signIn } = useAuth()

  const signInProses = async (values, setSubmitting) => {
    const { email, password } = values
    const result = await signIn({ email, password })
  }
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-1">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 border rounded-lg sm:px-10">
          <Formik
            initialValues={{
              email: 'panji@aviana.co.id',
              password: 'mandala',
              rememberme: true,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              signInProses(values, setSubmitting)
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              isSubmitting,
              handleSubmit,
            }) => (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Logo />

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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.rememberme}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/account/forgotpassword">
                      <a className=" text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                </div>

                <div>
                  <XButton
                    block
                    size="md"
                    shape="round"
                    loading={isSubmitting}
                    variant="solid"
                    type="submit"
                  >
                    Sign In
                  </XButton>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="mt-10 flex text-center justify-center">
          <p className="mr-2 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
          </p>
          <Link href="/account/signup">
            <a className="text-sm text-indigo-600">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
