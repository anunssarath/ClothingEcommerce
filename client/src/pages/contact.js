import React from 'react'
import Layout from '../components/Layout/layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={'Contact Us- Clothstore'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query  suggestion or just want to say hello? Feel free to reach out! We’ll be happy
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.clothstore@online.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :9786543456
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;