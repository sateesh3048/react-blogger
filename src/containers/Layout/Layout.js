import React, {Component} from "react";
import RoutesList from '../../routes';
import Header from '../../components/common/Header/Header';
class Layout extends Component {
    render(){
        return(
          <div>
              <Header />
              <RoutesList />
          </div>
        )
    }
}

export default Layout;