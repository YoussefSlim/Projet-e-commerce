import { Header } from '../Header/header';
import { Carrousel } from '../Carrousel/carrousel';
import { Products } from '../Products/products';
import { Categories } from '../Categories/categories';
import { Footer } from '../Footer/footer';

import './style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrousel />
      <Products />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
