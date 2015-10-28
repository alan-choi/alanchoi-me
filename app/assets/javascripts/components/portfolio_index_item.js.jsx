(function(root){
  root.PortfolioIndexItem = React.createClass({
    render: function() {
      return (
        <div className="portfolio-item">
          <div className="port-item-image">
            <img src="/images/projects/yelpnow/1.png" />
          </div>
          <div className="port-item-description">
            <h3><a href="http://www.yelpnow.us" target="_blank">YelpNow</a></h3>
            <p>
              Provides a clean, quick interface to search only for open businesses,
              read and post reviews.  Built with React.js using Flux architecture
               and Ruby on Rails.
            </p>
          </div>
        </div>
      );
    }
  });
})(this);
