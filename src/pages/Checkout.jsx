import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";

const Checkout = () => {
  return (
    <div className="align-element mt-20">
      <Form
        method="post"
        className="card p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <span className="uppercase text-orange-400">Billing Details</span>
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            type="text"
            label="Name"
            name="Name"
            defaultvalue="Alexia Ward"
          />
          <FormInput
            type="email"
            label="Email Address"
            name="email"
            defaultvalue="..@gmail.com"
          />
          <FormInput
            type="text"
            label="Number"
            name="number"
            defaultvalue="+998 90 xx xx"
          />
        </div>
        <span className="uppercase text-orange-400">shipping info</span>
        <div className="grid gap-4">
          <FormInput
            className="w-full"
            type="text"
            label="Address"
            name="address"
            defaultvalue="Sayilgoh 112/A"
          />
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              type="number"
              label="ZIP Code"
              name="zipcode"
              defaultvalue="1000001"
            />
            <FormInput
              type="text"
              label="City"
              name="city"
              defaultvalue="New York"
            />
            <FormInput
              type="text"
              label="Country"
              name="country"
              defaultvalue="United States"
            />
          </div>
        </div>
      </Form>
      {/* <Summary/> */}
    </div>
  );
};

export default Checkout;
