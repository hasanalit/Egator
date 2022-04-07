import React from 'react'
import MenuIcon from '../Images/more.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

function Header({openModal, setOpenModal}) {


    return (
        <Wrapper>
        <div className="right">
            <div className="top">
                <button id="menu-btn" onClick={() => setOpenModal(!openModal)}>
                    <span className='hamburger'>
                        <img className='menu-icons' src={MenuIcon} alt="Menu" />
                    </span>
                </button>
                <div className='theme-toggler'>
                    <span className='active'><LightModeIcon /></span>
                    <span><DarkModeIcon /></span>
                </div>
                <div className='profile'>
                    <div className='info'>
                        <p>Hey, <b>Daniel</b></p>
                        <small className='text-muted'>Admin</small>
                    </div>
                    <div className="profile-photo">
                        <span><ManageAccountsIcon /></span>
                    </div>
                </div>
            </div>

            {/* END OF TOP */}
            <div className='recent-updates'>
                <h2>Recent Updates</h2>
                <div className='updates'>
                    <div className='update'>
                        <div className="profile-photo">
                            <span>
                                <ManageAccountsIcon />
                            </span>
                        </div>
                        <div className='message'>
                            <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className='update'>
                        <div className="profile-photo">
                            <span>
                                <ManageAccountsIcon />
                            </span>
                        </div>
                        <div className='message'>
                            <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className='update'>
                        <div className="profile-photo">
                            <span>
                                <ManageAccountsIcon />
                            </span>
                        </div>
                        <div className='message'>
                            <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* END OF RECENT UPDATES */}
            <div className='sales-analytics'>
                <h2>Sales Analytics</h2>
                <div className='item online'>
                    <div className='icon'>
                        <span><ShoppingCartIcon /></span>
                    </div>
                    <div className='right'>
                        <div className='info'>
                            <h3>ONLINE ORDERS</h3>
                            <small className='text-muted'>Last 24 Hours</small>
                        </div>
                        <h5 className='success'>+39%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                <div className='item offline'>
                    <div className='icon'>
                        <span><LocalMallIcon /></span>
                    </div>
                    <div className='right'>
                        <div className='info'>
                            <h3>OFFLINE ORDERS</h3>
                            <small className='text-muted'>Last 24 Hours</small>
                        </div>
                        <h5 className='danger'>-17%</h5>
                        <h3>1100</h3>
                    </div>
                </div>
                <div className='item customers'>
                    <div className='icon'>
                        <span><PersonIcon /></span>
                    </div>
                    <div className='right'>
                        <div className='info'>
                            <h3>NEW CUSTOMERS</h3>
                            <small className='text-muted'>Last 24 Hours</small>
                        </div>
                        <h5 className='success'>25%</h5>
                        <h3>849</h3>
                    </div>
                </div>
                <div className='item add-product'>
                    <div>
                        <span><AddIcon /></span>
                        <h3>Add Product</h3>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    )
}


export default Header;


const Wrapper = styled.div`
.right {
  margin-top: 1.4rem;
}

.right .top {
    display: flex;
    justify-content: end;
    gap: 2rem;
}

.right .top button {
    display: none;
}

.right .theme-toggler {
    background: var(--color-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);
}

.right .theme-toggler span {
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right .theme-toggler span.active {
    background: var(--color-primary);
    color: white;
    border-radius: var(--border-radius-1);
}

.right .top .profile {
    display: flex;
    gap: 2rem;
    text-align: right;
}

.menu-icons {
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
    background-color: transparent;
}


//   RECENT UPDATES
.right .recent-updates {
    margin-top: 1rem;
}

.right .recent-updates h2 {
    margin-bottom: 0.8rem;
}

.right .recent-updates .update {
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.right .recent-updates .update:hover {
    box-shadow: none;
}

.right .recent-updates .updates .update {
    display: grid;
    grid-template-columns: 2.6rem auto;
    gap: 1rem;
    margin-bottom: 1rem;
}



//  SALES ANALYTICS
.right .sales-analytics {
    margin-top: 2rem;
}

.right .sales-analytics h2 {
    margin-bottom: 0.8rem;
}

.right .sales-analytics .item {
    background: var(--color-white);
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.4rem var(--card-padding);
    border-radius: var(--border-radius-3);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.right .sales-analytics .item:hover {
    box-shadow: none;
}

.right .sales-analytics .item .right {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0;
    width: 100%;
}

.right .sales-analytics .item .icon {
    padding: 0.6rem;
    color: var(--color-white);
    border-radius: 50%;
    background: var(--color-primary);
    display: flex;
}

.right .sales-analytics .item.offline .icon{
    background: var(--color-danger);
}

.right .sales-analytics .item.customers .icon {
    background: var(--color-success);
}

.right .sales-analytics .add-product {
    background-color: transparent;
    border: 2px dashed var(--color-primary);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
}

.right .sales-analytics .add-product div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.right .sales-analytics .add-product div h3 {
    font-weight: 600;
}


@media screen and (max-width: 768px) {
    .right {
        width: 94%;
        margin: 0 auto 4rem;
    }

    .right .top {
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4.6rem;
        background: var(--color-white);
        width: 100%;
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--color-light);
    }
    .right .top .theme-toggler {
        width: 4.4rem;
        position: absolute;
        left: 66%;
    }

    .right .profile .info {
        display: none;
    }

    .right .top button {
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--color-dark);
        position: absolute;
        left: 1rem;
    }

    .right .top button span {
        font-size: 2rem;
    }
}
`