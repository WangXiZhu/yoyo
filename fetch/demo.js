/**
 * js foreach  
 */

// var header = [{'name': 'zc',age:1}];

// function Header(headers){
// 	headers.forEach(function(v,n){

// 		console.log(v,n);
// 	})
// }

// Header(header)



class Turba{

	// constructor(n,age){
	// 	// var obj = {}
	// 	this.n = n
	// 	this.n =  age
	// 	// return obj
	// }
	// get name(){
	// 	console.log(2)
	// 	return this.n
	// }
	// set name(n){
	// 	console.log(1)
	// 	this.n = n
	// }
	// toString(){
	// 	return ":" + this.n
	// }
	name = 1;
	constructor(props){
		super(props)
		return this.name
	}
}

var t = new Turba()
console.log(t)


class Parent{
	constructor(name){
		this.name = '!!!'+name
	}
	say(){
		console.log('hello')
	}
	toString(){
		return "obj: "+super.toString()
	}
}
 class Child extends Parent{
	constructor(name){
		super(name)
	}

	toString(){
		console.log(console.log())
	}
}

var  c =  new Child('zc')
var p = new Parent('hh')
// c.toString()


// console.log(p.toString())