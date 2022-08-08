import React, { useState } from 'react'
import './Banner.css'

function Banner() {
  const [close, setClose] = useState(false)
  return (
    <div
      id="js-hero-banner"
      className="redis-hackathon-hero-banner"
      style={{ display: close ? 'none' : '' }}
    >
      <div className="campaignmode-hackathon">
        <button className="closebutton" onClick={() => setClose(!close)}>
          ×
        </button>
        <div className="campaignmode-hackathon--first">
          <div className="campaignmode-hackathon--top">
            <h4>August 1, 2022 - August 29, 2022</h4>
            <div className="campaignmode-hackathon--third">
              <div className="campaignmode-hackathon--row">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--WtDOBxPM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h53gehcymycvhenvbwvd.png"
                  style={{ width: '100px' }}
                />
                <span className="campaignmode-hackathon--column campaignmode-hackathon--icon">
                  +
                </span>
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ewx5ZeLa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://jess.forem.lol/images/V-ZK80tooorhDLpPr_QylDqmqo9rs4oOicM6hH0LHSE/w:420/mb:500000/ar:1/aHR0cHM6Ly9qZXNz/LmZvcmVtLmxvbC9y/ZW1vdGVpbWFnZXMv/dXBsb2Fkcy9hcnRp/Y2xlcy85bXd6eWEz/YmkyMTQweXBlMDQ1/bi5wbmc"
                  className="campaignmode-hackathon--column campaignmode-hackathon--clipart"
                  style={{ width: '90px' }}
                />
              </div>
            </div>
            <h1>Welcome to big shark!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, &amp; more!
            </p>
            <a href="#">Learn More &amp; Enter</a>
          </div>
        </div>
        <div className="campaignmode-hackathon--second">
          <div className="campaignmode-hackathon--row">
            <img
              src="https://marketplace.canva.com/Q9RcE/MAFFPbQ9RcE/1/tl/canva-cartoon-friendly-shark-MAFFPbQ9RcE.png"
              className="campaignmode-hackathon--column campaignmode-hackathon--clipart campaignmode-hackathon--logo"
            />
            <span className="campaignmode-hackathon--column campaignmode-hackathon--icon">
              +
            </span>
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ewx5ZeLa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://jess.forem.lol/images/V-ZK80tooorhDLpPr_QylDqmqo9rs4oOicM6hH0LHSE/w:420/mb:500000/ar:1/aHR0cHM6Ly9qZXNz/LmZvcmVtLmxvbC9y/ZW1vdGVpbWFnZXMv/dXBsb2Fkcy9hcnRp/Y2xlcy85bXd6eWEz/YmkyMTQweXBlMDQ1/bi5wbmc"
              className="campaignmode-hackathon--column campaignmode-hackathon--clipart"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
