import {createStore applyMiddleware} from 'redux'

import reducer from 'redux'

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore)

export default function configureStore(initialState){
	const store = createStoreWithMiddleware(reducer)
}

var port = 3000;

app.listen(port,function(error){

})

//嵌套
export default store => next => action =>{

}