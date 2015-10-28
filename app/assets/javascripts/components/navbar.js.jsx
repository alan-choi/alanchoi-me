(function(root){
  root.Home = React.createClass({
    render: function() {
      return (
        <div className="name-links">
          <h1>Alan Choi</h1>
          <p>software developer</p>
          <div className="links">
            <ul className="name-links-list">
              <li><a href="#about">about</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#resume">resume</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
        </div>
      );
    }
  });
})(this);
