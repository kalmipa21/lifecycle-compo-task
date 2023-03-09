import React from "react";
import Datas from "./Datas";
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
