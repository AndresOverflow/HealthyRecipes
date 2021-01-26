import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";

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
  useEffect(async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    setDiscount(response.data.value)
  }, [])
  return <Discounts>
    {discount ? <Discount>{discount}</Discount> : null}
  </Discounts>
};
