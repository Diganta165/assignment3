//১. kilometerToMeter

function kilometerToMeter(distanceKM){
    if(distanceKM < 0){
        return console.log("Distance can't be negative...");
    }
    return distanceKM * 1000;
}

var distanceKM = 2.65;
var distanceMeter = kilometerToMeter(distanceKM);

console.log("Distance in meter: " + distanceMeter);

//২. budgetCalculator

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop){
    if(numberOfWatch < 0 || numberOfMobile <0 || numberOfLaptop < 0){
        return console.log("Quantity can't be negative ");
    }
    var totalWatchPrice = numberOfWatch * 50;
    var totalMobilePrice = numberOfMobile * 100;
    var totalLaptopPrice = numberOfLaptop * 500;
    
    return  totalWatchPrice + totalMobilePrice + totalLaptopPrice;

}

var numberOfWatch = 2;
var numberOfMobile = 1;
var numberOfLaptop = 2;
var total = budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop);

console.log("Total tk needed " + total);

//৩. hotelCost

function hostelCost(day){
    if(day<1){
        return console.log("Staying days can't be Zero or any Minus Number. Please try again...");
    }
    else if(day<=10){
        return day * 100;
    }
    else if(day<=20 && day>10){
        return ((10*100)+(day%10)*80);
    }
    else{
        return ((10*100)+(10*80)+((day-20)*50));
    }
}

var day =30;
console.log("Total Cost: ", hostelCost(day)+"tk");

//৪. megaFriend

function megaFriend(FriendsName){
    
    var max = FriendsName[0].length;
    for (var i = 0; i<FriendsName.length; i++){
        
        if(FriendsName[i].length>max){
            max = FriendsName[i].length;
            var index = i;
        }
    }
    return FriendsName[index];
}

var FriendsName = ["Rasel","Diganta","Mim","Jewel"];

console.log(megaFriend(FriendsName));