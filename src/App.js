import React, { Component } from 'react';
import './scss/App.scss';
import Header from './components/header/header';
import Jcfc from './view/Jcfc';
import Bm from './view/Bm';
import Yy from './view/Yy';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom'
class Footer extends Component {
  render() {
    return (
      <div className="footer">
      		<HashRouter>
		      	<ul className="ub border_t-1px">
		          <li className="ub ub-f1 border_r-1px">
		          	<NavLink activeClassName="selected" to="/hall">检务大厅</NavLink>
		          </li>
		          <li className="ub ub-f1">
		          	<NavLink activeClassName="selected" to="/jcfc">检察风采</NavLink>
		          </li>
		        </ul>
        </HashRouter>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="NavHall">
      		<HashRouter>
		      	<ul className="ub border_t-1px">
		          <li className="ub ub-f1 border_r-1px">
		          	<NavLink activeClassName="selected" to="/hall/bm">便民服务</NavLink>
		          </li>
		          <li className="ub ub-f1">
		          	<NavLink activeClassName="selected" to="/hall/yy">预约服务</NavLink>
		          </li>
		        </ul>
        	</HashRouter>
      </div>
    );
  }
}
const Hall = () => (
  <div>
  	<Header unBack title="检务大厅"/>
  	<NavBar />
   	<div className="hall-router">
   			<Route path="/hall/bm" component={Bm} />
				<Route path="/hall/yy" component={Yy} />
   	</div>
  </div>
)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        	<div className="bg"></div>
        	<div className="hallView">
						<HashRouter>
		        			<div>
		        					<Route exact path="/" component={Hall} />
		        					<Route path="/hall" component={Hall} />
			        				<Route path="/jcfc" component={Jcfc} />
			        				<Route exact path="/" render={() => <Redirect to="/hall/bm"/>} />
			        				<Route exact path="/hall" render={() => <Redirect to="/hall/bm"/>} />
			        		</div>
						</HashRouter>
        	</div>
			<Footer />
      </div>
    );
  }
}

export default App;
