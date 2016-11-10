// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!
/*Number 1 push() */
var nameArray = [] ;
var emptyArray = nameArray.push('Joshua', 'Lee');
    // console.log(nameArray);

var genericNumberArray = [];
var emptyGenericNumArray = genericNumberArray.push(1, 2, 3, 4,5 ,6, 7, 8, 9, 10 );
    // console.log(genericNumberArray);

/*Number 2 pop() * follow up with questions*/

var colors = ['Blue','Red','Yellow', 'Orange'];
  // console.log(colors);

var removed = colors.pop();
    // console.log(colors); //my last color was removed due to pop()
    // console.log(removed); // shows the value that was removed from the array colors

var popResult= 'Charlie';
    // console.log(popResult);

/*Number 3 reverse() */
var reversal = scrambledWords.reverse();
    // console.log(reversal); // this array prototype reads the array backwards
var myNumbs = phoneNumber.reverse();
    // console.log(myNumbs);

/*Number 4 shift() Refer back to Question 2..This is how you store the value*/
var myRemoval = orderQueue.shift();
    // console.log(myRemoval);
var nextOrder = myRemoval;
    // console.log(nextOrder);

/* Number 5 sort() */
var myArray = mixedNums.sort();
    // console.log(mixedNums);

var myWords = mixedWords.sort();
    // console.log(myWords);

/*Number 6 splice() */
var removeFruit = fruitCollection.splice(1, 3);
    // console.log(fruitCollection);
    // console.log(removeFruit);
var notFruit = removeFruit;

//gems
var myGem = gemBox.splice(5, 7, 'Sapphire');
    // console.log(gemBox);
    // console.log(myGem);

//upToTen
var myCount = upToTen.splice(2, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // myCount = upToTen.sort();
    // console.log(myCount);
    // console.log(upToTen);

//brown only
var brown = brownOnly.splice(1, 5, 'brown', 'brown', 'brown');
    // console.log(brown);
    // console.log(brownOnly);

/*Number 7 unshift()*/
var addOrder = orderedValues.unshift(1, 2, 3);
    // console.log(orderedValues); // why does this console as an array
var orderedValuesNewLength = addOrder;
    // console.log(orderedValuesNewLength);//but this just consoles as 10

/*Number 8  concat() ASK QUESTIONS THIS IS INCOMPLETE*/
// var randomThingsArray = [genericNumberArray + ',' + ' ' + colors];
// var randomThingsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Blue', 'Red', 'Yellow'];
  var randomThingsArray = [];
  var pushMe = randomThingsArray.push([genericNumberArray] + ',' + [colors]);
    // console.log(randomThingsArray);


/*Number 9 join()*/
var sentence = scrambledWords.join(' ');
    // console.log(sentence);
var myFruits = fruitCollection.join(' + ');
    // console.log(myFruits);

/*Number 10 slice() ASK QUESTING THIS IS INCOMPLETE*/



var favoriteFriends = friends.slice(1, 3);
    // console.log(favoriteFriends);
var owesMoney = friends.slice(3, 6 );
// var owesMoney = payUp;
    console.log(friends);
    console.log(owesMoney);
    console.log(favoriteFriends);





/*Number 11 toString() */
var monthNameString = monthNames.toString();

/*Number 12 indexOf()*/
var favoriteColor = colors.indexOf('Red');
    // console.log(favoriteColor);
var favoriteEvenNumber = mixedNums.indexOf(76);
    // console.log(favoriteEvenNumber);

/*Number 13 lastIndexOf() */
var lastNine = bulkNumbers.lastIndexOf(9);
    // console.log(lastNine);
var lastFive = bulkNumbers.lastIndexOf(5);
    // console.log(lastFive);