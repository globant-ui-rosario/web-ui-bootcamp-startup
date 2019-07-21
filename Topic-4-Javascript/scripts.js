let listener = {};

class EventEmitter {
  constructor() {}

  on(eventName, callback) {
    if (listener[eventName] === undefined) listener[eventName] = [];
    listener[eventName].push(callback);
  }
  
  emit(eventName) {
    if (listener[eventName] !== undefined)
      listener[eventName].forEach(callback => callback());
    else throw new RangeError(`${eventName} no listeners to call.`);
  }
  
  off(eventName, callback) {
    let listeners = listener[eventName];
    if (listeners !== undefined) {
      const indexOfCallbackToRemove = listeners.indexOf(callback);
      if (indexOfCallbackToRemove !== -1) {
        listeners[indexOfCallbackToRemove] = listeners[listeners.length - 1];
        listeners.pop();
      } else
        throw new RangeError(
          `${callback.name} isn't listening to ${eventName}.`
        );
    } else throw new RangeError(`${eventName} no listeners to remove.`);
  }
}

 class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
  }
  play() {
    this.emit('playing');
  }
  pause() {
    this.emit('paused');
  }
  resume() {
    this.emit('resume');
  }
}

const Watchmen = new Movie('Watchmen', 2009, 215);
const Blade = new Movie('Blade Runner 2049', 2017, 164);
const Orange = new Movie('Clockwork orange', 1971, 137);

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}