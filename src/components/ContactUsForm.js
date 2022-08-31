import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
// import {SavePost} from "../customApi";
import { DataStore } from '@aws-amplify/datastore';
import {Contact} from "../models";



const phoneRegExp = "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$";

export const ContactUsForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
            file: ''
        },


        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required(),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
            message: Yup.string()
                .min(15, 'Must be 15 characters or more')
                .max(600, 'We will contact you via phone')
                .required()
        }),
    });


    return (
        <form className="mt-5" id="contact-form" onSubmit={async (e) => {
            e.preventDefault();
            console.log(formik.values);
            try {
                await DataStore.save(
                    new Contact({
                        "name": formik.values.name,
                        "email": formik.values.email,
                        "studentID": "",
                        "message": formik.values.message,
                        "phone": formik.values.phone
                    })
                );
            } catch(err) {
                alert(err);
            }
            alert("submitted blyat");
        }}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       className="form-control"
                       id="name"
                       name="name"
                       placeholder="Enter name"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       name="email"
                       aria-describedby="emailHelp"
                       placeholder="Enter email"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text"
                       className="form-control"
                       id="phone"
                       name="phone"
                       placeholder="Phone"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div>{formik.errors.phone}</div>
                ) : null}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="message" className="form-label">Your message</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                    <div>{formik.errors.message}</div>
                ) : null}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="file" className="form-label">Please provide your student ID , so that we can give
                    you student price discount</label>
                <input className="form-control"
                       type="file"
                       id="file"
                       name="file"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.file}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};