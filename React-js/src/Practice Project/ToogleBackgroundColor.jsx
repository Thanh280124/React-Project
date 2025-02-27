import { useState } from "react"


const ToogleBackgroundColor = () => {
    const [bgColor ,setBgColor] = useState('white');
    const [color, setColor] = useState('#1b1b1b');
    const [buttonStyles, setButtonStyle] = useState('white');
    const handleClick = () => {
        setBgColor(bgColor == 'white' ? '#1b1b1b' : 'white')
        setColor(color == '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
        setButtonStyle(bgColor == 'white' ? '#1b1b1b' :'white')
    }
  return (
    <div style={{backgroundColor: bgColor, color: color}} className="h-screen">
      <button onClick={handleClick} style={{buttonStyles,color: color, border:`2px solid ${color}`}}>
        {bgColor === '#1b1b1b' ? "Black Theme" : 'White Theme'}
      </button>

      <section>
        <h1>Welcome to real World ... </h1>
      </section>
    </div>
  )
}

export default ToogleBackgroundColor
