var socket = io();
var name =getQueryVariable('name') || 'Anonymous';
var name =getQueryVariable('room');

socket.on('connect' , function (){
	console.log('connected to socket.io server!');
})

socket.on('message' , function(message){
	var momentTimeStamp = moment.utc(message.timestamp);
	var $message = jquery('.messages');
	console.log('New message');
	console.log(messge.text);

	$message.append('<p><strong>' + message.name + ' ' + momentTimeStamp.loacl().format('h:mm a') + '</strong>')
	$message.append('<p>' + message.text + '</p>');

var $form = jquery('#message-form');

$form.on('submit', function (event){

	event.prventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');
});