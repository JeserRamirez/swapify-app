import * as bcrypt from 'bcrypt'
import { ItemConditionType, seedData, SwapStatusType } from "../interfaces/seed-interface";
import { LinkType } from '../interfaces/seed-interface';


export const initialData: seedData = {
  users: [
    {
      username: 'JohnDoe',
      email: 'johndoe21@gmail.com',
      displayName: 'JDoe',
      location: 'Chicago, Illinois, USA',
      password: bcrypt.hashSync('Imjohndoe777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAATq15J5HeGYivNK-NDtFaNgVou2L9CaKvrPK8ZWSYSzr4zOyJmCNN8A&s'
    },
    {
      username: 'MahrieCarie',
      email: 'mahriecarie24@gmail.com',
      displayName: 'MarCa',
      location: 'Chicago, Illinois, USA',
      password: bcrypt.hashSync('Immahriecarie777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqscofRxIIVZHea0PVlH_iwbSeG7L33fjsTLx5at21-9ON7pp5C3Zk40&s'
      
    },
    {
      username: 'CatNip',
      email: 'catnip23@gmail.com',
      displayName: 'CNip',
      location: 'Monterrey, Nuevo León, MX',
      password: bcrypt.hashSync('Imcatnip777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fdNxiFpP43eLJQXi6grDSPtt3c7nrR_IwoshRDipcGlw4mstfHO8R7E&s'
    },
    {
      username: 'CatTree',
      email: 'cattree87@gmail.com',
      displayName: 'CatRee',
      location: 'Monterrey, Nuevo León, MX',
      password: bcrypt.hashSync('Imcattree777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BC7ERbwstzZijDeSLetpo9wHo7qwmG-Yj_zLGtWqFmkY15yJl951uXk&s'
    },
    {
      username: 'PetThatDawg',
      email: 'petthatdawg87@gmail.com',
      displayName: 'PTDawg',
      location: 'Guadalajara, Jalisco, MX',
      password: bcrypt.hashSync('Impetthatdawg777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUc7IMlgeQsZx3sRbX4N65xa17mGk2B5J-Nj8qVW63fWS272Z0ovVV6s&s'
    },
    {
      username: 'DogEnjoyer',
      email: 'dogenjoyer45@gmail.com',
      displayName: 'DogEn',
      location: 'Guadalajara, Jalisco, MX',
      password: bcrypt.hashSync('Imdogenjoyer777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILU4a3CNj_DgOCp_gm8cnlS3-wKgsPXBNuN5HbwVR1wSSYMJcM8Ypyec&s'
    },
    {
      username: 'DogsAreTheBest',
      email: 'dogsarethebest25@gmail.com',
      displayName: 'DATB',
      location: 'Los Ángeles, California, USA',
      password: bcrypt.hashSync('Imdogsarethebest777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E_oHWVI1R-_5nx_HqHDECiyYzrP5S9o_XRjgVRaFNFCeNu79SdzEmTM&s'
    },
    {
      username: 'MrDog',
      email: 'mrdog54@gmail.com',
      displayName: 'MrDog',
      location: 'Los Ángeles, California, USA',
      password: bcrypt.hashSync('Immrdog777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HGMRcTC2Vj5MsvMuEBex6HVw7xU1B9aeGxaF21LEKqRdD2FE1zQTym8&s'
    },
    {
      username: 'MrCatDog',
      email: 'mrcatdog87@gmail.com',
      displayName: 'MrCDog',
      location: 'Boston, Massachusetts, USA',
      password: bcrypt.hashSync('Immrcatdog777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbA95O-cCFgCdMrGnY0_RCTRruNQGkZtF8u_YTlpBVheVrn6rshlOW_Ks&s'
    },
    {
      username: 'MrScoobyDoo',
      email: 'mrscoobydoo14@gmail.com',
      displayName: 'JDoe',
      location: 'Boston, Massachusetts, USA',
      password: bcrypt.hashSync('Immrscoobydoo777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGhJ445l6vkgy8qJTwHp_VpSv1muIZ7ZG6cvdwjLwcugPLpYR9BbDgao&s'
    },
    {
      username: 'ScrapyDoo',
      email: 'scrapydoo18@gmail.com',
      displayName: 'SDoo',
      location: 'Monterrey, Nuevo León, MX',
      password: bcrypt.hashSync('Imscrapydoo777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUbG-xn0joDJGWdcTED02oSzrw6vwsqYSsz-HNDHAaiTJ4cHfTDaQuRE&s'
    },
    {
      username: 'TomTheCat',
      email: 'tomthecat77@gmail.com',
      displayName: 'TTCat',
      location: 'Monterrey, Nuevo León, MX',
      password: bcrypt.hashSync('Imtomthecat777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7x7_coan375x5fr7Qvd-COjpsJl6S7nn6vmGiFrpV0jfJ4Gm51doSzQ&s'
    },
    {
      username: 'JerryTheMice',
      email: 'jerrythemice16@gmail.com',
      displayName: 'JTMice',
      location: 'Chicago, Illinois, USA',
      password: bcrypt.hashSync('Imjerrythemice777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYDAAPjPRwc5Cs0QcDKW74j6JzoeDG9bLDAYU3qSo1FUuvHBUq-Zoxn0&s'
    },
    {
      username: 'MrGoofy',
      email: 'mrgoofy12@gmail.com',
      displayName: 'MGoofy',
      location: 'Guadalajara, Jalisco, MX',
      password: bcrypt.hashSync('Immrgoofy777', 10),
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZ_70Yg77T03ATHAuVqOhdmzq5bqNSPzq5y3iqQcE9WKwYpfnb4iU1Pk&s'
    },
  ],
  userLinks: [
    {
      type: LinkType.WEBSITE,
      url: 'https://imjohndoe.com/'
    },
    {
      type: LinkType.DISCORD,
      url: 'https://discord.com/johndoe'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/johndoe'
    },
    {
      type: LinkType.YOUTUBE,
      url: 'https://youtube.com/johndoe'
    },
    {
      type: LinkType.X,
      url: 'https://x.com/johndoe'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://MahrieCarie.com/'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://catnip.com/'
    },
    {
      type: LinkType.DISCORD,
      url: 'https://discord.com/catnip'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/catnip'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://cattree.com/'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/cattree'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/petthatdawg'
    },
    {
      type: LinkType.YOUTUBE,
      url: 'https://youtube.com/petthatdawg'
    },
    {
      type: LinkType.X,
      url: 'https://x.com/petthatdawg'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://dogenjoyer.com/'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://dogsarethebest.com/'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://mrdog.com/'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://mrcatdog.com/'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://mrscoobydoo.com/'
    },
    {
      type: LinkType.WEBSITE,
      url: 'https://scrapydoo.com/'
    },
    {
      type: LinkType.DISCORD,
      url: 'https://discord.com/scrapydoo'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/scrapydoo'
    },
    {
      type: LinkType.YOUTUBE,
      url: 'https://youtube.com/scrapydoo'
    },
    {
      type: LinkType.DISCORD,
      url: 'https://discord.com/tomthecat'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/tomthecat'
    },
    {
      type: LinkType.YOUTUBE,
      url: 'https://youtube.com/tomthecat'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/tomthecat'
    },
    {
      type: LinkType.YOUTUBE,
      url: 'https://youtube.com/tomthecat'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/cattree'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/jerrythemice'
    },
    {
      type: LinkType.X,
      url: 'https://x.com/jerrythemice'
    },
    {
      type: LinkType.INSTAGRAM,
      url: 'https://instagram.com/mrgoofy'
    },
  ],
  followers: [],
  items: [
    {
      title: 'Yamaha Acoustic Guitar',
      description: 'Acoustic guitar in excellent condition, ideal for beginners.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Trek Mountain Bike',
      description: 'Used bike with some paint details, works perfectly.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Book "Clean Code"',
      description: 'Book on programming best practices, hardcover, like new.',
      available: false,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'DXRacer Gaming Chair',
      description: 'Ergonomic gaming chair with lumbar support and adjustable armrests.',
      available: true,
      condition: ItemConditionType.NEW,
    },
    {
      title: 'Sony Bluetooth Headphones',
      description: 'Used wireless headphones with excellent sound quality.',
      available: true,
      condition: ItemConditionType.WELL_USED,
    },
    {
      title: 'Redragon Mechanical Keyboard',
      description: 'Backlit mechanical keyboard, blue switches, lightly used.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Samsung 27" Monitor',
      description: 'Full HD monitor, 75Hz, perfect for office or casual gaming.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Canon EOS 2000D Camera',
      description: 'Digital SLR camera with 18-55mm lens, in perfect condition.',
      available: false,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Wooden Dining Table',
      description: 'Wooden dining table for 6 people, minor signs of use.',
      available: true,
      condition: ItemConditionType.WELL_USED,
    },
    {
      title: 'Professional Skateboard',
      description: 'Canadian maple skateboard with high-performance wheels.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Nintendo Switch',
      description: 'Hybrid console with two Joy-Cons, lightly used.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'PlayStation 4 Slim',
      description: '1TB PS4 Slim console, two controllers and three games included.',
      available: false,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Classic Vinyl Collection',
      description: 'Over 50 vinyl records, all functional.',
      available: true,
      condition: ItemConditionType.WELL_USED,
    },
    {
      title: 'Samsung Galaxy S21 Smartphone',
      description: 'High-end phone, 128GB, Phantom Gray color.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Dell XPS 13 Laptop',
      description: 'Ultralight laptop with touchscreen, 16GB RAM, 512GB SSD.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Nespresso Coffee Maker',
      description: 'Single-serve coffee maker, lightly used, includes 20 capsules.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Dyson V11 Vacuum Cleaner',
      description: 'Cordless vacuum, excellent suction, lightly used.',
      available: false,
      condition: ItemConditionType.NEW,
    },
    {
      title: 'Samsonite Luggage Set',
      description: 'Three hard-shell suitcases of different sizes.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'LED Desk Lamp',
      description: 'Lamp with adjustable light and built-in USB port.',
      available: true,
      condition: ItemConditionType.NEW,
    },
    {
      title: 'Stainless Steel Cookware Set',
      description: '10-piece set, durable and easy to clean.',
      available: true,
      condition: ItemConditionType.NEW,
    },
    {
      title: 'Black Leather Jacket',
      description: 'Genuine leather biker-style jacket, size M.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Spin Stationary Bike',
      description: 'Exercise bike in excellent condition.',
      available: false,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Bosch Tool Kit',
      description: 'Case with 50 tools and accessories.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Celestron Telescope',
      description: 'Telescope for astronomical and terrestrial observation.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Casio G-Shock Watch',
      description: 'Sport watch resistant to water and shocks.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Oster Electric Grill',
      description: 'Non-stick electric grill, lightly used.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Honeywell Tower Fan',
      description: 'Fan with remote control and timer.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Osterizer Blender',
      description: 'Glass blender with 600W motor.',
      available: true,
      condition: ItemConditionType.WELL_USED,
    },
    {
      title: 'Inflatable Kayak',
      description: 'Two-person kayak, includes paddles and air pump.',
      available: false,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Wooden Chess Set',
      description: 'Foldable board with hand-carved pieces.',
      available: true,
      condition: ItemConditionType.NEW,
    },
    {
      title: 'DJI Mini 2 Drone',
      description: 'Drone with 4K camera, includes case and extra batteries.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Nike Air Max Sneakers',
      description: 'Sports shoes size 42, lightly used.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'GoPro Hero 9 Camera',
      description: 'Action camera with accessories.',
      available: false,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Catan Board Game',
      description: 'Complete strategy game, all pieces included.',
      available: true,
      condition: ItemConditionType.NEW,
    },
    {
      title: 'Orthopedic Queen Mattress',
      description: 'High-density foam mattress, excellent support.',
      available: true,
      condition: ItemConditionType.USED,
    },
    {
      title: 'Black+Decker Electric Oven',
      description: 'Compact oven, ideal for pizzas and baking.',
      available: true,
      condition: ItemConditionType.WELL_USED,
    },
    {
      title: 'Apple Watch Series 6',
      description: 'Smartwatch with GPS and health monitor.',
      available: true,
      condition: ItemConditionType.LIKE_NEW,
    },
    {
      title: 'Epson Projector',
      description: 'HD projector ideal for home theater.',
      available: false,
      condition: ItemConditionType.USED,
    },
  ],
  images: [
    // Yamaha Acoustic Guitar
    { url: 'https://example.com/images/yamaha-acoustic-1.jpg', order: 1 },
    { url: 'https://example.com/images/yamaha-acoustic-2.jpg', order: 2 },
    { url: 'https://example.com/images/yamaha-acoustic-3.jpg', order: 3 },

    // Trek Mountain Bike
    { url: 'https://example.com/images/trek-bike-1.jpg', order: 1 },
    { url: 'https://example.com/images/trek-bike-2.jpg', order: 2 },
    { url: 'https://example.com/images/trek-bike-3.jpg', order: 3 },

    // Book "Clean Code"
    { url: 'https://example.com/images/clean-code-1.jpg', order: 1 },
    { url: 'https://example.com/images/clean-code-2.jpg', order: 2 },
    { url: 'https://example.com/images/clean-code-3.jpg', order: 3 },

    // DXRacer Gaming Chair
    { url: 'https://example.com/images/dxracer-chair-1.jpg', order: 1 },
    { url: 'https://example.com/images/dxracer-chair-2.jpg', order: 2 },
    { url: 'https://example.com/images/dxracer-chair-3.jpg', order: 3 },

    // Sony Bluetooth Headphones
    { url: 'https://example.com/images/sony-headphones-1.jpg', order: 1 },
    { url: 'https://example.com/images/sony-headphones-2.jpg', order: 2 },
    { url: 'https://example.com/images/sony-headphones-3.jpg', order: 3 },

    // Redragon Mechanical Keyboard
    { url: 'https://example.com/images/redragon-keyboard-1.jpg', order: 1 },
    { url: 'https://example.com/images/redragon-keyboard-2.jpg', order: 2 },
    { url: 'https://example.com/images/redragon-keyboard-3.jpg', order: 3 },

    // Samsung 27" Monitor
    { url: 'https://example.com/images/samsung-monitor-1.jpg', order: 1 },
    { url: 'https://example.com/images/samsung-monitor-2.jpg', order: 2 },
    { url: 'https://example.com/images/samsung-monitor-3.jpg', order: 3 },

    // Canon EOS 2000D Camera
    { url: 'https://example.com/images/canon-eos-1.jpg', order: 1 },
    { url: 'https://example.com/images/canon-eos-2.jpg', order: 2 },
    { url: 'https://example.com/images/canon-eos-3.jpg', order: 3 },

    // Wooden Dining Table
    { url: 'https://example.com/images/wooden-table-1.jpg', order: 1 },
    { url: 'https://example.com/images/wooden-table-2.jpg', order: 2 },
    { url: 'https://example.com/images/wooden-table-3.jpg', order: 3 },

    // Professional Skateboard
    { url: 'https://example.com/images/skateboard-1.jpg', order: 1 },
    { url: 'https://example.com/images/skateboard-2.jpg', order: 2 },
    { url: 'https://example.com/images/skateboard-3.jpg', order: 3 },

    // Nintendo Switch
    { url: 'https://example.com/images/nintendo-switch-1.jpg', order: 1 },
    { url: 'https://example.com/images/nintendo-switch-2.jpg', order: 2 },
    { url: 'https://example.com/images/nintendo-switch-3.jpg', order: 3 },

    // PlayStation 4 Slim
    { url: 'https://example.com/images/ps4-slim-1.jpg', order: 1 },
    { url: 'https://example.com/images/ps4-slim-2.jpg', order: 2 },
    { url: 'https://example.com/images/ps4-slim-3.jpg', order: 3 },

    // Classic Vinyl Collection
    { url: 'https://example.com/images/vinyl-collection-1.jpg', order: 1 },
    { url: 'https://example.com/images/vinyl-collection-2.jpg', order: 2 },
    { url: 'https://example.com/images/vinyl-collection-3.jpg', order: 3 },

    // Samsung Galaxy S21 Smartphone
    { url: 'https://example.com/images/galaxy-s21-1.jpg', order: 1 },
    { url: 'https://example.com/images/galaxy-s21-2.jpg', order: 2 },
    { url: 'https://example.com/images/galaxy-s21-3.jpg', order: 3 },

    // Dell XPS 13 Laptop
    { url: 'https://example.com/images/dell-xps13-1.jpg', order: 1 },
    { url: 'https://example.com/images/dell-xps13-2.jpg', order: 2 },
    { url: 'https://example.com/images/dell-xps13-3.jpg', order: 3 },

    // Nespresso Coffee Maker
    { url: 'https://example.com/images/nespresso-1.jpg', order: 1 },
    { url: 'https://example.com/images/nespresso-2.jpg', order: 2 },
    { url: 'https://example.com/images/nespresso-3.jpg', order: 3 },

    // Dyson V11 Vacuum Cleaner
    { url: 'https://example.com/images/dyson-v11-1.jpg', order: 1 },
    { url: 'https://example.com/images/dyson-v11-2.jpg', order: 2 },
    { url: 'https://example.com/images/dyson-v11-3.jpg', order: 3 },

    // Samsonite Luggage Set
    { url: 'https://example.com/images/samsonite-luggage-1.jpg', order: 1 },
    { url: 'https://example.com/images/samsonite-luggage-2.jpg', order: 2 },
    { url: 'https://example.com/images/samsonite-luggage-3.jpg', order: 3 },

    // LED Desk Lamp
    { url: 'https://example.com/images/led-lamp-1.jpg', order: 1 },
    { url: 'https://example.com/images/led-lamp-2.jpg', order: 2 },
    { url: 'https://example.com/images/led-lamp-3.jpg', order: 3 },

    // Stainless Steel Cookware Set
    { url: 'https://example.com/images/cookware-set-1.jpg', order: 1 },
    { url: 'https://example.com/images/cookware-set-2.jpg', order: 2 },
    { url: 'https://example.com/images/cookware-set-3.jpg', order: 3 },

    // Black Leather Jacket
    { url: 'https://example.com/images/leather-jacket-1.jpg', order: 1 },
    { url: 'https://example.com/images/leather-jacket-2.jpg', order: 2 },
    { url: 'https://example.com/images/leather-jacket-3.jpg', order: 3 },

    // Spin Stationary Bike
    { url: 'https://example.com/images/spin-bike-1.jpg', order: 1 },
    { url: 'https://example.com/images/spin-bike-2.jpg', order: 2 },
    { url: 'https://example.com/images/spin-bike-3.jpg', order: 3 },

    // Bosch Tool Kit
    { url: 'https://example.com/images/bosch-toolkit-1.jpg', order: 1 },
    { url: 'https://example.com/images/bosch-toolkit-2.jpg', order: 2 },
    { url: 'https://example.com/images/bosch-toolkit-3.jpg', order: 3 },

    // Celestron Telescope
    { url: 'https://example.com/images/celestron-telescope-1.jpg', order: 1 },
    { url: 'https://example.com/images/celestron-telescope-2.jpg', order: 2 },
    { url: 'https://example.com/images/celestron-telescope-3.jpg', order: 3 },

    // Casio G-Shock Watch
    { url: 'https://example.com/images/gshock-watch-1.jpg', order: 1 },
    { url: 'https://example.com/images/gshock-watch-2.jpg', order: 2 },
    { url: 'https://example.com/images/gshock-watch-3.jpg', order: 3 },

    // Oster Electric Grill
    { url: 'https://example.com/images/oster-grill-1.jpg', order: 1 },
    { url: 'https://example.com/images/oster-grill-2.jpg', order: 2 },
    { url: 'https://example.com/images/oster-grill-3.jpg', order: 3 },

    // Honeywell Tower Fan
    { url: 'https://example.com/images/honeywell-fan-1.jpg', order: 1 },
    { url: 'https://example.com/images/honeywell-fan-2.jpg', order: 2 },
    { url: 'https://example.com/images/honeywell-fan-3.jpg', order: 3 },

    // Osterizer Blender
    { url: 'https://example.com/images/osterizer-blender-1.jpg', order: 1 },
    { url: 'https://example.com/images/osterizer-blender-2.jpg', order: 2 },
    { url: 'https://example.com/images/osterizer-blender-3.jpg', order: 3 },

    // Inflatable Kayak
    { url: 'https://example.com/images/inflatable-kayak-1.jpg', order: 1 },
    { url: 'https://example.com/images/inflatable-kayak-2.jpg', order: 2 },
    { url: 'https://example.com/images/inflatable-kayak-3.jpg', order: 3 },

    // Wooden Chess Set
    { url: 'https://example.com/images/wooden-chess-1.jpg', order: 1 },
    { url: 'https://example.com/images/wooden-chess-2.jpg', order: 2 },
    { url: 'https://example.com/images/wooden-chess-3.jpg', order: 3 },

    // DJI Mini 2 Drone
    { url: 'https://example.com/images/dji-mini2-1.jpg', order: 1 },
    { url: 'https://example.com/images/dji-mini2-2.jpg', order: 2 },
    { url: 'https://example.com/images/dji-mini2-3.jpg', order: 3 },

    // Nike Air Max Sneakers
    { url: 'https://example.com/images/nike-airmax-1.jpg', order: 1 },
    { url: 'https://example.com/images/nike-airmax-2.jpg', order: 2 },
    { url: 'https://example.com/images/nike-airmax-3.jpg', order: 3 },

    // GoPro Hero 9 Camera
    { url: 'https://example.com/images/gopro-hero9-1.jpg', order: 1 },
    { url: 'https://example.com/images/gopro-hero9-2.jpg', order: 2 },
    { url: 'https://example.com/images/gopro-hero9-3.jpg', order: 3 },

    // Catan Board Game
    { url: 'https://example.com/images/catan-game-1.jpg', order: 1 },
    { url: 'https://example.com/images/catan-game-2.jpg', order: 2 },
    { url: 'https://example.com/images/catan-game-3.jpg', order: 3 },

    // Orthopedic Queen Mattress
    { url: 'https://example.com/images/orthopedic-mattress-1.jpg', order: 1 },
    { url: 'https://example.com/images/orthopedic-mattress-2.jpg', order: 2 },
    { url: 'https://example.com/images/orthopedic-mattress-3.jpg', order: 3 },

    // Black+Decker Electric Oven
    { url: 'https://example.com/images/blackdecker-oven-1.jpg', order: 1 },
    { url: 'https://example.com/images/blackdecker-oven-2.jpg', order: 2 },
    { url: 'https://example.com/images/blackdecker-oven-3.jpg', order: 3 },

    // Apple Watch Series 6
    { url: 'https://example.com/images/apple-watch6-1.jpg', order: 1 },
    { url: 'https://example.com/images/apple-watch6-2.jpg', order: 2 },
    { url: 'https://example.com/images/apple-watch6-3.jpg', order: 3 },

    // Epson Projector
    { url: 'https://example.com/images/epson-projector-1.jpg', order: 1 },
    { url: 'https://example.com/images/epson-projector-2.jpg', order: 2 },
    { url: 'https://example.com/images/epson-projector-3.jpg', order: 3 },
  ],
  categories: [
    { name: 'Musical Instruments', slug: 'musical-instruments' },
    { name: 'Sports & Outdoors', slug: 'sports-outdoors' },
    { name: 'Books', slug: 'books' },
    { name: 'Gaming', slug: 'gaming' },
    { name: 'Electronics', slug: 'electronics' },
    { name: 'Home & Kitchen', slug: 'home-kitchen' },
    { name: 'Tools & Hardware', slug: 'tools-hardware' },
    { name: 'Photography', slug: 'photography' },
    { name: 'Fashion', slug: 'fashion' },
    { name: 'Outdoor & Adventure', slug: 'outdoor-adventure' },
    { name: 'Toys & Games', slug: 'toys-games' },
    { name: 'Health & Fitness', slug: 'health-fitness' },
    { name: 'Office & School Supplies', slug: 'office-school-supplies' },
    { name: 'Furniture', slug: 'furniture' },
    { name: 'Smart Devices', slug: 'smart-devices' },
  ],
  itemCategories: [],
  swaps: [
    {
      message: "Hi! I'm interested in swapping my Nintendo Switch for your Yamaha Acoustic Guitar. Let me know!",
      status: SwapStatusType.PENDING,
    },
    {
      message: "I accept your offer for the Trek mountain bike. When can we meet?",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Sorry, I have to reject the swap for the PlayStation 4 Slim. Thanks anyway!",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "I want to cancel the swap request for the Canon EOS 2000D camera. Please confirm.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "The swap for the Dyson V11 vacuum cleaner is completed. Thanks for the smooth trade!",
      status: SwapStatusType.COMPLETED,
    },
    {
      message: "Is the Samsung Galaxy S21 still available for swapping? Interested in trading my Logitech keyboard.",
      status: SwapStatusType.PENDING,
    },
    {
      message: "I accept your swap offer for the GoPro Hero 9. Let's arrange the delivery.",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Unfortunately, I have to reject the swap for the Casio G-Shock watch.",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "Cancelling my swap request for the Dell XPS 13 laptop due to change of plans.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "Completed swap for the electric grill Oster. Happy with the deal!",
      status: SwapStatusType.COMPLETED,
    },
    {
      message: "Interested in swapping my Bicycle Fixed Spinning for your Bluetooth Sony Headphones.",
      status: SwapStatusType.PENDING,
    },
    {
      message: "I accept your swap offer for the Nintendo Switch. When can we exchange?",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Rejecting the swap for the 'Set de ollas de acero inoxidable' as it's not what I need.",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "Please cancel the swap request for the Kayak inflatable. Changed my mind.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "The swap for the 'Chaqueta de cuero negra' is completed. Thanks for the trade!",
      status: SwapStatusType.COMPLETED,
    },
    {
      message: "Is the PlayStation 4 Slim still available? I want to trade my 'Libro Clean Code'.",
      status: SwapStatusType.PENDING,
    },
    {
      message: "I accept the swap for the 'Mesa de comedor de madera'. Let’s set a pickup date.",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Rejecting the swap for the 'Juego de maletas Samsonite' due to shipping costs.",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "Cancel the swap request for the 'Reloj Casio G-Shock', please.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "Swap completed for the 'Drone DJI Mini 2'. Great experience, thanks!",
      status: SwapStatusType.COMPLETED,
    },
    {
      message: "Interested in swapping my 'Monitor Samsung 27\"' for your 'Teclado mecánico Redragon'.",
      status: SwapStatusType.PENDING,
    },
    {
      message: "Accepting your offer for the 'Cafetera Nespresso'. Let’s arrange delivery.",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Sorry, rejecting the swap for the 'Lámpara de escritorio LED'.",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "Cancel my swap for the 'Juego de mesa Catan'. Found another option.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "Completed the swap for the 'Colchón ortopédico matrimonial'. Thanks!",
      status: SwapStatusType.COMPLETED,
    },
    {
      message: "Can I trade my 'Zapatillas Nike Air Max' for your 'Smartwatch Apple Watch Series 6'?",
      status: SwapStatusType.PENDING,
    },
    {
      message: "Accepting swap for 'Smartphone Samsung Galaxy S21'. Looking forward to the trade.",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Rejecting the swap for 'Bicicleta de montaña Trek' due to condition concerns.",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "Cancel swap request for 'Parrilla eléctrica Oster'. No longer interested.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "Completed swap for 'Licuadora Osterizer'. Happy with the transaction.",
      status: SwapStatusType.COMPLETED,
    },
    {
      message: "Interested in swapping my 'Silla gamer DXRacer' for your 'Patineta profesional'.",
      status: SwapStatusType.PENDING,
    },
    {
      message: "I accept your swap offer for the 'Juego de vinilos clásicos'.",
      status: SwapStatusType.ACCEPTED,
    },
    {
      message: "Rejecting swap for 'Mesa de comedor de madera'. Too big for my space.",
      status: SwapStatusType.REJECTED,
    },
    {
      message: "Please cancel my swap request for the 'Telescopio Celestron'.",
      status: SwapStatusType.CANCELLED,
    },
    {
      message: "Swap completed for the 'Kit de herramientas Bosch'. Thanks a lot!",
      status: SwapStatusType.COMPLETED,
    },
  ],
  notifications: [
    {
      title: "New Swap Request",
      body: "JohnDoe wants to swap their Nintendo Switch with your Yamaha Acoustic Guitar.",
      read: false,
    },
    {
      title: "Swap Request Accepted",
      body: "MahrieCarie accepted your swap request for the Trek Mountain Bike.",
      read: false,
    },
    {
      title: "Swap Request Rejected",
      body: "CatNip rejected your swap offer for the PlayStation 4 Slim.",
      read: true,
    },
    {
      title: "Swap Cancelled",
      body: "MrDog cancelled the swap request for the Canon EOS 2000D.",
      read: false,
    },
    {
      title: "Swap Completed",
      body: "You have successfully completed the swap for the Dyson V11 vacuum cleaner.",
      read: true,
    },
    {
      title: "New Message in Swap",
      body: "ScrapyDoo sent you a message about the swap for the Samsung Galaxy S21.",
      read: false,
    },
    {
      title: "Swap Request Expired",
      body: "The swap request for the GoPro Hero 9 has expired due to no response.",
      read: true,
    },
    {
      title: "New Follower",
      body: "MrScoobyDoo started following you.",
      read: false,
    },
    {
      title: "Item Listed",
      body: "You listed a new item: PlayStation 4 Slim.",
      read: true,
    },
    {
      title: "Item Updated",
      body: "Your listing for the Nintendo Switch has been updated.",
      read: true,
    },
    {
      title: "Review Received",
      body: "You received a new review from MrGoofy: \"Great trade, very friendly!\"",
      read: false,
    },
    {
      title: "System Notification",
      body: "Maintenance scheduled for tomorrow from 2 AM to 4 AM. Service might be interrupted.",
      read: false,
    },
    {
      title: "Password Changed",
      body: "Your password was successfully changed.",
      read: true,
    },
    {
      title: "Swap Reminder",
      body: "Don't forget to confirm the swap for the Yamaha Acoustic Guitar tomorrow.",
      read: false,
    },
    {
      title: "New Swap Request",
      body: "DogEnjoyer wants to swap their Logitech keyboard for your Samsung Galaxy S21.",
      read: false,
    },
    {
      title: "Swap Request Accepted",
      body: "MrCatDog accepted your swap for the GoPro Hero 9.",
      read: false,
    },
    {
      title: "Swap Request Rejected",
      body: "PetThatDawg rejected your swap offer for the Casio G-Shock watch.",
      read: true,
    },
    {
      title: "Swap Cancelled",
      body: "ScrapyDoo cancelled the swap request for the Dell XPS 13 laptop.",
      read: false,
    },
    {
      title: "Swap Completed",
      body: "You have successfully completed the swap for the Drone DJI Mini 2.",
      read: true,
    },
    {
      title: "New Message in Swap",
      body: "TomTheCat sent you a message regarding the swap for the Electric Grill Oster.",
      read: false,
    },
    {
      title: "New Follower",
      body: "JerryTheMice started following you.",
      read: false,
    },
    {
      title: "Item Removed",
      body: "Your listing for the Kayak Inflatable has been removed.",
      read: true,
    },
    {
      title: "Review Received",
      body: "You received a new review from JDoe: \"Excellent condition and fast shipping!\"",
      read: false,
    },
    {
      title: "System Update",
      body: "New features added to the swap platform. Check them out!",
      read: false,
    },
    {
      title: "Password Reset",
      body: "A password reset request was made on your account.",
      read: true,
    },
    {
      title: "Swap Reminder",
      body: "Please review the swap details for the Logitech keyboard before tomorrow.",
      read: false,
    },
  ],
  reviews: [
    {
      rating: 5,
      comment: "Great trade! The Nintendo Switch was exactly as described, and the Yamaha guitar is fantastic.",
    },
    {
      rating: 4,
      comment: "The Dyson vacuum is almost new, very happy with the swap. Communication was smooth.",
    },
    {
      rating: 5,
      comment: "Swap for the Drone DJI Mini 2 went perfectly. Highly recommend trading with this user!",
    },
    {
      rating: 3,
      comment: "The swap was okay, but the GoPro Hero 9 had some scratches not mentioned in the description.",
    },
    {
      rating: 5,
      comment: "Excellent condition PlayStation 4 Slim received. Fast and friendly swap process.",
    },
  ]
}