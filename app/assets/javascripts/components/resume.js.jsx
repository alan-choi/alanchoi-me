(function(root){
  root.Resume = React.createClass({
    render: function() {
      return (
        <div id="resume" className="resume">
          <div className="job-general">
            <h3>Apple</h3>
            <h5>Design for Manufacturing Engineer</h5>
            <p>2014-2015</p>
          </div>
          <div className="job-details">
            <ul>
              <li>
                Led Contract Manufacturer (CM) engineering teams in China and
                resolved manufacturing issues on-site.
              </li>
              <li>
                Brought up factory assembly lines and qualified new manufacturing
                processes and equipment.
              </li>
              <li>
                Advised iPhone and Watch cross-functional teams during design
                phase to optimize for manufacturability.
              </li>
              <li>
                Collaborated with Product Designers resolve design issues
                and overcome product assembly challenges.
              </li>
            </ul>
          </div>
          <div className="job-general">
            <h3>Qualcomm</h3>
            <h5>Senior IC Package Engineer</h5>
            <p>2007-2014</p>
          </div>
          <div className="job-details">
            <ul>
              <li>
                Led material characterization program to evaluate reliability
                across environmental test conditions.
              </li>
              <li>
                Analyzed qualification data, initiated appropriate Failure
                Analysis, and provided design recommendations.
              </li>
              <li>
                Executed reliability and SMT experiments to establish robust
                manufacturing process and product quality.
              </li>
              <li>
                Supervised technicians and mentored interns by overseeing lab
                operations and troubleshooting issues.
              </li>
            </ul>
          </div>
        </div>
      );
    }
  });
})(this);
