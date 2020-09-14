import React,{useEffect,useContext, useState} from "react";
import "../assets/styles/Graph.css";
import {Doughnut} from 'react-chartjs-2';
import {globalContext} from '../context/GlobalState'

const Graph = () => {

  const {transactions} = useContext(globalContext)
  const [income,setIncome] =useState(0);
  const [expense,setExpense] = useState(0);

  useEffect(() => {
    let income=0,expense=0;
    transactions.map(transaction=>
      transaction.amount < 0 ?  
      setExpense(expense+=Math.abs(transaction.amount)):
      setIncome(income+=transaction.amount)
  )

  }, [transactions])

  return (
    <div>
      <div className="graph-container"  data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" href="#collapseGraph">
        <p className="graph-title" > Transaction Graph</p>
      </div>
      <div id="collapseGraph" className="collapse collapseGraph" >
        <div className="pie-chart">
        <Doughnut data={{
                                labels: [
                                    'Income',
                                    'Expense',
                                    
                                ],
                                datasets: [{
                                    data: [income, expense ],
                                    backgroundColor: [
                                    'green',
                                    'red'
                                    ],
                                    // hoverBackgroundColor: [
                                    // '#228B22',
                                    // '#8B0000',
                                    // '#008080'
                                    // ],
                                    borderWidth: 0
                                }]
                            }} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
