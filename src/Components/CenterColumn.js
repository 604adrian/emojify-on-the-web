import { lazy, Suspense, memo } from 'react'
import '../index.css'
import { MobileView } from 'react-device-detect'
const ParticleAni = lazy(() => import('../backgroundAnimation/ParticleAnimation.js'))

const CenterColumn = memo(function CenterColumn({ children }) {
  return (
    <div id="main-div" className='center-col'>
     {children}
     
     <MobileView>
      <Suspense fallback={<></>}>
        <ParticleAni />
      </Suspense>
     </MobileView>
    
    </div>
  )
})

export default CenterColumn

