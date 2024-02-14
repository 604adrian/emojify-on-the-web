import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { isMobile } from 'react-device-detect'
//import reportWebVitals from './reportWebVitals';
import Fallback from './Components/Fallback'

const CenterColumn = React.lazy(() => import('./Components/CenterColumn'))
const Body = React.lazy(() => import('./Components/TextBoxes'))
const ParticleAni = React.lazy(() => import('./backgroundAnimation/ParticleAnimation'))

const loading = [
  '🛰️ Loading emoji tools...',
  '📡 Loading translation tools...',
  '📶 Loading wireless emojis..',
  '🖥️ Doing computer stuff...',
  '🛜 Loading...',
  '🌐 Loading'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense 
      fallback={
        <div className='splash'>
          <Fallback 
            heading={loading[Math.floor(Math.random() * loading.length)]}
          />
        </div>
      }>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CenterColumn>
          <Body />
        </CenterColumn>
      </div>

      {!isMobile &&
        <React.Suspense fallback={<></>}>
          <ParticleAni />
        </React.Suspense>}

    </React.Suspense>
  </React.StrictMode>
);

// https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
