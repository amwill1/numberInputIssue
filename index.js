var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <input id="numInput" type="number" min="1" max="100" />
        <input id="textInput" type="text" value="hello there" />
      </div>
    )
  }
});

React.render({
  <App />,
  document.getElementById('content');
})
