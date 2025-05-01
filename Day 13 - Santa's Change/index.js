function correctChangeFromSanta(bills) {
    let five = 0; 
    let ten = 0;
    for (let payment of bills) {
      switch (payment) {
        case 5:
          five++;
          break;
        case 10:
          if (five > 0) {
            five--;
            ten++;
          } else {
            return false;
          }
          break;
        case 20:
          if (ten > 0 && five > 0) {
            ten--;
            five--;
          } else if (five >= 3) {
            five -= 3;
          } else {
            return false;
          }
          break;
        default:
          return false;
      }
    }
    return true;
  }

// Should return true
if (correctChangeFromSanta([5,5,5,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}

// Should return false
if (correctChangeFromSanta([5,5,10,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}
