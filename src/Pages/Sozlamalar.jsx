import styled from 'styled-components';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

function Sozlamalar({ setTheme, theme}){
    return(
        <Wrapper>
            <div className='theme-toggler-display'>
                <p className='theme-toggler-desc'>Saytning kun-tun rejimi:</p>
            <select className='theme-toggler' defaultValue={theme} onChange={e => setTheme(e.target.value)}>
                <option value="root-light" className='active'>light</option>
                <option value="root-dark">dark</option>
            </select>
            </div>
        </Wrapper>
    )
}

export default Sozlamalar;


const Wrapper = styled.div`

.theme-toggler {
    background: var(--color-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);
}

// .theme-toggler .active {
//     background: var(--color-primary);
//     color: white;
//     border-radius: var(--border-radius-1);
// }

.theme-toggler-display {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.theme-toggler-desc {
    color: #000;
    font-size: larger;
    font-weight: 600;
}

.theme-toggler {
    margin-left: 10px;
    width: 3.4rem;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .theme-toggler-display {
        margin-top: 50px;
    }
}
`