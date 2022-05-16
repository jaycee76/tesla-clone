import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';



function Header() {
    const [menuStatus, setMenuStatus] = useState(false);
    const cars = useSelector(selectCars)

  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car, index)=>(
                <a key={index} href="#">{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <CustomMenu onClick={()=>setMenuStatus(true)}>
            <p>Menu</p>
            </CustomMenu>
            <MenuNav show={ menuStatus }>
                <CloseWrapper>
                    <CustomClose onClick={()=>setMenuStatus(false)}> X </CustomClose>
                </CloseWrapper>
                <li><a href="#"> Model S</a></li>
                <li><a href="#"> Model 3</a></li>
                <li><a href="#"> Model X</a></li>
                <li><a href="#"> Model Y</a></li>
                <li><a href="#"> Solar Roof</a></li>
                <li><a href="#"> Solar Panels</a></li>
                <li><a href="#"> Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade-In</a></li>
                <li><a href="#"> Test Drive</a></li>
                <li><a href="#"> Powerwall</a></li>
                <li><a href="#"> Commercial Energy</a></li>
                <li><a href="#"> Utilities</a></li>
                <li><a href="#"> Charging</a></li>
                <li><a href="#"> Find Us</a></li>
                <li><a href="#"> Support</a></li>
                <li><a href="#"> Investor Relations</a></li>
                <li><a href="#"> Shop</a></li>
                <li><a href="#"> Account</a></li>
            </MenuNav>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin-left: 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        padding: 0 20px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 1200px){
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        font-weight: 600;
        padding: 0 25px;
    }

`

const CustomMenu = styled.div`
    display: flex;
    cursor: pointer;
    p {
        font-weight: 600;
    }
`

const MenuNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }

    }
`

const CustomClose = styled.div`
    cursor: pointer;
    font-weight: 300;

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`