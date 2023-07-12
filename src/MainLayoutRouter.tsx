import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

export const MainLayoutRouter = () => {
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

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<p>Home page body content</p>
		</div>
	);
}
