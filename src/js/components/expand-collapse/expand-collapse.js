/*jshint esnext: true */
import React               from 'react';
import MaharaBaseComponent from '../base.js';

class ExpandCollapse extends MaharaBaseComponent {
  constructor(props) {
    super(props);
    this.state = {hidden: true};
  }
  render() {
    return <div className={"expandCollapse " + (this.state.hidden ? "hidden" : "visible")}>
      <button onClick={this.toggle}>
        {this.state.hidden ? '\u2228' : '\u2227'}
      </button>
      {this.state.hidden && this.props.title ? <a onClick={this.toggle} className="summary"> {this.props.title} </a> : ""}
      {this.state.hidden ? "" : this.props.children}
    </div>;
  }
  toggle = () => {
    this.setState({hidden: !this.state.hidden});
  }
}

export default ExpandCollapse;
