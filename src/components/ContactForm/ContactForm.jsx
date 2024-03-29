import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice.js';

export const ContactForm = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string().min(3, '3 symbols min').max(50, 'Too long').required('Must be not empty'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(20, 'Too long')
      .matches(
        /(^(1?)(\s?)([\s]?)((\(\d{3}\))|(\d{3}))([\s]?)([\s-]?)(\d{3})([\s-]?)(\d{4})+$)/gim,
        'Not a number'
      )
      .required('Must be not empty'),
  });

  const nameID = useId();
  const numberID = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={values => {
        dispatch(addContact({ id: Date.now(), ...values }));
        // addContact({ id: Date.now(), ...values });
      }}
      validationSchema={userSchema}
    >
      <Form className={styles.container}>
        <label htmlFor={nameID}>Name:</label>
        <Field type="text" name="name" id={nameID} className={styles.field}></Field>
        <ErrorMessage name="name" component="span" className={styles.error} />
        <label htmlFor={numberID}>Number:</label>
        <Field type="text" name="number" id={numberID} className={styles.field}></Field>
        <ErrorMessage name="number" component="span" className={styles.error} />
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
