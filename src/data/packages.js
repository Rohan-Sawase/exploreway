// Static travel package data.
// To add a new package, copy an existing object below, change the "id" to the
// next available number, and update every field.

const packages = [
  {
    id: 1,
    title: "Goa Beach Holiday",
    location: "Goa, India",
    category: "Domestic",
    duration: "3 Days / 2 Nights",
    price: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Enjoy a relaxing beach vacation in Goa with hotel stay, sightseeing, beach visits, and cab support.",
    overview:
      "Goa is one of India's most loved beach destinations, known for its golden shores, laid-back vibe, and vibrant nightlife. This package covers North Goa's best beaches, forts, and markets with comfortable stays and hassle-free transport.",
    itinerary: [
      "Day 1: Arrival in Goa, hotel check-in, beach visit, and leisure time.",
      "Day 2: North Goa sightseeing including forts, beaches, and local markets.",
      "Day 3: Breakfast, checkout, and departure.",
    ],
    inclusions: ["Hotel stay", "Breakfast", "Sightseeing", "Cab support", "Travel assistance"],
    exclusions: ["Flight tickets", "Personal expenses", "Entry tickets", "Lunch and dinner unless mentioned"],
    hotelInfo: "Standard 3-star hotel with breakfast included.",
    bestFor: ["Friends", "Couples", "Family", "Weekend Trip"],
    featured: true,
  },
  {
    id: 2,
    title: "Manali Snow Trip",
    location: "Manali, Himachal Pradesh",
    category: "Adventure",
    duration: "4 Days / 3 Nights",
    price: 10999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description:
      "Experience snow-capped mountains, scenic valleys, and thrilling adventure activities in Manali.",
    overview:
      "Manali offers breathtaking Himalayan views, snow activities in Solang Valley, and a peaceful escape to Old Manali's cafes. Perfect for adventure lovers and honeymooners alike.",
    itinerary: [
      "Day 1: Arrival in Manali, hotel check-in, local market visit.",
      "Day 2: Solang Valley excursion with optional snow activities.",
      "Day 3: Visit Hadimba Temple, Old Manali, and riverside cafes.",
      "Day 4: Breakfast, checkout, and departure.",
    ],
    inclusions: ["Hotel stay", "Breakfast and dinner", "Sightseeing", "Cab support", "Travel assistance"],
    exclusions: ["Flight or train tickets", "Adventure activity charges", "Personal expenses", "Lunch"],
    hotelInfo: "Comfortable 3-star hotel with mountain views.",
    bestFor: ["Couples", "Friends", "Adventure Seekers"],
    featured: true,
  },
  {
    id: 3,
    title: "Kerala Backwater Tour",
    location: "Kerala, India",
    category: "Family",
    duration: "5 Days / 4 Nights",
    price: 15999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cruise through serene backwaters, relax in a houseboat, and explore Kerala's lush greenery.",
    overview:
      "God's Own Country brings together tranquil backwaters, spice plantations, hill stations, and a traditional houseboat stay in Alleppey for an unforgettable family holiday.",
    itinerary: [
      "Day 1: Arrival in Kochi, city tour, hotel check-in.",
      "Day 2: Travel to Munnar, tea garden visit, sightseeing.",
      "Day 3: Munnar to Alleppey, houseboat check-in and overnight stay.",
      "Day 4: Backwater cruise, local village visit, hotel check-in.",
      "Day 5: Breakfast, checkout, and departure.",
    ],
    inclusions: ["Hotel and houseboat stay", "Breakfast", "Sightseeing", "Cab support", "Travel assistance"],
    exclusions: ["Flight tickets", "Personal expenses", "Entry tickets", "Lunch and dinner unless mentioned"],
    hotelInfo: "3-star hotels with one night on a premium houseboat.",
    bestFor: ["Family", "Couples", "Nature Lovers"],
    featured: true,
  },
  {
    id: 4,
    title: "Rajasthan Heritage Tour",
    location: "Jaipur, Udaipur & Jodhpur, Rajasthan",
    category: "Domestic",
    duration: "6 Days / 5 Nights",
    price: 18999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore royal palaces, majestic forts, and vibrant culture across Rajasthan's iconic cities.",
    overview:
      "Travel through the Pink City, the Lake City, and the Blue City to experience Rajasthan's royal heritage, desert culture, and colorful bazaars in one complete circuit.",
    itinerary: [
      "Day 1: Arrival in Jaipur, hotel check-in, local market visit.",
      "Day 2: Amber Fort, City Palace, and Hawa Mahal sightseeing.",
      "Day 3: Drive to Udaipur, evening Lake Pichola boat ride.",
      "Day 4: Udaipur City Palace and garden sightseeing, drive to Jodhpur.",
      "Day 5: Mehrangarh Fort and Jodhpur city sightseeing.",
      "Day 6: Breakfast, checkout, and departure.",
    ],
    inclusions: ["Hotel stay", "Breakfast", "Sightseeing", "Cab support", "Travel assistance"],
    exclusions: ["Flight or train tickets", "Personal expenses", "Entry tickets", "Lunch and dinner unless mentioned"],
    hotelInfo: "Heritage-style 3-star hotels across all three cities.",
    bestFor: ["Family", "Couples", "Culture Lovers"],
    featured: false,
  },
  {
    id: 5,
    title: "Dubai Luxury Tour",
    location: "Dubai, UAE",
    category: "International",
    duration: "5 Days / 4 Nights",
    price: 45999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Indulge in a premium Dubai getaway with desert safari, city tours, and iconic landmarks.",
    overview:
      "From the Burj Khalifa to a thrilling desert safari, this Dubai package blends luxury shopping, modern architecture, and Arabian adventure into one seamless international trip.",
    itinerary: [
      "Day 1: Arrival in Dubai, hotel check-in, Marina walk.",
      "Day 2: Burj Khalifa, Dubai Mall, and Fountain show.",
      "Day 3: Desert safari with BBQ dinner and cultural show.",
      "Day 4: Palm Jumeirah and Old Dubai city tour.",
      "Day 5: Breakfast, checkout, and departure.",
    ],
    inclusions: ["4-star hotel stay", "Breakfast", "Desert safari", "Airport transfers", "Travel assistance"],
    exclusions: ["Flight tickets", "Visa charges", "Personal expenses", "Lunch and dinner unless mentioned"],
    hotelInfo: "4-star hotel near Dubai Marina or Downtown Dubai.",
    bestFor: ["Couples", "Family", "Luxury Travelers"],
    featured: true,
  },
  {
    id: 6,
    title: "Thailand Budget Trip",
    location: "Bangkok & Pattaya, Thailand",
    category: "Budget",
    duration: "5 Days / 4 Nights",
    price: 27999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    description:
      "An affordable international getaway covering Bangkok's city life and Pattaya's beaches.",
    overview:
      "This value-packed Thailand tour covers vibrant Bangkok markets, temples, and Pattaya's coastal fun, making it a great pick for first-time international travelers on a budget.",
    itinerary: [
      "Day 1: Arrival in Bangkok, hotel check-in, city walk.",
      "Day 2: Bangkok city and temple tour.",
      "Day 3: Transfer to Pattaya, beach leisure time.",
      "Day 4: Coral Island tour and water activities.",
      "Day 5: Breakfast, checkout, and departure.",
    ],
    inclusions: ["3-star hotel stay", "Breakfast", "Coral Island tour", "Airport transfers", "Travel assistance"],
    exclusions: ["Flight tickets", "Visa charges", "Personal expenses", "Lunch and dinner unless mentioned"],
    hotelInfo: "3-star hotels in Bangkok and Pattaya.",
    bestFor: ["Friends", "Couples", "Budget Travelers"],
    featured: false,
  },
  {
    id: 7,
    title: "Kashmir Paradise Tour",
    location: "Srinagar, Gulmarg & Pahalgam, Kashmir",
    category: "Honeymoon",
    duration: "5 Days / 4 Nights",
    price: 21999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80",
    description:
      "A dreamy Kashmir escape with houseboat stays, Shikara rides, and snow-capped valleys.",
    overview:
      "Often called Paradise on Earth, Kashmir offers a magical mix of Dal Lake houseboats, cable car rides in Gulmarg, and meadows in Pahalgam, ideal for a romantic honeymoon.",
    itinerary: [
      "Day 1: Arrival in Srinagar, houseboat check-in, Shikara ride.",
      "Day 2: Gulmarg excursion with optional Gondola ride.",
      "Day 3: Pahalgam sightseeing, Betaab Valley visit.",
      "Day 4: Srinagar local sightseeing, Mughal Gardens.",
      "Day 5: Breakfast, checkout, and departure.",
    ],
    inclusions: ["Hotel and houseboat stay", "Breakfast and dinner", "Sightseeing", "Cab support", "Travel assistance"],
    exclusions: ["Flight tickets", "Gondola ticket charges", "Personal expenses", "Lunch"],
    hotelInfo: "3-star hotels plus one night on a deluxe houseboat.",
    bestFor: ["Couples", "Honeymooners"],
    featured: true,
  },
  {
    id: 8,
    title: "Andaman Island Package",
    location: "Port Blair & Havelock, Andaman",
    category: "Luxury",
    duration: "5 Days / 4 Nights",
    price: 32999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover pristine beaches, coral reefs, and turquoise waters on the Andaman Islands.",
    overview:
      "The Andaman Islands offer some of India's most beautiful beaches and coral reefs. This package covers Port Blair's history and Havelock's world-famous Radhanagar Beach.",
    itinerary: [
      "Day 1: Arrival in Port Blair, hotel check-in, Cellular Jail light show.",
      "Day 2: Ferry to Havelock Island, beach leisure time.",
      "Day 3: Radhanagar Beach and water sports at Havelock.",
      "Day 4: Ferry back to Port Blair, Corbyn's Cove Beach.",
      "Day 5: Breakfast, checkout, and departure.",
    ],
    inclusions: ["4-star hotel stay", "Breakfast", "Ferry tickets", "Sightseeing", "Travel assistance"],
    exclusions: ["Flight tickets", "Water sports charges", "Personal expenses", "Lunch and dinner unless mentioned"],
    hotelInfo: "4-star beach-facing resorts in Port Blair and Havelock.",
    bestFor: ["Couples", "Family", "Luxury Travelers"],
    featured: false,
  },
];

export default packages;
