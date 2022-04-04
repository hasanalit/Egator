import React from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BarChartIcon from '@mui/icons-material/BarChart';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
// import styled from 'styled-components';



function Center() {

    return (
      <>

                {/* END OF ASIDE */}
      <main>
        <h1>Dashboard</h1>

        <div className='date'>
          <input type="date" />
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
                <svg>
                  <sircle cx='38' cy='38' r='36'></sircle>
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
                <svg>
                  <sircle cx='38' cy='38' r='36'></sircle>
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
                <svg>
                  <sircle cx='38' cy='38' r='36'></sircle>
                </svg>
                <div className='number'>
                  <p>44%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
        </div>
      </main>

      </>
    );
  }

  export default Center;


//   const Wrapper = styled.center`
// main {
//   margin-top: 1.4rem;
// }

// main .date {
//   display: inline-block;
//   background: var(--color-light);
//   border-radius: var(--border-radius-1);
//   margin-top: 1rem;
//   padding: 0.5rem 1.6rem;
// }

// main .data input[type="date"] {
//   background: transparent;
//   color: var(--color-dark);
//   border: none;
// }
//   `