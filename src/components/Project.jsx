import React from 'react'
const Project = ({project}) => {
	return (
		<div className='flex flex-col mt-4 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:underline'>
			<a href={project.deployedLink} target='_blank'>
				{project.title}
			</a>
		</div>
	)
}
export default Project
