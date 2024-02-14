import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import options from './particleAniConfig';

export default function ParticleAni({ children }) {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
            //await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {};

    return (
       <>
        {init && 
          <Particles
            className='particleAni'
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
         }
       </>
    )

};
