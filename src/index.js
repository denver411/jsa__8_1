import Bowman from './js/Character/instances/Bowman';
import Zombie from './js/Character/instances/Zombie';
import Magician from './js/Character/instances/Magician';
import Team from './js/Team/Team';

const bowman1 = new Bowman('1');
const bowman2 = new Bowman('2');
const zombie1 = new Zombie('3');
const zombie2 = new Zombie('4');
const zombie3 = new Zombie('5');
const magician = new Magician('6');

const team = new Team();
team.add(magician);
team.add(bowman2);

team.addAll(bowman1, bowman2, {}, zombie1, zombie2, zombie3, magician, zombie2, magician, 'ololo');
const teamContains = team.toArray();

console.log(team, teamContains);
