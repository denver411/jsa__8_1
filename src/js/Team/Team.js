import Character from '../Character/Character';

/**
 *  Kласс команды персонажей
 *
 * @param {string} name - Название команды
 *
 */

class Team {
  constructor(name) {
    this.name = name || 'Just a Team';
    this.characters = new Set();
  }

  /**
 *  Метод добавления персонажа в команду (персонажей в команде не может быть более пяти)
 *
 * @param {Object} character - персонаж (объект класса Character)
 *
 * @throws При попытке добавить в команду персонажа повторно генерируется ошибка
 */

  add(character) {
    if (!(character instanceof Character) || this.characters.size >= 5) return;
    if (this.characters.has(character)) throw new Error('Такой персонаж уже существует в команде');

    this.characters.add(character);
  }

  /**
 *  Метод добавления нескольких персонажей в команду (персонажей в команде не может быть более пяти)
 *
 * @param {Object} newCharacters - массив персонаж (объектов класса Character)
 */

  addAll(...newCharacters) {
    if (!newCharacters || this.characters.size >= 5) return;

    newCharacters.forEach((item) => {
      if (!(item instanceof Character) || this.characters.size >= 5) return;
      this.characters.add(item);
    });
  }

  /**
 *  Метод конвертации this.characters из Set в массив
 *
 */

  toArray() {
    const setToArray = [];
    this.characters.forEach(item => setToArray.push(item));

    return setToArray;
  }
}

export default Team;
