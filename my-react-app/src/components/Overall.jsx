import "./Overall.css";

function Overall() {
  return (
    <div className="overall">
      <div className="progress-info">
        <h3>Overall Progress</h3>
        <span>2/8 Tasks</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <div className="Project-list">
        <p>Product</p>
        <p>Engineering</p>
        <p>Research</p>
        <p>Strategy</p>
        <p>Legal</p>
      </div>
    </div>
  );
}

export default Overall;