import React, { useContext } from 'react'
import {globalContext } from  '../context/GlobalState'
import '../assets/styles/TransactionHistory.css'


const TransactionHistory = () => {

   const {transactions} = useContext(globalContext);

    return (
       <div>
            <div className="transaction-history-container" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseHistory" href="#collapseHistory">
           <p className="Trans-history-title"> Transaction History</p>
        </div>
        <div id="collapseHistory" className="collapse">
            <ul>
               {
                  transactions.map(transaction=>(
                  <li key={transaction.id}>{transaction.text} | {transaction.amount}</li>
                  ))
               }
            </ul>
        </div>
       </div>

    )
}

export default TransactionHistory
