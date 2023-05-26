import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PetCard from './components/PetCard'
import { Basket } from './components/Basket'

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Basket></Basket>
    </DndProvider>
  )
}

export default App






// import { useState } from 'react'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'


// const App = () => {

//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       text: "hello"
//     }, {
//       id: 1,
//       text: "world"
//     }, {
//       id: 1,
//       text: "yes"
//     }
//   ])

//   return (
//     <div className="App">
//       <DndProvider backend={HTML5Backend}>
//         {cards.map((card, i) => (<p>{card.text}</p>))}
//       </DndProvider>
//     </div>)
// }

// export default App
