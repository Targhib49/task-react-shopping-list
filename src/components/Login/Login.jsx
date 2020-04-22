import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Formik } from 'formik';
import { withRouter, Link } from 'react-router-dom';

class Login extends Component {
	render() {
		return (
			<MDBContainer fluid className="container-login align-items-center">
				<MDBRow className="myRow align-items-center justify-content-center">
					<MDBCol xl={5} lg={5} md={6} className="myCol bg-primary">
						<MDBRow>
							<MDBCol className="text-center">
								<h1>Login</h1>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol className="text-center">
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
										} else if (
											existingUser.password !== values.password ||
											existingUser.email !== values.email
										) {
											alert('email/password salah');
										} else {
											localStorage.setItem('isLogin', true);
											localStorage.setItem('userData', JSON.stringify(existingUser));
											alert(`selamat datang kembali ${existingUser.name}`);
											this.props.history.push('/dashboard');
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
											<MDBRow className="pt-1">
												<MDBCol className="text-center">
													<MDBInput
														className="inputText"
														type="email"
														name="email"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.email}
														label="email"
													/>
													{errors.email && touched.email && errors.email}
												</MDBCol>
											</MDBRow>
											<MDBRow>
												<MDBCol className="text-center">
													<MDBInput
														className="inputText"
														type="password"
														name="password"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.password}
														label="password"
													/>
													{errors.password && touched.password && errors.password}
												</MDBCol>
											</MDBRow>
											<MDBRow className="pt-2">
												<MDBCol>
													<MDBBtn type="submit" disabled={isSubmitting}>
														Submit
													</MDBBtn>
												</MDBCol>
											</MDBRow>
											<MDBRow className="pt-2">
												<MDBCol>
													<p>or create new account</p>
													<MDBBtn type="button">
														<Link to="/register">Register</Link>
													</MDBBtn>
												</MDBCol>
											</MDBRow>
										</form>
									)}
								</Formik>
							</MDBCol>
						</MDBRow>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default withRouter(Login);
