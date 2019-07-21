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

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let _listeners = {};

 class EventEmitter {
  constructor() {}

  on(eventName, callback) {
    if (_listeners[eventName] === undefined) _listeners[eventName] = [];
    _listeners[eventName].push(callback);
  }
  
  emit(eventName) {
    if (_listeners[eventName] !== undefined)
      _listeners[eventName].forEach(callback => callback());
    else throw new RangeError(`${eventName} don't have any listeners to call.`);
  }
  
  off(eventName, callback) {
    let listeners = _listeners[eventName];
    if (listeners !== undefined) {
      const indexOfCallbackToRemove = listeners.indexOf(callback);
      if (indexOfCallbackToRemove !== -1) {
        listeners[indexOfCallbackToRemove] = listeners[listeners.length - 1];
        listeners.pop();
      } else
        throw new RangeError(
          `${callback.name} wasn't listening to ${eventName}.`
        );
    } else throw new RangeError(`${eventName} has no listeners to remove.`);
  }
}