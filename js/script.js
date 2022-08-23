

function getPlayerNameList(playerList) {
    const getPlayerName = document.getElementById(playerList);
    const player = getPlayerName.innerText;
    const getLi = document.getElementById('playersList');
    const li = document.createElement('li');
    getLi.appendChild(li);
    li.innerText = player;
    return player;
}

// selectButton

document.getElementById('one').addEventListener('click', function () {
    getPlayerNameList("playerName1")
    document.getElementById('one').disabled = true;
});

document.getElementById('two').addEventListener('click', function () {
    getPlayerNameList("playerName2")
    document.getElementById('two').disabled = true;
});

document.getElementById('three').addEventListener('click', function () {
    getPlayerNameList("playerName3")
    document.getElementById('three').disabled = true;
});
// four
document.getElementById('four').addEventListener('click', function () {
    getPlayerNameList("playerName4")
    document.getElementById('four').disabled = true;
});

document.getElementById('five').addEventListener('click', function () {
    getPlayerNameList("playerName5")
    document.getElementById('five').disabled = true;
});

document.getElementById('six').addEventListener('click', function () {
    getPlayerNameList("playerName6")
    document.getElementById('six').disabled = true;
});

document.getElementById('seven').addEventListener('click', function () {
    getPlayerNameList("playerName7")
    document.getElementById('seven').disabled = true;
});

document.getElementById('eight').addEventListener('click', function () {
    getPlayerNameList("playerName8")
    document.getElementById('eight').disabled = true;
});

document.getElementById('nine').addEventListener('click', function () {
    getPlayerNameList("playerName9")
    document.getElementById('nine').disabled = true;
});

// .............common js 

function getInputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    inputField.value = '';
    return inputValue;
}

function Status(elements) {
    const CostStatus = document.getElementById(elements);
    const CostStatusString = CostStatus.innerText;
    const perCost = parseInt(CostStatusString);
    return perCost;
}
function setTextById(textId, newValue) {
    const textElementDeposit = document.getElementById(textId);
    textElementDeposit.innerText = newValue;
}


document.getElementById('totalCostForPlayers').addEventListener('click', function getCostTotal() {
    const perPlayerCost = getInputFieldValue('perPlayerPrice');
    const totalCostForPlayer = perPlayerCost * 5;


    const setTotalCostForPlayer = document.getElementById('totalCostForPlayer');
    setTotalCostForPlayer.innerText = totalCostForPlayer;

    const getCost = parseInt(setTotalCostForPlayer.innerText);
    perPlayerCost.value = '';
    return getCost;

});

document.getElementById('total-cost-calculator').addEventListener('click', function () {
    const getManagerCost = getInputFieldValue('manager-field');
    const getCouchCost = getInputFieldValue('couch-field');

    const totalCostForAll = getManagerCost + getCouchCost;

    const setTotalCostForAll = document.getElementById('total-cost-for-all');
    const total = setTotalCostForAll.innerText;

    setTotalCostForAll.innerText = totalCostForAll;





    getManagerCost.value = '';
    getCouchCost.value = '';
})
