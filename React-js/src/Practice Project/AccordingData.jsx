import { useState } from "react"


const AccordingData = ({title,content}) => {
    const [isActive , setIsActive] = useState(false)
  return (
    <section key={Math.random()}>
        <div onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p>{isActive ? '-' : '+'}</p>
        </div>
        <div>
            {isActive && <p>{content}</p>}
        </div>
    </section>
  )
}

export default AccordingData
