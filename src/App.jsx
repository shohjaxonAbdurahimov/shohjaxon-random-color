import React, { useState } from 'react'

function App() {

  const [color, setHex] = useState(`#25dd6d`)
  const [color1, setHex1] = useState(`#176251`)
  const [color2, setHex2] = useState(`#6abc18`)
  const [color3, setHex3] = useState(`#29a405`)
  const randomHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16)
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16)
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16)

    setHex(randomColor)
    setHex1(randomColor1)
    setHex2(randomColor2)
    setHex3(randomColor3)
  }


  return (
    <div className='App'>
      <div className="h1_div">
        <h1 className='h1' style={{ background: `${color}` }} >{color}</h1>
        <h1 className='h1' style={{ backgroundColor: `${color1}` }} >{color}</h1>
        <h1 className='h1' style={{ backgroundColor: `${color2}` }} >{color}</h1>
        <h1 className='h1' style={{ backgroundColor: `${color3}` }} >{color}</h1>
      </div>
      <button onClick={randomHex}>random color</button>
      <button onClick={() => navigator.clipboard.writeText(color)}>copy color</button>
    </div>

  )
}

export default App