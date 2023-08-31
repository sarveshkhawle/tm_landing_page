import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tmlogo from '../img/3.png'
const NavBar = () =>{
return(
  <div id="nabbar-div">

    <Navbar id="navbar">
        <Container>
          <Navbar.Brand href="#home"><img id='tmlogo' src={Tmlogo} alt="" /></Navbar.Brand>
  
         

     
        </Container>
      </Navbar>
  </div>
)
}
export default NavBar