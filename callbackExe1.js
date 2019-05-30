// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
            found(i, arr[i]);   // execute callback
    }
  }
}

function actionWhenFound(index, positionName) {
  console.log("Found " + positionName + " at Index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

