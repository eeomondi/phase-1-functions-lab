
function distanceFromHqInBlocks(start) {
    return start;
  }
  
  function distanceFromHqInFeet(start) {
    return start * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(distance) {
    if (distance <= 3) {
      return 0;
    } else if (distance <= 13) {
      return 16.4;
    } else if (distance <= 25) {
      return 25;
    } else {
      return "cannot travel that far";
    }