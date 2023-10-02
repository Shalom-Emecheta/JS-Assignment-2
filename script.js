let array1 = [15, 30, 45, 60];
let array2 = [5, 6, 3, 10];

try {
    const arrayResult = divArray(array1, array2);
    console.log(arrayResult);
  }
  
  catch (error) {
    console.log(error.message);
  };

function divArray(array1, array2) {
    if (array1.length !== array2.length) {
      throw new Error("The arrays must be of the same length in order to divide.");
    };
  
    const result = [];
  
    for (let i = 0; i <= array1.length; i++) {
      result.push(array1[i] / array2[i]);
    };
  
    return result;
  };
