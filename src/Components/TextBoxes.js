import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import '../index.css'
import Fallback from './Fallback'
import autoAnimate from '@formkit/auto-animate'
import { IoMdReturnLeft } from "react-icons/io"
import { FaShuffle } from "react-icons/fa6";
import Definition from './Definition'
import { isMobile } from 'react-device-detect'

const CopyBtn = lazy(() => import('./CopyBtn'))
const TextBox = lazy(() => import('./TxtBoxAndExpand'))
const Alert1 = lazy(() => import('./alerts/Alert1'))
const Alert2 = lazy(() => import('./alerts/Alert2'))

export default function Body() {

  const [input, setInput] = useState('')
  const [submit, setSubmit] = useState('')

  const [pause, setPause] = useState(false)
  const [count, setCount] = useState(0)
  
  let autoFocus = (pause && isMobile) ? false : true 
  let view = (submit && submit !== ' ') ? true : false

  let alert1 = (count>2 && count<5) ? true : false
  let alert2 = (count>6 && count<9) ? true : false 

  const toShuffleOrNotToShuffle = () => {
    if (pause) { 
      setCount(count+1) 
    }
    else {
      setPause(true)
      setSubmit(input);
    }
    return
  }

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      autoAnimate(inputRef.current);
    }
  }, [inputRef])

  const useKeyPress = (handlers = {}, dependencies = []) => {
    useEffect(() => {
      const onKeyDown = (event) => {
      if (!event.repeat) {
        handlers[event.code]?.()
      }
    }

    document.addEventListener("keydown", onKeyDown)

    return () => document.removeEventListener("keydown", onKeyDown)
    }, [handlers, dependencies])
  }

  const InputBar = () => {
    useKeyPress({ Enter: () => {
      setSubmit(input) 
      setPause(true)
    }}, [submit])

    return (
      <>
       <div 
         ref={inputRef}
         className='text-input-container'>
          <input className='text-input' value={input}
            type={'text'}
            id='text-to-translate'
            name='text-to-translate'
            placeholder={' Start the emojification process...'}
            autoFocus={autoFocus}
            onBlur={({ target }) => target.focus()}
            onChange={e => {
              setInput(e.target.value)
              setPause(false)
            }}
          />
        </div>

        <button className='input-btn' 
          onClick={() => { toShuffleOrNotToShuffle() }}>

          {!pause 
            ? <abbr title='Enter'><IoMdReturnLeft  /></abbr>
            : (submit === '' || submit === ' ')
              ? <abbr title='Enter'><IoMdReturnLeft  /></abbr>
              : <abbr title='Shuffle' ><FaShuffle /></abbr>}

        </button>
      </>
    )
  }

  
  /*=============
   * 🛩️ RETURN
==============*/
  return (
    <>

     <InputBar />
      <Suspense 
        fallback={<Fallback heading={'🔍 Translating...'} />}>
       {view && <>
          <CopyBtn input={submit} top={1} />
          <TextBox top={true} submit={submit} />

          <CopyBtn input={submit} top={0} />
          <TextBox top={false} submit={submit} count={count} />
        </>}
      </Suspense>

      <Suspense fallback={<></>}>
        { alert1 && <Alert1 alert1={alert1} /> }
        { alert2 && <Alert2 alert2={alert2} /> }
      </Suspense>

      {!view && <Definition />}

   </>
  )
}
