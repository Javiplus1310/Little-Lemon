import Heading from "./HeaderReservations";
import ReservationForm from "./ReservationForm";
import { useReducer } from "react";
import { fetchAPI } from "./ReservationsAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
