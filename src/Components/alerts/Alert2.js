import { memo } from 'react'
import '../../index.css'

const Alert2 = memo(function Alert2({ alert2 }) {
  return (
    <div className='alert'>
     <h3>Funky Mode is impure</h3>
     <p>
      ⚠️  Why is Funky Mode so funky? Because it is an impure function: the same inputs do not always produce the same outputs. While this is fun, it means that you shouldn't expect the funky message you copy to your clipboard to be exactly the same as the one displayed!
     </p>
    </div>

  )
})

export default Alert2

