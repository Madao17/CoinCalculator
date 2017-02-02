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

    describe('Initialization', function() {

        it('should create a coin list', function() {
            expect(coins).toBeTruthy();
            expect(coins.length).toBe(4);
        });

        it('should initialize totalInputValue', function() {
            expect(totalInputValue).toBeTruthy();
        });

        it('should initialize calculateBtn', function() {
            expect(calculateBtn).toBeTruthy();
        });
    });

    describe('Calculator',function(){
        it('should calculate the amount of coins for the given value', function() {
            totalInputValue.value = 41;
            calculateBtn.click();
            expect(coins[0].count).toBe(1);
            expect(coins[1].count).toBe(1);
            expect(coins[2].count).toBe(1);
            expect(coins[3].count).toBe(1);
        })
    });
});
