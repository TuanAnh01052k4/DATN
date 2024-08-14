import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from '../pages/(admin)/LayoutAdmin'
import PageSignin from '../pages/(website)/Auth/Signin/Page'
import PageSignup from '../pages/(website)/Auth/Signup/Page'
import LayoutWebsite from '../pages/(website)/LayoutWebsite'
import PageBlog from '../pages/(website)/Blog/BlogPage/Page'
import PageDetail from '../pages/(website)/Blog/BlogDetail/Page'
import HomePage from '../pages/(website)/home/HomePage'
import MyInformation from '../pages/(website)/my-information/Page'
import Account from '../pages/(website)/my-information/information/Page'
import CartPage from '../pages/(website)/cart/CartPage'
import OrderPage from '../pages/(website)/order/OrderPage'
import ThanksPage from '../pages/(website)/thanks/Page'
import ProductPage from '../pages/(website)/product/Page'
import ProductDetailsPage from '../pages/(website)/productdetails/Page'
import AdminProduct from '../pages/(admin)/product/Page'
import ListProduct from '../pages/(admin)/product/list/Page'
import AddProductAdmin from '../pages/(admin)/product/add/Page'
import LayoutColor from '../pages/(admin)/color/Page'
import CategoriesPage from '../pages/(admin)/categories/Page'

import CategoriesForm from '../pages/(admin)/categories/_components/CategoryForm'
import PageAuthAdmin from '../pages/(admin)/users/Page'
import ListUser from '../pages/(admin)/users/_components/ListUser'
import ViewProductAdmin from '../pages/(admin)/product/view/Page'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
        <Route index element={<HomePage />} />
        <Route path='product' element={<ProductPage />} />
        <Route path='productdetails' element={<ProductDetailsPage />} />
        <Route path='signin' element={<PageSignin />} />
        <Route path='signup' element={<PageSignup />} />
        <Route path='blog' element={<PageBlog />} />
        <Route path='blogdetail' element={<PageDetail />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='order' element={<OrderPage />} />
        <Route path='thanks' element={<ThanksPage />} />
        <Route path='customer' element={<MyInformation />}>
          <Route path='infor' element={<Account />} />
        </Route>
      </Route>
      <Route path='admin' element={<LayoutAdmin />}>
        <Route path='products' element={<AdminProduct />}>
          <Route index element={<ListProduct />} />
          <Route path='add' element={<AddProductAdmin />} />
          <Route path='view/:id' element={<ViewProductAdmin />} />
        </Route>
        <Route path='colors' element={<LayoutColor />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='categories/add' element={<CategoriesForm />} />
        <Route path='categories/edit/:id' element={<CategoriesForm />} />
        <Route path='auth' element={<PageAuthAdmin />} >
          <Route index element={<ListUser />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router