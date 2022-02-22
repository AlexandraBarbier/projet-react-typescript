import React, { ReactElement } from 'react'
import Hello from './Hello'
import Header from './header'
import Footer from './footer'
import './css/global.css'

export default function App(): ReactElement {
  return (
    <body>
      <Header></Header>
      <Hello name="Alex" age={28} />
      <Footer></Footer>
    </body>
  )
}
