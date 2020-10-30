import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { setStartDate, setEndDate } from '../redux/actions/setDate'

const CalendarPicker = () => {
  const selector = useSelector(state => state.setDate);
  const dispatch = useDispatch();
  const { startDate, endDate } = selector;
  
  return (
    <div style={{ display: "flex" }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => dispatch(setStartDate(date))}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        inline
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => dispatch(setEndDate(date))}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        inline
      />
    </div>
  );
};

export default CalendarPicker;
