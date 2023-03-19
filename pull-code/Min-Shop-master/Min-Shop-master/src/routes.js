import Category from './pages/Category/Category'
import Contact from './pages/Contact/Contact'
import FAQ from './pages/FAQ/FAQ'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Search from './pages/Search/Search'
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage'
import SignUp from './pages/SignUp/SignUp'
import Step1Checkout from  './pages/CheckoutPage/Step1Checkout'
import Step2Checkout from  './pages/CheckoutPage/Step2Checkout'
import Step3Checkout from  './pages/CheckoutPage/Step3Checkout'
import Step4Checkout from  './pages/CheckoutPage/Step4Checkout'

const publicRoutes = [
    {path: '/', page: Home},
    {path: '/contact', page: Contact},
    {path: '/faq', page: FAQ},
    {path: '/category', page: Category},
    {path: '/login', page: Login},
    {path: '/product', page: Product},
    {path: '/search', page: Search},
    {path: '/shopping-cart', page: ShoppingCartPage},
    {path: '/sign-up', page: SignUp},
    {path: '/step-1-checkout', page: Step1Checkout},
    {path: '/step-2-checkout', page: Step2Checkout},
    {path: '/step-3-checkout', page: Step3Checkout},
    {path: '/step-4-checkout', page: Step4Checkout},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}