import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from "../../pages/Layout"

import './Contact_Us.css';
import './v4.6.0.css';
import getUser from "../../utils/get-user";

const ContactForm = () => {
  const user = getUser();

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        'service_ct6th7q',
        'template_yy4g439',
        templateParams,
        'user_mBRJGCFBaEf74unMoMZE2'

        // .env
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        // templateParams,
        // process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout user={user}>
      <div className='ContactForm'>
            <h1 className='title'> Contact Form </h1>
              <p id='contact-msg'>If you have any questions, please submit a contact form below. A staff member will reach out to you soon!</p>
              <div className='row'>
                <div className='col-12 text-center'>
                  <div className='contactForm'>
                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                      {/* Row 1 of form */}
                      <div className='row formRow'>
                        <div className='col-6'>
                          <input
                            type='text'
                            // name='name'
                            {...register('name', {
                              required: { value: true, message: 'Please enter your name' },
                              maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                              }
                            })}
                            className='form-control formInput'
                            placeholder='Name'
                          ></input>
                          {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                        </div>
                        <div className='col-6'>
                          <input
                            type='email'
                            // name='email'
                            {...register('email', {
                              required: true,
                              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className='form-control formInput'
                            placeholder='Email address'
                          ></input>
                          {errors.email && (
                            <span className='errorMessage'>Please enter a valid email address</span>
                          )}
                        </div>
                      </div>
                      {/* Row 2 of form */}
                      <div className='row formRow'>
                        <div className='col'>
                          <input
                            type='text'
                            // name='subject'
                            {...register('subject', {
                              required: { value: true, message: 'Please enter a subject' },
                              maxLength: {
                                value: 75,
                                message: 'Subject cannot exceed 75 characters'
                              }
                            })}
                            className='form-control formInput'
                            placeholder='Subject'
                          ></input>
                          {errors.subject && (
                            <span className='errorMessage'>{errors.subject.message}</span>
                          )}
                        </div>
                      </div>
                      {/* Row 3 of form */}
                      <div className='row formRow'>
                        <div className='col'>
                          <textarea
                            rows={5}
                            // name='message'
                            {...register('message', {
                              required: true
                            })}
                            className='form-control formInput'
                            placeholder='Message'
                          ></textarea>
                          {errors.message && <span className='errorMessage'>Please enter a message</span>}
                        </div>
                      </div>
                      <div className="center-btn">
                      <button className='submit-btn' type='submit'>
                        Submit
                      </button>
                      </div>
                    </form>
                  </div>
                  <ToastContainer />
                </div>
              </div>
            </div>
    </Layout>
  );
};

export default ContactForm;