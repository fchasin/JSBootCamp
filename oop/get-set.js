const data = {
  locations: [],
  get location() {
    return this.locations;
  },
  set location(value) {
    this.locations.push(value);
    this._location = value.trim();
  },
};

data.location = 'NOLA';
console.log(data.location);
