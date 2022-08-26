import React from 'react'

import '../../scss/App.scss'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { RightPanel } from '../rightPanel/RightPanel'
import RoutesList from '../RoutesList'

const App: React.FC = () => {
  return <div className="container">
    <div className="main__wrapper">
      <div className="header__pages__wrapper">
        <Header />
        <RoutesList />
      </div>
      <RightPanel />
    </div>
    <Footer />
  </div>
}

export default App
