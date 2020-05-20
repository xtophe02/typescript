import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
//   color?: string;
// }
// interface AppState {
//   counter: number;
// }

// const App = ({ color }: AppProps): JSX.Element => {
//   return <div>{color}</div>;
// };

// class App extends React.Component<AppProps, AppState> {
//   // state = { counter: 0 };
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0 };
//   }
//   handleClick = () => {};
//   render() {
//     return (
//       <div>
//         {this.props.color}
//         <button
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           ++
//         </button>
//         <button
//           onClick={() => this.setState({ counter: this.state.counter - 1 })}
//         >
//           --
//         </button>
//         result: {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
