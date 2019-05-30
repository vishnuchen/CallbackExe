// The second argument/parameter is expected to be a function
function findWaldo(arr, callBack) {
  arr.forEach(function(arrElement, i) {
    if (arrElement === "Waldo") {
            callBack(i, arrElement);   // execute callback
    }
  });
}

function actionWhenFound(index, positionName) {
  console.log("Found " + positionName + " at Index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

