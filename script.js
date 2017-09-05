function eventForm () {
	var name = 'John', time = '17:00',place = 'Lviv',event = '';

	do {
		event = prompt('Enter an event', '');
	} while(event==String);

	if((event == undefined) || !isNaN(event)){
		alert('Please, enter an event letters')
		eventForm();
	} else {
		alert("Open console")
		console.log( name + ' has a ' + time + ' today at ' + event + ' somewhere in ' + place );
	}
}
eventForm();