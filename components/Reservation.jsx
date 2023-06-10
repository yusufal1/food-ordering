import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from 'formik';
import { reservationSchema } from "../schema/reservation";

const Reservation = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    actions.resetForm()
  }

  const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues : {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: ""
    },
    onSubmit,
    validationSchema: reservationSchema
  })


    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "tel",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email
        },
        {
          id: 4,
          name: "persons",
          type: "number",
          placeholder: "How Many Persons?",
          value: values.persons,
          errorMessage: errors.persons,
          touched: touched.persons
        },
        {
          id: 5,
          name: "date",
          type: "datetime-local",
          value: values.date,
          errorMessage: errors.date,
          touched: touched.date
        },
    ]

  return (
    <div className="container mx-auto py-12">
    <Title className="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap items-center gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {
              inputs.map((input) => (
                <Input {...input} key={input.id} onChange={handleChange} onBlur={handleBlur}/>
              ))
            }
          </div>
          <button className="btn-primary !bg-primary mt-4 opacity-100" type="submit">BOOK NOW</button>
        </form>
        <div className="lg:flex-1 !h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.519229732928!2d29.187353076930197!3d41.01389497134985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cace5437bed195%3A0x58dd3510d8019916!2zw4dla21la8O2eSBNZXRybw!5e0!3m2!1str!2str!4v1686263539311!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
