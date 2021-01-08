import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

// import LottoClass from './LottoClass';
import Lotto from "./Lotto";

// const Hot = hot(LottoClass);
const Hot = hot(Lotto);

ReactDOM.render(<Hot />, document.querySelector("#root"));
