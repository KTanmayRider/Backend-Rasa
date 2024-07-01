import React from 'react';
import Award1Img from '../assets/Images/Award1.png'
import Award2Img from '../assets/Images/Award2.png'
import Award3Img from '../assets/Images/Award3.png'
import Award4Img from '../assets/Images/Award4.png'
import '../assets/CSS/Awards.css'

const Awards = () => {
  return (
<>
<div className='Title' ><h1>Awards and Recognitions</h1></div>

<div className='Award'>



<div className='Award'> <img src={Award1Img} alt="Award" /> </div>
<div className='Award'> <img src={Award2Img} alt="Award" /> </div>
<div className='Award' id='Award3'> <img src={Award3Img} alt="Award" /> </div>
<div className='Award'> <img src={Award4Img} alt="Award" /> </div>
</div>

</>
  
  );
};

export default Awards;