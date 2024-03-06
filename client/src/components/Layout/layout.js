import React from 'react'
import Footer from './footer'
import Header from './header'
import {Helmet} from 'react-helmet'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
        <Header/>
        <main style={{minHeight :'66vh'}}>
        <ToastContainer position="top-right" autoClose={7000} />

         
    {children}
    </main>
    <Footer/>
    </div>
  )
}
Layout.defaultProps = {
  title: "Clothing Store",
  description: "Online store of clothes",
  keywords: "Cloth ",
  author: "Clothing Store",
};

export default Layout;