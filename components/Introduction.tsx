'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Introduction = () => {
	const introductionRef: any = useRef();
	useGSAP(
		() => {
			const item: any = introductionRef.current;
			const t1 = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: 'top center',
					end: 'bottom center',
					scrub: 1,
				},
			});
			t1.from(item, {
				opacity: 0.2,
				y: -100,
				duration: 1,
			});
		},
		{ scope: introductionRef }
	);

	return (
		<section
			ref={introductionRef}
			className="h-screen grid place-content-center gap-4"
		>
			<h2 className="text-center">Introduction</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				esse hic laudantium corporis voluptates iure? Natus, alias
				fugiat excepturi ex, fuga, laborum cum error harum possimus
				facere voluptate. Ipsum tempora ipsa quisquam placeat esse nam
				necessitatibus non ipsam aliquam dolor, dicta, similique, nemo
				reprehenderit doloribus nobis dolorum soluta quam harum
				quibusdam doloremque in. Tempora, dolore exercitationem dolor
				asperiores quo alias natus autem vitae. Natus amet aliquam velit
				aliquid dolore ullam nostrum perspiciatis veritatis, maxime
				architecto assumenda temporibus nisi cum sed tempora corporis
				debitis? Aspernatur magnam, neque amet rem quae tenetur veniam
				explicabo temporibus ratione quasi! Expedita dolore sunt illo
				aliquid?
			</p>
		</section>
	);
};

export default Introduction;
