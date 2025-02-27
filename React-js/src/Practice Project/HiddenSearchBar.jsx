import { useState } from "react"
import { MdSavedSearch } from "react-icons/md";

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor,setBgColor] = useState('white');
    const handleClick = (e) => {
        setBgColor("#1a1a1a");
        if (e.target.classList.contains("container")) {
            setShowInput(false);
            setBgColor("#fff");
        }
    };

  return (
    <section style={{backgroundColor: bgColor}} className="container h-screen" onClick={handleClick}>
        {showInput ? 
        (<input type="text" placeholder="Search"/>):(<MdSavedSearch onClick={() => setShowInput(true)}/>)
    }

    </section>
  )
}

export default HiddenSearchBar
