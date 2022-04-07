import React from 'react'

import logo from '../Images/egator.png'
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from 'styled-components';





function Menu({openModal, setOpenModal}) {


    return (
      <Wrapper>
            {openModal && <aside>
        <div className='top'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h2>EGA<span className='danger'>TOR</span></h2>
          </div>
          <div className='close' id='close-btn' onClick={() => setOpenModal(!openModal)}>
            <span className='material-icons-sharp'><CloseIcon /></span>
          </div>
          </div>

          <div className='sidebar'>
            <a href="/">
              <span className='material-icon-sharp'><DashboardIcon /></span>
              <h3>Dashboard</h3>
            </a>
            <a href="/" className='active'>
              <span className='material-icon-sharp'><PersonOutlineIcon /></span>
              <h3>Customers</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><ReceiptLongIcon /></span>
              <h3>Orders</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><InsightsIcon /></span>
              <h3>Anolytics</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><MailOutlineIcon/></span>
              <h3>Massages</h3>
              <span className='message-count'>26</span>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><ReceiptIcon /></span>
              <h3>Products</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><ReportGmailerrorredIcon /></span>
              <h3>Reports</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><SettingsIcon /></span>
              <h3>Settings</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><AddIcon /></span>
              <h3>Add Products</h3>
            </a>
            <a href="/">
              <span className='material-icon-sharp'><LogoutIcon /></span>
              <h3>Logout</h3>
            </a>

          </div>
      </aside>}


      </Wrapper>
    );
  }

  export default Menu;

  const Wrapper = styled.menu`
  aside {
    height: 100vh;
    display: block;
}

aside .top {
  // background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.4rem;
}

aside .logo {
  display: flex;
  gap: 0.8rem;
}

aside .logo img {
  width: 2rem;
  height: 2rem;
}

aside .close {
  display: inline;
}


// SIDEBAR
aside .sidebar {
  background: white;
  display: flex;
  flex-direction: column;
  height: 86vh;
  position: relative;
  top: 3rem;
}

aside h3 {
  font-weight: 500;
}

aside .sidebar a {
  display: flex;
  color: var(--color-info-dark);
  margin-left: 2rem;
  gap: 1rem;
  align-items: center;
  position: releative;
  height: 3.7rem;
  transition: all 300ms ease;
}

aside .sidebar a span {
  font-size: 1.6rem;
  transition: all 300ms ease;
}

aside .sidebar a:last-child {
  position: absolute;
  bottom: 2rem;
  width: 96%;
}

aside .sidebar a.active {
  background: var(--color-light);
  color: var(--color-primary);
  margin-left: 0;
}

aside .sidebar a.active:before {
  content: "";
  width: 6px;
  height: 100%;
  background: var(--color-primary);
}

aside .sidebar a.active span {
  color: var(--color-primary);
  margin-left: calc(1rem - 3px);
}

aside .sidebar a:hover {
  color: var(--color-primary);
}

aside .sidebar a:hover span {
  margin-left: 1rem;
}

aside .sidebar .message-count {
  background: var(--color-danger);
  color: var(--color-white);
  padding: 2px 10px;
  font-size: 11px;
  border-radius: var(--border-radius-1);
}
`