import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <form className="mb-3">
        <div className="form-group">
          <label htmlFor="sort_by">Sort by:</label>
          <select className="form-control" id="sort_by">
            <option value="popularity.desc">Popular (descending)</option>
            <option value="popularity.asc">Popular (ascending)</option>
            <option value="vote_average.desc">Rating (descending)</option>
            <option value="vote_average.asc">Rating (ascending)</option>
          </select>
        </div>
      </form>
    );
  }
}
