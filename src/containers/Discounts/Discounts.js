import React, {Component} from 'react';
import axios from 'axios';
import Discount from './Discount/Discount'

class Discounts extends Component {

  state = {
    discounts: []
  }

  componentDidMount() {

    for (var i = 0; i < 3; i++) {
      axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
          const oldArray = [...this.state.discounts];
          oldArray.push(response.data.value);
          this.setState({discounts: oldArray});
          console.log(this.state.discounts);
        });

    }
  }


  render() {


    const discounts = this.state.discounts.map((discount, index) => {
      return <Discount key={index} content={discount}/>
    });
    return (
      <div>
        <p>{discounts}</p>

      </div>
    );
  }
}


export default Discounts;
