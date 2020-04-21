import React, { Component } from 'react';
import { Formik } from 'formik';

class Register extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Anywhere in your app!</h1>
					<Formik
						initialValues={{ name: '', email: '', password: '' }}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							const url = 'https://5e8ee187fe7f2a00165eead7.mockapi.io/users';
							values.avatar =
								'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png';
							const options = {
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify(values),
								method: 'POST'
							};

							fetch(url, options)
								.then((response) => {
									return response.json();
								})
								.then((result) => {
									alert('register successfully');
									// this.props.history.push('/signin');
								});
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
									type="text"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								{errors.name && touched.name && errors.name}
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

export default Register;
