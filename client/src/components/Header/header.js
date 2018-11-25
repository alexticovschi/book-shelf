import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom'
import Nav from './Sidenav/sidenav';

class Header extends Component {

	state = {
		showNav: false
	}

	onShowNav = () => this.setState({ showNav: true });
	onHideNav = () => this.setState({ showNav: false });

  	render() {
		return (
	  		<header>
				<div className="open_nav">
					<FontAwesome name="bars"
						style={{
							color: "#fff",
							padding: '10px',
							cursor: "pointer"
						}}
						onClick={this.onShowNav}
					/>
				</div>
				<Nav 
					showNav={this.state.showNav} 
					onHideNav={this.onHideNav}
				/>
				<Link to="/" className="logo">Book Shelf</Link>
	  		</header>
	)
  }
}

export default Header;