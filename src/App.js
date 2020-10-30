import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import RoomsOverview from "./pages/RoomsOverview";
import RoomsDetail from "./pages/RoomsDetail";
import RoomsBooking from './pages/RoomsBooking';
import { fetchTarget } from "./redux/actions/fetchRoom";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTarget());
  }, [dispatch]);

  return (
    <>
      <Route exact path="/" component={RoomsOverview} />
      <Route path="/room/:id" component={RoomsDetail} />
      <Route path="/booking" component={RoomsBooking} />      
    </>
  );
}

export default App;
