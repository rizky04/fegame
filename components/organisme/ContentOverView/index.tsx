import React from 'react'
import Category from './Category'
import TableRow from './TableRow'

export default function ContentOverView() {
  return (
    <>
     <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category icon="ic-dekstop" nominal={180900}>
                            Game<br/> Desktop
                            </Category>
                            <Category icon="ic-mobile" nominal={180900}>
                            Game<br/> Mobile
                            </Category>
                            <Category icon="ic-other" nominal={180900}>
                            Game<br/> Other
                            </Category>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow image="overview-1" title='Mobile Legends: The New Battle 2021' categori='Mobile' item='200 Gold' price={290000}  status='Pending'/>
                                <TableRow image="overview-2" title='Call of Duty:Modern' categori='Desktop' item='550 Gold' price={290000}  status='Success'/>
                                <TableRow image="overview-3" title='Clash of Clans' categori='Mobile' item='100 Gold' price={290000}  status='Failed'/>
                                <TableRow image="overview-4" title='The Royal Game' categori='Mobile' item='225 Gold' price={200}  status='Pending'/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
