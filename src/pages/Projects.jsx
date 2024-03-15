import React from 'react'
import Project from '../components/Project'
const projects = [
	{
		id: 1,
		title: 'my-portfolio',
		deployedLink: 'https://fgomeso.netlify.app/',
		repoLink: 'https://github.com/francis-gomes-esq/my-portfolio',
		image: '',
	},
	{
		id: 2,
		title: 'squad-profile-generator',
		deployedLink:
			'https://francis-gomes-esq.github.io/squad-profile-generator/',
		repoLink:
			'https://github.com/francis-gomes-esq/squad-profile-generator',
		image: '',
	},
	{
		id: 3,
		title: 'aquatic-knowledge-challenge',
		deployedLink:
			'https://francis-gomes-esq.github.io/aquatic-knowledge-challenge/',
		repoLink:
			'https://github.com/francis-gomes-esq/aquatic-knowledge-challenge',
		image: '',
	},
	{
		id: 4,
		title: 'Weather-sage',
		deployedLink: 'https://francis-gomes-esq.github.io/weather-sage/',
		repoLink: 'https://github.com/francis-gomes-esq/weather-sage',
		image: '',
	},
	{
		id: 5,
		title: 'readme-generator',
		deployedLink: 'https://github.com/francis-gomes-esq/readme-generator',
		repoLink: 'https://francis-gomes-esq.github.io/readme-generator/',
		image: '',
	},
	{
		id: 6,
		title: 'daily-task-planner',
		deployedLink: 'https://francis-gomes-esq.github.io/daily-task-planner/',
		repoLink: ' https://github.com/francis-gomes-esq/daily-task-planner',
		image: '',
	},
	{
		id: 7,
		title: 'hazalsigic/project-1',
		deployedLink: 'https://hazalsigic.github.io/project-1/',
		repoLink: 'https://github.com/hazalsigic/project-1',
		image: '',
	},
	{
		id: 8,
		title: 'bootstrap-portfolio',
		deployedLink:
			'https://francis-gomes-esq.github.io/bootstrap-portfolio/',
		repoLink: 'https://github.com/hazalsigic/project-1',
		image: 'https://github.com/francis-gomes-esq/bootstrap-portfolio',
	},
]
const Projects = () => {
	return (
		<div>
			{projects.map(project => (
				<div key={project.id}>
					<Project project={project} />
				</div>
			))}
		</div>
	)
}
export default Projects
