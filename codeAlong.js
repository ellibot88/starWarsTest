let anakinAttack = 20;
let obiwanAttack = 30;
let anakinHealth = 100;

if (anakinAttack > obiwanAttack) {
  console.log("High Ground!");
} else if (obiwanAttack > anakinAttack) {
  console.log("Don't try it");
} else {
  console.log("the force is with both of them");
}

// anakinAttack += obiwanAttack;
// obiwanAttack -= anakinAttack;

anakinHealth += 50 - obiwanAttack;
console.log(anakinHealth);

for (let i = 0; i < 5; i++) {
  anakinHealth += 5;
  console.log(anakinHealth);
}

while (anakinHealth > 0) {
  anakinHealth -= obiwanAttack;
  console.log(anakinHealth);
  if (anakinHealth < 0) {
    console.log("he has perished");
  }
}

do {} while (anakinAttack > 5);
