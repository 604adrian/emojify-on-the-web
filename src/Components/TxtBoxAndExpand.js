import { useState, memo, useRef, useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import autoAnimate from '@formkit/auto-animate'
import toEmoji from 'emojification'
import { useIsOverflow } from '../detectOverflow.js'
import '../index.css';

const TextBox = memo(function TextBox({ top, submit, count=undefined }) {
  const [expand, setExpand] = useState(false)

  const emojiStyle = (top) ? 'emoji-bor' : 'emoji-funk'
  let text = (top) ? toEmoji(submit) : toEmoji(submit, true)

  let txtBoxClass = (expand)
    ? ['text-box', 'text-box-big'].join(' ')
    : ['text-box', 'text-box-slim'].join(' ') 

  let areaForBtn = (top) 
    ? ['expand-button-container', 'expand-button-top'].join(' ')
    : ['expand-button-container', 'expand-button-bottom'].join(' ')

  const parentRef = useRef(null)
  const expandRef = useRef(null)

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef])

  const isOverflow = useIsOverflow(expandRef, (setIsOverflowFromCallback) => {});

  let overflowing = (isOverflow) 
    ? !expand
      ? 'text-box-overflow' 
      : ''
    : ''

  return (
    <>
     <div 
       ref={parentRef}
       style={{ 
        gridColumnEnd: `${isOverflow 
          ? '7' 
          : expand
            ? '7'
            : '8'}`,
       }}
       className={[txtBoxClass, emojiStyle, overflowing, 'emoji-text'].join(' ')}
     >
        {expand 
          ? <div className={['emoji-text', 'big'].join(' ')} >
              <pre>{ text }</pre></div>
          : <pre
              className={['emoji-text', 'small'].join(' ')} ref={expandRef} >
                { text }</pre>
        }
      </div>
      
      {(isOverflow || expand) &&
       <div className={areaForBtn} >
         <button 
            className='expand-btn'
            onClick={() => setExpand(!expand)}
          >
          <abbr title={`${!expand ? 'Expand' : 'Minimize' }`}>
            <IoIosArrowUp 
              style={{ 
                position: 'relative',
                transition: "all 0.2s ease-in",
                transform: `rotate(${expand ? 0 : '-0.5turn'})`,
               }} />
          </abbr>
         </button>
        </div>
       }


    </>
  )
})

export default TextBox
