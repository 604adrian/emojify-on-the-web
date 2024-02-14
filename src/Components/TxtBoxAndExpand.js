import { useState, memo, useRef, useEffect } from 'react'
import '../index.css';
import autoAnimate from '@formkit/auto-animate'
import toEmoji from 'emojification'
import { useIsOverflow } from '../detectOverflow.js'
import { isMobile } from 'react-device-detect'
import { IoIosArrowUp } from 'react-icons/io'
import { FaArrowCircleDown }  from 'react-icons/fa'

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
  let overflowing = (isOverflow && !isMobile && !expand) ? 'overflowing' : ''

  return (
    <>
     <div 
       ref={parentRef}
       style={{ gridColumnEnd: `${isOverflow ? '8' : expand ? '8': '9'}` }}
       className={[txtBoxClass, emojiStyle, overflowing, 'emoji-text'].join(' ')}
     >
        {expand 
          ? <div className={['emoji-text', 'big'].join(' ')} >
              <pre>{ text }</pre></div>
          : <pre 
              className='emoji-text' ref={expandRef}>
              { text }
            </pre>
        }
      </div>


      {(isOverflow || expand) &&
      <div className={areaForBtn}>
         <button 
           className={`${!isMobile ? 'expand-btn' : 'ios-expand-btn'}`}
           onClick={() => setExpand(!expand)}
          >
                {!isMobile
                  ? <abbr title={`${!expand ? 'Expand' : 'Minimize' }`}>
                      <IoIosArrowUp 
                        style={{ 
                          position: 'relative',
                          transition: "all 0.2s ease-in",
                          transform: `rotate(${expand ? 0 : '-0.5turn'})`,
                        }} />
                    </abbr>
                   : <FaArrowCircleDown
                       style={{ 
                         position: 'relative',
                         transition: "all 0.2s ease-in",
                         transform: `rotate(${!expand ? 0 : '-0.5turn'})`,
                         textShadow: "0px 0px 2px black, 0 0 15px white"
                       }} 
                     />
                    }
         </button>
        </div>
       }

    </>
  )
})

export default TextBox
