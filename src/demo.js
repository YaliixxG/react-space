import React, { Component } from 'react';

class Demo extends Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }
    componentDidMount(){ //当组件输出到DOM后执行
     this.timerID = setInterval(()=>{
         this.tick()
     },1000)
    }
    componentWillUnmount(){
     clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return(
          <h2 className="demo-date">{this.state.date.toLocaleTimeString()}</h2>
        )
    }
}


    // ReactDOM.render(
    //     <Demo />,
    //     document.getElementById('root')
    // )





export default Demo