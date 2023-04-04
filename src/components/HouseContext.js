import { useState, useEffect, createContext } from "react";

import { housesData } from "./../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((a) => a.country);
    const uniqueCountries = ["Location (any)  ", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((a) => a.type);
    const uniqueProperties = ["Location (any)  ", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    //setLoading true
    // setLoading(true);
    console.log(country, property, price);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    console.log(isDefault(country));
    const minPrice = price.split("-")[0];
    const maxPrice = price.split("-")[1];
    console.log(minPrice);
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      //if all value are seleted
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      //if all value all are default

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price))
        return house.country === country;

      //if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price))
        return house.type === property;
      //if price is not default

      if (isDefault(country) && isDefault(property) && !isDefault(price))
        return +house.price >= +minPrice && +house.price <= +maxPrice;

      //   if country and property is not default

      if (!isDefault(country) && !isDefault(property) && isDefault(price))
        return house.country === country && house.type === property;

      // if country and price is not default

      if (!isDefault(country) && isDefault(property) && !isDefault(price))
        return (
          house.country === country &&
          +house.price >= +minPrice &&
          +house.price <= +maxPrice
        );

      //IF PROPERTY and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price))
        return (
          house.type === property &&
          +house.price >= +minPrice &&
          +house.price <= +maxPrice
        );

      setTimeout(() => {
        return (
          newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
          setLoading(false)
        );
      }, 1000);

      console.log(housePrice);
    });

    setHouses(newHouses);
    console.log(newHouses);
  };
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
