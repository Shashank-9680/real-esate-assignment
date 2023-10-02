const properties = [
  {
    id: 1,
    title: "Luxury Apartment in New York",
    description: "A stunning apartment with a great view.",
    price: "$300/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: 2,
    title: "Cozy Studio in City 2",
    description: "A small studio with all the amenities you need.",
    price: "$100/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Spacious Villa in City 3",
    description: "A beautiful villa with a private pool.",
    price: "$500/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Downtown Loft in City 4",
    description: "A stylish loft in the heart of the city.",
    price: "$250/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "Mountain Retreat in City 1",
    description: "A peaceful cabin in the mountains.",
    price: "$150/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "Beachfront Condo in City 2",
    description: "Enjoy the beach from your doorstep.",
    price: "$200/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    title: "Historic Mansion in City 3",
    description: "Step back in time in this grand mansion.",
    price: "$400/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    title: "Modern Studio in City 4",
    description: "A sleek studio with city views.",
    price: "$120/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "Cozy Cabin in City 1",
    description: "Escape to a rustic cabin in the woods.",
    price: "$80/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    title: "Downtown Penthouse in City 2",
    description: "Luxury living in the heart of the city.",
    price: "$350/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    title: "Lakefront Cottage in City 3",
    description: "Relax by the lake in this charming cottage.",
    price: "$180/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    title: "Ski Chalet in City 4",
    description: "Hit the slopes from your front door.",
    price: "$250/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    title: "City Center Loft in City 1",
    description: "Live the city life in style.",
    price: "$220/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 14,
    title: "Riverside Retreat in City 2",
    description: "Stay near the river for a peaceful getaway.",
    price: "$140/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 15,
    title: "Historic Inn in City 3",
    description: "Experience history in this charming inn.",
    price: "$190/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 16,
    title: "Chic Apartment in City 4",
    description: "A stylish apartment in the city center.",
    price: "$280/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 17,
    title: "Tranquil Retreat in City 1",
    description: "Find peace in a serene location.",
    price: "$120/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 18,
    title: "Beach House in City 2",
    description: "Enjoy a beachside vacation.",
    price: "$220/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 19,
    title: "Country Cottage in City 3",
    description: "Cozy cottage with countryside views.",
    price: "$160/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 20,
    title: "City View Penthouse in City 4",
    description: "Penthouse with panoramic city views.",
    price: "$400/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 21,
    title: "Secluded Cabin in City 1",
    description: "A secluded cabin in the woods.",
    price: "$90/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 22,
    title: "Lakeside Retreat in City 2",
    description: "Retreat by the tranquil lakeside.",
    price: "$180/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 23,
    title: "Grand Estate in City 3",
    description: "An opulent estate with beautiful gardens.",
    price: "$600/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 24,
    title: "Urban Studio in City 4",
    description: "A trendy studio in the city.",
    price: "$130/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 25,
    title: "Rustic Cabin in City 1",
    description: "A charming cabin in the forest.",
    price: "$100/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 26,
    title: "Oceanfront Villa in City 2",
    description: "Villa with stunning ocean views.",
    price: "$350/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 27,
    title: "Colonial Mansion in City 3",
    description: "Experience colonial-era luxury.",
    price: "$450/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 28,
    title: "Skyline View Apartment in City 4",
    description: "Apartment with breathtaking skyline views.",
    price: "$270/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 29,
    title: "Secluded Cottage in City 1",
    description: "A quiet cottage in a secluded location.",
    price: "$110/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 30,
    title: "Beach Bungalow in City 2",
    description: "A cozy bungalow near the beach.",
    price: "$160/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 31,
    title: "Elegant Manor in City 3",
    description: "An elegant manor in a picturesque setting.",
    price: "$500/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 32,
    title: "Downtown Condo in City 4",
    description: "Condo in the heart of the bustling city.",
    price: "$220/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 33,
    title: "Log Cabin in City 1",
    description: "A classic log cabin in a serene location.",
    price: "$130/night",
    city: "City 1",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 34,
    title: "Ocean View House in City 2",
    description: "House with breathtaking ocean views.",
    price: "$280/night",
    city: "City 2",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 35,
    title: "Historic Townhouse in City 3",
    description: "Stay in a historic townhouse with character.",
    price: "$190/night",
    city: "City 3",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 36,
    title: "Charming Loft in City 4",
    description: "A charming loft with city views.",
    price: "$160/night",
    city: "City 4",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  // You can add more properties if needed
];

export default properties;
