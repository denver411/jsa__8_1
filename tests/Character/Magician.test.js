import Magician from '../../src/js/Character/instances/Magician';

it('Создается персонаж с классом Magician и заданным именем', () => {
  const magician = new Magician('Magician');

  expect(magician.name).toBe('Magician');
  expect(magician.type).toBe('Magician');
  expect(magician.level).toBe(1);
  expect(magician.health).toBe(100);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});
