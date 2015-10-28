(function(root){
  root.About = React.createClass({
    render: function() {
      return (
        <div id="about" className="about">
          <h3>A creative, detail oriented software developer with a mechanical engineering background</h3>
          <p>I love finding solutions to problems and building aesthetic, functional web applications.
            Besides web development, I have a passion for sports, the outdoors, and photography.  </p>
          <div className="about-shapes">
            <div className="code-logo">Ruby on Rails</div>
            <div className="code-logo">Javascript</div>
            <div className="code-logo">React.js</div>
            <div className="code-logo">jQuery</div>
            <div className="code-logo">Node.js</div>
            <div className="code-logo">SQL</div>
            <div className="code-logo">HTML</div>
            <div className="code-logo">CSS</div>
            <div className="code-logo">git</div>
          </div>
        </div>
      );
    }
  });
})(this);
