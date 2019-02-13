import Zombie from '../../src/js/Character/instances/Zombie';

it('Создается персонаж с классом Zombie и заданным именем', () => {
  const zombie = new Zombie('Zombie');

  expect(zombie.name).toBe('Zombie');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.level).toBe(1);
  expect(zombie.health).toBe(100);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
