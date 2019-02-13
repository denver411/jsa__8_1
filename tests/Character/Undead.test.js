import Undead from '../../src/js/Character/instances/Undead';

it('Создается персонаж с классом Undead и заданным именем', () => {
  const undead = new Undead('Undead');

  expect(undead.name).toBe('Undead');
  expect(undead.type).toBe('Undead');
  expect(undead.level).toBe(1);
  expect(undead.health).toBe(100);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});
