import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../images/Cap.PNG'
import googleImage from '../images/g2.JPG'
import fbImage from '../images/f2.JPG'
import lnImage from '../images/l2.JPG'
import tweetImage from '../images/t2.JPG'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sign = () => {
  return (
    <main className='d-flex mt-4'  >
      <section style={{width:"50%"}}>
      <h3>Sign In </h3>
      <div className='user-head'>
      <h6>New user?</h6> 
      <h6 className='account'>Create an account</h6>
      </div>
      <form >
 
   <div className='form'>
   <input className='form-text' type="text" name="name" placeholder='Username or email' />
    <br/>  
    <input className='form-text' type="text" name="pwd" placeholder='Password' />
    <br/>
    <div className='d-flex align-items-center justify-content-center gap-2 mt-2'>
    
    <input type="checkbox" className='check-box' />
    <label >
    Keep me Signed in
    </label>
    </div>
    
   </div>
   <div>
    <hr/>
    <p>or Sign In with</p>
   </div>
    
</form>
         
      <Link to="/Home"><button className='button'>Sign In</button></Link>
      <div className='bottom-elements'>
        <a href='https://www.google.co.in/'><img src={googleImage} alt='google' className='image-element'/></a>
        <a href='https://www.facebook.com/'><img src={fbImage} alt='fb' className='image-element'/></a>
        <a href='https://www.linkedin.com/'><img src={lnImage} alt='linkedIn' className='image-element'/></a>
        <a href='https://twitter.com/tweet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src={tweetImage} alt='tweet' className='image-element'/></a>
      </div>
      {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-g" /> */}
      {/* <FontAwesomeIcon icon="fa-regular fa-circle-g" /> */}
        </section>
        <section>

        <img src={homeImage} alt="image" className='home-image'/>
        </section>
        {/* <section style={{width:"50%",backgroundColor:"green"}}>
            <p>ghhj</p>
        </section> */}
    
      
    </main>
  )
}

export default Sign
