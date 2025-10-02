import React from 'react'

const Container = ({ children, className = '',...rest}) => {
	return (
		<main className={`mx-auto min-h-screen selection:bg-white selection:text-black relative w-full max-w-3xl dark:text-zinc-100 p-4 sm:p-6 lg:p-6 ${className}`} {...rest}>
			{children}
		</main>
	)
}

export default Container