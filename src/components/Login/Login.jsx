import React, { Component } from 'react';
import { Formik } from 'formik';

class Login extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Login</h1>
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
						onSubmit={async (values) => {
							const url = 'https://5e945b44f591cb0016d80f27.mockapi.io/Users';
							const response = await fetch(url);
							const result = await response.json();

							const existingUser = result.find((element) => element.email === values.email);

							if (existingUser === undefined) {
								alert('user tidak ditemukan');
								// history.push('/signup');
							} else if (
								existingUser.password !== values.password ||
								existingUser.email !== values.email
							) {
								alert('email/password salah');
							} else {
								localStorage.setItem('isLogin', true);
								localStorage.setItem('userData', JSON.stringify(existingUser));
								alert(`selamat datang kembali ${existingUser.name}`);
								// history.push('/github');
							}
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting
							/* and other goodies */
						}) => (
							<form onSubmit={handleSubmit}>
								<input
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
								{errors.email && touched.email && errors.email}
								<input
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
								{errors.password && touched.password && errors.password}
								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>
							</form>
						)}
					</Formik>
				</div>
			</div>
		);
	}
}

export default Login;
