import Character from '../Character';

/**
 *  Класс персонажа Daemon
 *
 * @param {string} name - Имя персонажа
 *
 */

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

export default Daemon;
