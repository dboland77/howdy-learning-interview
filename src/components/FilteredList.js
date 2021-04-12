import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../groupsSlice"
import List from "./List";

export default function FilteredList() {
  const dispatch = useDispatch();

  const groups = useSelector((state) => state.group.groups);
  console.log(groups.title)

  let titles = groups.map((el) => el.title);

  const filterList = (e) => {
    let length = e.target.value.length;
    if (length >= 3) {
      let updatedList = titles;
      updatedList = updatedList.filter(function (item) {
        return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      });
      dispatch(update(updatedList));
    }
  };

  return (
    <div className="filter-list">
      <form>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search"
            onChange={filterList}
          />
        </fieldset>
      </form>
      <List items={titles} />
    </div>
  );
}
