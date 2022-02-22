import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import BigTitle from './BigTitle'
import './css/global.css'
//import AnimatedText from './AnimatedText'

const root = document.getElementById('root')

if(!root) {
  throw new Error("Oups, il n'y a pas d'élément #root")
}

render(
  <BigTitle>Do you think this was a random break in?</BigTitle>  , root
  //<AnimatedText>She answered questions at random, began sentences she did not finish, and laughed at everything.</AnimatedText>
)

