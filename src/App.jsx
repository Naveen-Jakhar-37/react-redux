import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import {Routes, Route} from 'react-router-dom'
import CardsDetails from './component/CardsDetails';
import Cards from './component/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart:id' element={<CardsDetails />} />
      </Routes>
    </>
  )
}

export default App
