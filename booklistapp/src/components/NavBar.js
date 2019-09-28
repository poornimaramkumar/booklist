import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// <ThemeContext.Consumer /> can be used in functional component as well
// Can use multiple context by using Consumer.

// In Class component, we can use static contextType = ThemeContext as well to consume context;
// Cannot use multiple context if we use static pattern.

const NavBar = () => (
	<AuthContext.Consumer>{(authContext) => (
		<ThemeContext.Consumer>{(themeContext) => {
			const { isAuthentiated, toggleAuth } = authContext;
			const { isLightTheme, light, dark } = themeContext;
			const theme = isLightTheme ? light : dark;
			return (
				<nav style={ { background: theme.ui, color: theme.syntax } }>
					<h1>BookList App</h1>
					<div onClick={toggleAuth}>
						{ isAuthentiated ? 'Logged In' : 'Logged Out' }
					</div>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			)}}
		</ThemeContext.Consumer>
	)}
	</AuthContext.Consumer>
);

export default NavBar;