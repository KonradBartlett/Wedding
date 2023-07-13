import { Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import { Home } from './pages/home';
import { Wedding } from './pages/wedding';
import { Photos } from './pages/photos';

export const MainLayoutRouter = () => {
	// alert("You caught me, I'm still making the rest of the site. Check back soon though! -Konrad");
	return (
		<div className="App">
			<nav>
				<Link to="/">Home</Link>
				<div className="nav-collection">
					<Link className="nav-summary" to="/wedding">
						Wedding
					</Link>
					<div className="nav-content">
						<HashLink className="nav-child" to="/wedding#venue">
							Venue
						</HashLink>
						<HashLink className="nav-child" to="/wedding#accommodations">
							Accommodations
						</HashLink>
						<HashLink className="nav-child" to="/wedding#transportation">
							Transportation
						</HashLink>
						<HashLink className="nav-child" to="/wedding#attire">
							Attire
						</HashLink>
						<HashLink className="nav-child" to="/wedding#schedule">
							Schedule
						</HashLink>
						<HashLink className="nav-child" to="/wedding#things-to-do">
							Things to Do
						</HashLink>
						<HashLink className="nav-child" to="/wedding#registry">
							Gift Registry
						</HashLink>
					</div>
				</div>
				<Link to="/rsvp">RSVP</Link>
				<Link to="/photos">Photos</Link>
				<p>Konrad & Maggie</p>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/wedding" element={<Wedding />} />
				<Route path="/photos" element={<Photos />} />
			</Routes>
		</div>
	);
};
