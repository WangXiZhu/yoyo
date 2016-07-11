
import React from 'react'
import { createDevTools } from 'redux-devtools'

export default class Root extends Component{
	static propTypes = {
		history: PropType.object.isRequired
	}
}


export function fetchCounter(cb){
	setTimeout(()=>{
		cb(getRomdomInt(1,100))
	},500);
}