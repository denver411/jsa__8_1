import Swordsman from '../../src/js/Character/instances/Swordsman';

it('Создается персонаж с классом Swordsman и заданным именем', () => {
  const swordsman = new Swordsman('Swordsman');

  expect(swordsman.name).toBe('Swordsman');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.level).toBe(1);
  expect(swordsman.health).toBe(100);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});
