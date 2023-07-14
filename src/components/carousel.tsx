import { useRef } from 'react';
import './carousel.css';

type CarouselProps = {
	images: string[];
	width: number;
	height: number;
};

export const Carousel = ({ images, width, height }: CarouselProps) => {
	const carouselImageWrapper = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (carouselImageWrapper.current) {
			carouselImageWrapper.current.scrollLeft -= width - 100;
		}
	};

	const scrollRight = () => {
		if (carouselImageWrapper.current) {
			carouselImageWrapper.current.scrollLeft += width - 100;
		}
	};

	return (
		<div className="carousel-wrapper small-hide">
			<button className="carousel-left" onClick={scrollLeft}></button>
			<div className="carousel-image-wrapper" ref={carouselImageWrapper} style={{ width: `${width}px`, height: `${height}px}` }}>
				{images.map((image, index) => {
					return <img className="carousel-image" width={width} height={height} key={index} src={image} data-index={index} />;
				})}
			</div>
			<button className="carousel-right" onClick={scrollRight}></button>
		</div>
	);
};
