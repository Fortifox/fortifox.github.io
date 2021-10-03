const boat1 = {health: 100, damage: 4};
const boat2 = {health: 40, damage: 15};

const batle = () => {
  let turn1 = boat1.health;
  let turn2 = boat2.health;
  
  while (turn1 > 0 || turn2 > 0) {
    turn1 -= boat2.damage;
    turn2 -= boat1.damage;
    // console.log(turn1,turn2)
  };
  if (turn1 < turn2) {
    console.log('Boat1 win')
  } else if (turn2 < turn1) {
    console.log('Boat2 win')
  };
};
batle();