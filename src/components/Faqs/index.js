import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-container">
          {faqsList.map(eachFaqItem => (
            <FaqItem eachFaqItem={eachFaqItem} key={eachFaqItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
