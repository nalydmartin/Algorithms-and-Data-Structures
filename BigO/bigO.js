/**
    Understanding O(n) ==> Linear time

    Big O depends on the number of inputs (n) to determine time space complexity (number of operations needed for each input).

    As number of elements increase, number of operations increase as well.

 */

const nemo = ["nemo"]

const findNemo = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found Nemo!")
        }
    }
}

findNemo(nemo);