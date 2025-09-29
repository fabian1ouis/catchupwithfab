import fabianImage from "@/assets/fabian-louis-professional.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    description: "Latest tech trends and innovations in Kenya",
    slug: "technology"
  },
  {
    id: "2", 
    name: "Social Events",
    description: "Kenya's vibrant social scene and cultural events",
    slug: "social-events"
  },
  {
    id: "3",
    name: "Business",
    description: "Kenya's business landscape and startup ecosystem",
    slug: "business"
  },
  {
    id: "4",
    name: "News",
    description: "Latest news and developments in Kenya", 
    slug: "news"
  },
  {
    id: "5",
    name: "Lifestyle",
    description: "Modern Kenyan lifestyle and culture",
    slug: "lifestyle"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Kenya's Digital Revolution: How Fintech is Transforming Lives in 2025",
    excerpt: "Exploring how Kenya continues to lead Africa's fintech revolution with innovations in mobile money, blockchain, and digital banking solutions that are changing lives across the continent.",
    content: `
# Kenya's Digital Revolution: How Fintech is Transforming Lives in 2025

Kenya has established itself as the Silicon Savannah of Africa, and 2025 marks a new chapter in our digital transformation story. From the rural villages to Nairobi's bustling CBD, technology is reshaping how Kenyans live, work, and connect.

## M-Pesa Evolution: Beyond Mobile Money

What started as a simple mobile money transfer service has evolved into a comprehensive financial ecosystem. In 2025, M-Pesa now offers:

- **Digital Credit**: Instant micro-loans based on transaction history
- **Investment Platforms**: Direct access to NSE and global markets
- **Insurance Integration**: Parametric insurance for farmers and small businesses
- **Cross-border Payments**: Seamless transactions across East Africa

## The Rise of Blockchain in Agriculture

Kenyan farmers are embracing blockchain technology for:

- **Supply Chain Transparency**: Tracking produce from farm to fork
- **Smart Contracts**: Automated payments upon delivery verification
- **Weather Insurance**: Blockchain-based parametric insurance
- **Carbon Credits**: Monetizing sustainable farming practices

## Startup Ecosystem Boom

Nairobi's startup scene is thriving with homegrown solutions:

- **HealthTech**: Telemedicine platforms serving remote communities
- **EdTech**: Digital learning solutions bridging the education gap
- **CleanTech**: Solar solutions and waste management innovations
- **LogisticTech**: Last-mile delivery solutions for e-commerce

> "Kenya's strength lies in building technology that solves real African problems, not just copying Western solutions."

## What's Next for 2025

The focus is shifting towards:
- AI-powered solutions for agriculture and healthcare
- Green technology initiatives aligned with Vision 2030
- Regional expansion of Kenyan tech solutions
- Skills development in emerging technologies

Kenya's digital future is bright, built on innovation that serves our people and continent.
    `,
    author: {
      name: "Fabian Louis",
      bio: "Tech enthusiast and digital transformation advocate. Passionate about Kenya's role in Africa's technological advancement.",
      avatar: fabianImage
    },
    publishedAt: "2025-01-20",
    readingTime: 8,
    category: "Technology",
    tags: ["Fintech", "Kenya", "Digital Transformation", "Mobile Money", "Blockchain"],
    featured: true,
    image: "/src/assets/post-tech.jpg",
    slug: "kenya-digital-revolution-fintech-2025"
  },
  {
    id: "2", 
    title: "Nairobi's Cultural Renaissance: Art, Music & Events Shaping 2025",
    excerpt: "From the vibrant street art in Kibera to the sophisticated galleries in Westlands, explore how Nairobi's cultural scene is experiencing an unprecedented renaissance in 2025.",
    content: `
# Nairobi's Cultural Renaissance: Art, Music & Events Shaping 2025

Nairobi is buzzing with creative energy in 2025. Our city has become a cultural hub that's attracting artists, musicians, and creatives from across Africa and beyond. Here's what's making waves in Kenya's capital.

## The Art Scene Explosion

Nairobi's art scene has never been more vibrant:

- **Kibera Art Center**: Street art workshops transforming urban spaces
- **Kuona Trust**: Supporting emerging contemporary artists
- **Circle Art Gallery**: Showcasing East African contemporary art
- **GoDown Arts Centre**: Multi-disciplinary arts programming

## Music Festivals and Events

2025 has been an incredible year for music events:

### Major Festivals
- **Nyege Nyege Festival Nairobi**: East Africa's premier electronic music festival
- **Koroga Festival**: Celebrating Kenyan music and cuisine
- **Blankets & Wine**: Monthly outdoor music picnics
- **Beneath the Baobabs**: Kilifi's magical coastal music experience

### Concert Venues
- **Kenya National Theatre**: Historic venue with modern programming
- **Uhuru Gardens**: Large-scale outdoor concerts
- **Alliance Française**: Intimate performances and cultural exchange
- **The Alchemist**: Trendy venue for emerging artists

## Fashion and Design

Kenya's fashion industry is gaining international recognition:

- **Nairobi Fashion Week**: Showcasing East African designers
- **KikoRomeo**: Sustainable fashion made from African textiles
- **Katungulu Mwendwa**: Avant-garde designs with cultural influences
- **Adele Dejak**: Contemporary jewelry with traditional elements

## Literary Renaissance

Nairobi's literary scene is flourishing:

- **Storymoja Festival**: Annual celebration of storytelling
- **Poetry at Goethe**: Monthly poetry nights
- **Book clubs**: Growing community of readers and writers
- **Publishing houses**: Supporting local authors and stories

## Digital Art and NFTs

Kenyan artists are embracing digital mediums:

- **Digital art collectives**: Exploring new forms of expression
- **NFT marketplaces**: Monetizing digital creativity
- **Virtual galleries**: Making art accessible worldwide
- **Tech-art collaborations**: Bridging technology and creativity

## Food Culture Evolution

Nairobi's culinary scene is experiencing a revolution:

- **Farm-to-table restaurants**: Celebrating local ingredients
- **Street food festivals**: Elevating traditional dishes
- **Fusion cuisine**: Blending Kenyan flavors with international techniques
- **Food tours**: Showcasing diverse neighborhoods and cuisines

> "Nairobi is not just consuming global culture anymore—we're creating it, exporting it, and showing the world what contemporary African culture looks like."

## Looking Ahead

The momentum continues with:
- New cultural districts in development
- International collaborations and exchanges
- Investment in creative industries
- Youth-led cultural initiatives

Nairobi's cultural renaissance is more than entertainment—it's economic empowerment, social change, and cultural pride all rolled into one vibrant movement.
    `,
    author: {
      name: "Fabian Louis",
      bio: "Cultural observer and event curator. Chronicles Nairobi's evolving arts and entertainment landscape.",
      avatar: fabianImage
    },
    publishedAt: "2025-01-18",
    readingTime: 10,
    category: "Social Events",
    tags: ["Nairobi", "Culture", "Music", "Art", "Events", "Fashion"],
    featured: true,
    image: "/src/assets/post-design.jpg",
    slug: "nairobi-cultural-renaissance-2025"
  },
  {
    id: "3",
    title: "Kenya's Economic Outlook 2025: Growth, Challenges, and Opportunities",
    excerpt: "An in-depth analysis of Kenya's economic performance in 2025, covering GDP growth, inflation trends, key sectors driving the economy, and opportunities for investors and entrepreneurs.",
    content: `
# Kenya's Economic Outlook 2025: Growth, Challenges, and Opportunities

As we navigate through 2025, Kenya's economy presents a complex picture of resilience, growth, and evolving challenges. Here's a comprehensive look at where we stand and where we're heading.

## Economic Performance Overview

Kenya's economy in 2025 has shown remarkable resilience:

- **GDP Growth**: Projected at 5.8% for 2025, driven by agriculture and services
- **Inflation Rate**: Stabilizing at 6.2%, down from 2024 peaks
- **Currency Performance**: KES showing stability against major currencies
- **Foreign Reserves**: Maintaining healthy levels above 4 months of imports

## Key Growth Sectors

### Agriculture and Food Security
- **Digital Agriculture**: Precision farming increasing yields by 25%
- **Value Addition**: Processing facilities reducing post-harvest losses
- **Export Growth**: Horticultural exports reaching new markets
- **Climate Resilience**: Drought-resistant crops gaining adoption

### Manufacturing Renaissance
- **Leather Industry**: Exports to Europe and America increasing
- **Textiles**: AGOA benefits driving growth in apparel exports
- **Food Processing**: Local value addition reducing import dependency
- **Pharmaceuticals**: Regional hub for medical supplies

### Services Sector Boom
- **Financial Services**: Fintech innovations expanding financial inclusion
- **Tourism Recovery**: International arrivals reaching pre-2020 levels
- **ICT Services**: Business process outsourcing creating thousands of jobs
- **Transport & Logistics**: Port of Mombasa efficiency improvements

## Infrastructure Developments

Major projects shaping Kenya's economic landscape:

### Transport Infrastructure
- **Standard Gauge Railway**: Extensions to Uganda and Rwanda progressing
- **Lamu Port**: New berths operational, cargo volumes increasing
- **Road Networks**: Rural connectivity improving market access
- **Aviation**: JKIA expansion attracting more international airlines

### Energy Sector
- **Renewable Energy**: 92% of grid electricity from clean sources
- **Rural Electrification**: 95% connectivity achieved
- **Power Exports**: Surplus electricity exported to neighboring countries
- **Green Hydrogen**: Pilot projects for industrial applications

## Investment Opportunities

Promising sectors for investors in 2025:

### Technology and Innovation
- **Fintech Solutions**: Expanding beyond mobile money
- **AgriTech**: Precision farming and supply chain solutions
- **HealthTech**: Telemedicine and diagnostic technologies
- **EdTech**: Digital learning platforms and skills training

### Sustainable Development
- **Green Building**: Eco-friendly construction materials and methods
- **Waste Management**: Recycling and circular economy solutions
- **Water Technology**: Conservation and purification systems
- **Carbon Markets**: Forest conservation and renewable energy projects

## Economic Challenges

Key issues requiring attention:

### Debt Management
- **Domestic Debt**: Rising interest payments affecting fiscal space
- **External Debt**: Need for concessional financing
- **Debt Sustainability**: Implementing fiscal consolidation measures
- **Revenue Enhancement**: Improving tax collection efficiency

### Employment and Skills
- **Youth Unemployment**: Need for job creation in formal sector
- **Skills Gap**: Mismatch between education and market needs
- **Informal Sector**: Integration into formal economy
- **Rural-Urban Migration**: Managing population shifts

## Regional Integration

Kenya's role in East African economic integration:

- **EAC Common Market**: Increasing intra-regional trade
- **Infrastructure Corridors**: Connecting landlocked neighbors
- **Financial Integration**: Cross-border payment systems
- **Skills Mobility**: Professional qualifications recognition

## Looking Forward

Economic priorities for the remainder of 2025:

1. **Fiscal Consolidation**: Reducing budget deficit through improved revenue collection
2. **Private Sector Growth**: Creating enabling environment for business
3. **Export Diversification**: Reducing dependence on traditional exports
4. **Innovation Ecosystem**: Supporting startups and technology adoption

> "Kenya's economic story in 2025 is one of transformation—from an agriculture-based economy to a diversified, technology-enabled economy that serves as a regional hub."

## Conclusion

Despite challenges, Kenya's economic fundamentals remain strong. The combination of political stability, strategic location, young population, and growing technology adoption positions the country well for sustained growth.

The key to unlocking this potential lies in continued investment in infrastructure, education, and innovation while maintaining fiscal discipline and promoting inclusive growth that benefits all Kenyans.
    `,
    author: {
      name: "Fabian Louis",
      bio: "Economic analyst and policy researcher. Focuses on East African economic development and regional integration.",
      avatar: fabianImage
    },
    publishedAt: "2025-01-15",
    readingTime: 12,
    category: "Business",
    tags: ["Kenya Economy", "GDP Growth", "Investment", "Economic Policy", "Regional Trade"],
    featured: true,
    image: "/src/assets/post-startup.jpg",
    slug: "kenya-economic-outlook-2025"
  },
  {
    id: "4",
    title: "Breaking: Kenya Launches Africa's First Satellite Internet Network",
    excerpt: "Kenya makes history as the first African country to launch a comprehensive satellite internet network, promising to bridge the digital divide and connect remote communities across the continent.",
    content: `
# Breaking: Kenya Launches Africa's First Satellite Internet Network

In a historic achievement, Kenya has successfully launched Africa's first comprehensive satellite internet network, positioning the country as a leader in continental digital infrastructure. The ambitious project promises to revolutionize internet access across the region.

## Project Overview

The Kenya Satellite Internet Initiative (KSII) represents a $2.8 billion investment:

- **Satellite Constellation**: 144 low-earth orbit satellites
- **Ground Stations**: 25 facilities across the country
- **Coverage Area**: Complete Kenya coverage, expanding to East Africa
- **Internet Speed**: Up to 100 Mbps in rural areas

## Revolutionary Impact

This breakthrough addresses critical connectivity challenges:

### Rural Connectivity
- **Remote Schools**: Internet access for 15,000 rural schools
- **Healthcare**: Telemedicine capabilities for rural clinics
- **Agriculture**: Real-time weather and market data for farmers
- **Financial Inclusion**: Mobile money services in previously unconnected areas

### Economic Transformation
- **Digital Jobs**: Creating opportunities for remote work
- **E-commerce**: Enabling online businesses in rural areas
- **Education**: Distance learning and skills development
- **Government Services**: Digital government services nationwide

## Technical Innovation

The satellite network features cutting-edge technology:

- **Low Latency**: Sub-50ms latency for real-time applications
- **Weather Resilience**: Advanced systems for tropical climate challenges
- **Scalable Bandwidth**: Dynamic allocation based on demand
- **Ground Integration**: Seamless connection with fiber infrastructure

## Regional Expansion Plans

Kenya's satellite network will expand across East Africa:

### Phase 1 (2025)
- Complete Kenya coverage
- Northern Tanzania and Southern Sudan pilots

### Phase 2 (2026)
- Full Tanzania and Uganda coverage
- Rwanda and Burundi connectivity

### Phase 3 (2027)
- Ethiopia and Somalia inclusion
- Cross-border redundancy systems

## Public-Private Partnership

The project showcases successful collaboration:

- **Government Investment**: Infrastructure and regulatory framework
- **Private Sector**: Technology and operational expertise
- **International Partners**: Technical support and financing
- **Academic Institutions**: Research and development support

## Affordability and Access

Making satellite internet accessible to all Kenyans:

- **Subsidized Rural Access**: Government-supported pricing for remote areas
- **School Programs**: Free internet for educational institutions
- **Community Centers**: Shared access points in villages
- **Flexible Packages**: Pay-as-you-use options for low-income users

## Environmental Considerations

Sustainable space technology implementation:

- **Debris Prevention**: Satellites designed for controlled de-orbiting
- **Solar Power**: Renewable energy for ground stations
- **Minimal Ground Impact**: Compact ground station designs
- **Wildlife Protection**: Coordination with conservation areas

## Industry Response

Stakeholders react to the historic launch:

> "This is not just about internet connectivity—it's about democratizing access to information, education, and economic opportunities across Africa." - Cabinet Secretary for ICT

### International Recognition
- **UN Praise**: Commended as model for developing nations
- **African Union**: Considering similar initiatives for other regions
- **Tech Industry**: Major tech companies exploring partnerships
- **Investment Community**: Increased interest in African space technology

## Challenges and Solutions

Addressing implementation challenges:

### Technical Challenges
- **Spectrum Management**: Coordinating with international regulators
- **Weather Interference**: Adaptive systems for rainy seasons
- **Power Supply**: Solar solutions for remote ground stations
- **Maintenance**: Local technical capacity building

### Regulatory Framework
- **International Compliance**: Meeting ITU and space law requirements
- **Data Protection**: Ensuring privacy and security
- **Quality Standards**: Maintaining service level agreements
- **Competition Policy**: Fair access for service providers

## Economic Benefits

Projected economic impact:

- **GDP Contribution**: Estimated 2.1% increase by 2027
- **Job Creation**: 50,000 direct and indirect jobs
- **Investment Attraction**: $500 million in follow-on investments
- **Export Potential**: Technology services to neighboring countries

## Future Developments

Next steps for Kenya's space program:

- **Earth Observation**: Agricultural and environmental monitoring satellites
- **Navigation Services**: Regional GPS enhancement
- **Scientific Research**: Space-based research initiatives
- **Commercial Launches**: Satellite launching services for other nations

> "Today, Kenya doesn't just consume space technology—we create it, deploy it, and export it to the world."

## Global Implications

Kenya's success could inspire similar initiatives:

- **Technology Transfer**: Sharing expertise with other African nations
- **South-South Cooperation**: Leading satellite technology development
- **Space Industry**: Establishing Africa as a space technology hub
- **Digital Sovereignty**: Reducing dependence on foreign satellite services

This historic achievement marks a new chapter in Kenya's technological leadership and Africa's digital transformation. The satellite internet network is more than infrastructure—it's a bridge to opportunity for millions of people across the continent.
    `,
    author: {
      name: "Fabian Louis",
      bio: "Technology journalist and space industry analyst. Covers Kenya's emerging space program and digital infrastructure developments.",
      avatar: fabianImage
    },
    publishedAt: "2025-01-22",
    readingTime: 9,
    category: "News",
    tags: ["Satellite Internet", "Space Technology", "Digital Infrastructure", "Breaking News", "Innovation"],
    featured: true,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    slug: "kenya-launches-africa-first-satellite-internet"
  },
  {
    id: "5",
    title: "Living in Nairobi 2025: A City of Contrasts and Opportunities",
    excerpt: "Exploring what it's like to live in Kenya's capital in 2025—from the bustling matatu culture to world-class restaurants, tech hubs to traditional markets, Nairobi offers a unique urban experience.",
    content: `
# Living in Nairobi 2025: A City of Contrasts and Opportunities

Nairobi in 2025 is a city that defies easy categorization. It's simultaneously ancient and modern, chaotic and organized, challenging and rewarding. Here's what makes life in Kenya's capital so uniquely captivating.

## The Urban Landscape

Nairobi's skyline tells the story of a city in transformation:

### Modern Developments
- **Two Rivers Mall**: East Africa's largest shopping complex
- **Upper Hill**: The financial district rivaling any global city
- **Konza Technopolis**: Kenya's Silicon Savannah taking shape
- **Green City**: Sustainable urban development projects

### Historic Neighborhoods
- **Karen**: Leafy suburbs with colonial history
- **Westlands**: Entertainment and dining hub
- **Kilimani**: Trendy apartments and nightlife
- **CBD**: The bustling heart of commerce

## Transportation Revolution

Getting around Nairobi has evolved dramatically:

### Digital Solutions
- **Uber and Bolt**: Ride-hailing services everywhere
- **Matatu Cashless**: Digital payments on public transport
- **Boda Boda Apps**: Motorcycle taxis with app booking
- **Car Sharing**: Growing shared mobility options

### Infrastructure Improvements
- **Bus Rapid Transit**: Dedicated lanes reducing commute times
- **Cycling Infrastructure**: Protected bike lanes in select areas
- **Pedestrian Walkways**: Improved sidewalks and crossings
- **Traffic Management**: Smart lights and real-time monitoring

## The Food Scene

Nairobi's culinary landscape reflects its diversity:

### Street Food Culture
- **Nyama Choma**: Grilled meat at local joints
- **Mandazi and Chai**: Traditional breakfast favorites
- **Rolex**: Ugandan-inspired rolled chapati with eggs
- **Fresh Fruit**: Roadside vendors with tropical selections

### Restaurant Revolution
- **Farm-to-Table**: Restaurants sourcing locally
- **International Cuisine**: Ethiopian, Lebanese, Indian, Chinese
- **Fusion Experiments**: Kenyan ingredients meet global techniques
- **Craft Beer**: Local breweries creating unique flavors

### Food Markets
- **City Market**: Fresh produce and local specialties
- **Maasai Market**: Crafts and cultural foods
- **Farmers Markets**: Weekend organic produce sales
- **Night Markets**: Street food and socializing

## Work and Business Culture

Nairobi's professional environment is evolving:

### Tech Hub Growth
- **iHub**: Leading innovation space
- **Nairobi Garage**: Startup incubator and co-working
- **@iLabAfrica**: University-based tech development
- **Remote Work**: International companies hiring locally

### Traditional Industries
- **Banking**: Regional headquarters for multinational banks
- **Manufacturing**: Textile and food processing
- **Agriculture**: Coffee and tea export businesses
- **Tourism**: Safari and business travel services

### Entrepreneurship
- **Small Business**: Informal sector providing livelihoods
- **Social Enterprises**: Businesses solving local problems
- **Women Entrepreneurs**: Growing female business leadership
- **Youth Innovation**: Young people creating digital solutions

## Entertainment and Nightlife

After work, Nairobi comes alive:

### Music and Venues
- **Live Music**: Jazz, Afrobeat, and contemporary sounds
- **Comedy Clubs**: Thriving stand-up comedy scene
- **Nightclubs**: From upscale lounges to underground venues
- **Cultural Centers**: Art exhibitions and performances

### Weekend Activities
- **National Park**: Wildlife safari within the city
- **Karura Forest**: Hiking and cycling in nature
- **Shopping Malls**: Entertainment complexes with cinemas
- **Sports**: Rugby, football, and athletics events

## Housing and Neighborhoods

Finding a place to live in Nairobi:

### Housing Options
- **Apartments**: Modern complexes with amenities
- **Gated Communities**: Suburban family housing
- **Student Housing**: Near universities and colleges
- **Affordable Housing**: Government-supported developments

### Cost of Living
- **Rent**: Varies dramatically by location (KES 25,000 - 200,000+)
- **Transportation**: Reasonable with public transport
- **Food**: Affordable local options, expensive imports
- **Entertainment**: Wide range from budget to luxury options

## Health and Education

Quality of life factors:

### Healthcare
- **Private Hospitals**: World-class medical facilities
- **Insurance**: Growing health insurance coverage
- **Pharmacies**: Accessible medication and health services
- **Wellness**: Gyms, spas, and fitness centers

### Education
- **International Schools**: High-quality education options
- **Universities**: Growing higher education sector
- **Technical Training**: Skills development programs
- **Online Learning**: Digital education platforms

## Challenges and Solutions

Living in Nairobi isn't without its challenges:

### Urban Challenges
- **Traffic Congestion**: Rush hour delays
- **Water Supply**: Occasional shortages in some areas
- **Power Outages**: Infrastructure improvements ongoing
- **Security**: Awareness and precautions necessary

### Community Solutions
- **Neighborhood Apps**: Digital community organizing
- **Security Groups**: Resident-organized safety initiatives
- **Environmental Groups**: Community cleanup and conservation
- **Social Networks**: Strong community bonds and mutual support

## The Social Fabric

What makes Nairobi special is its people:

### Cultural Diversity
- **Multiple Languages**: English, Swahili, and ethnic languages
- **Religious Harmony**: Churches, mosques, and temples coexisting
- **Tribal Unity**: Over 40 ethnic groups living together
- **International Community**: Expats and refugees adding diversity

### Community Spirit
- **Ubuntu Philosophy**: "I am because we are" mentality
- **Collective Problem-Solving**: Communities addressing challenges together
- **Celebration Culture**: Festivals, weddings, and shared joy
- **Mutual Support**: Extended family and friend networks

> "Nairobi doesn't just grow on you—it transforms you. This city teaches you resilience, creativity, and the art of finding opportunity in chaos."

## Looking Ahead

Nairobi's future in 2025 and beyond:

- **Smart City Initiatives**: Technology improving urban services
- **Sustainable Development**: Green building and renewable energy
- **Economic Growth**: Positioning as East African business hub
- **Cultural Renaissance**: Growing arts and creative industries

Living in Nairobi in 2025 means being part of a dynamic, evolving urban story. It's a city where traditional African values meet global aspirations, where innovation springs from necessity, and where every day brings new possibilities.

Whether you're starting a business, building a career, raising a family, or simply exploring life's possibilities, Nairobi offers a unique blend of challenges and opportunities that you won't find anywhere else in the world.
    `,
    author: {
      name: "Fabian Louis",
      bio: "Nairobi resident and urban lifestyle writer. Chronicles the daily experiences and evolving culture of Kenya's capital city.",
      avatar: fabianImage
    },
    publishedAt: "2025-01-12",
    readingTime: 11,
    category: "Lifestyle",
    tags: ["Nairobi", "Urban Living", "Kenya Culture", "City Life", "Lifestyle"],
    featured: false,
    image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&h=600&fit=crop",
    slug: "living-nairobi-2025-city-contrasts-opportunities"
  }
];