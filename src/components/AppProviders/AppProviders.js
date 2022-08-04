import React, { useState, useEffect, useRef } from 'react'
import { AuthContext } from '../../context/auth'
import { SearchContext } from '../../context/search'
import useAuth from '../../hooks/useAuth'
import '../../styles/main.css'

const AppProviders = ({ children }) => {
	const { token, login, logout, userId, user, setUser } = useAuth()
	const [searchValue, setSearchValue] = useState('')
	const [searchResults, setSearchResults] = useState([])

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				login,
				logout,
				currentUser: user,
				setUser,
			}}
		>
			<SearchContext.Provider
				value={{
					searchValue,
					setSearchValue,
					searchResults,
					setSearchResults,
				}}
			>
				{children}
			</SearchContext.Provider>
		</AuthContext.Provider>
	)
}

export default AppProviders
