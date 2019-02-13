import Character from '../Character';

/**
 *  Класс персонажа Zombie
 *
 * @param {string} name - Имя персонажа
 *
 */

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export default Zombie;
