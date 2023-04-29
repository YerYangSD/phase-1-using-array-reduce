const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulater, currentValue) => {
    let result = accumulater + currentValue;
    return result;
}, 0)