import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '@/components/InputField';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short')
    .max(50, 'Username is too short')
    .required('Username is Required')
    .email('Username should be a valid email'),
  password: Yup.string()
    .min(6, 'Password should be minimum 6 char long')
    .max(50, 'Password is too long')
    .required('Required'),
});

const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="mx-auto w-1/3">
      <div className="shadow-sm">
        <div className="py-1.5">
          <label
            htmlFor="email-address"
            className="block text-xs font-semibold py-1"
          >
            Username
          </label>
          <InputField
            id="email-address"
            name="username"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Enter your username"
            hasError={formik.touched.username && formik.errors.username}
            errorMessage={formik.errors.username}
          />
        </div>
        <div className="py-1.5">
          <label
            htmlFor="password"
            className="block text-xs font-semibold py-1"
          >
            Password
          </label>
          <InputField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter Password"
            hasError={formik.touched.password && formik.errors.password}
            errorMessage={formik.errors.password}
          />
        </div>
      </div>
      <div className="flex items-center justify-between py-1.5">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="rememberMe"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={formik.handleChange}
            value={formik.values.rememberMe}
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
      </div>
      <div className="py-1.5">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
