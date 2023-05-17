import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    displayAnswerText: false,
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      displayAnswerText: !prevState.displayAnswerText,
    }))
  }

  render() {
    const {eachFaqItem} = this.props
    const {displayAnswerText} = this.state
    const btnImgSrc = displayAnswerText
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    const btnImgAlt = displayAnswerText ? 'minus' : 'plus'

    return (
      <li>
        <div className="item-container">
          <h1>{eachFaqItem.questionText}</h1>
          <button type="button">
            <img
              src={btnImgSrc}
              alt={btnImgAlt}
              onClick={this.onToggleIsActive}
            />
          </button>
        </div>
        {displayAnswerText && (
          <div className="answer-container">
            <hr />
            <p>{eachFaqItem.answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
