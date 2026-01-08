import { Product, ProductCategory, Service } from './types';

export const REPAIR_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Screen Replacement',
    description: 'High-quality OLED and LCD screen replacements for all major brands.',
    priceRange: '$89 - $299',
    iconName: 'Smartphone'
  },
  {
    id: 's2',
    title: 'Battery Replacement',
    description: 'Restore your device\'s battery life with premium cell replacements.',
    priceRange: '$49 - $99',
    iconName: 'Battery'
  },
  {
    id: 's3',
    title: 'Water Damage',
    description: 'Advanced ultrasonic cleaning and corrosion removal services.',
    priceRange: '$60 - $150',
    iconName: 'Droplets'
  },
  {
    id: 's4',
    title: 'Charging Port Repair',
    description: 'Fix loose connections and slow charging issues quickly.',
    priceRange: '$59 - $119',
    iconName: 'Zap'
  },
  {
    id: 's5',
    title: 'Camera Repair',
    description: 'Lens replacement and camera module repairs for crystal clear photos.',
    priceRange: '$79 - $189',
    iconName: 'Camera'
  },
  {
    id: 's6',
    title: 'Software Diagnostics',
    description: 'OS restoration, boot loop fixes, and data recovery services.',
    priceRange: '$40 - $100',
    iconName: 'Cpu'
  }
];

