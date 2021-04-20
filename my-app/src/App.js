import React from 'react'
import axios from 'axios'

class App extends React.Component{
  constructor(props){
    super(props)
    
this.state={
  cities:["Minsk","Berlin","Madrid","Moscow", "Riga","London"],
    temp:null,
    feelings:null,
    humidity:null,
    currentCity:"Minsk",
    

}  }

  componentDidMount(){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=51bea54cb3aec25e3814b0286fb7a1e9`)
    .then((data)=>{
      // this.setState({
      //   temp:data.data.main.temp,
      //   feelings:data.data.main.feels_like,
      //   humidity:data.data.main.humidity
      // })
      console.log(data)
    })
  }

  // componentDidUpdate(){
  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=51bea54cb3aec25e3814b0286fb7a1e9`)
  //   .then((data)=>this.setState({
  //       temp:data.data.main.temp,
  //       feelings:data.data.main.feels_like,
  //       humidity:data.data.main.humidity
  //   }))
  // }
//     handleChange = (event) =>{
//       this.setState({currentCity:event.target.value})
//  }
      handleValue = (event) =>{
        this.setState({currentCity:event.target.value})
        
      }

      handleRequest = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=51bea54cb3aec25e3814b0286fb7a1e9`)
    .then((data)=>this.setState({
        temp:data.data.main.temp,
        feelings:data.data.main.feels_like,
        humidity:data.data.main.humidity
    }))
      
  }

        



  render(){
    return(
      <>
      <div> Доброе утро! В каком городе вы хотите узнать погоду?</div>
       <input type="text" onChange={this.handleValue}/> <button onClick={this.handleRequest}>Поиск</button> 
       <div></div>    
      <div>Температура воздуха : {Math.ceil(this.state.temp-(273))}</div>
      <div>Ощущается как :{Math.ceil(this.state.feelings-(273))}</div>
      <div>Влажность:{this.state.humidity}%</div>
      </>
    )
  }
}

export default App;

 /* <select onChange={this.handleChange}>
        {this.state.cities.map((el)=>{
          return <option key={el}>{el}</option>
        })}
      </select> */