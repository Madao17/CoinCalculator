/**
 * Created by Hank on 2/1/2017.
 */

var total = 0;

var coins = [
    createCoin(25, 0, 'coin-1', 'coin-1-notification'),
    createCoin(5, 0, 'coin-2', 'coin-2-notification'),
    createCoin(10, 0, 'coin-3', 'coin-3-notification'),
    createCoin(1, 0, 'coin-4', 'coin-4-notification')
];

var totalInputValue = document.getElementById('total-coin');
var calculateBtn = document.getElementById('calculate-button');

function sortCoins() {
    coins.sort(function(coinA, coinB) {
        return coinB.value - coinA.value;
    });
}

function createCoin(value, count, coinId, notificationId) {
    return new Coin(value, count, coinId, notificationId);
}

calculateBtn.addEventListener('click', function() {
    sortCoins();
    total = parseInt(totalInputValue.value);
    coins.map(function(coin) {
        if(total >= coin.value) {
            var count = Math.floor(total / coin.value);
            coin.setCount(count);
            total = total % coin.value;
        } else {
            coin.setCount(0);
        }
    });
});
