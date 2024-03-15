import React from 'react'

const About = () => {
	return (
		<div className='flex flex-col mt-4 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:underline'>
			<h1 className='text-3xl font-bold mb-4'>About Me</h1>
			<div className='rounded-lg shadow-md p-6'>
				<p className='text-lg mb-4'>
					Hi, I'm Francis! Passionate front end developer with a
					strong foundation in JavaScript, React, HTML, and CSS. Eager
					to contribute to dynamic projects and collaborate with teams
					to solve complex problems. With a focus on continuous
					learning and growth, I strive to leverage my skills to
					deliver efficient, user-centric solutions. Explore my
					portfolio to see my projects and how I can add value to your
					team.
				</p>

				<p className='text-lg'>
					If you'd like to get in touch via email, feel free to email
					me at{' '}
					<a href='mailto:figomesokoye@protonmail.com'>
						figomesokoye@protonmail.com
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default About;
