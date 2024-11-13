import { useState } from 'react'

import './App.scss'
import Main from './components/shared/Main/Main'
import Drawer from './components/shared/Drawer/Drawer'
import Header from './components/shared/Header/Header'
import Description from './components/shared/Description/Description'


function App() {
 
  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [isBurger, setIsBurger] = useState(false) 

  return (


 <div  className="wrapper">
      <Drawer setIsBurger={setIsBurger} isBurger={isBurger}/>
      <Header isBurger={isBurger} setIsBurger={setIsBurger} />
<Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
<Description/>
    {/* <Services/> */}
    </div>

   

  
   

  
  )
}

export default App
