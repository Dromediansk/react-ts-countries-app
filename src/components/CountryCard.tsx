import { FC } from "react";
import "./CountryCard.css";
import { Country } from "../utils/types";

type CountryCardProps = {
  country: Country;
};

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
      <div className="country-info-container">
        <h4>Capital:</h4>
        <p>{country.capital?.[0] || "-"}</p>
      </div>
      <div className="country-info-container">
        <img
          className="country-flag"
          src={country.flags.svg}
          alt="Country flag"
        />
      </div>
    </div>
  );
};

export default CountryCard;
