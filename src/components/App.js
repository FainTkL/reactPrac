import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes"
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
  //create the state for fish and order
  state ={
    fishes: {},
    order: {}
  }

  //connects firebase
  componentDidMount(){
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, this.state.order);
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

 

  //adds a fish with unique id
  addFish = (fish) =>{
    const fishes = { ...this.state.fishes };
    fishes[`fishes${Date.now()}`] = fish;
    this.setState({fishes: fishes})
  }

  //loads all the fish in database
  loadSampleFishes =() =>{
    this.setState({fishes: sampleFishes});
  }

  //updates the state
  addToOrder= (key) =>{
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});

  }
  render() {
    return (
      <div className="catch-of-the-day">
       <div className="menu">
       <Header tagline="FRESH SEAFOOD MARKET"/>
       <ul className="fishes">
       {Object.keys(this.state.fishes).map(key =>
       
         <Fish key={key} index={key} details={this.state.fishes[key]} 
         addToOrder={this.addToOrder}/>)}
       </ul>
       </div>
       <Order fishes={this.state.fishes} order={this.state.order}/>
       <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        </div>
    );
  }
}

export default App;