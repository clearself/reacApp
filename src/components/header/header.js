import React from 'react';
import './header.scss';
import cs from 'classnames';
class Header extends React.Component {
	goBack(){
		if(!this.props.unBack){
			window.history.back();
		}else{
			return;
		}
	}
	render() {
		return(
			<div className="ub header-wraper">
				<div className={cs('left',{'back':this.props.unBack ? false : true})} onClick={this.goBack.bind(this)}></div>
		        <div className="ub ub-f1 ub-ac ub-pc center">{this.props.title}</div>
		        <div className="right"></div>
		    </div>
		);
	}
}
export default Header;