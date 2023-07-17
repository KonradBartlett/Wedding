import { useEffect, useRef } from 'react';
import './carousel.css';

type CarouselProps = {
	images: string[];
};

export const Carousel = ({ images }: CarouselProps) => {
	const carouselImageWrapper = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (carouselImageWrapper.current) {
			carouselImageWrapper.current.scrollLeft -= carouselImageWrapper.current.clientWidth - 200;
		}
	};

	const scrollRight = () => {
		if (carouselImageWrapper.current) {
			carouselImageWrapper.current.scrollLeft += carouselImageWrapper.current.clientWidth - 200;
		}
	};

	return (
		<div className="carousel-wrapper small-hide">
			<button className="carousel-left" onClick={scrollLeft}></button>
			<div className="carousel-image-wrapper" ref={carouselImageWrapper}>
				{images.map((image, index) => {
					return <img className="carousel-image" key={index} src={image} data-index={index} />;
				})}
			</div>
			<button className="carousel-right" onClick={scrollRight}></button>
		</div>
	);
};
