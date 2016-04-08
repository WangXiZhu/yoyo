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

 reducer --> 指明应用如何更新 state


 关于使用reducer的建议
> 修改传入参数；
> 执行有副作用的操作，如 API 请求和路由跳转；
> 调用非纯函数，如 Date.now() 或 Math.random()。

#### 使用

	不能直接修改数据，而是通过 action
	
	
#### 学习资源
[https://camsong.github.io/redux-in-chinese/docs/basics/Reducers.html](https://camsong.github.io/redux-in-chinese/docs/basics/Reducers.html)

[2](http://www.jianshu.com/p/3334467e4b32)
