$(function(){
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function() {
      return (
        <div>
          <Home />
          <About />
          <PortfolioIndex />
          <Resume />
          <Contact />
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
