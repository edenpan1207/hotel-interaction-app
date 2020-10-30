import React from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setStartDate, setEndDate } from "../redux/actions/setDate";
import { setStatus, modalOpen } from '../redux/actions/bookingModal';

const BookingForm = () => {
  const dispatch = useDispatch();
  const dateSelector = useSelector((state) => state.setDate);
  const { startDate, endDate } = dateSelector;

  return (
    <Formik
      initialValues={{
        names: "",
        phone: "",
      }}
      onSubmit={(values) => {
        Object.values(values).forEach(value => {
          if(value !== '') {
            dispatch(setStatus('success'));
          } else {
            dispatch(setStatus('fail'));
          }
        })

        dispatch(modalOpen())
      }}
    >
      <Form>
        <div>
          <label htmlFor="names">姓名</label>
          <Field id="names" name="names" />
        </div>

        <div>
          <label htmlFor="phone">手機號碼</label>
          <Field id="phone" name="phone" type="number" />
        </div>

        <div>
          <label htmlFor="startDate">入住日期</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => dispatch(setStartDate(date))}
          />
        </div>

        <div>
          <label htmlFor="endDate">退房日期</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => dispatch(setEndDate(date))}
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookingForm;
