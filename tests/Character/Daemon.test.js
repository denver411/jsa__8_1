import Daemon from '../../src/js/Character/instances/Daemon';

it('Создается персонаж с классом Daemon и заданным именем', () => {
  const daemon = new Daemon('Daemon');

  expect(daemon.name).toBe('Daemon');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.level).toBe(1);
  expect(daemon.health).toBe(100);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});
