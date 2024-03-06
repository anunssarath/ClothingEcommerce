import React from 'react'
import Layout from '../components/Layout/layout';

const About = () => {
    return (
      <Layout title={"About us - Clothing Store"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
            we strive to provide our customers with outfits that reflect their true selves, making them feel confident and gorgeous inside and out. We offer a range of ethnic clothing designed to perfection in varied styles, prints, patterns, and top-notch fabrics. Nothing would make us happier than seeing your beloved females walk confidently in our outfits, knowing that we have played a part in empowering them.
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default About;