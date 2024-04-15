/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from "react";
import Category from "./Category";
import TableRow from "./TableRow";
import { getMemberOverview } from "@/services/palyer";
import { toast } from "react-toastify";
import { HistoryTransactionTypes, TopUpCategoriesTypes } from "@/services/data-types";

export default function ContentOverView() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const dataNya = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setData(response.data.data);
      setCount(response.data.count);
      console.log('data :', response.data.data)
      console.log('count :', response.data.count)
    }
  }, [])

  useEffect(()=>{
    dataNya();
  }, []);

  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                {count.map((item: TopUpCategoriesTypes) => (
                  // eslint-disable-next-line react/jsx-key
                  <Category key={item._id} icon="ic-dekstop" nominal={item.value}>
                    {item.name}
                    <br />
                  </Category>
                ))}
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item: HistoryTransactionTypes) => (
                        <TableRow
                        key={item._id}
                                image={item.historyVoucherTopup.thumbnail}
                                title={item.historyVoucherTopup.gameName}
                                categori={item.historyVoucherTopup.category}
                                item={item.historyVoucherTopup.coinQuatity}
                                price={item.value}
                                status={item.status}
                            />
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
