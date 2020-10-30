import React from "react";
import { useSelector } from "react-redux";
import BookingForm from "../components/BookingForm";
import BookingModal from '../components/BookingModal';

const RoomsBooking = () => {
  const selector = useSelector((state) => state.bookingRoom);
  return (
    <>
      {selector.detail ? (
        <div>
          <div style={{ marginBottom: "15px" }}>{selector.detail.name}</div>
          <BookingForm />
        </div>
      ) : (
        "you have not check date"
      )}

      <BookingModal />
    </>
  );
};

export default RoomsBooking;
