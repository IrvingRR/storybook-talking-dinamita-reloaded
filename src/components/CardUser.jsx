import { FiHeart } from "react-icons/fi";
import { BiNotepad, BiShowAlt } from "react-icons/bi";
import { CardElement, CardHeader, CardBody, CardFooter, Information, Image, ButtonFavorite } from './CardUser.styles';
import Button from './Button';

const CardUser = ({ theme, data }) => {
  return (
    <CardElement theme={ theme }>
        <CardHeader>
            <ButtonFavorite isFavorite={data.favorite}>
                <FiHeart/>
            </ButtonFavorite>
        </CardHeader>
        <CardBody>
            <Image src={ data.image } alt={ data.name }/>
            <Information>
                <h3>{ data.name }</h3>
                <p>{ data.email }</p>
            </Information>
        </CardBody>
        <CardFooter>
            <Button label='Assing' variant='third' rounded icon={ <BiNotepad/> }/>
            {
                data.view
                ? <Button label='View' rounded icon={ <BiShowAlt/> }/>
                : <Button label='View' variant='third' rounded icon={ <BiShowAlt/> }/>
            }
            
        </CardFooter>
    </CardElement>
  )
}

export default CardUser;