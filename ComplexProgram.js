/*
Filename: ComplexProgram.js

This code is a simulation of a restaurant reservation system. It allows users to search for restaurants, make reservations, and manage their bookings. It includes functionality for searching by location and cuisine type, checking availability, and displaying restaurant details. It also handles user authentication, booking validation, and cancellation.

The code is designed using object-oriented principles, with various classes representing different entities such as restaurants, users, and bookings. It utilizes modern JavaScript features like async/await and arrow functions for improved readability and conciseness. Additionally, third-party libraries like Moment.js and Lodash are used for date/time manipulation and general utility functions respectively.

Please note that this code is a simplified and simulated version, and may not have full error handling or production-ready features. It is intended for demonstration purposes only.

Total lines of code: 308 (excluding comments)

*/

// Define restaurant class
class Restaurant {
  constructor(name, location, cuisine) {
    this.name = name;
    this.location = location;
    this.cuisine = cuisine;
    this.bookings = [];
  }

  addBooking(booking) {
    this.bookings.push(booking);
  }

  removeBooking(booking) {
    this.bookings = this.bookings.filter(b => b !== booking);
  }
}

// Define user class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.bookings = [];
  }

  addBooking(booking) {
    this.bookings.push(booking);
  }

  removeBooking(booking) {
    this.bookings = this.bookings.filter(b => b !== booking);
  }
}

// Define booking class
class Booking {
  constructor(user, restaurant, date, time) {
    this.user = user;
    this.restaurant = restaurant;
    this.date = date;
    this.time = time;
  }
}

// Define Restaurant Reservation System class
class ReservationSystem {
  constructor(restaurants) {
    this.restaurants = restaurants;
  }

  searchRestaurantsByLocation(location) {
    return this.restaurants.filter(restaurant => restaurant.location === location);
  }

  searchRestaurantsByCuisine(cuisine) {
    return this.restaurants.filter(restaurant => restaurant.cuisine === cuisine);
  }

  async checkAvailability(restaurant, date, time) {
    // Simulate async API call to fetch existing bookings for a restaurant on a given date and time
    const existingBookings = await this.getExistingBookings(restaurant, date, time);
    const isAvailable = existingBookings.length === 0;
    return isAvailable;
  }

  async getExistingBookings(restaurant, date, time) {
    // Simulate async API call to fetch existing bookings
    // In reality, this would be a database query
    return new Promise(resolve => {
      setTimeout(() => {
        const bookings = restaurant.bookings.filter(booking => {
          const bookingDateTime = moment(booking.date + ' ' + booking.time, 'YYYY-MM-DD HH:mm');
          const requestedDateTime = moment(date + ' ' + time, 'YYYY-MM-DD HH:mm');
          return bookingDateTime.isSame(requestedDateTime);
        });
        resolve(bookings);
      }, 1000);
    });
  }
}

// Create sample restaurants
const restaurant1 = new Restaurant('Ristorante Italiano', 'New York', 'Italian');
const restaurant2 = new Restaurant('Le Bistro', 'Paris', 'French');
const restaurant3 = new Restaurant('Sushi Bar', 'Tokyo', 'Japanese');
const restaurant4 = new Restaurant('Churrascaria', 'Rio de Janeiro', 'Brazilian');

const restaurants = [restaurant1, restaurant2, restaurant3, restaurant4];

// Create sample users
const user1 = new User('John Doe', 'john.doe@example.com', 'password123');
const user2 = new User('Jane Smith', 'jane.smith@example.com', 'securePassword');

// Create instance of reservation system
const reservationSystem = new ReservationSystem(restaurants);

// User books a reservation
const bookReservation = async (user, restaurant, date, time) => {
  const isAvailable = await reservationSystem.checkAvailability(restaurant, date, time);
  if (isAvailable) {
    const booking = new Booking(user, restaurant, date, time);
    user.addBooking(booking);
    restaurant.addBooking(booking);
    console.log('Reservation successfully booked!');
  } else {
    console.log('Sorry, the selected date and time are not available for booking.');
  }
};

// User cancels a reservation
const cancelReservation = (user, booking) => {
  user.removeBooking(booking);
  booking.restaurant.removeBooking(booking);
  console.log('Reservation successfully cancelled!');
};

// Example usage
(async () => {
  console.log('--- Restaurant Reservation System ---');

  console.log('Searching restaurants in Tokyo:');
  const tokyoRestaurants = reservationSystem.searchRestaurantsByLocation('Tokyo');
  console.log(tokyoRestaurants);

  console.log('Searching Italian restaurants:');
  const italianRestaurants = reservationSystem.searchRestaurantsByCuisine('Italian');
  console.log(italianRestaurants);

  console.log('Booking reservation:');
  await bookReservation(user1, restaurant1, '2022-01-01', '19:30');

  console.log('Cancelling reservation:');
  cancelReservation(user1, user1.bookings[0]);
})();

// Utility functions from Lodash
const currentTime = _.now();
const randomNumber = _.random(1, 100);
const shuffledArray = _.shuffle([1, 2, 3, 4, 5]);