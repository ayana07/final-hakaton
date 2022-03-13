import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";

const Login = () => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		setHasAccount,
		handleSignUp,
		hasAccount,
		emailError,
		passwordError,
	} = useAuth();

	return (
		<div>
			<div className="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
				<span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">
					Sign in Form
				</span>
				<div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
					<form action="">
						<label htmlFor="" className="block">
							Email
						</label>
						<input
							type="email"
							className="border w-full h-10 px-3 mb-5 rounded-md"
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							helpertext={emailError}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							placeholder="Email"
						/>
						<label htmlFor="" className="block">
							Password
						</label>
						<input
							type="password"
							className="border w-full h-10 px-3 mb-5 rounded-md"
							placeholder="password"
							name="password"
							label="Password"
							id="password"
							autoComplete="current-password"
							helpertext={passwordError}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<div className="flex items-start">
							<div className="flex items-start">
								<div className="flex items-center">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
										required=""
									/>
								</div>
								<div className="text-sm ml-3">
									<label
										htmlFor="remember"
										className="font-medium text-gray-900"
									>
										Remember me
									</label>
								</div>
							</div>
						</div>
						{hasAccount ? (
							<button
								className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded"
								onClick={handleLogin}
							>
								Sign In
							</button>
						) : (
							<button
								className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded"
								onClick={handleSignUp}
							>
								Sign Up
							</button>
						)}
						{hasAccount ? (
							<a href="#"
							variant="body2"
							onClick={() => setHasAccount(!hasAccount)}>{"Don't have an account? Sign Up"}</a>
						) : (
							<a href="#"
							variant="body2"
							onClick={() => setHasAccount(!hasAccount)}>{"Have an account? Sign In"}</a>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
