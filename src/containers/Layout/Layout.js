import React, {Component} from "react";
import Header from './Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Main from '../../components/layout/Main/Main';

class Layout extends Component {
    render(){
        return(
          <div>
              <Header />
              <Main />
              <Footer />
          </div>
        )
    }
}

export default Layout;