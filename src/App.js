import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React,{Component} from 'react';
import Helloclasscomponent from './Component/Helloclasscomponent';
import Hellofuntioncomponent from './Component/Hellofuntioncomponent'
import DemoCountClassComponents from './Component/DemoCountClassComponents';
import DemoFuntionCountComponents from './Component/DemoFuntionCountComponents';
import Props from './Component/Props';
import MenuComponent from './Component/MenuComponent';
import { DISHES } from './shared/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            {/* <header className='App-header'> */}
            {/* <Helloclasscomponent/>
             <Hellofuntioncomponent/>
            <DemoCountClassComponents/>
            <DemoFuntionCountComponents/>
            <Props/> */}
            </div>
            {/* </header>
           
          </div> */}
       </Navbar>
       <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}


export default App;