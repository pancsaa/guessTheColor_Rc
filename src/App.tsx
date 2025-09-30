import { useEffect, useState } from 'react'
import './App.css'
import Square from './componens/Square';

type BoxType = {
  id: string;
  bgColor: string;
  isClicked: boolean;
  isFound: boolean;
}

const PIECE = 64
const data = Array.from({ length: PIECE }, () => ({
  id: "",
  bgColor: "",
  isClicked: false,
  isFound: false,
}))

const randColor = (): string => {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

function App() {
  const [start,setStart]=useState<boolean>(true)
  const [guesscolor,setGuessColor]=useState<string>("")
  const [boxes, setBoxes] = useState<BoxType[]>(data)

  const clickHandler=(id:string)=>{
    boxes.map()
  }

  useEffect(()=>{
    const colors=Array.from({length:PIECE},()=>randColor())
    setGuessColor(colors[Math.floor(Math.random()*PIECE)])
    //console.log("A useEffect futtat engem!")
    setBoxes(prev=>prev.map((_,index)=>({id: `b${index}`,bgColor: colors[index],isClicked: false,isFound: false})))
    //console.log(boxes)
  },[start])

  return (
    <>
      <header>
        <h1>Találd Ki a színt!</h1>
        <h3>A szín kódja: <span>{guesscolor}</span> </h3>
        <h3>Tippek száma: <span>0</span> </h3>
        <h3>grat helye</h3>
      </header>
      <main>
        <section>
          {boxes.map((b,index) => <Square key={index + 1} id={b.id} bgColor={b.bgColor} isClicked={b.isClicked} isFound={b.isFound} clickFn={()=>clickHandler(b.id)}/>)}
        </section>
        <button onClick={()=>{setStart(prev=>!prev)}}>Again</button>
      </main>
    </>
  )
}

export default App
