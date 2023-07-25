import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCall from "./api/list";

const Listing = () => {
  const [fetchdata, setFetchData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (e) => {
    ApiCall.get("/host/properties", (response) => {
      if (response.success) {
        const data = response?.data?.properties ?? "";
        setFetchData(data);
      } else {
        console.log();
      }
    });
  };

  return (
    <div>
      <div className="butt">
        <Link to="/AddPage">
          <button className="add">Add</button>
        </Link>
      </div>
      {fetchdata.map((data) => (
        <div key={data.id} className="listi">
          <table className="tab border   ">
            <tr className="tablehead border">
              <th>Street</th>
              <th>Managed By </th>
              <th>Manager </th>
              <th>Rent</th>
              <th>Occupancy</th>
              <th>Rooms</th>
              <th>Invite</th>
              <th>Enable</th>
              <th></th>
            </tr>

            <tr className="tablerow py-2 border-bottom">
              <td>
                {data.name?.length <= 20
                  ? data.name
                  : `${data.name.slice(0, 20)}..`}
              </td>
              <td>-</td>
              <td>{data.manager.name}</td>
              <td>{data.type}</td>
              <td>{data.rental_type}</td>
              <td>-</td>
              <td>-</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </td>
              <td>
                <BsThreeDotsVertical className="opt w-25 h-30" />
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Listing;
