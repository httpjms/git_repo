import countryList from "../data/Country.json";
import { useState } from "react";

function NewJoinerForm({ onGenerate }) {
  const [ticketID, setTicketID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [country, setCountry] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [adid, setAdid] = useState("");

  //-----------------------------------------//
  const [selectedCountry, setSelectedCountry] = useState([""]);
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
    setCountry("");
    setSelectedCity("");
    setAddress("");
    setZipCode("");
  }

  return (
    <form className="newjoiner-form" onSubmit={onSubmit}>
      <h2>New Joiner Form</h2>
      <input
        type="number"
        placeholder="Ticket #"
        value={ticketID}
        onChange={(e) => setTicketID(e.target.value)}
      />
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
        onChange={(e) => setAdid(e.target.value)}
      />

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

      <input type="text" hidden value={`${address} ${zipCode}`} readOnly />

      <button className="btnGenerate">Generate</button>
    </form>
  );
}

export default NewJoinerForm;
