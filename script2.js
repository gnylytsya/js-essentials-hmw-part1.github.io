function сonventer(){
	var euro = prompt("Please enter the amount in euro", 100);
	var dollar = prompt("Please enter the amount in dollars", 100);
	var courseEuro = 30.46;
	var courseDollar  = 25.58;
	var euroGrn = euro* courseEuro;
	var dolGrn = dollar * courseDollar;
	var euroDol = courseEuro / courseDollar;
	alert(euro+ ' euros are equal ' + euroGrn.toFixed(2) + ' gryvnias, ' + dollar + ' dollars are equal ' + dolGrn.toFixed(2) + ' gryvnias, one euro is equal ' + euroDol.toFixed(2) + ' dollars.');
}