
function Coin(value, count, coinId, notificationId) {

    var self = this;

    this.value = value;
    this.count = count;
    this.coinElement = document.getElementById(coinId);
    this.coinNotification = document.getElementById(notificationId);
    this.coinNotification.style.visibility = 'hidden';

    this.coinElement.addEventListener('input', function() {
        self.value = parseInt(this.value);
    });

    this.setCount = function setCount(newCount) {
        this.count = newCount;
        this.coinNotification.innerHTML = this.count;
        if(this.count == 0) {
            this.coinNotification.style.visibility = 'hidden';
        } else {
            this.coinNotification.style.visibility = 'visible';
        }
    }
}