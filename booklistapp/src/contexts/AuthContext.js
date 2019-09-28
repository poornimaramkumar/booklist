import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
	state = {
		isAuthentiated: false
	}
	toggleAuth = () => {
		this.setState({ isAuthentiated : !this.state.isAuthentiated })
	}
	render() {
		return (
			<AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
				{ this.props.children }
			</AuthContext.Provider>
		);
	}
}

export default AuthContextProvider;
