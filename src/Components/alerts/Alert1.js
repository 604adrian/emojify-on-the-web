import { memo } from 'react'
import '../../index.css'

const Alert1 = memo(function Alert1({ alert1 }) {
  return (
    <div className='alert'>
      <h3>Not working with a full deck?</h3>
      <p>
        ⚠️  Some letters do not have very many emojis, so not all shuffles are garanteed to produce a unique result.
      </p>
    </div>
  )
})

export default Alert1 
