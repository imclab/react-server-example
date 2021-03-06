var React = require('react'),
    DOM = React.DOM,
    div = DOM.div, button = DOM.button, ul = DOM.ul, li = DOM.li

// This is just a simple example of a component that can be rendered on both
// the server and browser

module.exports = React.createClass({

  // We initialise its state by using the `props` that were passed in when it
  // was first rendered
  getInitialState: function() {
    return {items: this.props.items}
  },

  // Then we just update the state whenever its clicked - but you could imagine
  // this being updated with the results of AJAX calls, etc
  handleClick: function() {
    this.setState({items: this.state.items.concat(this.state.items.length)})
  },

  // For ease of illustration, we just use the JS methods directly
  // (no JSX compilation needed)
  render: function() {
    return div(null,
      button({onClick: this.handleClick}, 'Add Item'),
      ul({children: this.state.items.map(function(item) {
        return li(null, item)
      })})
    )
  },
})
