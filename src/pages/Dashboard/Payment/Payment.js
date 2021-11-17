import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jvp83GdGMYfzJXtPu9Z6imUmqrobSI3uiSowPxKnkYJNdUFYnhZ65jiL3ZRAMrFK41rwWKfsHU7d92qTjmxxIbn005d9Lb3hc"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(
      `https://floating-tundra-41181.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}{" "}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
      {appointment.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

/* 
1. install stripe and stripe-react
2. set publishable key
3. elements
4. check out form
----
5. Create payment method
6. server create payment intent api
7. load client secret
8. confirm card payment
9. handle user error
*/
