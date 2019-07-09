//Declare your namespace by using the namespace keyword followed by the label you intend to use
var ArrayUtilities;
(function (ArrayUtilities) {
    //export means this function can be imported by other code
    function reverseArray(array) {
        //Function takes Array named array containing numbers as param
        return array.slice(0).reverse();
    }
    ArrayUtilities.reverseArray = reverseArray;
    function lastItemOfArray(array) {
        return array.slice(0).pop();
    }
    ArrayUtilities.lastItemOfArray = lastItemOfArray;
    function firstItemOfArray(array) {
        return array.slice(0).shift();
    }
    ArrayUtilities.firstItemOfArray = firstItemOfArray;
    function concatenateArray(array1, array2) {
        return array1.concat(array2);
    }
    ArrayUtilities.concatenateArray = concatenateArray;
})(ArrayUtilities || (ArrayUtilities = {}));
