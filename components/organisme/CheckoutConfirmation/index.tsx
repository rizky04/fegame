import { setCheckout } from "@/services/palyer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem("data-item",);
    const dataTopUpLocal = localStorage.getItem("topUp-item");

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopup = JSON.parse(dataTopUpLocal!);
    if (!checkbox) {
      toast.error(" PASTIKAN ANDA MELAKUKAN PEMBANYARAN");
    }
    const dataNe = {
      voucher: dataItem._id,
      nominal: dataTopup.nominalItem._id,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
      name: dataTopup.bankAccountName,
      accountUser: dataTopup.verifyID,
    };
    const data = JSON.stringify(dataNe);
     const response = await setCheckout(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("checkout berhasil");
        router.push("/complete-checkout");
      }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
          role="button"
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
