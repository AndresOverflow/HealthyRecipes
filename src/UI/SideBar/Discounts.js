import React, {useState, useEffect} from 'react';
//import styled from "styled-components";
import axios from "axios";

import classes from './Discounts.css';
import Spinner from '../../components/UI/Spinner/Spinner';

/*
const Discounts = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: lightgoldenrodyellow;
  
`
const Discount = styled.div`
  padding: 1rem;
`

*/

export default () => {
  const [discount, setDiscount] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    setDiscount(response.data.value)
    setLoading(false)
  }, [])


  return <div className= {classes.Discounts_Container}>
            <h2 className={classes.Discounts_Title}> Discounts Section </h2>
            <div className={classes.Discounts}> 
              <div className= {classes.Discounts_Item}>
                Discount 1
              </div>
              <div className= {classes.Discounts_Item}>
                Discount 2
              </div>
              <div className= {classes.Discounts_Item}>
                Discount 3
              </div>
            </div>
            {discount ? <div>{discount}</div> : null}
            {loading ? <Spinner/> : null}
        </div>
};
