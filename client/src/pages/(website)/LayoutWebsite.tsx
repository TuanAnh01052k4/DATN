
import { Outlet } from 'react-router-dom'
import Footer from './_components/Footer'
import Header from './_components/Header'

const LayoutWebsite = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default LayoutWebsite