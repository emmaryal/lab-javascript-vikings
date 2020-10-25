// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    var vikingIndex = math.floor.random(this.vikingArmy.length());
    let vikingAttack = this.vikingArmy[vikingIndex].attack();
    let saxonDamage = this.saxonArmy[vikingIndex].receiveDamage(vikingAttack);
    //remove from the array any viking who has health of zero
    if (saxon.health === 0) {
      this.saxonArmy.pop();
    }
    return saxonDamage;
  }

  saxonAttack() {
    var saxonIndex = math.floor.random(this.saxonArmy.length());
    let saxonAttack = this.saxonArmy[saxonIndex].attack();
    let vikingDamage = this.vikingArmy[saxonIndex].receiveDamage(saxonAttack);
    //remove from the array any viking who has health of zero
    if (this.vikingArmy.health.includes(0)) {
      this.vikingArmy.pop();
    }
    return vikingDamage;
  }

  showStatus() {
    //should return "Vikings have won the war of the century!", if the Saxons array is empty
    if (this.saxonArmy === []) {
      return "Vikings have won the war of the century!";
    }
    // if the Vikings array is empty should return "Saxons have fought for their lives and survived another day..."
    else if (this.vikingArmy === []) {
      return "Saxons have fought for their lives and survived another day...";
    }
    //should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons
    else if (this.saxonArmy !== [] && this.vikingArmy !== []) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
