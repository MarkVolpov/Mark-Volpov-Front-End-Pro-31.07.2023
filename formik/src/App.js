import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Обов\'язкове поле'),
  email: Yup.string().email('Неправильний формат електронної пошти').required('Обов\'язкове поле'),
  phone: Yup.string().matches(/^\d{12}$/, 'Тільки цифри та довжина 12').required('Обов\'язкове поле'),
});

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Форма</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>

        <div>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        </div>

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default App;