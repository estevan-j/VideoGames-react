import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { NavBarBrand, NavBarContainer, NavBarContainerInfo, NavBarForm, NavBarFormInput, NavBarIconContainer, NavBarSearchIcon, NavBarStyles } from './styles/NavBarGamesStyles';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const NavBarGames = () => {
    const {setTitleGame} = useContext(GameContext)
    let categoryInput: string = '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       categoryInput = e.target.value;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        setTitleGame(categoryInput.toLowerCase());
    }
    return (
        <nav style={NavBarStyles}>
            <div style={NavBarContainer}>
                <Link to={'/'} style={NavBarBrand} onClick={()=> setGenreGames('')}>
                    <span style={{textDecoration:'none', color: '#fff'}}>GameWorld</span>
                </Link>
                <div style={NavBarContainerInfo}>
                    <form style={NavBarForm} onSubmit={(e) => handleSubmit(e)} role="search">
                        <input style={NavBarFormInput} type="text" onChange={(e) => handleChange(e)} placeholder="Search Game" aria-label="Search"  />
                        <button style={NavBarSearchIcon} type="submit"><RxMagnifyingGlass /></button>
                    </form>
                    <div style={NavBarIconContainer}>
                        <a><AiOutlineUserAdd/></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBarGames
