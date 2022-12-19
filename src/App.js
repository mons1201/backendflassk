import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Create } from "./create";
import { Traverse } from "./traverse";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Menu } from "./menu";
import { Edit } from "./edit";
import { Filter } from "./filter";
import { Login } from "./login";

const App=()=>
{
  return(
  <>
    {/* <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="show" element={<Traverse/>} />
        <Route path="new" element={<Create/>} />
        <Route path="modify/:reg" exact element={<Edit/>} />
        <Route path="filter" exact element={<Filter/>} />
      </Routes>
    </BrowserRouter> */}

    {
      (sessionStorage.getItem("person"))
      ?
      <>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="show" element={<Traverse/>} />
            <Route path="new" element={<Create/>} />
            <Route path="modify/:reg" exact element={<Edit/>} />
            <Route path="filter" exact element={<Filter/>} />
          </Routes>
        </BrowserRouter>
      </>
      :
      <>
      <Login/>
      </>
    }

  </>

  );
}

export default App;


