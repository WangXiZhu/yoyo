
export default class{
	constructor(props){
		this.props = $.extends({},props)
	}
}

let lterable = {
	a:1,
	length: 1,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for(let name of iterable){
	name;
}