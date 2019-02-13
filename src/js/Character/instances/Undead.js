import Character from '../Character';
/**
 *  Класс персонажа Undead
 *
 * @param {string} name - Имя персонажа
 *
 */

class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export default Undead;
