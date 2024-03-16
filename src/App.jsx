import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
	return (
		<Router>
			<div className='h-screen bg-slate-800 relative'>
				<Link
					to='/'
					className='block p-4 font-bold mb-4 text-yellow-400 text-2xl'
				>
					Francis Gomes-Okoye
				</Link>
				<div className='sm:ml-6 relative'>
					<img
						className='w-35 h-40 border-2'
						src='Francis.jpeg'
					></img>
					<p className='txt'>Front End Developer</p>
				</div>
				<Navbar />
				<div className='flex-grow absolute inset-y-0 top-20 right-10 w-6/12 italic text-gray-300 text-end'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
