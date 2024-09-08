function woodCalculator(chair, table, bed) {
    let chairWoodRequired = 6;
    let tableWoodRequired = 20;
    let bedWoodRequired = 50;

    let woodNeededForChair = chair * chairWoodRequired;
    let woodNeededForTable = table * tableWoodRequired;
    let woodNeededForBed = bed * bedWoodRequired;

    let totalWoodRequired = woodNeededForChair + woodNeededForTable + woodNeededForBed;

    return totalWoodRequired;
}

let output = woodCalculator(6, 1, 1)
console.log(output);