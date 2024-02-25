import React, { useState } from "react";
import NominalItem from "./NominalItem";
import PaymentITem from "./PaymentITem";
import Link from "next/link";
import { BanksTypes, NominalItemProps, NominalsTypes, PaymentType } from "@/services/data-types";

interface TopFormProps {
  nominals: NominalsTypes[];
  payments: PaymentType[];
}

export default function TopUpForm(props: TopFormProps) {
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const { nominals, payments } = props;

  const onNominalItemChange = (data: NominalsTypes) => {
    localStorage.setItem('nominal-item', JSON.stringify(data));
  }

  const onPaymentItemChange = (payment: PaymentType, bank: BanksTypes) => {
    const data = {
        payment, bank
    };
    localStorage.setItem('payment-item', JSON.stringify(data));
  };

  const onSubmit = () =>{

  };
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              _id={nominal._id}
              cointQuantity={nominal.coinQuantity}
              coinName={nominal.coinName}
              price={nominal.price}
              onChange={() => onNominalItemChange(nominal)}
            />
          ))}

          <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) =>
              payment.banks.map((bank) => (
                <PaymentITem
                  key={bank._id}
                  bankId={bank._id}
                  type={payment.type}
                  name={bank.bankName}
                  onChange={()=> onPaymentItemChange(payment, bank)}
                />
              ))
            )}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
