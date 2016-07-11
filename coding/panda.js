//允许所有的类型 正则表达式
if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)){
  //过滤其他不符合的 key值 
}

Yoyo.prototype.forEach = function(callback,args){
	Object.getOwnPropertyNames(this.map).forEach(function(name){
		this.map[name].forEach(function(value) {
			callback.call(args,value,name,this)
		}).bind(this)
	},this)


}
