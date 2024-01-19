import Accordion from "./Accordion/Accordion";
import Cart from "./Cart/Cart";
import { CartProvider } from "./Cart/CartContext";
import GroceryList from "./Grocery Bud/GroceryList";
import Links from "./Links";
import Nav from "./NavBar/Nav";
import Navbarpractice from "./Navbarpractice";
import TourPackages from "./Our Tour Packages/TourPackages";
import OurReviews from "./Reviews/OurReviews";
import SidebarMain from "./Sidebar/SidebarMain";
import Slider from "./Slider/Slider";
import Taskdata from "./Task Reminder/Taskdata";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Links/>
      {/* <CartProvider> */}
       <Routes>
       <Route path='/task' element={<Taskdata/>}/>
      <Route path='/tours' element={<TourPackages/>}/>
      <Route path='/reviews' element={<OurReviews/>}/>
      <Route path='/accordion' element={<Accordion/>}/>
      <Route path='/slider' element={<Slider/>}/>
      <Route path='/grocery' element={<GroceryList/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/navbar' element={<Navbarpractice/>}/>
      <Route path='/sidebar' element={<SidebarMain/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    {/* </CartProvider>  */}
    </>
  );
}

export default App;
