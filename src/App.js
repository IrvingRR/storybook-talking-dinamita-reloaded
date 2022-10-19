import { BiRocket } from "react-icons/bi";
import { Box, MainContainer } from './components/Global-elements.styles';
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import Header from './components/Header';
import InputSearch from "./components/InputSearch";
import CardUser from "./components/CardUser";
import CardAdd from "./components/CardAdd";
import Dropdown from "./components/Dropdown";
import DropdownItem from './components/DropdownItem';

function App() {

  const theme = 'light';
  const userData = {
    name: 'Katehrine Johson',
    image: 'https://media.istockphoto.com/photos/successful-smiling-woman-wearing-eyeglasses-on-grey-wall-picture-id1289220949?k=20&m=1289220949&s=612x612&w=0&h=WYYmFk3KxRo2sV5MbH19Xf1NEkCz1HG5-Mk8eW_6kdE=',
    favorite: false,
    view: false
  };

  return (
    <MainContainer theme={ theme }>
    <Header theme={ theme } data={ userData }/>
      <Box>
        <Button label='Primary'/>
        <Button variant='secondary' label='Secondary' />
        <Button variant='secondary' icon={<BiRocket/>} label='Secondary'/>
        <Button label='With icon' icon={ <BiRocket/> }/>
        <Button variant='third' label='Third'/>
        <Button variant='third' icon={<BiRocket/>} label='Third'/>
        <IconButton icon={ <BiRocket/> }/>
        <IconButton variant='secondary' icon={ <BiRocket/> }/>
        <IconButton variant='third' icon={ <BiRocket/> }/>
        </Box>
        <Box>
          <CardAdd theme={ theme }/>
          <CardUser theme={ theme } data={userData}/>
        </Box>
        <InputSearch theme={ theme }/>
        <Dropdown>
          <DropdownItem>JavaScript</DropdownItem>
          <DropdownItem>React</DropdownItem>
          <DropdownItem>Angular</DropdownItem>
          <DropdownItem>Vue</DropdownItem>
        </Dropdown>
    </MainContainer>
  );
}

export default App;
