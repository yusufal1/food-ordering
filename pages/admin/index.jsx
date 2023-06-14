import React from 'react'
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import { useFormik } from 'formik';
import { adminSchema } from '../../schema/admin';
import Link from 'next/link';

const Login = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000))
        actions.resetForm()
      }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues : {
          username: "",
          password: ""
        },
        onSubmit,
        validationSchema: adminSchema
      })

    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Your Username",
          value: values.username,
          errorMessage: errors.username,
          touched: touched.username
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password
        },
    ]
  return (
    <div className='container mx-auto py-4'>
        <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
            <Title className="text-[40px] mb-6">Admin Login</Title>
            <div className='flex flex-col gap-y-4 w-full'>
                {inputs.map((input) => (
                    <Input key={input.id}
                    {...input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                ))}
            </div>
            <div className='flex flex-col w-full gap-y-3 mt-6'>
              <button className='btn-primary text-lg'>LOGIN</button>
              <Link href="/">
                <span className='text-sm underline cursor-pointer text-gray-500'>Home Page</span>
              </Link>
            </div>
        </form>
    </div>
  )
}

export default Login