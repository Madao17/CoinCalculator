describe('Coin', function () {

    var coin;
    var dummyElement;

    beforeEach(function () {
        dummyElement = document.createElement('div');
        dummyElement.style.visibility = 'hidden';
        document.getElementById = jasmine.createSpy('HTML Element')
            .and.returnValue(dummyElement);

        coin = new Coin(10, 1, 'coinId', 'coinNotId');
    });

    describe('constructor', function () {
        it('Should create a new Coin object', function () {
            expect(coin.value).toBe(10);
            expect(coin.coinElement).toBe(dummyElement);
            expect(coin.coinNotification).toBe(dummyElement);
            expect(coin.coinNotification.style.visibility).toBe('hidden');
        });
    });

    describe('setCount', function () {
        it('Should set the count value of coin', function () {
            coin.setCount(5);
            expect(coin.count).toBe(5);
        });
    });

});
