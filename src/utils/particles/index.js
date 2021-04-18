import React from 'react'
import Particles from "react-particles-js";
import particlesConfig from './configParticles';

const ParticlesBG = () => (
     <div style={{ position: 'absolute', zIndex: '0' }}>
      <Particles height='99vh' width='100vw' params={particlesConfig} />
    </div>
    )

export default ParticlesBG;