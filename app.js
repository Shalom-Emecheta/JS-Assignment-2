function divideArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Arrays must have the same length for division.");
    }
  
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] / arr2[i]);
    }
  
    return result;
  }
  
  const Array1 = [15, 30, 45, 60];
  const Array2 = [5, 6, 3, 10];
  
  try {
    const resultArray = divideArrays(Array1, Array2);
    console.log(resultArray);
  } catch (error) {
    console.error(error.message);
  }