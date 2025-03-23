// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I blend technical expertise in full-stack development, systems design, and operational architecture with business development skills to create and launch world-class products, enhanced by my versatility in UX/UI design, IPD, and branding for maximum market impact."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/family-photo.jpg" alt='photo of my family and I in Hawaii' width={600} height={800}/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="M.Eng. in Product Development"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my design and business expertise, I hold a Master’s degree in Engineering and am an expert in integrated product development. I bring strong leadership, time management, and multitasking skills—refined through my experience as a business owner and managing partner, husband, and father. In my free time, I enjoy music and traveling with my family, as well as playing basketball on weekends."
						/>
						<BadgesBlock 
							title="Developing for Business" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="My sharp business acumen empowers me to identify market opportunities and drive strategic growth. I have a passion for stayong on top of trends in business and technology."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]