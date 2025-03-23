// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am current managing, designing, and developing all consumer and digital product initiatives through TGAND Technologies LLC."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3><a href="https://www.tgandtechnologies.com" className="href">TGAND Technologies LLC</a></h3>
								<h4>Permanent Full-time</h4>
								<h4>Apr 2018 - Present · +7 yrs</h4>
								<h5>Las Vegas, NV - New York, NY</h5>
							</span>
							<p>
							TGAND Technologies delivers customized software solutions for small to medium-sized businesses seeking to harness emerging technologies, such as artificial intelligence, to enhance their operations. As the principal member and lead developer, I oversee all facets of the business, including operations, sales, planning, and development. <a href="https://www.tgandtechnologies.com" className="href">www.tgandtechnologies.com</a>
							</p>
							
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3><a href="https://www.ubme.com" className="href">Chief Revenue Officer at UBMe, inc.</a></h3>
									<h4>Nov 2018 - Present · +7 yrs</h4>
								</span>
								<p>
								Responsible for all things related to revenue generation and management at UBMe, inc. Created sales strategies, managed sales teams, and developed new revenue streams. <a href="https://www.ubme.com" className="href">www.ubme.com</a>
								</p>
								<p>
								During this time:
								</p>
								<ul className={career.list}>
									<li>
										<strong>Product Development</strong>: Part of founding team responsible for creating core product from MVP to final release.
									</li>
									<br/>
									<li>
										<strong>Revenue Stream Creation</strong>: Took business from $0 MRR to +$10,000MRR in 12 months.
									</li>
									<br/>
									<li>
										<strong>Funding and Capital</strong>: Raised over $1MM in seed and FF funding for this particular venture.
									</li>
									
								</ul>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer at NWUSA</h3>
									<h4>Feb 2021 - Nov 2023</h4>
								</span>
								<p>
								NWUSA was an national e-commerce aggregator  platform for cannabis growers and consumers to connect and sell products. I was responsible for the development and design of the platform and all associated software.  
								</p>
								<p>
								Some key projects complete during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										<strong>ECommerce Development</strong>: Developed fully responsive ecommerce platform using React and NodeJS. 
									</li>
									<br/>
									<li>
										<strong>Mar-Tech Automations</strong>: Created custom automations to streamline customer follow-up and generate repeat visits.
									</li>
									<br/>
									<li>
										<strong>Cryptocurrency Transactions</strong>: Created a blockchain integration to allow the acceptance of payments on the platform in fiat or over 100 cryptocurrencies.
									</li>
									
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						{/* <div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
										<h3>Front End Developer & User Interface Designer</h3>
										<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
									</span>
								<p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p>
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Full functionality interactive shopping cart to replace cart page
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
									</li>
									<li>Complex multi-state animated menus represented in an elegant UI 
										<span className={career.subList}><span className={career.bullet}></span>Strong brand confidence booster with state of the art menu</span>
									</li>
									<li>
										Design and development of the site and merchandising strategy optimized for market
										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Lehigh University MEng. Technical Entreprenuership</h3>
								<h4>Full Time</h4>
								<h4>2018</h4>
								<h5>Bethlehem, PA</h5>
							</span>
							<p>
							I returned to Lehigh University to earn my Master’s in Engineering in Technical Entrepreneurship. My training emphasized mechanical engineering, product development, and strategies for achieving product-market fit and go-to-market success through the development of intellectual property.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Lehigh University Undergrad</h3>
								<h4>Full Time</h4>
								<h4>Aug 2010 - may 2014</h4>
								<h5>Bethlehem, PA</h5>
							</span>
							<p>
							Beginning of my Freshman year of college where I took my first Computer Science course at Lehigh University. I was hooked from the first day and have been coding ever since.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Tech Enthusiast  & Tinkerer</h3>
								<h4>Permanent Full-time</h4>
								<h4>Jan 1998 - Present · 26 yrs 11 mos</h4>
								<h5>Memphis, TN</h5>
							</span>
							<p>Got a PSOne as my first gaming console and from the moment I learned to connect the AV wires to the TV, my love for all things Tech was born!</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const stack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]