import React from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BarChartIcon from '@mui/icons-material/BarChart';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import styled from 'styled-components';



function Center({appState}) {



    return (
      <Wrapper>

                {/* END OF ASIDE */}

      <main>
        <h1>Dashboard</h1>

        <div className='date'>
          <input className='data-num' type="date" />
        </div>

        <div className='insights'>
          <div className='sales'>
            <span><AnalyticsIcon /></span>
            <div className='middle'>
              <div className='left'>
                <h3>Total Sales</h3>
                <h1>$25.04</h1>
              </div>
              <div className='progress'>
                <svg className='svg-name'>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className='number'>
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* END OF SALES */}
          <div className='expenses'>
            <span><BarChartIcon /></span>
            <div className='middle'>
              <div className='left'>
                <h3>Total Expenses</h3>
                <h1>$14.160</h1>
              </div>
              <div className='progress'>
                <svg className='svg-name'>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className='number'>
                  <p>62%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
                    {/* END OF EXPENSES */}
            <div className='income'>
            <span><StackedLineChartIcon /></span>
            <div className='middle'>
              <div className='left'>
                <h3>Total Income</h3>
                <h1>$10.864</h1>
              </div>
              <div className='progress'>
                <svg className='svg-name'>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className='number'>
                  <p>44%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* END OF INCOME */}
        </div>
        {/* END OF INSIGHTS */}


        <div className='recent-orders'>
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                {/* <th>Payment</th> */}
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {appState.map(data => (
                <tr key={Math.random()}>
                <td>{data.userFN} {data.userLN}</td>
                {/* <td>{data.id}</td> */}
                <td>{data.userD}</td>
                <td style={data.isCome ? {color: "blue"} : {color: "red"}}>{String(data.isCome) }</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/">Show All</a>
        </div>
      </main>


      </Wrapper>
    );
  }

  export default Center;


  const Wrapper = styled.div`
main {
  margin-top: 1.4rem;
}

main .date {
  display: inline-block;
  background: var(--color-light);
  border-radius: var(--border-radius-1);
  margin-top: 1rem;
  padding: 0.5rem 1.6rem;
}

.data-num {
  outline: 0;
  appearance: none;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

main .data input[type='date'] {
  background: transparent;
  color: var(--color-dark);
}

main .insights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
}

main .insights > div {
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 1rem;
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;
}

main .insights > div:hover {
  box-shadow: none;
}

main .insights > div span {
  background: var(--color-primary);
  padding: 0 0.6rem;
  border-radius: 50%;
  color: var(--color-white);
  font-size: 2rem;
}

main .insights > div.expenses span {
  background: var(--color-danger)
}

main .insights > div.income span {
  background: var(--color-success)
}

main .insights > div .middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

main .insights h3 {
  margin: 1rem 0 0.6rem;
  font-size: 1rem;
}

main .insights .progress {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
}

main .insights .svg-name {
  width: 7rem;
  height: 7rem;
}

main .insights svg circle {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 14;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke-dasharray: 110;
  stroke-dashoffset: 92;
}

main .insights .sales svg circle {
  stroke-dasharray: 200;
  stroke-dashoffset: -30;
}

main .insights .expenses svg circle {
  stroke-dasharray: 80;
  stroke-dashoffset: 20;
}

main .insights .income svg circle {
  stroke-dasharray: 110;
  stroke-dashoffset: 35;
}

main .insights .progress .number {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

main .insights small {
  margin-top: 1.3rem;
  display: block;
}




//   RECENT ORDERS
main .recent-orders {
  margin-top: 2rem;
}

main .recent-orders h2 {
  margin-bottom: 0.8rem;
}

main .recent-orders table {
  background: var(--color-white);
  width: 100%;
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;
}

main .recent-orders table:hover {
  box-shadow: none;
}

main table tbody td {
  height: 2.8rem;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
}

main table tbody tr:last-child td{
  border: none;
}

main .recent-orders a {
  text-align: center;
  display: block;
  margin: 1rem auto;
  color: var(--color-primary)
}

main .warning {
  color: red;
}

main .primary {
  color: var(--color-primary);
}






@media screen and (max-width: 1200px) {
  main .insights {
    grid-template-columns: 1fr;
    gap: 0;
}

main .recent-orders {
    width: 94%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 2rem 0 0 8.8rem;
}

main .recent-orders table {
    width: 83vw;
}

main table tbody tr td:last-child, main table tbody tr td:first-child {
    display: none;
}
}




@media screen and (max-width: 768px) {
  main {
    margin-top: 8rem;
    padding: 0 1rem;
}

main .recent-orders {
    position: relative;
    margin: 3rem 0 0 0;
    width: 100%;
}

main .recent-orders table{
    margin: 0;
    width: 100%;
}
}
  `