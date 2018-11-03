import React from 'react';
import {getFunName} from "../helpers"

class StorePicker extends React.Component {
goToStore(event){
  event.preventDefault();
  console.log(`going to store`);
}
  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
          <button type="submit"> Visit Store → </button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;