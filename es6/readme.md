* class


1.es5中 先有子类的对象 this, 父类.属性 + 到子类上
在使用constructor的中的extends的  调用  super  的时候  注意是先创建父类，然后将父类的作用域传到
子类中


同时 es6默认使用严格模式  并且没有变量提升了 所以注意使用
	
	class Parent{
		constructor(name){
			this.name = name
		}
	}

	class Child(){
		constructor(name,age){
			this.age = age		//referenceError  Child 目前还没有作用域
			super(name)
		}
	}



2.在关键字中 class 构造函数 返回一个 空对象

	class Parent{
		constructor(){
			return Object.create(null)
		}
	}


* 简写中使用关键字
所有的属性都是字符串的形式存在，所以关键字不影响


## generator 函数



### object.assign()

在拷贝对象的时候，拷贝的对象的引用，即内存中的位置
 意味着源对象的值改变，则最终结果的值也改变

 var source = {a:1}
 var result = Object.assign({},source,props);		//为了兼容包含 Symbol 对象

 source.a =2 ;
 result.a ;	//2	


*  遍历对象的顺序

遍历对象的属性，都遵守同样的属性遍历的次序规则。

	1.首先遍历所有属性名为数值的属性，按照数字排序。
	2.其次遍历所有属性名为字符串的属性，按照生成时间排序。
	3.最后遍历所有属性名为Symbol值的属性，按照生成时间排序。


### proxy

代理  == 拦截器
改变对象原始方法的，类似重写规则。每次执行前，都先经过 handler

对于不同的属性有对应的代理的方法名