function woodCalculator(chairQty, tableQty, bedQty){
    const parChairWood = 3;
    const parTableWood = 10;
    const parBedWood = 50;

    const chairWood = chairQty * parChairWood;
    const tableWood = tableQty * parTableWood;
    const bedWood = bedQty * parBedWood;

    return chairWood + tableWood + bedWood;

}

const chairQty = 1;
const tableQty = 1;
const bedQty = 1;
const totalWood = woodCalculator(chairQty, tableQty, bedQty);
console.log("Wood ",totalWood," cft");