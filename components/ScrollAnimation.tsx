'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const ScrollAnimation = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top center', // Change as per your requirements
				end: 'bottom center', // Change as per your requirements
				scrub: 1, // Smoothly animate the values as you scroll
				markers: true, // Display markers for debugging
			},
		});

		tl.from(containerRef.current, {
			opacity: 0.5,
			y: 100,
			duration: 1,
		});

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<div ref={containerRef}>
			<h1>Scroll Animated Content</h1>
			<p>This content will animate on scroll.</p>
		</div>
	);
};

export default ScrollAnimation;
