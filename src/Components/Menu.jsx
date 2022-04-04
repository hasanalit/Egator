import React from 'react'
import logo from '../Images/logo.png'
import close from '../Images/close.svg'
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





function Menu() {


    return (
      <>
      <aside>
        <div className='top'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h2>EGA<span className='danger'>TOR</span></h2>
          </div>
          <div className='close' id='close-btn'>
            <span className='material-icons-sharp'>
              <img src={close} alt="close-icon" />
            </span>
          </div>
          <div className='sidebar'>
            <a href="/">
              <span className='material-icon-sharp'><DashboardIcon /></span>
              <h3>Dashboard</h3>
            </a>
            <a href="/">
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
              <span className='massage-count'>26</span>
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
        </div>
      </aside>
      </>
    );
  }

  export default Menu;