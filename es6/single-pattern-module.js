/**
 * 使用es6的方式
*/

// class Yoyo {}
 
// export let yoyo = new Yoyo();

'use strict'
class Notifations{
	constructor(){
		this.message = [];
	}
	add(message){
		this.message.push(message)
	}
}

let notif = new Notifations();
notif.add('hh');
notif.add('ff');
console.info(notif)
