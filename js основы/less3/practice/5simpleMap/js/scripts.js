/* let month = 'february';
let ruMonth;

if(month == 'january'){
	ruMonth = 'январь';
}
else if(month == 'february'){
	ruMonth = 'февраль';
}
else if(month == 'march'){
	ruMonth = 'март';
}
else if(month == 'april'){
	ruMonth = 'апрель';
}
else if(month == 'may'){
	ruMonth = 'май';
}

console.log(month);
console.log(ruMonth); */

let month = 'february';
let month2Ru = {
	january: 'январь',
	february: 'февраль',
	march: 'март',
	april: 'апрель',
	may: 'май'
};

let ruMonth = month2Ru[month];
console.log(ruMonth);