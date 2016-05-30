### Redux作用

通过state来控制数据。有时我们可以通过回调的形式来更新数据，但有的情况没有回调函数就尴尬了。

#### 好处

动态可预测


##### store、action、reducer

> state 为单一对象，使得 Redux 只需要维护一棵状态树，服务端很容易初始化状态，易于服务器渲染。
> state 只能通过 dispatch(action) 来触发更新，更新逻辑由 reducer 来执行。

	var store = redux.createStore( reducer , [])	//
	
	//定义reducer方法,根据 action 来更新 state 。 所以返回 state

	var reducer = function(state, action){
	    switch (action.type) {
	        case 'add_todo':
	            return state.concat(action.text);
	        default:
	            return state;
	    }
	};
	store.dispatch( action )	//分发，用来修改state,即触发这个action


action中其中 规定的type为执行的动作

其中需要把action通过dispatch传入


---

reducer --> 指明应用如何 <b>更新 state</b>

( previousState , action) => newState



 关于使用reducer的建议,需要保持纯净
> 修改传入参数；
> 执行有副作用的操作，如 API 请求和路由跳转；
> 调用非纯函数，如 Date.now() 或 Math.random()。



#### 使用

	不能直接修改数据，而是通过 action
	
#### 注意

1.不直接修改state，通过object.assign()创建副本来操作
2.default下返回原来的state。类似一下代码

	
	function todo(state = initState,action ){ 
		switch(action.Type){
			case Add_todo: 
				return Object.assign({},state,{
					visibility: action.state
				})
			default:
				return state;
		}
	} 

#### store

###### store作用
* 保存state
* getState 获取state
* dispatch(action) 更新state
* subscribe( listener ) 注册监听器

而我们使用redux只有一个store,当有其他逻辑时使用reducer组合 

创建store

	import { createStore } from 'redux'
	import todo from '/reducers'
	let store = createStore(todo)
#### 学习资源
[https://camsong.github.io/redux-in-chinese/docs/basics/Reducers.html](https://camsong.github.io/redux-in-chinese/docs/basics/Reducers.html)

[2](http://www.jianshu.com/p/3334467e4b32)
	