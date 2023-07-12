import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';

export const MainLayoutRouter = () => {
	alert("You caught me, I'm still making the rest of the site. Check back soon though! -Konrad");
	return (
		<div className="App">
			<nav>
				<Link to="/">Home</Link>
				<div className="nav-collection">
					<div className="nav-summary">Wedding</div>
					<div className="nav-content">
						<Link className="nav-child" to="/venue">
							Venue
						</Link>
						<Link className="nav-child" to="/schedule">
							Schedule
						</Link>

						<Link className="nav-child" to="/accommodations">
							Accommodations
						</Link>
						<Link className="nav-child" to="/transportation">
							Transportation
						</Link>
						<Link className="nav-child" to="/attire">
							Attire
						</Link>
						<Link className="nav-child" to="/things-to-do">
							Things to Do
						</Link>
					</div>
				</div>
				<Link to="/rsvp">RSVP</Link>
				<Link to="/photos">Photos</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};
