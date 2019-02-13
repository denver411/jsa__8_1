import Bowman from '../../src/js/Character/instances/Bowman';
import Zombie from '../../src/js/Character/instances/Zombie';
import Magician from '../../src/js/Character/instances/Magician';
import Team from '../../src/js/Team/Team';

describe('Создание команды', () => {
  it('Создается команда с классом Team и заданным именем', () => {
    const team = new Team('DreamTeam');

    expect(team.name).toBe('DreamTeam');
  });

  it('Создается команда с классом Team c именем по умолчанию', () => {
    const team = new Team();

    expect(team.name).toBe('Just a Team');
  });
});

describe('Добавление персонажей команды по одному', () => {
  it('Добавляется новый персонаж в команду', () => {
    const magician = new Magician('Merlin');
    const team = new Team();
    team.add(magician);

    expect(team.characters.has(magician)).toBeTruthy();
  });

  it('Добавляется новый персонаж только класса Character', () => {
    const magician = { name: 'Merlin' };
    const team = new Team();
    team.add(magician);

    expect(team.characters.has(magician)).toBeFalsy();
  });

  it('Добавляется не более 5 персонажей в команду', () => {
    const bowman1 = new Bowman('1');
    const bowman2 = new Bowman('2');
    const zombie1 = new Zombie('3');
    const zombie2 = new Zombie('4');
    const zombie3 = new Zombie('5');
    const magician = new Magician('6');
    const team = new Team();

    team.add(magician);
    team.add(bowman1);
    team.add(bowman2);
    team.add(zombie1);
    team.add(zombie2);
    team.add(zombie3);

    expect(team.characters.has(zombie2)).toBeTruthy();
    expect(team.characters.has(zombie3)).toBeFalsy();
    expect(team.characters.size).toBe(5);
  });

  it('Повторное добавление персонажа генерирует ошибку и не происходит', () => {
    const magician = new Magician('Merlin');
    const team = new Team();

    team.add(magician);
    try {
      team.add(magician);
    } catch (e) {
      expect(e).toEqual(Error('Такой персонаж уже существует в команде'));
    }

    expect(team.characters.size).toBe(1);
  });
});

describe('Групповое добавление персонажей в команду', () => {
  it('Добавляется группа персонажей в команду', () => {
    const bowman1 = new Bowman('1');
    const bowman2 = new Bowman('2');
    const zombie1 = new Zombie('3');
    const zombie2 = new Zombie('4');
    const team = new Team();
    team.addAll(bowman1, bowman2, zombie1, zombie2);

    expect(team.characters.has(zombie2)).toBeTruthy();
    expect(team.characters.size).toBe(4);
  });

  it('Добавляются новые персонажи только класса Character', () => {
    const magician = { name: 'Merlin' };
    const bowman1 = new Bowman('2');
    const zombie1 = new Zombie('3');
    const team = new Team();
    team.addAll(magician, bowman1, zombie1, 'Аристарх Иванович');

    expect(team.characters.has(magician)).toBeFalsy();
    expect(team.characters.size).toBe(2);
  });

  it('Добавляется не более 5 персонажей в команду', () => {
    const bowman1 = new Bowman('1');
    const bowman2 = new Bowman('2');
    const zombie1 = new Zombie('3');
    const zombie2 = new Zombie('4');
    const zombie3 = new Zombie('5');
    const magician = new Magician('6');
    const team = new Team();

    team.addAll(magician, bowman1, bowman2, zombie1, zombie2, zombie3);
    team.addAll(bowman1, bowman2);

    expect(team.characters.has(zombie2)).toBeTruthy();
    expect(team.characters.has(zombie3)).toBeFalsy();
    expect(team.characters.size).toBe(5);
  });

  it('Повторное добавление персонажа не происходит', () => {
    const magician = new Magician('Merlin');
    const team = new Team();

    team.addAll(magician, magician, magician);
    expect(team.characters.size).toBe(1);
  });
});

describe('Конвертация команды в массив', () => {
  it('Происходит конвертация команды в массив', () => {
    const bowman1 = new Bowman('1');
    const bowman2 = new Bowman('2');
    const zombie1 = new Zombie('3');
    const zombie2 = new Zombie('4');
    const team = new Team();

    team.addAll(bowman1, bowman2, zombie1, zombie2);
    const teamArray = team.toArray();

    expect(Array.isArray(teamArray)).toBeTruthy();
    expect(teamArray).toContain(zombie2);
  });

  it('При отсутсвии персонажей в команде возвращается пустой массив', () => {
    const team = new Team();
    const teamArray = team.toArray();


    expect(Array.isArray(teamArray)).toBeTruthy();
    expect(teamArray.length).toBeFalsy();
  });
});
