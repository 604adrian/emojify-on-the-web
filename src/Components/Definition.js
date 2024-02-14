import { memo, Suspense } from 'react'
import '../index.css'
import { TextToSpeech, Sizes } from 'tts-react'
import { isMobile } from 'react-device-detect'

const Definition = memo(function Definiton() {

  return (
    <div className='def-container'>

      <div className='def-header'>
        <Suspense fallback={<h1 margin={'auto'}>🔈 Loading audio...</h1>}>
          <TextToSpeech
            markTextAsSpoken
            align="horizontal"
            size={Sizes.SMALL}
            allowMuting={false}>
            <h1>emojification</h1>
          </TextToSpeech>
        </Suspense>
      </div>

      {!isMobile &&
        <span margin='15px'>
          <pre className='phonetic'>emo·ji·fi·ca·tion   /ɪmˈɒ-ɡi-fɪ-kˈe‍ɪ-ʃən/</pre>
        </span>}

      <span className='noun'>
        <p><em>noun</em> [uncountable]</p>
      </span>

      <hr />

      <h3 style={{ marginTop: '13px' }}>Meaning</h3>
      <ol>
        <li>The translating of an alphanumeric string into the Unicode Emoji Standard</li>
        <li>The process of making your text more snazzy-looking</li>
        <li>An extremely rad <a 
          className='link-style'
          href="https://www.npmjs.com/package/emojification" 
          target="_blank"
          rel="noreferrer"
        >npm package</a> 🤙</li>
      </ol>

      <h3 style={{ marginTop: '13px' }}>Example sentences</h3>
      <blockquote>        
        <q>The <em>emojification</em> of online discourse suggests that ancient Egyptian hieroglyphics were an early form of memes</q>
      </blockquote>

      <blockquote>
        <q>I called my npm package <q><em>emojification</em></q> because the name <q>emojify</q> had already been taken</q>
      </blockquote>

      <blockquote>       
        <q>Darryl, I swear to God, if you don't stop using the word <q><em>emojification</em></q> around the house then I am filing for divorce.</q>
      </blockquote>

      <h3>Etymology</h3>
      <div className='emo-wrapper'>
        <p className='emo'>
        <a
          className='link-style'
          href="https://www.merriam-webster.com/dictionary/emoji"
          target="_blank"
          rel="noreferrer"
        >EMOJI</a> + <a 
          className='link-style'
          href="https://www.merriam-webster.com/dictionary/-ification"
          target="_blank"
          rel="noopener noreferrer"
        >-IFICATION</a>
        </p>
      </div >
    </div>

  )
});

export default Definition
