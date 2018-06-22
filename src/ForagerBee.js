class ForagerBee extends Grub{
  constructor(){
    super();
    this.age = 10
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = []; 
    this.forage = function(treasure){
      this.treasureChest.push(treasure);
    }
  }
};
