import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";

import Spinner from '../../components/UI/Spinner/Spinner';

const Discounts = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: lightgoldenrodyellow;
  
`

const Discount = styled.div`
  padding: 1rem;
`

export default () => {
  const [discount, setDiscount] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    setDiscount(response.data.value)
    setLoading(false)
  }, [])
  return <Discounts>
    <h2> Discounts Section : </h2>
    {discount ? <Discount>{discount}</Discount> : null}
    {loading ? <Spinner/> : null}
  </Discounts>
};
