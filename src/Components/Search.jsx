import React from "react";
// import Template from "./Template";
import Datas from "./Datas";
// import FSearch from "./FSearch";
// import Boxsearch from "./Boxsearch";
class Search extends React.Component {
  render() {
    return (
      <div className="bg-secondary">
        <div className="container">
          <h1 className="text-center bg-body-secondary">Portal Berita</h1>
          {/* <FSearch /> */}
          {/* <Boxsearch /> */}
        </div>
        <div className="container">
          <div className="row">
            <Datas />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
