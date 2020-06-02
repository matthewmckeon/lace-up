import React from 'react';
import Header from './navComps/Header.js';
import SideBar from './navComps/SideBar.js';
import Backdrop from './navComps/Backdrop.js'

class App extends React.Component {
  state = {
    sideBarOpen: false
  };

  sideBarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false})
  }

  render() {
    let sideBar;
    let backdrop;

    if (this.state.sideBarOpen) {
      sideBar = <SideBar />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Header sideBarClickHandler={this.sideBarToggleClickHandler}/>
        {sideBar}
        {backdrop}
        <main style={{marginTop: '100px'}}>
          <p>This is the page content</p>
        </main>
      </div>
    )
  }
}

export default App;
