/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from 'react-router-dom';
// import embed_google_media from 'google-photos-yoinker';

import './photos.css';
// import { useEffect, useState } from 'react';

export const Photos = () => {
	// function handleFullscreen(element: { target: { src: string | URL | undefined } }) {
	// 	if (element.target.src) {
	// 		window.open(element.target.src, '_blank');
	// 	}
	// }

	// const [photos, setPhotos] = useState([]);
	// useEffect(() => {
	// 	setPhotos([]);
	// 	image_urls.forEach(async (url, index) => {
	// 		let is_video = false;
	// 		await fetch(`${url.split('=')[0]}=s1000-dv`)
	// 			.then((response) => {
	// 				if (response.status !== 404) {
	// 					is_video = true;
	// 				}
	// 			})
	// 			.catch(() => {
	// 				is_video = true;
	// 			});
	// 		setPhotos((photos) => {
	// 			return [
	// 				...photos,
	// 				is_video ? (
	// 					<div key={`media-${index}`} className="media-container" onClick={handleFullscreen}>
	// 						<video width={540} controls>
	// 							<source src={`${url.split('=')[0]}=s500-dv`} />
	// 						</video>
	// 					</div>
	// 				) : (
	// 					<div key={`media-${index}`} className="media-container" onClick={handleFullscreen}>
	// 						<img src={`${url.split('=')[0]}=s1000`} />
	// 					</div>
	// 				),
	// 			];
	// 		});
	// 	});
	// 	return () => {
	// 		setPhotos([]);
	// 	};
	// }, [setPhotos]);

	return (
		<>
			<div id="photos">
				<div className="">
					<h1>Photos</h1>
					<p>
						We're going to use Google Photos to create a shared album of photos from the wedding. If you want to join the album to add your photos or videos to it you can do so at the
						following link: &nbsp;
						<Link to="https://photos.app.goo.gl/SS1PyH77EBHht68HA" target="_blank">
							Google Photos Album
						</Link>
					</p>
				</div>
			</div>
			{/* <div id="photo-gallery">{photos}</div> */}
		</>
	);
};

// async function _make_request(): string {
// 	const response = await fetch(`https://ia6oov6blr6n73te77xnk67nxa0tcbjz.lambda-url.us-east-2.on.aws/`); // get request the album page

// 	const json = await response.json(); // get html

// 	return json.data;
// }

// const json = await _make_request();

// let m;
// const image_urls: string[] = [];
// const image_regex = /<img[^>]+src="?([^"\s]+)"?\s*/gi;

// while ((m = image_regex.exec(json))) {
// 	image_urls.push(m[1]);
// }

// image_urls.shift(); // remove first element, which is the album cover
