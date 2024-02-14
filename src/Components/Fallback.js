import { memo } from 'react'
import '../index.css'
import Stack from '@mui/material/LinearProgress'
import LinearProgress from '@mui/material/LinearProgress'

const Fallback = memo(function Fallback({ heading }) {
 return (
    <>
      <div className='loading-wrapper'>
        <h1 className='loading-header'>{heading}</h1>
      </div>
      <Stack className="loading-bar">
        <LinearProgress color="secondary" />
      </Stack>
    </>
 ) 
}) 

export default Fallback
