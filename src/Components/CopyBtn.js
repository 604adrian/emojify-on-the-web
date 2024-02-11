import { useState, memo } from 'react'
import { FaCheck } from "react-icons/fa"
import { PiCopyBold } from "react-icons/pi"
import toEmoji from 'emojification'
import '../index.css';

const CopyBtn = memo(function CopyBtn({ input, top }) { 

  const [copied, setCopied] = useState(false)

  let text = (top) ? toEmoji(input) : toEmoji(input, true)

  const whichBtn = (top) ? 'copy-btn-top' : 'copy-btn-bottom'
  const whichFil = (top) ? 'filler1' : 'filler2'

  const tracker = (copied)
    ? 'Copied'
      : (top) 
        ? 'Boring Mode'
        : 'Funky Mode'

  const MsgState = memo(function MsgState({ whichFil, tracker, counter }) {
    return <div className={whichFil}><h2>{tracker}</h2></div>
  })

  return (
   <>

    <MsgState whichFil={whichFil} tracker={tracker} />

    <button 
      className={['copy-btn-container', 'copy-btn', whichBtn].join(' ')}
      onClick={()=>{ 
        navigator.clipboard
          .writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 4000)
      }}
     > 
      {copied 

        ? <abbr title="✓ Copied!"
          ><FaCheck className={['copied-symbol', 'copied-checkmark'].join(' ')} /></abbr>

        : <abbr title="Copy"
          ><PiCopyBold className='copied-symbol' /></abbr>}
     </button>
    </>
   
  )
})

export default CopyBtn
