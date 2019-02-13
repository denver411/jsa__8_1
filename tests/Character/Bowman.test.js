import Bowman from '../../src/js/Character/instances/Bowman';

it('Создается персонаж с классом Bowman и заданным именем', () => {
  const bowman = new Bowman('Bowman');

  expect(bowman.name).toBe('Bowman');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.level).toBe(1);
  expect(bowman.health).toBe(100);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});
