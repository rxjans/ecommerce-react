import Header from './components/header';
import './App.css';
import Banner from './components/banner';
import Category from './components/category';
import Products from './components/products';
import Footer from './components/footer';
import Blog from './components/blog';
import Services from './components/services';

function App() {
  return (
    <div className='bg-site1 bg-fixed bg-cover'>
      <div className='w-[1400px] mx-auto bg-white border rounded-3xl'>
        <Header />
        <Banner />
        <Category />
        <Products />
        <Services />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
