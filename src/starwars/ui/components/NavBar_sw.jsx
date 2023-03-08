
import { Link, NavLink} from 'react-router-dom';
import {Context} from '../../store/appContext';
import {Container,DropdownButton,Dropdown} from 'react-bootstrap';
import {useContext,useState} from 'react';
import {FaTrash} from 'react-icons/fa'
export const NavBar_sw = () => {
   
const logo =`/assets/img/logo.png`;
//const navigate = useNavigate()
const { store, actions } = useContext(Context);
const { favoritos } = store;

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 btn btn-dark">
            
            <Link className= "navbar-brand" to="/"><img className='logo' src={logo} alt="logo 1" /></Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="people" >
                        Peoples
                    </NavLink>
                    
                   <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="planet">
                        Planets
                    </NavLink>
                   

                    <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="vehicle">
                        Vehicles
                    </NavLink>

                   
                </div>
            </div>
            <Container className='justify-content-end'>
            <DropdownButton id="dropdown-basic-button" variant="outline-light" title={`Favoritos: ${favoritos.length}`}>
                {
                    favoritos.map(
                        (item, index) => {
                            return (
                                <Dropdown.Item key={index} href="#/action-1">{item.name}  <FaTrash  onClick={() => actions.removerFavorito(item,index)} /></Dropdown.Item>
                            )
                        }
                    )
                }
            </DropdownButton>
            </Container>
            
        </nav>
        </>
)}
