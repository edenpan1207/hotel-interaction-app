import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CalendarPicker from "../components/CalendarPicker";
import { bookingRoom } from '../redux/actions/bookingRoom';

const RoomsDetail = ({ match, history }) => {
  const dispatch = useDispatch();
  const pageId = match.params.id;
  const selector = useSelector((state) => state.fetchRoom);
  const date = useSelector((state) => state.setDate);

  const BookingRoomHandler = () => {
    dispatch(bookingRoom({
      ...selector.results[pageId]
    }))
    history.push('/booking')
  }

  return (
    <>
      <p>查詢空房</p>
      <CalendarPicker />
      <div style={{ marginTop: "30px" }}>
        {selector.results[pageId] && selector.results[pageId].name}
        <br />
        <button onClick={BookingRoomHandler}>Booking Now</button>
      </div>
    </>
  );
};

export default RoomsDetail;
