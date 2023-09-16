import { useEffect, useState } from "react";
import "./CountriesContainer.css";
import { Country } from "../utils/types";
import { getAllCountries } from "../services/countries";
import CountryCard from "./CountryCard";

const CountriesContainer = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getAllCountries();
        setCountries(response);
      } catch (error) {
        console.log("Error fetching countries", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="countries-container">
      {countries.map((country) => {
        return <CountryCard key={country.flags.svg} country={country} />;
      })}
    </div>
  );
};

export default CountriesContainer;
