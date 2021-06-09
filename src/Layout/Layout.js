import React,{Component}                         from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import HomePage                                  from '../Project/Homepage.js';
import Services                                  from '../Project/Services/Services.js';
import Overview                                  from '../Project/Overview/Overview.js';
import Portfolio                                 from '../Project/Portfolio/Portfolio.js';
import WorkTime                                   from '../Project/WorkTime/WorkTime.js';
import Awards                                    from '../Project/Awards/Awards.js';
import Address                                    from '../Project/Address/Address.js';
                      


 class Layout extends Component{

  render(){
       return(
        <div className="container-fluid noPad ">
          <Router>
            <Switch>

              <Route path="/"             exact strict component={HomePage}  />
              <Route path="/Services"     exact strict component={Services}  />
              <Route path="/Overview"     exact strict component={Overview}  />
              <Route path="/Portfolio"    exact strict component={Portfolio}  />
              <Route path="/WorkTime"     exact strict component={WorkTime}  />
              <Route path="/Awards"       exact strict component={Awards}  />
              <Route path="/Address"      exact strict component={Address}  />
              

            </Switch>        
          </Router>
        </div>
      );
    } 
}
export default Layout;