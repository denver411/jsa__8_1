import Character from '../../src/js/Character/Character';
import Zombie from '../../src/js/Character/instances/Zombie';

describe('Создание персонажа', () => {
  it('Создается персонаж с классом Character и заданным именем', () => {
    const character = new Character('Luntic');

    expect(character.name).toBe('Luntic');
    expect(character.level).toBe(1);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  it('Создается персонаж с классом Character c именем по умолчанию', () => {
    const character = new Character();

    expect(character.name).toBe('Just a pawn');
    expect(character.level).toBe(1);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });
});

describe('Повышение уровня', () => {
  it('Уровень живого персонажа повышается', () => {
    const character = new Character();

    character.levelUp();

    expect(character.level).toBe(2);
  });

  it('Уровень убитого персонажа не повышается', () => {
    const character = new Character();

    character.health = 0;
    character.levelUp();

    expect(character.level).toBe(1);
    expect(character.levelUp()).toEqual(Error('Можно повысить класс только живого персонажа'));
  });
});

describe('Режим powerMode', () => {
  it('По умолчанию режим powerMode не активен', () => {
    const character = new Character();

    expect(character.powerMode).toBe(false);
  });


  it('В режиме powerMode повышаются характеристики персонажа', () => {
    const character = new Zombie('Shown');

    character.powerMode = 1;

    expect(character.health).toBe(200);
    expect(character.attack).toBe(80);
    expect(character.defence).toBe(20);
  });

  it('Проведенная атака не отключает режим', () => {
    const character = new Zombie('Shown');

    character.powerMode = 1;
    character.attackEvent();

    expect(character.powerMode).toBeTruthy();
  });

  it('Повышенные характеристики пропадают после трех атак', () => {
    const character = new Zombie('Shown');

    character.powerMode = 1;
    character.attackEvent();
    character.attackEvent();
    character.attackEvent();

    expect(character.health).toBe(100);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  it('Повторная активация режима не повышает характеристики', () => {
    const character = new Zombie('Shown');

    character.powerMode = 1;
    character.attackEvent();
    character.attackEvent();
    character.attackEvent();
    character.powerMode = 1;

    expect(character.health).toBe(100);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });
});
