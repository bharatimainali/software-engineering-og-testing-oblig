const { expect } = require('chai');
const chai = require('chai');
const { isLeapYear } = require('../index');

describe('isLeapYear should return true when year is a leap year', () => {
    describe('Return true when divisible by 4, but not 100', () => {
        it('Year 4 should be leap year', () =>{
            expect(isLeapYear(4)).to.be.true;
        });
        it('Year 8 should be leap year', () =>{
            expect(isLeapYear(8)).to.be.true;
        });
        it('Year 2020 should be leap year', () =>{
            expect(isLeapYear(2020)).to.be.true;
        });
        it('Year 3 should not be leap year', () =>{
            expect(isLeapYear(3)).to.be.false;
        });
        it('Year 9 should not be leap year', () =>{
            expect(isLeapYear(9)).to.be.false;
        });
        it('Year 2019 should not be leap year', () =>{
            expect(isLeapYear(2019)).to.be.false;
        });
        it('Year 100 should not be leap year', () =>{
            expect(isLeapYear(100)).to.be.false;
        });
        it('Year 200 should not be leap year', () =>{
            expect(isLeapYear(200)).to.be.false;
        });
        it('Year 300 should not be leap year', () =>{
            expect(isLeapYear(300)).to.be.false;
        });
    });

    describe('Return true when divisible by 400', () => {
        it('Year 400 should be leap year', () =>{
            expect(isLeapYear(400)).to.be.true;
        });
        it('Year 800 should be leap year', () =>{
            expect(isLeapYear(800)).to.be.true;
        });
        it('Year 1200 should be leap year', () =>{
            expect(isLeapYear(1200)).to.be.true;
        });
        it('Year 400 should not be leap year', () =>{
            expect(isLeapYear(200)).to.be.false;
        });
        it('Year 800 should not be leap year', () =>{
            expect(isLeapYear(600)).to.be.false;
        });
        it('Year 1200 should not be leap year', () =>{
            expect(isLeapYear(1)).to.be.false;
        });
    });
});


describe('Should not be leap year', () => {
    describe('Return false when not divisible by 4', () => {
        it('Year 1 should not be leap year', () =>{
            expect(isLeapYear(1)).to.be.false;
        });
        it('Year 2 should not be leap year', () =>{
            expect(isLeapYear(2)).to.be.false;
        });
        it('Year 3 should not be leap year', () =>{
            expect(isLeapYear(3)).to.be.false;
        });
        it('Year 2021 should not be leap year', () =>{
            expect(isLeapYear(2021)).to.be.false;
        });
        it('Year 2022 should not be leap year', () =>{
            expect(isLeapYear(2022)).to.be.false;
        });
        it('Year 2023 should not be leap year', () =>{
            expect(isLeapYear(2023)).to.be.false;
        });
    });
    describe('Return false when not divisible by 100 but not 400', () => {
        it('Year 100 should not be leap year', () =>{
            expect(isLeapYear(100)).to.be.false;
        });
        it('Year 200 should not be leap year', () =>{
            expect(isLeapYear(200)).to.be.false;
        });
        it('Year 300 should not be leap year', () =>{
            expect(isLeapYear(300)).to.be.false;
        });
        it('Year 1000 should not be leap year', () =>{
            expect(isLeapYear(1000)).to.be.false;
        });
    });
});
