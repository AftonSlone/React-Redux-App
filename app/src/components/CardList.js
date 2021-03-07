import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Card from "./Card";

import { getSetData, setCardData } from "../store/actions";

const CardList = (props) => {
  const {
    isLoading,
    cardData,
    setData,
    error,
    getSetData,
    setCardData,
  } = props;

  const initialValue = {
    series: "",
    id: "",
  };

  const [series, setSeries] = useState([]);
  const [selectorValue, setSelectorValue] = useState(initialValue);
  const [set, setSet] = useState([]);

  useEffect(() => {
    getSetData();
  }, []);

  useEffect(() => {
    const seriesSet = new Set();

    if (setData) {
      setData.map((set) => {
        seriesSet.add(set.series);
      });
    }
    setSeries(Array.from(seriesSet));
  }, [setData]);

  const onChange = (e) => {
    setSelectorValue({ ...selectorValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCardData(selectorValue.id);
  };

  return (
    <div className="cardList">
      <h2>Pokémon TCG</h2>
      {isLoading ? <p>Loading Card Llist...</p> : null}
      {error ? <p>{error}</p> : null}
      <form onSubmit={onSubmit}>
        <select name="series" onChange={onChange} value={selectorValue.series}>
          <option value="">--Select Series--</option>
          {series.map((series) => {
            return (
              <option key={series} value={series}>
                {series}
              </option>
            );
          })}
        </select>
        {selectorValue.series && (
          <select name="id" onChange={onChange} value={selectorValue.id}>
            <option value="">--Select Set--</option>
            {setData
              .filter((set) => set.series === selectorValue.series)
              .map((set) => (
                <option key={set.id} value={set.id}>
                  {set.name}
                </option>
              ))}
          </select>
        )}
        {selectorValue.id && <button>Get Cards</button>}
      </form>
      <div>
        {cardData &&
          cardData.map((card) => {
            return <Card cardData={card} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    cardData: state.cardData,
    error: state.error,
    setData: state.setData,
  };
};

export default connect(mapStateToProps, { getSetData, setCardData })(CardList);
