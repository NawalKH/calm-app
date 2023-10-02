import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './style'
import './index.css'; 
import {
  Navbar,
  Hero,
} from './components'

const App = () => (
  <div className='bg-primary w-full'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Parallax pages={2} style={{ top: '0', left: '0'}} >
        <ParallaxLayer offset={0} speed={-0.25}>
          <div class="animation_layer parallax" id="hill1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.25}>
        <div class="animation_layer parallax">
          
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div class="animation_layer parallax" id="hill2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.8}>
          <div class="animation_layer parallax" id="title"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="hill3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="hill4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="hill5"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="plant"></div>
      </ParallaxLayer>
          
      <ParallaxLayer offset={1} speed={0.45} >
        <div className='bg-primary'>
          <Hero />
        </div>        
        </ParallaxLayer>
      </Parallax>      
    </div>

)

export default App

