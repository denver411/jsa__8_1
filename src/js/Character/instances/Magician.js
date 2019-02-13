import Character from '../Character';

/**
 *  Класс персонажа Magician
 *
 * @param {string} name - Имя персонажа
 *
 */

class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;
