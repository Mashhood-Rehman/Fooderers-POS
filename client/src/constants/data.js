import { Images } from "../assets/Images";

export const popularDishes = [
    {
        id: 1,
        // image: butterChicken,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 2,
        // image: palakPaneer,
        name: 'Palak Paneer',
        numberOfOrders: 190,
    },
    {
        id: 3,
        // image: biryani,
        name: 'Hyderabadi Biryani',
        numberOfOrders: 300,
    },
    {
        id: 4,
        // image: masalaDosa,
        name: 'Masala Dosa',
        numberOfOrders: 220,
    },
    {
        id: 5,
        // image: choleBhature,
        name: 'Chole Bhature',
        numberOfOrders: 270,
    },
    {
        id: 6,
        // image: rajmaChawal,
        name: 'Rajma Chawal',
        numberOfOrders: 180,
    },
    {
        id: 7,
        // image: paneerTikka,
        name: 'Paneer Tikka',
        numberOfOrders: 210,
    },
    {
        id: 8,
        // image: gulabJamun,
        name: 'Gulab Jamun',
        numberOfOrders: 310,
    },
    {
        id: 9,
        // image: pooriSabji,
        name: 'Poori Sabji',
        numberOfOrders: 140,
    },
    {
        id: 10,
        // image: roganJosh,
        name: 'Rogan Josh',
        numberOfOrders: 160,
    },
];


export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 }
];

export const startersItem = [
    {
        id: 1,
        name: "Paneer Tikka",
        price: 250,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Chicken Tikka",
        price: 300,
        category: "Non-Vegetarian"
    },
    {
        id: 3,
        name: "Tandoori Chicken",
        price: 350,
        category: "Non-Vegetarian"
    },
    {
        id: 4,
        name: "Samosa",
        price: 100,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Aloo Tikki",
        price: 120,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Hara Bhara Kebab",
        price: 220,
        category: "Vegetarian"
    }
];

export const mainCourse = [
    {
        id: 1,
        name: "Butter Chicken",
        price: 400,
        category: "Non-Vegetarian"
    },
    {
        id: 2,
        name: "Paneer Butter Masala",
        price: 350,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Chicken Biryani",
        price: 450,
        category: "Non-Vegetarian"
    },
    {
        id: 4,
        name: "Dal Makhani",
        price: 180,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Kadai Paneer",
        price: 300,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Rogan Josh",
        price: 500,
        category: "Non-Vegetarian"
    }
];

export const beverages = [
    {
        id: 1,
        name: "Masala Chai",
        price: 50,
        category: "Hot"
    },
    {
        id: 2,
        name: "Lemon Soda",
        price: 80,
        category: "Cold"
    },
    {
        id: 3,
        name: "Mango Lassi",
        price: 120,
        category: "Cold"
    },
    {
        id: 4,
        name: "Cold Coffee",
        price: 150,
        category: "Cold"
    },
    {
        id: 5,
        name: "Fresh Lime Water",
        price: 60,
        category: "Cold"
    },
    {
        id: 6,
        name: "Iced Tea",
        price: 100,
        category: "Cold"
    }
];

export const soups = [
    {
        id: 1,
        name: "Tomato Soup",
        price: 120,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Sweet Corn Soup",
        price: 130,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Hot & Sour Soup",
        price: 140,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Chicken Clear Soup",
        price: 160,
        category: "Non-Vegetarian"
    },
    {
        id: 5,
        name: "Mushroom Soup",
        price: 150,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Lemon Coriander Soup",
        price: 110,
        category: "Vegetarian"
    }
];



export const ordersData = [
    // All
    {
        category: "All",
        image: Images.logo,
        customerName: "John Doe",
        tableNo: 1,
        date: "2025-06-22",
        price: 2500,
        items: 3
    },
    {
        category: "All",
        image: Images.logo,
        customerName: "Alice Smith",
        tableNo: 2,
        date: "2025-06-21",
        price: 1800,
        items: 2
    },
    {
        category: "All",
        image: Images.logo,
        customerName: "Mohammad Rizwan",
        tableNo: 5,
        date: "2025-06-20",
        price: 3100,
        items: 4
    },
    {
        category: "All",
        image: Images.logo,
        customerName: "Emma Johnson",
        tableNo: 3,
        date: "2025-06-22",
        price: 1450,
        items: 1
    },

    // Ready
    {
        category: "Ready",
        image: Images.logo,
        customerName: "David Warner",
        tableNo: 6,
        date: "2025-06-22",
        price: 2750,
        items: 3
    },
    {
        category: "Ready",
        image: Images.logo,
        customerName: "Sara Lee",
        tableNo: 7,
        date: "2025-06-22",
        price: 1600,
        items: 2
    },
    {
        category: "Ready",
        image: Images.logo,
        customerName: "Imran Ali",
        tableNo: 2,
        date: "2025-06-21",
        price: 1900,
        items: 3
    },
    {
        category: "Ready",
        image: Images.logo,
        customerName: "Fatima Noor",
        tableNo: 1,
        date: "2025-06-22",
        price: 2200,
        items: 4
    },

    // In Progress
    {
        category: "In Progress",
        image: Images.logo,
        customerName: "Liam Brown",
        tableNo: 8,
        date: "2025-06-22",
        price: 3200,
        items: 5
    },
    {
        category: "In Progress",
        image: Images.logo,
        customerName: "Zara Khan",
        tableNo: 4,
        date: "2025-06-21",
        price: 2050,
        items: 3
    },
    {
        category: "In Progress",
        image: Images.logo,
        customerName: "Noah Wilson",
        tableNo: 9,
        date: "2025-06-22",
        price: 1500,
        items: 2
    },
    {
        category: "In Progress",
        image: Images.logo,
        customerName: "Aisha Ahmed",
        tableNo: 5,
        date: "2025-06-20",
        price: 1850,
        items: 2
    },

    // Completed
    {
        category: "Completed",
        image: Images.logo,
        customerName: "Muneeb Khan",
        tableNo: 1,
        date: "2025-06-20",
        price: 3000,
        items: 4
    },
    {
        category: "Completed",
        image: Images.logo,
        customerName: "Sophia Malik",
        tableNo: 6,
        date: "2025-06-19",
        price: 2100,
        items: 3
    },
    {
        category: "Completed",
        image: Images.logo,
        customerName: "Bilal Sheikh",
        tableNo: 3,
        date: "2025-06-19",
        price: 1750,
        items: 2
    },
    {
        category: "Completed",
        image: Images.logo,
        customerName: "Olivia Grace",
        tableNo: 2,
        date: "2025-06-18",
        price: 2600,
        items: 3
    }
];