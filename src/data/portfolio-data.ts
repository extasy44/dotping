/* eslint-disable @typescript-eslint/no-explicit-any */
// Legacy portfolio data - consider migrating to JSON service
// This file is kept for backward compatibility
// New implementations should use the portfolio service

import { fetchPortfolioData } from '../services/portfolio-service';

// Re-export types from service
export type { Project, NavigationItem, LogoInfo, ContactInfo, PortfolioData } from '../services/portfolio-service';

// Legacy exports for backward compatibility
let cachedData: any = null;

export async function getPortfolioData() {
  if (!cachedData) {
    cachedData = await fetchPortfolioData();
  }
  return cachedData;
}

// Legacy exports - these will be deprecated
export const logoInfo = {
  imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/JB.png',
  alt: 'JB Creative Designer Logo',
  title: 'Creative Designer',
  subtitle: 'Brand Identity & Digital Design',
};

// Comprehensive project data updated to user's provided details (images pending)
export const projects = [
  {
    id: 1,
    title: 'Property Council of Australia',
    slug: 'property-council-australia',
    description:
      'A comprehensive UX/UI design project for the Property Council of Australia, focusing on creating an intuitive resource platform for property industry professionals.',
    longDescription:
      'This project involved designing a comprehensive digital platform for the Property Council of Australia, focusing on creating an intuitive resource hub for property industry professionals. The design emphasizes clean navigation, accessible information architecture, and user-centered design principles to help professionals access critical industry resources efficiently.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Resource-page2.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Handoverbook_Cover.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Handoverbook2-copy.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Handoverbook1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Google_Ads.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Banner.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/UI.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/UI2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Industry-Campaign_Homepage_Final.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/PCA-Diversity-Our-Women-Leaders2.jpg',
    ],
    category: 'UX & UI',
    year: '2020',
    tags: ['UX & UI', 'WEB'],
    client: 'Property Council of Australia',
    role: 'UX/UI Designer',
    duration: '3 months',
    tools: ['Figma', 'Photoshop'],
    challenges: 'Creating an intuitive navigation system for complex industry resources while maintaining accessibility standards.',
    solutions: 'Implemented card-based layout with clear categorization and search functionality.',
    results: 'The client was satisfied, and it was expected that user engagement would increase and become more active.',
  },
  {
    id: 2,
    title: 'Fischer Storage Range Catalogue',
    slug: 'fischer-storage-range-catalogue',
    description:
      'A complete product catalogue design project for Fischer Plastic Products, showcasing their extensive range of storage solutions for industrial, commercial, and home applications.',
    longDescription:
      'This project involved designing the Fischer Storage Range Catalogue, highlighting a wide variety of durable and versatile storage solutions. The design focuses on clear product categorisation, high-quality imagery, and consistent branding to make it easy for customers to navigate and select the right storage solutions for their needs.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Fischer_Product_Brochure.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Fischer_Product_Brochure_internal2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Fischer_Product_Brochure_internal.jpg',
    ],
    category: 'Print Design',
    year: '2019',
    tags: ['Catalogue Design', 'Branding', 'Product Photography', 'Print Design'],
    client: 'Fischer Plastic Products',
    role: 'Graphic Designer',
    duration: '2 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop'],
    challenges:
      'Showcasing a wide range of products clearly while maintaining cohesive brand identity and usability for diverse customers.',
    solutions:
      'Used clear categorisation, high-quality product photography, and consistent design language across the catalogue to enhance readability and product discoverability.',
    results:
      'Successfully listed products while maintaining brand identity, and designed the e-catalogue to be printable as a physical version.',
  },
  {
    id: 3,
    title: 'Uppercup Website Design',
    slug: 'uppercup-website-design',
    description:
      'A website design project for Uppercup, focused on creating an engaging and user-friendly online presence for their brand.',
    longDescription:
      "This project involved designing a responsive and visually appealing website for Uppercup, ensuring an intuitive user experience and seamless navigation. The design highlights the brand's identity, products, and services, integrating modern UI/UX principles to enhance user engagement and online visibility.",
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Uppercup_website.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Uppercup_website.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/uppercup_Draft_cp1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/uppercup_Draft_subpage1-3.jpg',
    ],
    category: ['Web Design', 'UX & UI', 'BI & CI'],
    year: '2019',
    tags: ['Web Design', 'UX/UI', 'Branding'],
    client: 'Uppercup',
    role: 'Web & UX/UI Designer',
    duration: '3 month',
    tools: ['Adobe XD', 'Hubspot'],
    challenges: 'Creating a website that clearly conveys the brand identity while ensuring smooth navigation across devices.',
    solutions:
      'Implemented a responsive design with a clean layout, clear product categorisation, and engaging visuals to enhance user experience.',
    results:
      'Delivered a visually appealing and easy-to-navigate website that increased user engagement and strengthened the brand’s online presence.',
  },
  {
    id: 4,
    title: 'Sleep Australasia® Project',
    slug: 'sleep-australasia-project',
    description:
      'A comprehensive branding and design project under SlumberCare Bedding, creating a sub-brand identity with digital and print assets.',
    longDescription:
      'This project, completed during my time at SlumberCare Bedding, involved the creation of the Sleep Australasia® sub-brand. The work included developing a distinct brand identity, designing a responsive website, and producing a wide range of supporting materials such as brochures, catalogues, packaging, and advertising assets. The goal was to strengthen market presence and clearly differentiate the sub-brand within the bedding industry.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Brand-guide.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Brand-guide.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SA_Website.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Landscape_Brochure.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Landscape_Brochure_2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Landscape_Brochure_2 - 1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/flyer2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/flyer.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Box-design.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/FOOT-PROTECTOR4.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Box-design.jpg',
    ],
    category: ['BI & CI', 'Package design', 'Photography', 'Print design', 'Signage', 'UX & UI', 'WEB design'],
    year: '2017',
    tags: ['Branding', 'Web Design', 'Print Design', 'Advertising'],
    client: 'SlumberCare Bedding',
    role: 'Brand, Graphic & Web Designer',
    duration: '6 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'WordPress'],
    challenges:
      'Creating a new sub-brand that maintains consistency with the parent brand while appealing to a different customer segment.',
    solutions:
      'Developed a cohesive sub-brand identity, designed a modern and responsive website, and created a full suite of marketing and advertising materials.',
    results:
      'Successfully launched a distinct sub-brand that enhanced SlumberCare’s market positioning and provided a strong platform for growth.',
  },
  {
    id: 5,
    title: 'Therapedic® Project',
    slug: 'therapedic-project',
    description:
      'A project at SlumberCare Bedding to localise the leading US brand Therapedic® for the Australian market and create a full range of design assets.',
    longDescription:
      'The Therapedic® project involved rebranding the leading US bedding brand, for which SlumberCare Bedding holds the exclusive distribution rights, to suit the Australian market. The work included designing a new company website, packaging, brochures, catalogues, promotional materials, and preparing exhibition assets. The goal was to establish a strong brand presence and effectively position Therapedic® within the Australian bedding industry.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Website_all-1.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Website_all-1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Serial_Backend.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Therapedic_Emblem.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Gift-card.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Truck-sign.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/specsheet5.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/specsheet4.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/specsheet3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/specsheet2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/specsheet1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/FB_Marketing2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/FB_Marketing.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Boxdesign2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/FOOT-PROTECTOR6.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Rollup-banner.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Rollup-banner2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Rollup-banner3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Bow-banner2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Bow-banner.jpg',
    ],
    category: ['BI & CI', 'Web design', 'Signage', 'Print design'],
    year: '2018',
    tags: ['Branding', 'Web Design', 'Print Design', 'Packaging'],
    client: 'SlumberCare Bedding',
    role: 'Brand, Graphic & Web Designer',
    duration: '7 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'WordPress'],
    challenges: 'Maintaining the US brand identity while adapting the design and communication to suit the Australian market.',
    solutions:
      'Developed a locally adapted visual identity, designed the website, packaging, and a wide range of promotional assets to ensure brand consistency.',
    results:
      'Successfully localised the Therapedic® brand, strengthening its position as one of SlumberCare’s core brands in the Australian market.',
  },
  {
    id: 6,
    title: 'SlumberCare Bedding',
    slug: 'slumbercare-bedding',
    description:
      'A full brand development and website project for SlumberCare Bedding, creating a cohesive brand identity and a responsive website to support both B2C and B2B channels.',
    longDescription:
      'This project encompassed end-to-end brand development for SlumberCare Bedding and the design and build of a responsive website. The work included defining a clear visual identity, crafting messaging that positioned the brand around sleep science and comfort, designing packaging and promotional print materials, and building a website that supports online product discovery, B2B enquiries, and marketing activities. The goal was to strengthen market positioning, improve lead generation for hotel and retail partners, and provide a consistent, trust-inspiring experience across digital and print touchpoints.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Website_all.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Website_page.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Website_subpage.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Website_subpage2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Square_Brochure.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Square_Brochure_internal.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Square_document-1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Guarantee-card.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Letterhead-business-card.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/envelop.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Document2.jpg',
    ],
    category: ['BI & CI', 'Web design', 'Package design', 'Print design'],
    year: '2018',
    tags: ['Branding', 'Web Design', 'Print Design', 'Packaging', 'B2B'],
    client: 'SlumberCare Bedding',
    role: 'Brand & Web Designer',
    duration: '4 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'WordPress'],
    challenges:
      'Positioning a new/revitalised brand to appeal to both retail consumers and institutional clients while preserving clarity and trust across channels.',
    solutions:
      'Developed a unified visual system and messaging framework, produced print collateral and packaging aligned with the new identity, and built a responsive website with dedicated B2B enquiry flows, case studies, and product showcases.',
    results:
      'Delivered a cohesive brand and website that improved brand clarity, supported stronger B2B enquiry flows, and provided a scalable asset set for ongoing marketing and retail activities.',
  },
  {
    id: 7,
    title: 'Gather ‘n’ Grow',
    slug: 'gather-n-grow',
    description:
      'A brand identity and digital development project for Gather ‘n’ Grow, covering BI & CI design, print materials, UX/UI, and web development.',
    longDescription:
      'The Gather  Grow project involved building the brand from the ground up, starting with the development of BI (Brand Identity) and CI (Corporate Identity). The work extended into creating print collateral, designing intuitive UX/UI for digital touchpoints, and delivering a fully functional website. The project aimed to establish a warm and trustworthy brand that reflects Gather  Grows values of growth, connection, and learning. The visual identity was applied consistently across both print and digital platforms to enhance customer experience and strengthen recognition within the industry. Infographics were strategically used to ensure information was easily understood by all audiences.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/gather_LOGO.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/gather_Website.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/gather_LOGO.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/gather_SUB-Screen.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/gather_main_Screen.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/gather_business-card-1.jpg',
    ],
    category: ['BI & CI', 'Print design', 'UX & UI', 'Web design'],
    year: '2020',
    tags: ['Brand Identity', 'Corporate Identity', 'Print Design', 'UX & UI', 'Web Design'],
    client: 'Gather ‘n’ Grow',
    role: 'Brand, UX & Graphic Designer',
    duration: '3 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'WordPress'],
    challenges:
      'Creating a professional yet approachable brand identity that resonates with both individual learners and community partners, maintaining consistency across all media, and using infographics effectively to ensure clear communication.',
    solutions:
      'Developed a flexible BI & CI system, designed intuitive and friendly UX/UI, produced key print materials, and built a responsive website to effectively support Gather ‘n’ Grow’s initiatives.',
    results:
      'Delivered a consistent and memorable brand identity, strengthened Gather ‘n’ Grow’s presence across online and offline platforms, and increased engagement with target audiences.',
  },
  {
    id: 8,
    title: 'Future Readiness Index – University',
    slug: 'future-readiness-index-university',
    description:
      'A design project for the University’s Future Readiness Index educational materials, producing print-ready resources with infographics and custom iconography for analysis charts.',
    longDescription:
      'The Future Readiness Index University project involved designing educational print materials that help students and educators assess and improve readiness for future challenges. Each resource included carefully designed infographics, charts, and custom icons to visualise key metrics clearly. The design ensured that complex data was easy to understand, actionable, and visually engaging. All materials maintained the university’s brand identity while providing tangible, classroom-ready resources.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Report-Cover.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Report-Cover.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Report-graph.jpg',
    ],
    category: 'Print Design',
    year: '2021',
    tags: ['Print Design', 'Infographics'],
    client: 'University Analysts',
    role: 'Graphic Designer',
    duration: '2 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop'],
    challenges:
      'Creating clear, visually engaging analysis charts and infographics that communicate complex data effectively while maintaining brand consistency.',
    solutions:
      'Designed custom icons, charts, and infographics with clear visual hierarchy, ensuring that information was easily digestible for students and educators.',
    results:
      'Produced print-ready educational resources with integrated infographics and icons, improving comprehension of future readiness metrics and supporting classroom and workshop activities.',
  },
  {
    id: 9,
    title: 'AHPC Project',
    slug: 'ahpc-project',
    description:
      'A print design project for AHPC, creating professional brochures, guides, and promotional materials for the organisation.',
    longDescription:
      'The AHPC project involved designing a comprehensive set of print materials, including brochures, guides, and promotional assets, to effectively communicate the organisation’s programs and initiatives. The focus was on clarity, professional presentation, and brand consistency. Each material was carefully structured with informative layouts, engaging visuals, and clean typography to ensure accessibility and ease of understanding for stakeholders and members.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/A4_Brochure.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/A4_Brochure.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/A4_Brochure_page.jpg',
    ],
    category: 'Print Design',
    year: '2022',
    tags: ['Print Design', 'Branding', 'Brochures', 'Guides'],
    client: 'AHPC – engaged through a prior collaboration',
    role: 'Graphic Designer',
    duration: '2 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop'],
    challenges:
      'Maintaining clear, professional, and visually engaging materials while conveying complex organisational information effectively.',
    solutions:
      'Developed structured layouts, consistent visual identity, and high-quality print-ready designs to ensure readability and brand consistency.',
    results: 'Delivered polished print materials that enhanced AHPC’s communication with stakeholders and strengthened brand presence.',
  },
  {
    id: 10,
    title: 'Sweet Secrets',
    slug: 'sweet-secrets',
    description:
      'A complete brand and digital project for Sweet Secrets, including online shop website design, product photography, and print promotional materials.',
    longDescription:
      'The Sweet Secrets project involved designing and developing the brand’s online shop, capturing high-quality product photography, and creating print promotional materials. The goal was to deliver a seamless online shopping experience while maintaining a consistent and appealing brand identity across digital and print platforms. This included designing the website layout, optimising product images, and producing brochures and flyers to support marketing campaigns.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_tag.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_tag.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_logo.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_businesscard.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/fb.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_tag.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_menu.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_paperbag.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/SweetScerets_Giftcup.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo4.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo5.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo6.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo7.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo8.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo10-1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo11.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Photo12.jpg',
    ],
    category: ['BI & CI', 'Package design', 'Photography', 'Print design', 'UX & UI', 'Web design'],
    year: '2019',
    tags: ['Brand Identity', 'Online Shop', 'Product Photography', 'Print Materials'],
    client: 'Sweet Secrets',
    role: 'Brand & Graphic Designer',
    duration: '3 months',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop', 'WordPress'],
    challenges: 'Creating a cohesive brand experience across digital and print while optimising product photography for online sales.',
    solutions:
      'Designed an attractive and user-friendly online shop, captured professional product photography, and produced print materials aligned with brand identity.',
    results:
      'Delivered an integrated brand experience that enhanced online shopping usability, supported marketing campaigns, and strengthened Sweet Secrets’ brand recognition.',
  },
  {
    id: 11,
    title: 'The Dream',
    slug: 'the-dream',
    description:
      'A print and signage project for The Dream, creating visually engaging printed materials and signage to support brand visibility.',
    longDescription:
      'The Dream project focused on designing print materials and signage that effectively communicate the brand’s identity and messaging. The work included large-format signs, banners, and other printed collateral, ensuring clarity, readability, and a consistent visual style. The goal was to enhance brand visibility and create an impactful presence in physical spaces.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/A3-menu.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Takeaway-meunu.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Business-card-1.jpg',
    ],
    category: ['Print Design', 'Signage'],
    year: '2018',
    tags: ['Print Design', 'Signage', 'Brand Visibility', 'Marketing Materials'],
    client: 'The Dream',
    role: 'Graphic Designer',
    duration: '1 month',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign'],
    challenges: 'Creating print and signage that effectively communicates brand identity and captures attention in physical spaces.',
    solutions: 'Designed visually engaging signs and print materials with clear messaging and consistent branding.',
    results: 'Delivered impactful printed and signage materials that strengthened brand visibility and enhanced audience engagement.',
  },
  {
    id: 12,
    title: 'First National Real Estate',
    slug: 'first-national-real-estate',
    description:
      'A UX/UI project for First National Real Estate, focusing on designing an intuitive digital platform for property listings and client interaction.',
    longDescription:
      'The First National Real Estate project involved designing a user-friendly digital platform for property listings, enabling clients and agents to interact seamlessly. The work focused on clean information architecture, easy navigation, and engaging visuals to ensure a smooth user experience. Special attention was given to property search functionality, listing presentation, and responsiveness across devices.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/WEB_LP_CONCEPT.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/WEB_LP.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Canstar_LP_Draft_final.png',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Canstar_LP_Draft_ver3_B.png',
    ],
    category: 'UX & UI Design',
    year: '2018',
    tags: ['UX Design', 'UI Design', 'Web Design', 'Real Estate Platform'],
    client: 'First National Real Estate',
    role: 'UX/UI Designer',
    duration: '3 months',
    tools: ['Adobe XD', 'photoshop', 'Illustrator', 'hubspot'],
    challenges: 'Creating a platform that balances complex property data with a simple and engaging user experience.',
    solutions: 'Implemented clear navigation, responsive layouts, and visual hierarchy to make property browsing intuitive and enjoyable.',
    results:
      'Delivered a digital platform that enhanced client interaction, improved property discovery, and strengthened First National Real Estate’s online presence.',
  },
  {
    id: 13,
    title: 'Shaina',
    slug: 'shaina',
    description: 'A comprehensive branding project for Shaina, focusing on BI & CI development, visual identity, and brand collateral.',
    longDescription:
      'The Shaina project involved creating a full brand identity from the ground up, including BI (Brand Identity) and CI (Corporate Identity) development. The work included designing logos, typography, color schemes, and visual elements that reflect the brand’s personality. Additionally, brand collateral such as business cards, packaging, and promotional materials and eCatalogue were produced to ensure a cohesive and consistent brand presence across all touchpoints.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/logodesign_on-leather.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/logodesign_on-leather.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/logodesign.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Business-card-1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Brouchure_Front.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Brouchure_FrontBack.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Brouchure_in1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Brouchure_in3.jpg',
    ],
    category: 'Branding, BI & CI Design',
    year: '2022',
    tags: ['Brand Identity', 'Corporate Identity', 'Print Design', 'Visual Identity'],
    client: 'Shaina',
    role: 'Brand & Graphic Designer',
    duration: '3 months',
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    challenges: 'Developing a brand identity that is both distinctive and versatile across digital and print media.',
    solutions: 'Created a cohesive visual system including logos, typography, color palette, and brand collateral to ensure consistency.',
    results: 'Delivered a strong and recognisable brand identity that reinforced Shaina’s market presence and brand recognition.',
  },
  {
    id: 14,
    title: 'ConnectLab',
    slug: 'connectlab',
    description: 'A UX/UI project for ConnectLab, focused on designing an intuitive platform for user interaction and data visualization.',
    longDescription:
      'The ConnectLab project involved designing a digital platform that allows users to interact efficiently with complex data. The focus was on creating intuitive navigation, engaging dashboards, and clear visualizations to help users understand and analyse information easily. The design emphasised responsive layouts and accessibility, ensuring seamless experience across devices.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/ConnectLabs_Draft_final2.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ConnectLabs_Process.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ConnectLabs_Services.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Blog_Concept.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Blog_Bundle - page.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/PCA-System-of-Record.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Playbook.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/proposal-book.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ebooks1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ebooks2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ebooks3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Book.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Book_inside.jpg',
    ],
    category: ['UX & UI', 'Print design'],
    year: '2024',
    tags: ['UX Design', 'UI Design', 'Data Visualization', 'Web Design'],
    client: 'ConnectLab',
    role: 'UX/UI Designer',
    duration: '3 months',
    tools: ['Figma', 'Photoshop', 'Illustrator', 'Hubspot'],
    challenges: 'Presenting complex data in a simple, understandable, and interactive way for diverse users.',
    solutions: 'Designed clear dashboards, intuitive navigation, and responsive layouts to enhance usability and engagement.',
    results: 'Delivered a platform that improved user interaction with data and provided a seamless, visually appealing experience.',
  },
  {
    id: 15,
    title: 'Mission Taekwondo',
    slug: 'mission-taekwondo',
    description: 'A branding project for Mission Taekwondo, focusing on BI & CI development, visual identity, and promotional materials.',
    longDescription:
      'The Mission Taekwondo project involved creating a full brand identity, including BI (Brand Identity) and CI (Corporate Identity) development. This included designing the logo, typography, color scheme, and other visual elements to represent the brand’s values and mission. In addition, promotional materials such as posters, flyers, and signage were produced to maintain a consistent brand presence across both digital and physical touchpoints.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Business-card.jpg',
    images: ['https://d3qyzk1t4w1lja.cloudfront.net/Images/Business-card.jpg', 'https://d3qyzk1t4w1lja.cloudfront.net/Images/logo-2.jpg'],
    category: ['BI & CI', ' Print desing'],
    year: '2017',
    tags: ['Brand Identity', 'Corporate Identity', 'Print Design', 'Visual Identity'],
    client: 'Mission Taekwondo',
    role: 'Brand & Graphic Designer',
    duration: '2 months',
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    challenges: 'Creating a strong and recognisable brand identity that resonates with martial arts students and the community.',
    solutions:
      'Developed a cohesive visual system including logo, typography, color palette, and promotional materials to ensure brand consistency.',
    results:
      'Delivered a complete brand identity that enhanced Mission Taekwondo’s presence, recognition, and engagement across all touchpoints.',
  },
  {
    id: 16,
    title: 'Hock-Tech',
    slug: 'hock-tech',
    description:
      'A comprehensive e-commerce project for Hock-Tech, including brand identity development and the creation of an online shop website.',
    longDescription:
      'This project involved creating a full brand identity for Hock-Tech and designing, developing, and launching a fully functional e-commerce website. The work included BI & CI development, logo design, color palette, typography, and visual elements to ensure a consistent brand experience. The online shop featured product pages, shopping cart, checkout system, and responsive design to provide an optimal user experience across devices. Additionally, product photography and marketing materials were produced to effectively support the brand and online store.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/logo2.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/2019/08/logo-1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/2019/08/ebay_pagedesign.jpg',
    ],
    category: 'Branding & E-Commerce Design',
    year: '2015',
    tags: ['Brand Identity', 'E-Commerce', 'Web Design', 'Product Photography', 'Print Materials'],
    client: 'Hock-Tech',
    role: 'Brand & UX/UI Designer',
    duration: '4 months',
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop', 'WordPress', 'Shopify', 'Figma'],
    challenges: 'Creating a cohesive brand identity while developing an intuitive and responsive e-commerce platform.',
    solutions:
      'Designed a consistent visual identity, developed the e-commerce website with responsive layouts, product pages, and checkout system, and produced marketing materials and photography to support the brand.',
    results:
      'Launched a fully functional online store that strengthened brand presence, enhanced user experience, and supported sales growth.',
  },
  {
    id: 17,
    title: 'Hazone',
    slug: 'hazone',
    description:
      'A comprehensive e-commerce project for Hazone, including brand identity development, online shop design, and product management.',
    longDescription:
      'The Hazone project involved creating a complete brand identity and developing a fully functional e-commerce website. The work included BI & CI development, logo design, color palette, typography, and visual elements for consistent branding. The online shop featured product listings, shopping cart, checkout system, and responsive design to ensure an optimal shopping experience across devices. Product photography and marketing materials were also produced to support the brand and online store.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Web.jpg',
    images: ['https://d3qyzk1t4w1lja.cloudfront.net/Images/Web.jpg'],
    category: 'Branding & E-Commerce Design',
    year: '2024',
    tags: ['Brand Identity', 'E-Commerce', 'Web Design', 'Product Photography', 'Print Materials'],
    client: 'Hazone',
    role: 'Brand & UX/UI Designer',
    duration: '4 months',
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop', 'WordPress', 'Shopify', 'Figma'],
    challenges: 'Creating a cohesive brand identity while developing an intuitive and responsive e-commerce platform.',
    solutions:
      'Designed consistent brand visuals, developed the e-commerce website with product pages, shopping cart, and checkout system, and produced marketing materials and photography.',
    results:
      'Launched a fully functional e-commerce platform that strengthened brand presence, enhanced user experience, and supported sales growth.',
  },
  {
    id: 18,
    title: 'MWorld Publication',
    slug: 'mworld-publication',
    description: 'A children’s book project for lower primary students, involving illustration, layout, and print design.',
    longDescription:
      'The MWorld Publication project focused on creating educational and engaging books for lower primary students. The project included developing illustrations, designing layouts, and preparing print-ready files. The goal was to produce visually appealing and age-appropriate content that encourages learning and reading among young children.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/books_series.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/books_series.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld-Book-Covers.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/book_fangs.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/books_sleep.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_DBS.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_rome.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_sharks.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_rome.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_rome.jpg',
    ],
    category: 'Printing & Illustration',
    year: '2025',
    tags: ['Children’s Books', 'Illustration', 'Print Design', 'Educational Material'],
    client: 'MWorld',
    role: 'Illustrator & Print Designer',
    duration: '1 year',
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    challenges: 'Creating content that is engaging, educational, and visually suitable for lower primary students.',
    solutions:
      'Developed bright and friendly illustrations, structured layouts for easy reading, and ensured print quality for a child-friendly experience.',
    results: 'Produced a set of visually engaging and educational books that successfully support learning for young children.',
  },
  {
    id: 19,
    title: 'MWorld App Project',
    slug: 'mworld-app-project',
    description:
      'An educational app project for MWorld, focused on designing an interactive iPad-based learning experience for school students.',
    longDescription:
      'The MWorld iPad School Program project involved designing an application specifically for iPad, aimed at enhancing learning for school students. The app features intuitive navigation, interactive educational content, and visually engaging layouts tailored for children. The design also ensures accessibility, usability, and a consistent brand experience across digital platforms. The project focused solely on the app, creating a cohesive, age-appropriate learning environment.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Mworld_entry.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Mworld_entry.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/DBS1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/DBS2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/DBS3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/DBS4.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/earlyAustralian00.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/earlyAustralian.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/earlyAustralian1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/earlyAustralian2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/earlyAustralian4.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ProtectedArea.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ProtectedArea2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ProtectedArea3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ProtectedArea4.jpg',
    ],
    category: 'UX & UI',
    year: '2013',
    tags: ['UX/UI', 'Educational App', 'iPad Interface', 'School Program', 'Interactive Learning'],
    client: 'MWorld',
    role: 'Graphic Designer',
    duration: '3 years',
    tools: ['Photoshop', 'Illustrator', 'indesign'],
    challenges:
      'Designing an engaging and educational app experience specifically for school students on iPad, balancing usability and interactivity.',
    solutions:
      'Created intuitive navigation, interactive content, and visually engaging layouts tailored for children, ensuring accessibility and a cohesive brand experience.',
    results:
      'Delivered an interactive iPad app that enhances learning engagement and provides a cohesive, age-appropriate digital education platform.',
  },
  {
    id: 20,
    title: 'MWorld Graphic Design',
    slug: 'mworld-graphic-design',
    description:
      'A collaborative graphic design project for MWorld, involving multiple designers, project managers, and educators from various fields.',
    longDescription:
      'The MWorld Graphic Design project was a collaborative effort that brought together multiple designers, project managers, and educators across various disciplines. The project focused on creating cohesive visual assets for MWorld, including educational materials, marketing collateral, and digital graphics. By leveraging the expertise of each team member, the project ensured high-quality, consistent, and visually engaging designs that met both educational and branding objectives.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_website.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/digital-marketing.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWorld_A4-Horizontal-Brochure-Mockup.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/teacherguide.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/lessonplanner.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Title-Library.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MWORLD_banner.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/MAILCHIMP.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/folder_front.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/folder_open.jpg',
    ],
    category: ['BI & CI', 'Print design'],
    year: '2013',
    tags: ['Graphic Design', 'Brand Identity', 'Collaborative Project', 'Educational Materials', 'Digital Graphics'],
    client: 'MWorld',
    role: 'Graphic Designer / Collaborator',
    duration: '2 years',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenges:
      'Coordinating multiple team members across disciplines to maintain a cohesive brand identity and high-quality design output.',
    solutions:
      'Established clear visual guidelines, collaborative workflows, and regular reviews to ensure consistent, high-quality results.',
    results:
      'Delivered a comprehensive set of visually engaging and educational graphic materials, reinforcing MWorld’s brand identity while meeting educational objectives.',
  },
  {
    id: 21,
    title: 'Infographic & Blog Content',
    slug: 'infographic-blog-contents',
    description:
      'A UX/UI project focused on analyzing user roadmaps and converting them into illustrated infographics to make complex information easy to understand.',
    longDescription:
      'This project involved studying user roadmaps in depth and translating complex information into intuitive, visually engaging illustrations and infographics. The work also included integrating these visuals with blog content to enhance accessibility, improve user comprehension, and maintain consistent brand identity. UX/UI principles were applied to ensure clear content hierarchy, intuitive navigation, and a seamless reading experience across devices.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/infographic_scenario_concept_ver1.jpg',
    images: [],
    category: 'UX/UI & Content Design',
    year: '2025',
    tags: ['UX/UI', 'Infographics', 'Blog Content', 'Digital Design', 'Information Visualization'],
    client: 'Internal Project / Freelance',
    role: 'UX/UI Designer & Content Designer',
    duration: '2 months',
    tools: ['Illustrator'],
    challenges: 'Presenting complex user roadmaps in an intuitive and engaging way while maintaining brand consistency.',
    solutions: 'Translated user flows and roadmaps into illustrated infographics and visual content to enhance understanding.',
    results: 'Delivered visually engaging content that helped users easily understand the information and improved engagement.',
  },
  {
    id: 22,
    title: 'ZEN Oriental Holistic Health',
    slug: 'zen-oriental-holistic-health',
    description:
      'A comprehensive BI & CI project for ZEN Oriental Holistic Health, focusing on creating a cohesive brand identity across print and digital platforms.',
    longDescription:
      'The ZEN Oriental Holistic Health project involved designing a complete brand identity system, including logo, typography, color palette, and visual elements, applied consistently across business cards, brochures, signage, and digital assets. The goal was to convey a sense of balance, wellness, and professionalism, reflecting the holistic nature of the services offered. The project emphasized clarity, simplicity, and harmony in visual communication to strengthen the brand’s presence both online and offline.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_website_front.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/zenwebsite.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_logo.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_business-card.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/chadstone_signage.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_envelope-and-letterhead.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_banner.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_SIGNAGE.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_Tri-fold-leaflet.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_ZEN_Uniform.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/ZenT-Shirt-uniform_Back.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Zen_SIGNAGE_photo.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/melton.jpeg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Plan1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Plan2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Plan3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Plan4.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Plan5.jpg',
    ],
    category: 'BI & CI / Branding Design',
    year: '2012',
    tags: ['Brand Identity', 'Corporate Identity', 'Print Design', 'Digital Assets', 'Holistic Health'],
    client: 'ZEN Oriental Holistic Health',
    role: 'Brand & Graphic Designer',
    duration: '3 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Website (Hard-coding)'],
    challenges: 'Creating a visual identity that conveys wellness and professionalism while remaining simple and memorable.',
    solutions: 'Developed a cohesive brand system and applied it consistently across print and digital touchpoints.',
    results: 'Delivered a strong, unified brand identity that enhanced ZEN Oriental Holistic Health’s recognition and trust with clients.',
  },
  {
    id: 23,
    title: 'Yoshi',
    slug: 'yoshi',
    description: 'A photography and design project for Yoshi, focusing on website visuals and initial menu/store design.',
    longDescription:
      'The Yoshi project involved capturing high-quality photographs for the website and designing the initial layout for menus and store displays. The goal was to create visually appealing content that aligns with the brand’s identity, engages customers, and enhances the overall user experience both online and in-store. The project combined photography, graphic design, and layout planning to establish a cohesive brand presence from the beginning.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/yoshi_website.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/pic1.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/pic2.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/pic3.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/pic4.jpg',
    ],
    category: ['Photography', 'Graphic design'],
    year: '2011',
    tags: ['Photography', 'Web Design', 'Menu Design', 'Store Layout', 'Brand Identity'],
    client: 'Yoshi',
    role: 'Photographer & Graphic Designer',
    duration: '2 months',
    tools: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Wordpress'],
    challenges: 'Creating visuals that align with the brand identity and appeal to both online and in-store customers.',
    solutions: 'Captured professional photography and designed menus and store layouts reflecting the brand style.',
    results: 'Delivered visually cohesive content for the website and store, enhancing customer engagement and brand recognition.',
  },
  {
    id: 24,
    title: 'Tuloan Lingerie',
    slug: 'tuloan-lingerie',
    description:
      'A BI & CI and e-commerce project for Tuloan Lingerie, focusing on brand identity development and building a full online shopping platform.',
    longDescription:
      'The Tuloan Lingerie project involved creating a cohesive brand identity system, including logo, typography, color palette, and visual style, and applying it consistently across digital and print materials. Additionally, the project included designing and developing a responsive e-commerce website, ensuring intuitive navigation, seamless checkout experience, and visually appealing product presentation. The goal was to strengthen the brand’s recognition while providing customers with an engaging and user-friendly online shopping experience.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/tuloan_businesscard.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/tuloan_businesscard.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/tuloan_box.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/tuloan-gift-box.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/tuloan_Envelope.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Shopping-Bag.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Tuloan-website.jpg',
    ],

    category: 'BI & CI / E-commerce Design',
    year: '2010',
    tags: ['Brand Identity', 'Corporate Identity', 'E-commerce', 'Web Design', 'Digital Branding'],
    client: 'Tuloan Lingerie',
    role: 'Brand & UX/UI Designer',
    duration: '3 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'WordPress / WooCommerce'],
    challenges: 'Creating a unified brand identity while designing a seamless and visually appealing online shopping experience.',
    solutions: 'Developed a cohesive BI & CI system and designed a responsive e-commerce platform that aligns with the brand identity.',
    results:
      'Delivered a strong online presence for Tuloan Lingerie, enhancing brand recognition and providing customers with a smooth shopping experience.',
  },
  {
    id: 25,
    title: 'Top5Floors',
    slug: 'top5floors',
    description:
      'A printing and promotional materials project for Top5Floors, focusing on creating high-quality printed assets to support branding and marketing.',
    longDescription:
      'The Top5Floors project involved designing and producing a variety of printed materials, including brochures, catalogs, and promotional handouts. The objective was to maintain brand consistency, showcase product offerings effectively, and provide visually appealing materials that engage customers. Careful attention was paid to typography, layout, and imagery to ensure the printed assets complemented the overall brand identity and marketing strategy.',
    imageUrl: 'https://d3qyzk1t4w1lja.cloudfront.net/Images/top5_logoshot.jpg',
    images: [
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/top5_poster.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/top5_printing.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/top5_web.jpg',
      'https://d3qyzk1t4w1lja.cloudfront.net/Images/Top5-Brochure-Display.jpg',
    ],
    category: ['Print design', 'Web design'],
    year: '2024',
    tags: ['Print Design', 'Brochures', 'Catalogues', 'Promotional Materials', 'Branding'],
    client: 'Top5Floors',
    role: 'Graphic Designer',
    duration: '2 months',
    tools: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
    challenges: 'Creating visually appealing printed materials that align with the brand and effectively showcase the products.',
    solutions: 'Designed layouts and selected imagery that clearly presented product offerings while maintaining brand identity.',
    results: 'Delivered high-quality printed assets that enhanced brand recognition and supported marketing efforts.',
  },
  {
    id: 26,
    title: 'TEN Matsuri',
    slug: 'ten-matsuri',
    description:
      'A branding and corporate identity project for TEN Matsuri, focusing on designing the logo, signage, and business cards to create a cohesive brand identity.',
    longDescription:
      'The TEN Matsuri project involved developing a complete corporate identity package, including logo design, signage, and business cards. The goal was to establish a strong and memorable brand presence that reflects the cultural and festive essence of TEN Matsuri. Special attention was given to typography, color palette, and visual elements to ensure all assets were cohesive and visually engaging across different mediums.',
    imageUrl: 'https://dotpingdesign.com/wp-content/uploads/2019/08/logo.jpg',
    images: [
      'https://dotpingdesign.com/wp-content/uploads/2019/08/logo.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/TEN-Matsuri-Posters.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/TEN-Matsuri-Signage.jpg',
    ],
    category: 'BI & CI',
    year: '2025',
    tags: ['Logo Design', 'Signage', 'Business Cards', 'Corporate Identity', 'Branding'],
    client: 'TEN Matsuri',
    role: 'Graphic Designer',
    duration: '1.5 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenges:
      'Creating a visually striking and cohesive brand identity that represents the festive and cultural character of TEN Matsuri.',
    solutions:
      'Developed logo concepts, designed signage layouts, and crafted business cards that align with the brand’s visual language and tone.',
    results:
      'Delivered a consistent and memorable corporate identity package that strengthened TEN Matsuri’s brand recognition and visual appeal.',
  },
  {
    id: 27,
    title: 'The mall25',
    slug: 'the-mall25',
    description:
      'A UX & UI design project for The mall25, focused on creating an intuitive and visually appealing digital shopping experience in collaboration with e-commerce developers.',
    longDescription:
      'The The mall25 project involved designing the user experience and interface for an online retail platform. The focus was on enhancing usability, streamlining navigation, and creating visually engaging screens that improve customer interaction and satisfaction. Wireframes, prototypes, and high-fidelity mockups were developed to test and refine user flows, working closely in collaboration with e-commerce developers to ensure seamless integration and functionality.',
    imageUrl: 'https://dotpingdesign.com/wp-content/uploads/2019/08/Themall25_Web.jpg',
    images: [
      'https://dotpingdesign.com/wp-content/uploads/2019/08/Themall25_Web.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/TheMall25-Mobile.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/TheMall25-Ecommerce.jpg',
    ],
    category: 'UX & UI',
    year: '2025',
    tags: ['UX Design', 'UI Design', 'Wireframes', 'Prototypes', 'E-commerce'],
    client: 'The mall25',
    role: 'UX/UI Designer',
    duration: '3 months',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator'],
    challenges:
      'Designing an intuitive interface that accommodates a wide range of products while maintaining a seamless shopping experience.',
    solutions:
      'Created user flows, wireframes, and interactive prototypes in close collaboration with e-commerce developers to optimize navigation and visual hierarchy.',
    results:
      'Delivered a polished UX/UI design that improved user engagement, simplified navigation, and enhanced the overall digital shopping experience.',
  },
  {
    id: 28,
    title: 'Taekwon-Kumdo Australia Association',
    slug: 'taekwon-kumdo-australia-association',
    description:
      'A branding and corporate identity project for the Taekwon-Kumdo Australia Association, focusing on designing the logo, signage, and business cards.',
    longDescription:
      'The project involved creating a cohesive corporate identity for the Taekwon-Kumdo Australia Association, including logo design, signage, and business cards. The goal was to represent the discipline, tradition, and dynamic spirit of Taekwon-Kumdo while ensuring the brand is visually consistent across all materials. Typography, color palette, and symbolic elements were carefully selected to reflect the martial art’s cultural heritage and values.',
    imageUrl: 'https://dotpingdesign.com/wp-content/uploads/2019/08/Taekwon-Kumdo-Australia-Association_logo.jpg',
    images: [
      'https://dotpingdesign.com/wp-content/uploads/2019/08/Taekwon-Kumdo-Australia-Association_logo.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/Taekwon-Kumdo-Packaging.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/Taekwon-Kumdo-Materials.jpg',
    ],
    category: 'BI & CI',
    year: '2025',
    tags: ['Logo Design', 'Signage', 'Business Cards', 'Corporate Identity', 'Branding'],
    client: 'Taekwon-Kumdo Australia Association',
    role: 'Graphic Designer',
    duration: '2 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenges:
      'Creating a visual identity that honors the tradition and discipline of Taekwon-Kumdo while appealing to a modern audience.',
    solutions:
      'Designed logos, signage, and business cards that incorporate symbolic elements of Taekwon-Kumdo and maintain a consistent brand identity.',
    results:
      'Delivered a professional and cohesive corporate identity package that strengthened the association’s brand presence and visual recognition.',
  },
  {
    id: 29,
    title: 'SPjain',
    slug: 'spjain',
    description:
      'A UX & UI concept design project for SPjain, focusing on creating innovative user interfaces and improving user experience for the digital platform.',
    longDescription:
      'The SPjain project involved developing concept designs for the university’s digital platform, including web and mobile interfaces. The aim was to explore modern UX/UI approaches that enhance usability, engagement, and accessibility. Wireframes, prototypes, and interactive mockups were created to test and refine user flows, ensuring that the final design concepts are both visually appealing and functionally intuitive.',
    imageUrl: 'https://dotpingdesign.com/wp-content/uploads/2019/08/spjain.jpg',
    images: [
      'https://dotpingdesign.com/wp-content/uploads/2019/08/spjain.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/SPjain-Dashboard.jpg',
      'https://dotpingdesign.com/wp-content/uploads/2019/08/SPjain-Mobile.jpg',
    ],
    category: 'UX & UI',
    year: '2025',
    tags: ['UX Design', 'UI Design', 'Concept Design', 'Wireframes', 'Prototypes'],
    client: 'SPjain',
    role: 'UX/UI Designer',
    duration: '2 months',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator'],
    challenges: 'Designing concept interfaces that balance innovation with usability, while reflecting the brand identity of SPjain.',
    solutions:
      'Created wireframes and high-fidelity prototypes exploring different interaction models and visual styles, focusing on user engagement and clarity.',
    results:
      'Delivered concept designs that showcased potential UI/UX directions, improving usability insights and supporting the client’s digital strategy.',
  },
  {
    id: 30,
    title: 'Stella Podaegi',
    slug: 'stella-podaegi',
    description:
      'A branding and corporate identity project for Stella Podaegi, focusing on designing the logo, and business cards and package to create a cohesive brand identity.',
    longDescription:
      'The Stella Podaegi project involved developing a complete corporate identity package, including logo design, signage, and business cards. The objective was to create a sophisticated and memorable brand identity that reflects the personality and values of Stella Podaegi. Careful attention was given to typography, color palette, and visual elements to ensure all assets were cohesive and visually engaging across different mediums.',
    imageUrl: '',
    images: [],
    category: 'BI & CI',
    year: '2025',
    tags: ['Logo Design', 'Signage', 'Business Cards', 'Corporate Identity', 'Branding'],
    client: 'Stella Podaegi',
    role: 'Graphic Designer',
    duration: '1.5 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenges: 'Creating a visually appealing identity that communicates the brand’s sophistication and uniqueness.',
    solutions:
      'Designed logos, signage, and business cards that align with the brand’s tone and maintain visual consistency across all touchpoints.',
    results: 'Delivered a cohesive and professional corporate identity package that strengthened brand recognition and visual impact.',
  },
  {
    id: 31,
    title: 'SJ Accounting Service',
    slug: 'sj-accounting-service',
    description:
      'A branding and corporate identity project for SJ Accounting Service, focusing on designing the logo, signage, and business cards to create a professional and cohesive brand identity.',
    longDescription:
      'The SJ Accounting Service project involved developing a complete corporate identity package, including logo design, signage, and business cards. The goal was to communicate professionalism, trust, and clarity through the visual identity. Typography, color palette, and graphic elements were carefully selected to ensure all assets conveyed reliability and consistency across all touchpoints.',
    imageUrl: '',
    images: [],
    category: 'BI & CI',
    year: '2025',
    tags: ['Logo Design', 'Signage', 'Business Cards', 'Corporate Identity', 'Branding'],
    client: 'SJ Accounting Service',
    role: 'Graphic Designer',
    duration: '1.5 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenges: 'Creating a professional brand identity that reflects trustworthiness and expertise in accounting services.',
    solutions: 'Designed logos, signage, and business cards with clean typography and a cohesive color scheme to convey professionalism.',
    results:
      'Delivered a consistent and professional corporate identity package that enhanced brand recognition and instilled confidence in clients.',
  },
  {
    id: 32,
    title: 'Romeo Hair & Beauty',
    slug: 'romeo-hair-beauty',
    description:
      'A branding and corporate identity project for Romeo Hair & Beauty, focusing on designing the logo, signage, and business cards to create a cohesive and stylish brand identity.',
    longDescription:
      'The Romeo Hair & Beauty project involved developing a complete corporate identity package, including logo design, signage, and business cards. The goal was to create a visually appealing and memorable brand identity that reflects the elegance, style, and professionalism of the salon. Typography, color palette, and graphic elements were carefully selected to ensure consistency across all touchpoints and to appeal to the target audience.',
    imageUrl: '',
    images: [],
    category: 'BI & CI',
    year: '2025',
    tags: ['Logo Design', 'Signage', 'Business Cards', 'Corporate Identity', 'Branding'],
    client: 'Romeo Hair & Beauty',
    role: 'Graphic Designer',
    duration: '2 months',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenges: 'Creating a stylish and elegant brand identity that reflects the salon’s image and appeals to its target audience.',
    solutions:
      'Designed logos, signage, and business cards with refined typography, color palette, and visual elements to maintain a cohesive and attractive brand identity.',
    results:
      'Delivered a professional and visually appealing corporate identity package that enhanced brand recognition and attracted the target clientele.',
  },
];

export const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  'Brand Identity',
  'UX & UI Design',
  'Web Development',
  'Print Design',
  'Packaging Design',
  'Photography',
  'Signage Design',
  'Product Design',
];

export const contactInfo = {
  email: 'leojiyun@gmail.com',
  phone: '0433 009 116',
  location: 'Melbourne, Australia',
  availability: 'Available for new projects',
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

// Helper function to get related projects
export const getRelatedProjects = (currentProjectId: number, limit = 3) => {
  return projects.filter((project) => project.id !== currentProjectId).slice(0, limit);
};
