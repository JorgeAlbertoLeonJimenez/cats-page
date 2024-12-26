import "../App.css";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
}

export default Loader;
