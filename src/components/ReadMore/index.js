// Write your code here
import {useState} from 'react'
import {Image, MainHeading} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [text, setText] = useState(true)
  const clicked = () => {
    setText(prevState => !prevState)
  }
  return (
    <div>
      <MainHeading>React Hooks</MainHeading>
      <p>Hooks are a new addition to React</p>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>
        {text ? reactHooksDescription.slice(0, 170) : reactHooksDescription}
      </p>
      <button type="button" onClick={clicked}>
        {text ? 'Read More' : 'Read Less'}
      </button>
    </div>
  )
}

export default ReadMore
