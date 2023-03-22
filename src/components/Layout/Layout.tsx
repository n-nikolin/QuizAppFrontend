import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children?: React.ReactNode
  };

const Layout: React.FC<Props>= ({children}) => {
// const Layout= ({children}: any) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout