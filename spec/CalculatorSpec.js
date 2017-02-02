/**
 * Created by Hank on 2/2/2017.
 */

describe('Coin Calculator', function () {

    var dummyElement;

    beforeEach(function () {
        dummyElement = document.createElement('div');
        dummyElement.style.visibility = 'hidden';
        document.getElementById = jasmine.createSpy('HTML Element')
            .and.returnValue(dummyElement);

    });

    describe('Initialization', function () {

        it('should create a coin list', function () {
            expect(coins).toBeTruthy();
            expect(coins.length).toBe(4);
        });

        it('should initialize totalInputValue', function () {
            expect(totalInputValue).toBeTruthy();
        });

        it('should initialize calculateBtn', function () {
            expect(calculateBtn).toBeTruthy();
        });
    });

    describe('sortCoins', function() {

        afterEach(function(){
            coins = [
                createCoin(25, 0, 'coin-1', 'coin-1-notification'),
                createCoin(5, 0, 'coin-2', 'coin-2-notification'),
                createCoin(10, 0, 'coin-3', 'coin-3-notification'),
                createCoin(1, 0, 'coin-4', 'coin-4-notification')
            ];
        });

        it('should sort the coins list by its value', function() {
            coins[0].value = 10;
            coins[1].value = 25;
            coins[2].value = 1;
            coins[3].value = 7;

            sortCoins();

            expect(coins[0].coinElement.id).toBe('coin-2');
            expect(coins[1].coinElement.id).toBe('coin-1');
            expect(coins[2].coinElement.id).toBe('coin-4');
            expect(coins[3].coinElement.id).toBe('coin-3');
        });
    });

    describe('createCoin', function () {

        var dummyCoin, dummyNotif;

        beforeEach(function() {
            dummyCoin = document.createElement('div');
            dummyNotif = document.createElement('div');
            dummyCoin.id = 'id';
            dummyNotif.id = 'nid';
        });

        it('should create coin object', function () {
            var newCoin = createCoin(10, 0, 'id', 'nid');
            expect(newCoin).toBeTruthy();
            expect(newCoin.value).toBe(10);
            expect(newCoin.count).toBe(0);
        });
    });

    describe('Calculator', function () {
        it('should calculate the amount of coins for the given value', function () {
            totalInputValue.value = 41;
            calculateBtn.click();
            expect(coins[0].count).toBe(1);
            expect(coins[1].count).toBe(1);
            expect(coins[2].count).toBe(1);
            expect(coins[3].count).toBe(1);
        })
    });
});
