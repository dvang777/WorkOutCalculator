"use strict";

function getUserInput () {
	var userInput;
	userInput = document.getElementById("txtbox").value;
	console.log(userInput);
	return userInput;
}
function getUserWeight(){
	var userWeight;
	userWeight = document.getElementById("txtbox_weight").value;
	return userWeight;
}
function getWorkout(name){
	var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var workOut = ["50 jumping jacks", "20 crunches", "30 squats", "15 pushups", "1 min. wall sit", "10 burpees", "20 sec arm circles", "20 squats", "30 jumping jacks", "15 crunches", "10 pushups", "2 min wall sit", "20 burpees", "25 burpees", "40 jumping jacks", "15 sec arm circles", "30 crunches", "15 pushups", "30 burpees", "15 squats", "30 sec arm circles", "3 min walls sit", "20 burpees", "60 jumping jacks", "10 crunches", "20 pushups"]
	var selectedWorkout = []; 
	for(var i = 0; i < name.length; i++){
		for (var j = 0; j < letter.length; j++) {
			if(name[i] === letter[j]){
				selectedWorkout.push(workOut[j]);
			}
		}
	} 

	return selectedWorkout;
}
function getMets(name){
	var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var Mets = [8, 4, 6, 4, 2, 8, 3, 6, 8, 4, 4, 2, 8, 8, 8, 3, 4, 4, 8, 6, 3, 2, 8, 8, 4, 4];
	var selectedMets = [];
	for(var i =0; i < name.length; i++){
		for(var j=0; j < letter.length; j++){
			if(name[i] === letter[j]){
				selectedMets.push(Mets[j]);
			}
		}
	}
	
	return selectedMets;
}
function getCalories(weight, mets, seconds){
	var caloriesBurned = [];
	var calories;
	for(var i =0; i < mets.length; i++){
		calories = Math.round((mets[i] * 3.5 * weight/200) * seconds[i]/60);
		caloriesBurned.push(calories);
	}
	return caloriesBurned;
}
function calculateSeconds(name){
	var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];	
	var seconds = [50, 20, 30, 15, 60, 10, 20, 20, 30, 15, 10, 120, 20, 25, 40, 15, 30, 15, 30, 15, 30, 180, 20, 60, 10, 20];
	var workoutSeconds = [];
	for(var i = 0; i < name.length; i++){
		for(var j = 0; j < letter.length; j++){
			if(name[i] === letter[j]){
				workoutSeconds.push(seconds[j]);			
			}

		}
	}
	return workoutSeconds;
}	
function convertWeight(weight){ 
	var kilograms; 
	kilograms = Math.floor(weight * .453952); 
	return kilograms; 
} 
function splitInput(input){ 
	var removeSpace; 
	var tosplit; 
	removeSpace = input.toUpperCase().replace(/\s/g, "");
	tosplit = removeSpace.split("");
	return tosplit; 
} 
function tablegenerate (name,workouts,calories) {
	for(var i=0; i<name.length;i++)
	{
		var $formrow = '<tr><td>'+name[i]+'</td><td>'+workouts[i]+'</td><td>'+calories[i]+'</td></tr>';
		$('.myTable').append($formrow);
	}
}
function getTotalCalories(array){
	var total = array.reduce(function(a, b) {
		return a + b;});
	document.getElementById("totalCalBurned").innerHTML = total;
	return total;
}
function getTotalSecs(array){
	var total = array.reduce(function(a,b){
		return a + b;});
	return total;
}
function getTotalMins(secs){
	var result = Math.ceil(secs/60);
	document.getElementById("totalMins").innerHTML = result;
	return result;
}
function main(){
	var userData = getUserInput();
	var userWeight = getUserWeight();
	var splitData = splitInput(userData);
	var workOutAssign = getWorkout(splitData);
	var weightInKg = convertWeight(userWeight);
	var workoutTime = calculateSeconds(splitData);
	var metTotal = getMets(splitData);
	var totalCal = getCalories(userWeight, metTotal, workoutTime);
	var totCalBurn = getTotalCalories(totalCal);
	var totalSecs = getTotalSecs(workoutTime);
	var totalMins = getTotalMins(totalSecs);
	var createTable = tablegenerate(splitData, workOutAssign, totalCal);
}
// main();