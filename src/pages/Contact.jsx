const Contact = () => {
	return (
		<div className='container flex flex-col mt-4 transition-all duration-300 ease-in-out hover:-translate-x-2'>
			<h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
			<div className='rounded-lg shadow-md p-6'>
				<p className='text-lg mb-4'>You can find me on:</p>
				<ul className='list-disc pl-6 mb-4'>
					<li className='contact-list'>
						<a
							href='https://github.com/francis-gomes-esq'
							className='text-blue-500 hover:text-blue-700'
						>
							GitHub
						</a>
					</li>
					<li className='contact-list'>
						<a
							href='https://bit.ly/linkedin-fgomes-okoye'
							className='text-blue-500 hover:text-blue-700'
						>
							LinkedIn
						</a>
					</li>
					<li className='contact-list'>
						<a
							href='https://twitter.com/account'
							className='text-blue-500 hover:text-blue-700'
						>
							Twitter
						</a>
					</li>
				</ul>
				<p className='text-lg'>
					Feel free to connect with me on any of these platforms!
				</p>
			</div>
		</div>
	)
}

export default Contact