// Helper to generate distinct images
const getImg = (id: number, w: number, h: number) => `https://picsum.photos/id/${id}/${w}/${h}`;

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'UltraGuard Pro Case',
    price: 39.99,
    category: ProductCategory.ACCESSORIES,
    description: 'Military-grade drop protection with a slim profile.',
    fullDescription: 'The UltraGuard Pro Case redefines rugged protection. Crafted with a triple-layer shock-absorbent material, it can withstand drops from up to 15 feet while maintaining a sleek, pocket-friendly design. The textured grip ensures your phone stays in your hand, not on the ground.',
    features: ['15ft Drop Protection', 'Anti-slip Grip Texture', 'Wireless Charging Compatible', 'Raised Bezel for Screen Safety'],
    specs: { 'Material': 'Polycarbonate & TPU', 'Weight': '45g', 'Colors': 'Black, Navy, Olive', 'Compatibility': 'iPhone 15 Series' },
    inBox: ['UltraGuard Pro Case', 'Microfiber Cleaning Cloth', 'Installation Guide'],
    images: [getImg(1, 800, 800), getImg(2, 800, 800), getImg(3, 800, 800), getImg(4, 800, 800)],
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'SonicBlast Wireless Buds',
    price: 129.99,
    category: ProductCategory.AUDIO,
    description: 'Immersive active noise cancelling earbuds with 24h battery.',
    fullDescription: 'Experience sound like never before with SonicBlast. These earbuds feature adaptive Active Noise Cancellation that blocks out the world so you can focus on your music. With transparency mode, dual-mic beamforming for clear calls, and IPX5 water resistance, they are the perfect daily companion.',
    features: ['Active Noise Cancellation', '24 Hour Battery with Case', 'IPX5 Water Resistant', 'Custom EQ App'],
    specs: { 'Bluetooth': '5.3', 'Battery Life': '6h (Buds) + 18h (Case)', 'Driver Size': '11mm', 'Charging': 'USB-C & Wireless' },
    inBox: ['SonicBlast Earbuds', 'Charging Case', 'USB-C Cable', '3 Sizes of Ear Tips'],
    images: [getImg(5, 800, 800), getImg(6, 800, 800), getImg(7, 800, 800), getImg(8, 800, 800)],
    isFeatured: true,
    isDeal: true
  },
  {
    id: 'p3',
    name: 'PowerCore 20000mAh',
    price: 54.99,
    category: ProductCategory.CHARGING,
    description: 'High-capacity portable charger with 20W PD fast charging.',
    fullDescription: 'Never run out of battery again. The PowerCore 20000mAh packs enough power to charge most smartphones over 4 times. It supports 20W Power Delivery to fast charge iPhones and Android devices to 50% in just 30 minutes. Features a digital LED display to show exact power remaining.',
    features: ['20,000mAh Capacity', '20W PD Fast Charging', 'Digital LED Display', 'Charges 3 Devices Simultaneously'],
    specs: { 'Capacity': '20,000mAh', 'Output': '2x USB-A, 1x USB-C', 'Input': 'USB-C / Micro-USB', 'Weight': '350g' },
    inBox: ['PowerCore Power Bank', 'USB-C to USB-C Cable', 'Travel Pouch'],
    images: [getImg(9, 800, 800), getImg(10, 800, 800), getImg(11, 800, 800), getImg(12, 800, 800)],
    isFeatured: true
  },
  {
    id: 'p4',
    name: 'CrystalClear Glass Guard',
    price: 19.99,
    category: ProductCategory.PROTECTION,
    description: '9H Hardness tempered glass screen protector (2-Pack).',
    fullDescription: 'Protect your investment with CrystalClear. Made from premium Japanese tempered glass, this screen protector offers 9H hardness to resist scratches from keys and coins. The oleophobic coating reduces fingerprints and smudges, keeping your screen looking pristine.',
    features: ['9H Hardness', 'Case Friendly Design', 'Bubble-Free Installation', 'High Touch Sensitivity'],
    specs: { 'Thickness': '0.33mm', 'Material': 'Tempered Glass', 'Transparency': '99.9%', 'Coating': 'Oleophobic' },
    inBox: ['2x Screen Protectors', 'Alignment Frame', 'Cleaning Kit', 'Dust Removal Stickers'],
    images: [getImg(13, 800, 800), getImg(14, 800, 800), getImg(15, 800, 800), getImg(16, 800, 800)],
    isFeatured: true
  },
  {
    id: 'p5',
    name: 'FitTrack Smart Band',
    price: 49.99,
    category: ProductCategory.SMART,
    description: 'Track your steps, sleep, and heart rate with style.',
    fullDescription: 'Stay on top of your health goals with the FitTrack Smart Band. It monitors your heart rate 24/7, tracks your sleep stages, and counts your daily steps. With a vibrant OLED display and 14-day battery life, it is designed to be worn all day and night.',
    features: ['Heart Rate Monitoring', 'Sleep Tracking', '14-Day Battery Life', '5ATM Water Resistance'],
    specs: { 'Display': '0.95" AMOLED', 'Connectivity': 'Bluetooth 5.0', 'Sensors': 'Optical Heart Rate, Accelerometer', 'Strap': 'Silicone' },
    inBox: ['FitTrack Smart Band', 'Magnetic Charger', 'User Manual'],
    images: [getImg(17, 800, 800), getImg(18, 800, 800), getImg(19, 800, 800), getImg(20, 800, 800)],
    isDeal: true
  },
  {
    id: 'p6',
    name: 'BassBoom Mini Speaker',
    price: 34.99,
    category: ProductCategory.AUDIO,
    description: 'Portable Bluetooth speaker with surprisingly deep bass.',
    fullDescription: 'Don\'t let the size fool you. The BassBoom Mini delivers punchy sound with deep lows thanks to its passive radiator technology. Rugged, waterproof, and portable, it clips onto your bag so you can bring the party wherever you go.',
    features: ['360° Sound', 'IP67 Waterproof', '10 Hour Playtime', 'Integrated Carabiner'],
    specs: { 'Power': '5W RMS', 'Bluetooth': '5.1', 'Battery': '1200mAh', 'Dimensions': '10cm x 10cm x 4cm' },
    inBox: ['BassBoom Speaker', 'USB-C Charging Cable', 'Quick Start Guide'],
    images: [getImg(21, 800, 800), getImg(22, 800, 800), getImg(23, 800, 800), getImg(24, 800, 800)],
    isFeatured: true
  },
  {
    id: 'p7',
    name: 'MagMount Car Holder',
    price: 24.99,
    category: ProductCategory.ACCESSORIES,
    description: 'Secure magnetic dashboard mount for safe driving.',
    fullDescription: 'Keep your phone in view and your hands on the wheel. The MagMount uses powerful N52 magnets to hold your phone securely, even on bumpy roads. The 360-degree ball joint allows you to find the perfect viewing angle for navigation.',
    features: ['Strong N52 Magnets', '360° Rotation', 'Universal Compatibility', 'Damage-free Adhesive'],
    specs: { 'Material': 'Aluminum Alloy', 'Mount Type': '3M VHB Adhesive', 'Magnet Strength': '3.5kg pull force', 'Color': 'Gunmetal' },
    inBox: ['MagMount Holder', '2x Metal Plates', 'Extra Adhesive Pad', 'Cleaning Wipe'],
    images: [getImg(25, 800, 800), getImg(26, 800, 800), getImg(27, 800, 800), getImg(28, 800, 800)],
  },
  {
    id: 'p8',
    name: 'DuraBraid Lightning Cable',
    price: 14.99,
    category: ProductCategory.CABLES,
    description: 'Reinforced 6ft nylon braided charging cable.',
    fullDescription: 'Stop buying cheap cables that break in a month. The DuraBraid cable is reinforced with Kevlar fiber and wrapped in double-braided nylon, tested to withstand 20,000+ bends. MFi certified for flawless compatibility with Apple devices.',
    features: ['20,000+ Bend Lifespan', 'MFi Certified', '6ft Length', 'Aluminum Connectors'],
    specs: { 'Length': '1.8m / 6ft', 'Current': '2.4A Max', 'Connector': 'USB-A to Lightning', 'Warranty': 'Lifetime' },
    inBox: ['DuraBraid Cable', 'Velcro Cable Tie'],
    images: [getImg(29, 800, 800), getImg(30, 800, 800), getImg(31, 800, 800), getImg(32, 800, 800)],
    isFeatured: true
  },
  {
    id: 'p9',
    name: 'KidzTab 7',
    price: 89.99,
    category: ProductCategory.KIDS,
    description: 'Durable tablet for kids with parental controls built-in.',
    fullDescription: 'The KidzTab 7 is built for little hands and curious minds. It comes with a thick, shock-proof bumper case and a pre-installed Kids Space app featuring thousands of educational games and videos. Parents can easily set screen time limits and content filters.',
    features: ['Shock-proof Bumper Case', 'Parental Controls', 'Eye Protection Mode', 'Pre-loaded Educational Apps'],
    specs: { 'Screen': '7" HD IPS', 'Storage': '32GB (Expandable)', 'RAM': '2GB', 'Battery': '3500mAh' },
    inBox: ['KidzTab 7 Tablet', 'Silicone Bumper Case', 'Charger', 'Stickers'],
    images: [getImg(33, 800, 800), getImg(34, 800, 800), getImg(35, 800, 800), getImg(36, 800, 800)],
    isFeatured: true,
    isDeal: true
  },
  {
    id: 'p10',
    name: 'FastCharge 30W Wall Brick',
    price: 29.99,
    category: ProductCategory.CHARGING,
    description: 'Compact GaN charger for phones and tablets.',
    fullDescription: 'Upgrade to the future of charging. Utilizing GaN (Gallium Nitride) technology, this 30W charger is 50% smaller than standard chargers but runs cooler and more efficiently. Perfect for fast charging the latest flagship phones.',
    features: ['GaN Technology', 'Foldable Prongs', '30W Output', 'Universal Compatibility'],
    specs: { 'Input': '100-240V', 'Output': '5V/3A, 9V/3A, 15V/2A, 20V/1.5A', 'Size': '30x30x30mm', 'Weight': '40g' },
    inBox: ['30W Wall Charger', 'User Manual'],
    images: [getImg(37, 800, 800), getImg(38, 800, 800), getImg(39, 800, 800), getImg(40, 800, 800)],
  },
  {
    id: 'p11',
    name: 'ProStand Desktop Holder',
    price: 18.99,
    category: ProductCategory.ACCESSORIES,
    description: 'Adjustable aluminum stand for phones and small tablets.',
    fullDescription: 'Elevate your workspace with the ProStand. Machined from solid aluminum, it offers a stable base for your device. The dual-hinge design allows you to adjust both height and angle, making it perfect for Facetime calls, watching videos, or reading recipes.',
    features: ['Dual Hinge Adjustment', 'Solid Aluminum Build', 'Anti-scratch Silicone Pads', 'Foldable for Travel'],
    specs: { 'Material': 'Aluminum', 'Weight Capacity': '1kg', 'Folded Size': '10x8x2cm', 'Color': 'Silver' },
    inBox: ['ProStand', 'Adjustment Tool'],
    images: [getImg(41, 800, 800), getImg(42, 800, 800), getImg(43, 800, 800), getImg(44, 800, 800)],
  },
  {
    id: 'p12',
    name: 'GamerGear Mobile Trigger',
    price: 12.99,
    category: ProductCategory.ACCESSORIES,
    description: 'Clip-on triggers for competitive mobile gaming.',
    fullDescription: 'Gain the competitive edge in battle royale games. These clip-on triggers add physical L1/R1 buttons to your phone, allowing for 4-finger claw play without the hand gymnastics. Highly responsive capacitive conduction ensures zero latency.',
    features: ['Zero Latency', 'Mechanical Click Feel', 'Fits all Phones <11mm', 'Travel Case Included'],
    specs: { 'Material': 'ABS + Zinc Alloy', 'Actuation Force': '50g', 'Contact Points': 'Soft Silicone', 'Weight': '20g' },
    inBox: ['2x Triggers (L+R)', 'Storage Case'],
    images: [getImg(45, 800, 800), getImg(46, 800, 800), getImg(47, 800, 800), getImg(48, 800, 800)],
    isFeatured: true
  }
];