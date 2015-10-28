(function(root){
  root.PortfolioIndex = React.createClass({
    render: function() {
      return (
      <div className="portfolio-container">
        <div id="portfolio" className="portfolio-index">
          <PortfolioIndexItem />
        </div>
      </div>
      );
    }
  });
})(this);
