import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
//import reportWebVitals from './reportWebVitals';

import CenterColumn from './Components/CenterColumn';
import Body from './Components/TextBoxes'
const ParticleAni = React.lazy(() => import('./backgroundAnimation/ParticleAnimation.js'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <CenterColumn>
        <Body />
      </CenterColumn>
    </div>
    <React.Suspense fallback={<></>}>
      <ParticleAni />
    </React.Suspense>
  </React.StrictMode>
);

// https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
