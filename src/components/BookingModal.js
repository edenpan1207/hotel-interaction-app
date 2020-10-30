import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalClose } from '../redux/actions/bookingModal';

const BookingModal = () => {
  const selector = useSelector((state) => state.bookingModal);
  const dispatch = useDispatch();

  return (
    <div>
      {selector.isOpen ? (
        <div>
          {selector.status === "success" ? "預定成功" : "預定失敗"}{" "}
          <span onClick={() => dispatch(modalClose())}>close modal</span>
        </div>
      ) : null}
    </div>
  );
};

export default BookingModal;
