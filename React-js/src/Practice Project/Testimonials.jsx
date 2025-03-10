import { useState } from 'react'

const Testimonials = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote:'This is the greatest iphone ever',
            author: 'Linh Nguyen'
        },{
            quote:'I think you should do more exercises',
            author: 'Joan Dane'
        },
        {
            quote:'Let go to the park and play sport',
            author: 'Thanh Pham'
        },{
            quote:'I love you 3000, I will never leave you',
            author: 'Daniel Nguyen'
        }
    ]
    const handlePrev =() =>{
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
    }
    const handleNext =() =>{
        setCurrentIndex((currentIndex + 1) % testimonials.length)
    }
  return (
    <div>
      <div>
        {testimonials[currentIndex].quote}
      </div>

      <div>
        - {testimonials[currentIndex].author}
      </div>

      <div>
        <button className='m-10' onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Testimonials
