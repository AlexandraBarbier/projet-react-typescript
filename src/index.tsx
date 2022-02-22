import React from 'react'
import { render } from 'react-dom'

const root = document.getElementById('root')

if(!root) {
  throw new Error("Oups, il n'y a pas d'élément #root")
}

const presentation = (name:string, age:number) => 
  (<h1>
  <strong>Bonjour {name} !</strong>
  <br/>Vous avez {age} ans
  </h1>
  )

const Hello = () => <p>Bonjour :)</p>

const name: string = 'Alex'
const age: number = 28

render(
  <div id="test" className="my-class">
    {presentation(name, age)}
    <Hello />
  </div>, root
)

