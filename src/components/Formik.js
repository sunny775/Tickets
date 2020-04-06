import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email:Yup.string()
    .email('Invalid email address')
    .required('Required'),
  firstName:Yup.string()
    .max(15,'Name too long')
    .min(3,'name too short')
    .required('Required'),
  phone:Yup.number()
    .min(11,'phone number too short')
    .required('Required')
})
const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "",phone:0,firstName:'' },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>: null}
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName?<div>{formik.errors.firstName}</div>: null}
      <label htmlFor='phone'>Phone:</label>
      <input
      id='phone'
      name='phone'
      type='tel'
      {...formik.getFieldProps('phone')}
      />
      {formik.touched.phone && formik.errors.phone?<div>{formik.errors.phone}</div>: null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm