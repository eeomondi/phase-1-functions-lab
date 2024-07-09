// Code your solution in this file!

function distanceFromHqInBlocks(input) {
    return input;
}

function distanceFromHqInFeet(input) {
    return input * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(distanceInBlocks) {
    if (distanceInBlocks <= 3) {
        return 0;
    } else if (distanceInBlocks <= 25) {
        return `$${(distanceInBlocks - 3) * 4.4}`;
    } else {
        return "cannot travel that far";
    }
}

console.log(distanceFromHqInBlocks(3)); 
console.log(distanceFromHqInFeet(10)); 
console.log(distanceTravelledInFeet(5, 12)); 
console.log(calculatesFarePrice(3)); 
console.log(calculatesFarePrice(13)); 
console.log(calculatesFarePrice(25)); 
console.log(calculatesFarePrice(26)); 
//adding test case 
// Test cases
/*console.log(distanceFromHqInBlocks(3)); // Output: 3
console.log(distanceFromHqInFeet(10)); // Output: 2640

const start = 5;
const end = 12;
console.log(distanceTravelledInFeet(start, end)); // Output: 2640

console.log(calculatesFarePrice(3)); // Output: 0
console.log(calculatesFarePrice(13)); // Output: $16.4
console.log(calculatesFarePrice(25)); // Output: $25
console.log(calculatesFarePrice(30)); // Output: "cannot travel that far"*/


const expect = require('chai').expect;

describe('distanceFromHqInBlocks', () => {
    it('should return the input value', () => {
        expect(distanceFromHqInBlocks(5)).to.equal(5);
    });
});

describe('distanceFromHqInFeet', () => {
    it('should return the input value multiplied by 264', () => {
        expect(distanceFromHqInFeet(5)).to.equal(1320);
    });
});

describe('distanceTravelledInFeet', () => {
    it('should return the absolute difference between the start and destination multiplied by 264', () => {
        expect(distanceTravelledInFeet(1, 5)).to.equal(1320);
    });
});

describe('calculatesFarePrice', () => {
    it('should return $0 for a distance of 3 blocks', () => {
        expect(calculatesFarePrice(1, 4)).to.equal(0);
    });
    it('should return $16.4 for a distance of 13 blocks', () => {
        expect(calculatesFarePrice(1, 14)).to.equal(16.4);
    });
    it('should return $25 for a distance of 25 blocks', () => {
        expect(calculatesFarePrice(1, 26)).to.equal(25);
    });
    it('should return "cannot travel that far" for a distance of more than 25 blocks', () => {
        expect(calculatesFarePrice(1, 30)).to.equal("cannot travel that far");
    });
});







/*describe('index.js', () => {
    describe('distanceFromHqInBlocks()', () => {
      it('returns a distance in blocks', () => {
        expect(distanceFromHqInBlocks(43)).to.equal(1);
      });
    });
  });

function distanceFromHqInBlocks(num) {
  if (num <= 42) {
    return Math.ceil((num - 1) / 7);
  } else {
    return Math.ceil((num - 42) / 7);
  }
}

console.log(distanceFromHqInBlocks(3));
module.exports = distanceFromHqInBlocks;*/