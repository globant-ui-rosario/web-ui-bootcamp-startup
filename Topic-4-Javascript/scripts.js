class Movie {
  constructor(name, year, duration) {
    this.title = name;
    this.year = year;
    this.duration = duration;
  }
  play() {}
  pause() {}
  resume() {}
}

const Watchmen = new Movie('Watchmen', 2009, 215);
const Blade = new Movie('Blade Runner 2049', 2017, 164);
const Orange = new Movie('Clockwork orange', 1971, 137);
