import React, {Component} from 'react' 
import './App.css'

class App extends Component{

  render(){
    return(
      <div>
        <div className='background-picture'>
          <header className='header-links'>
          <h2 className='bootstrap-color'>Start Bootstrap</h2>
          <nav className='nav-links'>
            <span className='one'>SERVICES</span>
            <span className='two'>PORTFOLIO</span>
            <span className='three'>ABOUT</span>
            <span className='four'>TEAM</span>
            <span className='five'>CONTACT</span>
          </nav>
          </header>
          <div className='welcome-container'>
            <p className='word-1'>Welcome To Our Studio!</p>
            <p className='word-2'>IT'S NICE TO MEET YOU!</p>
            <button className='button'>TELL ME MORE</button>
          </div>
        </div>
          <section className='services'>
            <h2>SERVICES</h2>
            <h3 className='under-service'>Lorem ipsum dolor sit amet consectetur.</h3>
          </section>
          <section className='emblem-container'>
            <div>
              <img src='https://d3tvemk8zf61cc.cloudfront.net/empty_cart_icon.png' height='100px'/>
              <h4>E-Commerce</h4>
              <p className='lorem-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div>
              <img className='laptop' src='https://i7.pngguru.com/preview/677/681/142/laptop-computer-icons-scalable-vector-graphics-clip-art-size-laptop-icon.jpg' height='100px' />
              <h4>Responsive Design</h4>
              <p className='lorem-color'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div>
              <img className='laptop'src='https://i1.pngguru.com/preview/625/396/893/button-ui-2-windows-lock-icon-png-icon.jpg' height='100px'/>
              <h4>Web Security</h4>
              <p className='lorem-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </section>
    </div>
      
    )
  }
}

export default App