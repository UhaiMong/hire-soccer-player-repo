

document.getElementById('one').addEventListener('click', function () {
    const getPlayerName = document.getElementById('playerName1').innerText;
    const getLi = document.getElementById('playersList');
    const li = document.createElement('li')
    getLi.appendChild(li);
    li.innerText = getPlayerName;
    document.getElementById('one').disabled = true;
});


document.getElementById('totalCostForPlayers').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('perPlayerPrice');
    const getPlayerCostString = perPlayerCost.value;
    const getPlayerCostToNumber = parseInt(getPlayerCostString);
    const totalCostForPlayer = getPlayerCostToNumber * 5;

    const setTotalCostForPlayer = document.getElementById('totalCostForPlayer');
    const getCost = setTotalCostForPlayer.innerText;
    const setTotalCostForPlayerToNumber = parseInt(getCost);
    setTotalCostForPlayer.innerText = totalCostForPlayer;
    perPlayerCost.value = '';
    return setTotalCostForPlayerToNumber;
});

document.getElementById('total-cost-calculator').addEventListener('click', function () {
    const getManagerCost = document.getElementById('manager-field').value;
    const getManagerCostToInt = parseInt(getManagerCost);
    const getCouchCost = document.getElementById('couch-field').value;
    const getCouchCostToInt = parseInt(getCouchCost);
    const totalCostForAll =   getManagerCostToInt + getCouchCostToInt;

    const setTotalCostForAll = document.getElementById('total-cost-for-all');
    const total = setTotalCostForAll.innerText;
    setTotalCostForAll.innerText = totalCostForAll;




    getManagerCost.value = '';
    getCouchCost.value = '';
})
