import Character from '../Character';

/**
 *  Класс персонажа Swordsman
 *
 * @param {string} name - Имя персонажа
 *
 */

class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export default Swordsman;
