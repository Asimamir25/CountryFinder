import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./Defination.css";
const Defination = () => {
  const [country, setCountry] = useState([]);

  const { countryName } = useParams();
  useEffect(() => {
    const fetcha = async () => {
      try {
        const result = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        const countr = await result.json();
        setCountry(countr);
      } catch (error) {
        console.log(error);
      }
    };
    fetcha();
  }, []);

  return (
    <div>
      {country.map((item) => {
        const {
          name,
          flags,
          population,
          subregion,
          borders,
          capital,
          currencies,
          region,
          languages,
          idd,
        } = item;
        const languageList = languages
          ? Object.values(languages).join(",")
          : "na";

        const currencyList = currencies
          ? Object.entries(currencies).map(([code, currency], i) => (
              <div key={i}>
                <p>
                  {currency.name} ({currency.symbol}){code}
                </p>
              </div>
            ))
          : "N/A";
        const nativeNames = name.nativeName
          ? Object.entries(name.nativeName)
              .slice(0, 1)
              .map(([code, item], i) => (
                <div key={i}>
                  <p>{item.official}</p>
                </div>
              ))
          : "N/A";

        return (
          <>
            <div>
              <div className="main">
                <div style={{ padding: "20px" }}>
                  <img src={flags.png} className="image" />
                </div>
                <div style={{}}>
                  <h1 style={{ fontSize: "32px" }}>{name.common}</h1>
                  <div className="detail">
                    <div style={{}}>
                      <h3 style={{ display: "flex" }}>
                        Name: {""} {nativeNames}
                      </h3>
                      <h3>
                        Phone:{" "}
                        <span>
                          {" "}
                          {idd?.root}
                          {idd?.suffixes}
                        </span>
                      </h3>
                      <h3>Population:{population}</h3>
                      <h3>Region:{region}</h3>
                    </div>
                    <div>
                      <h3>subregion:{subregion}</h3>
                      <h3>Capital:{capital}</h3>
                      <h3 style={{ display: "flex" }}>
                        {" "}
                        Curency:{currencyList}
                      </h3>
                      <h3>Language: {languageList}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="countryWrapper">
                <h2 className="subHeading">Border Countries</h2>
                <div className="borderWrapper">
                  {borders?.map((item) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            gap: "23px",
                            padding: "10px 40px",
                            boxShadows: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px",
                          }}
                        >
                          <h3>{item}</h3>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Defination;
