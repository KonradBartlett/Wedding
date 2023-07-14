import { Link } from 'react-router-dom';
import './wedding.css';
import { Carousel } from '../components/carousel';

export const Wedding = () => {
	return (
		<div id="wedding">
			<div className="wedding-header">
				<h1>JUNE 1st 2024</h1>
				<h3>We're so excited for you to be a part of our wedding, below you will find information about the event.</h3>
			</div>
			<div id="venue" className="page-width">
				<h1>Venue</h1>
				<div className="wedding-information">
					<div className="wedding-information-text">
						<h2>Location</h2>
						<p>
							The ceremony and reception are to be held at Farmhill Weddings located at:
							<br />
							<br />
							<Link to="https://goo.gl/maps/DqnfSq376tAP4vk86">
								2709 Dillon Road Keene
								<br />
								ON K9J 6X8
							</Link>
						</p>
						<p>A picturesque barn set in a backdrop of fields and nature. Described by Monika as: "this is stunning".</p>
						<p>A bonfire will be lit after the reception for those who wish to stay and enjoy the evening.</p>
						<p>There will be lawn games, and some arcade cabinets at the wedding so be sure to challenge each other to see who's the best at throwing bean bags into a small hole.</p>
						<h2>Drinks!</h2>
						<p>If you're of the age, there will be an open bar! Beer, wine, cocktails, whatever you want you can just walk up to the bar and ask for it.</p>
						<p>There will also be a number of non-alcoholic options available.</p>
						<p>At TBDpm there will be a cocktail hour, and of course because we're on a farm some of the staff are going to bring out alpacas to hangout and chat with.</p>
						<iframe
							id="wedding-map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5125.202860761667!2d-78.23341764733537!3d44.280615789732394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5f3b3401c716d%3A0x1135093a98845798!2s2709%20Dillon%20Rd%2C%20Peterborough%2C%20ON%20K9J%206X8!5e1!3m2!1sen!2sca!4v1689198256266!5m2!1sen!2sca"
							width="450"
							height="450"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<Carousel width={800} height={1000} images={['/venue/venue.jpg', '/venue/venue2.jpg', '/venue/venue3.jpg', '/venue/venue4.jpg', '/venue/venue5.jpg']} />
				</div>
			</div>
			<div id="accommodations" className="page-width">
				<h1>Accommodations</h1>
				<div className="wedding-information">
					<div className="wedding-information-text">
						<h2>Hotels</h2>
						<p>There are a number of hotels in the area, but we recommend booking a room at the following hotels:</p>
						<ul>
							<li>
								<Link to="https://www.holidayinn.com/hotels/us/en/peterborough/ypqca/hoteldetail/">Holiday Inn Peterborough-Waterfront</Link>
							</li>
							<li>
								<Link to="https://www.hilton.com/en/hotels/ypqcdhx-hampton-peterborough/">Hampton Inn Peterborough</Link>
							</li>
							<li>
								<Link to="https://www.hotelsone.com/peterborough-hotels-ca/best-western-plus-otonabee-inn.html">Best Western Plus Otonabee Inn</Link>
							</li>
						</ul>
						<h2>AirBNB</h2>
						<p>There are also a number of beautiful AirBNBs that you may wish to stay at if you choose.</p>
						<p>
							If you're looking to stay in in an AirBNB try to aim for one located either downtown Peterborough (to be close to the shuttle bus) or located in Keene itself so you won't
							have to drive too far.
						</p>
					</div>
					<Carousel width={800} height={1000} images={['/hotel/holiday-inn.jpg', '/hotel/best-western-inn.jpg', '/hotel/hampton-inn.jpg']} />
				</div>
			</div>
			<div id="transportation" className="page-width">
				<h1>Transportation</h1>
				<div className="wedding-information">
					<div className="wedding-information-text">
						<h2>Getting to Peterborough</h2>
						<p>There are a number of ways to get to Peterborough, but the most common are:</p>
						<ul>
							<li>Driving</li>
							<li>
								GO Transit
								<br />- If you want to take GO Transit you'll need to take the train to Oshawa and then take the bus to Peterborough. The bus will drop you off at the downtown bus
								terminal which is walking distance to the Holiday Inn
							</li>
						</ul>
						<h2>Getting to the Venue</h2>
						<p>There will be a shuttle bus running from downtown Peterborough to the venue. The shuttle bus will be running to the event from DETERMIND TIME, and from the event from.</p>
						<p>The shuttle bus will be picking up and dropping off at DETERMINE LOCATION.</p>
						<p>The bus carries 30 people at a time, so there will be 3 trips to the event, and 3 trips from the event. You can find times for the trips in the schedule below</p>
						<p>
							You can book tickets for the shuttle bus here: <Link to="https://pascalbusco.ca/events/">Pascal Bus co</Link>
						</p>
						<p>Peterborough does have Uber, Lyft, and Taxis, however the chances of them driving out to Keene at midnight on a Saturday are very unlikely.</p>
						<h2>Parking at the venue</h2>
						<p>There is parking available at the venue, however we strongly encourage you to take the shuttle bus if you can.</p>
						<p>If you're driving to the event be sure to have a designated driver and to drive safe!</p>
					</div>
					<Carousel
						width={800}
						height={1000}
						images={['/transportation/bus.jpg', '/transportation/bus2.jpg', '/transportation/parking.jpg', '/transportation/parking2.jpg', '/transportation/train.jpg']}
					/>
				</div>
			</div>
			<div id="attire" className="page-width">
				<h1>Attire</h1>
				<div className="wedding-information">
					<div className="wedding-information-text">
						<h2>Black Tie</h2>
						<p>Formal attire is requested for the wedding. We want you to look your best!</p>
						<p>Suits, skirts, gowns, will all be fantastic, but keep in mind it's Peterborough so it will be pretty humid, you might want to wear something that breathes.</p>
						<p>Also, the ceremony and reception will be held outdoors so keep that in mind when choosing your footwear.</p>
						<p>The colour scheme is blue and green if you want to match the decor.</p>
						<p>Please do not wear white.</p>
					</div>
					<img className="small-hide" src="/attire.jpg" />
				</div>
			</div>
			<div id="schedule" className="page-width">
				<h1>Schedule</h1>
				<p>Actual times to follow</p>
				<table>
					<thead>
						<tr>
							<th>Time</th>
							<th>Event</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1:00am</td>
							<td>Shuttle Bus to Event</td>
						</tr>
						<tr>
							<td>1:00am</td>
							<td>Shuttle Bus to Event</td>
						</tr>
						<tr>
							<td>1:00am</td>
							<td>Shuttle Bus to Event</td>
						</tr>
						<tr>
							<td>4:00pm</td>
							<td>Ceremony</td>
						</tr>
						<tr>
							<td>5:00pm</td>
							<td>Cocktail Hour</td>
						</tr>
						<tr>
							<td>6:00pm</td>
							<td>Dinner</td>
						</tr>
						<tr>
							<td>7:00pm</td>
							<td>Speeches</td>
						</tr>
						<tr>
							<td>8:00pm</td>
							<td>Dancing</td>
						</tr>
						<tr>
							<td>12:00am</td>
							<td>Shuttle Bus</td>
						</tr>
						<tr>
							<td>1:00am</td>
							<td>Shuttle Bus</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id="things-to-do" className="page-width">
				<h1>Things to Do</h1>
				<div className="wedding-information">
					<div className="wedding-information-text">
						<h2>Peterborough</h2>
						<p>There are a number of things to do in Peterborough if you're looking to make a weekend out of it.</p>
						<p>Here are some of our favourites:</p>
						<ul>
							<li>
								<Link to="https://canoemuseum.ca/">Canadian Canoe Museum</Link> - A museum dedicated to the history of the canoe. It's a great place to learn about the history of the
								canoe and see some of the amazing canoes that have been built over the years.
							</li>
							<li>
								<Link to="https://www.pedalboro.com/">Pedalboro</Link> - A party bike that sits 15 people, close friends and family are invited to join us on a tour of downtown
								Peterborough on the Friday before the wedding.
							</li>
							<li>
								<Link to="https://thekawarthas.ca/businesses/peterborough-lift-lock/">Peterborough Lift Locks</Link> - The Peterborough Lift Locks are the highest hydraulic lift locks
								in the world. They are a National Historic Site of Canada and the highest hydraulic lift locks in the world.
							</li>
							<li>
								<Link to="https://www.peterborough.ca/en/explore-and-play/museum-and-archives.aspx">Peterborough Museum and Archives</Link> - The Peterborough Museum and Archives is a
								great place to learn about the history of Peterborough and the surrounding area.
							</li>
						</ul>
						<h2>At the wedding</h2>
						<p>There will be X arcade cabinets at the wedding including:</p>
						<ul>
							<li>Ms. Pacman</li>
							<li>Donkey Kong</li>
							<li>Street Fighter 2</li>
							<li>Teenage Mutant Ninja Turtles</li>
						</ul>
						<p>In addition to arcade games, tThere will be a number of lawn games available at the wedding including:</p>
						<ul>
							<li>Cornhole</li>
							<li>Washers</li>
							<li>Beer Pong</li>
						</ul>
					</div>
					<Carousel width={800} height={1000} images={['/todo/sf2.jpg', '/todo/pedalboro.jpg', '/todo/liftlock.jpg']} />
				</div>
			</div>
			<div id="registry" className="page-width">
				<h1>Registry</h1>
				<div className="registry-information">
					<p>Wedding gifts are not required but they are certainly welcome! If you decide on a gift please try to keep it small as we will have to ship it over to Surrey BC.</p>
					<p>
						Our registry can be found at <Link to="https://www.amazon.ca/wedding/share/andrewandkristen">Amazon.ca</Link>
					</p>
				</div>
			</div>
			<div id="wedding-rsvp" className="page-width">
				<Link className="button" to="/rsvp">
					<h2>RSVP</h2>
				</Link>
			</div>
		</div>
	);
};
