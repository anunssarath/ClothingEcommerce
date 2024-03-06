import React from 'react'
import Layout from '../components/Layout/layout';

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p>Clothstore.com takes privacy protection of their customers very seriously. We operate on the highest standards in this regard because we value the trust you have a place in us. We strive to ensure that we treat all information provided by you with the highest diligence and integrity.</p>
            <p>Through this document, we wish to make you feel safe and comfortable while using our website. We want to make you fully aware of certain data/information that we will be collecting from you so that you feel confident sharing that particular information with us.</p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Policy;