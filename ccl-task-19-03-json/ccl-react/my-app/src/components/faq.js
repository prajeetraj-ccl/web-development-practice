import working from "../images/working.png";
import arrow from "../images/arrow.png";


function FAQ() {
  return (
    <div className="faqs">

      <div className="faq-left">
        <h1 className="faq-title">Faq’s</h1>
       <img src={working} className="faq-icon" alt="working" />
      </div>

      <div className="faq-right">

        <div className="faq-wrapper">
          <h1>How far in advance should </h1>
          <div className="faq-arrow">
           <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="faq-wrapper">
          <h1>What technology do you use?</h1>
          <div className="faq-arrow">
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="faq-wrapper">
          <h1>How much does the project cost?</h1>
          <div className="faq-arrow">
           <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="faq-wrapper">
          <h1>What should I expect during my first visit?</h1>
          <div className="faq-arrow">
           <img src={arrow} alt="arrow" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQ;