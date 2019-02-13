/**
 *  Базовый класс персонажа
 *
 * @param {string} name - Имя персонажа
 *
 */

class Character {
  constructor(name = 'Just a pawn') {
    this.name = name;
    this.level = 1;
    this._health = 100;
    this._attack = 0;
    this._defence = 0;
    this._powerMode = {
      available: true,
      left: 0,
    };
  }

  get powerMode() {
    return !!this._powerMode.left;
  }

  set powerMode(activate) {
    if (!this._powerMode.available) {
      return new Error('Режим powerMode уже был использован');
    }

    this._powerMode.left = 3;
    this._powerMode.available = false;

    return 'Режим powerMode включен!';
  }

  attackEvent() {
    if (this._powerMode.left) {
      this._powerMode.left -= 1;
    }
  }

  get health() {
    if (this._powerMode.left) {
      return this._health * 2;
    }

    return this._health;
  }

  set health(newProp) {
    this._health = newProp;
  }

  get attack() {
    if (this._powerMode.left) {
      return this._attack * 2;
    }

    return this._attack;
  }

  set attack(newProp) {
    this._attack = newProp;
  }

  get defence() {
    if (this._powerMode.left) {
      return this._defence * 2;
    }

    return this._defence;
  }

  set defence(newProp) {
    this._defence = newProp;
  }

  levelUp() {
    if (!this.health) {
      return new Error('Можно повысить класс только живого персонажа');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;

    return this;
  }
}

export default Character;
