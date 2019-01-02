let restaurant = {
    name: "August",
    capacity: 75,
    guestCount: 5,
    checkAvailability: function (partySize) {
        let seatsLeft = this.capacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (partySize) {
        this.guestCount += partySize;
    },
    removeParty: (partySize) => {
        this.guestCount -= partySize;
    }
}

// restaurant.seatParty = (partySize) => {
//     if (this.checkAvailability(partySize)) {
//         this.guestCount += partySize;
//     } else {
//         console.log(`I'm sorry, there are only ${this.capacity - this.guestCount} seats available`);
//     }
// }

// restaurant.removeParty = (partySize) => {
//     this.guestCount -= partySize;
// }

// let status = restaurant.checkAvailability(5)

restaurant.seatParty(70);

console.log(restaurant);
restaurant.removeParty(25);
restaurant.seatParty(30);