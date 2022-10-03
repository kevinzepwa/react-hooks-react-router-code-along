// // import React from "react";
// // import ReactDOM from "react-dom";

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Home!</h1>
// //     </div>
// //   );
// // }

// // function App() {
// //   return <Home />;
// // }

// // ReactDOM.render(<App />, document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";
// // Step 1. Import react-router functions
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// /* Add basic styling for NavLinks */
// const linkStyles = {
//   display: "inline-block",
//   width: "70px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white"
// };



// // Step 2. Change so router is coordinating what is displayed
// ReactDOM.render(
//   <BrowserRouter>
//     <NavBar />
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/login' element={<Login />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
