import countryList from "../data/Country.json";
import { useState } from "react";

function NewJoinerForm({ onGenerate }) {
  const [ticketID, setTicketID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [country, setCountry] = useState([""]);
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [adid, setAdid] = useState("");
  const [defaultApps, setDefaultApps] = useState("");

  //-----------------------------------------//
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([""]);
  const [selectedCity, setSelectedCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const countryData = countryList.find(
      (country) => country.code === countryCode
    );
    setSelectedCountry(countryCode);
    setCountry(countryData.country);
    setCities(countryData ? countryData.city : []);
    setSelectedCity("");
    setAddress("");
    setZipCode("");
  };

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    const cityData = cities.find((city) => city.cityName === cityName);
    setSelectedCity(cityName);
    setAddress(cityData ? cityData.address : "");
    setZipCode(cityData ? cityData.zipCode : "");
  };

  function onSubmit(e) {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !emailAdd ||
      !adid ||
      !jobTitle ||
      !department ||
      !manager ||
      !country ||
      !selectedCity ||
      !address ||
      !zipCode
    )
      return;

    const newJoiner = {
      ticketID,
      firstName,
      lastName,
      emailAdd,
      adid,
      jobTitle,
      department,
      manager,
      country,
      selectedCity,
      address,
      zipCode,
      selectedCountry,
      defaultApps,
      isomplete: false,
    };

    onGenerate(newJoiner);
    setTicketID("");
    setFirstName("");
    setLastName("");
    setEmailAdd("");
    setAdid("");
    setJobTitle("");
    setDepartment("");
    setManager("");
    setSelectedCountry("");
    setCountry("");
    setSelectedCity("");
    setDefaultApps("");
    setAddress("");
    setZipCode("");
    console.log(newJoiner);
  }

  return (
    <form className="newjoiner-form" onSubmit={onSubmit}>
      <h2>New Joiner Form</h2>

      <div className="flex-box">
        {/* <input
        type="number"
        placeholder="Ticket #"
        value={ticketID}
        onChange={(e) => setTicketID(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex-box">
        <input
          type="emai"
          placeholder="Email Address"
          value={emailAdd}
          onChange={(e) => setEmailAdd(e.target.value)}
        />
        <input
          type="text"
          placeholder="ADID / OKTA ID"
          value={adid}
          minLength={4}
          maxLength={10}
          onChange={(e) => setAdid(e.target.value)}
        />
      </div>
      <div className="flex-box">
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <div className="flex-box">
        <input
          type="text"
          placeholder="Manager"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        />

        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="" disabled>
            --Select a Country--
          </option>
          {countryList.map((country) => (
            <option key={country.code} value={country.code}>
              {country.country}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-box">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedCountry}
        >
          <option value="" disabled>
            --Select a City--
          </option>
          {cities.length > 0 &&
            cities.map((city, index) => (
              <option key={index} value={city.cityName}>
                {city.cityName}
              </option>
            ))}
        </select>

        <input type="text" value={`${address} ${zipCode}`} readOnly />
      </div>

      <button className="btnGenerate">
        <strong>GENERATE </strong>
      </button>
    </form>
  );
}

export default NewJoinerForm;
