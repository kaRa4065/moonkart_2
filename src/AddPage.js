import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiCall from "./api/list";

const AddPage = () => {
  const [streetName, setStreetName] = useState("");
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState([]);
  const [zip, setZip] = useState("");
  const [manage, setManage] = useState("");
  const [rental, setRental] = useState("");
  const [states, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [stateName, setStateName] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {
    fetchState();
  }, []);
  const fetchState = () => {
    ApiCall.get("/host/states", (resp) => {
      if (resp.success) {
        setState(resp.data.states);
      } else {
        console.log(resp.success);
      }
    });
  };

  const handleStateChange = (e) => {
    const stateid = e.target.value;
    if (stateid === "Select state") {
      console.log();
    } else {
      setSelectedState(stateid);
      fetchCity(stateid);
      const statesfilt = states.filter((item) => item.state_id === stateid);
      setStateName(statesfilt[0].name);
    }
  };

  const fetchCity = (selectedState) => {
    ApiCall.get(`/host/cities/${selectedState}`, (res) => {
      if (res.success) {
        setCity(res.data.cities);
      }
    });
  };

  const handleSubmit = (key) => {
    key.preventDefault();
    if ((streetName, location, city, zip === "")) {
      setError("Please provide valid input");
    } else {
      const addedList = {
        name: streetName,
        address: { state: stateName, city: selectedCity, zip: zip },
        home_type: manage,
        rental_type: rental,
      };
      try {
        const result = ApiCall.post("/host/properties", addedList);
        if (result) console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const handleSelectCity = (e) => {
    const cityid = e.target.value;

    setSelectedCity(cityid);
  };

  return (
    <div className="AddPages">
      <form onSubmit={handleSubmit} className="Tablin border ">
        <div className="tablehead">
          <h6>Basic Information</h6>
        </div>
        <div className="tablerow">
          <div className="row">
            <label htmlFor="sname">Street name*</label>
            <input
              value={streetName}
              onChange={(e) => {
                setStreetName(e.target.value);
              }}
              id="sname"
              name="sname"
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="row">
            <label htmlFor="Loc">Geo Location*</label>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              id="Loc"
              name="Loc"
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="row">
            <label htmlFor="state">State*</label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="drop"
              id="state"
              name="state"
            >
              <option>Select state</option>
              {states.map((state) => (
                <option value={state.state_id} key={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {error && <div className="text-danger">{error}</div>}
          </div>
        </div>
        <div className="tablerow">
          <div className="row">
            <label htmlFor="city">City*</label>

            <select
              onChange={handleSelectCity}
              className="drop"
              id="city"
              name="city"
            >
              <option value={""}>Select city</option>
              {city.map((cities) => (
                <option key={cities.city_id}>{cities.name}</option>
              ))}
            </select>
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="row">
            <label htmlFor="Zip">ZIP*</label>
            <input
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
              }}
              id="Zip"
              name="Zip"
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="row">
            <label htmlFor="Manage">Manage By*</label>
            <input
              value={manage}
              onChange={(e) => {
                setManage(e.target.value);
              }}
              id="Manage"
              name="Manage"
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
        </div>
        <div className="last">
          <div className="row2">
            <label htmlFor="Rental"> Rental Type*</label>
            <input
              value={rental}
              onChange={(e) => {
                setRental(e.target.value);
              }}
              id="Rental"
              name="Rental"
            />
            {error && <div className="text-danger">{error}</div>}
          </div>
          <div className="twobutt">
            <button type="submit">Add</button>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
