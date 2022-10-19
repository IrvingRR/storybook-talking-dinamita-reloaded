import { BiUser, BiCamera } from "react-icons/bi";
import { CardElement, CardHeader, CardBody, SelectImage, InputCard } from './CardAdd.styles';
import Button from './Button';

const CardAdd = ({ theme }) => {
  return (
    <CardElement theme={ theme }>
        <CardHeader>
            <p>Add New Member</p>
        </CardHeader>
        <CardBody>
            <SelectImage theme={ theme }>
                <BiUser/>
                <div className="content-hover">
                    <BiCamera/>
                    <p>Select</p>
                </div>
            </SelectImage>
            <InputCard theme={ theme } className="input-name" type='text' name="name" placeholder="Name" autoComplete="off"/>
            <InputCard theme={ theme } className="input-email" type='text' name="email" placeholder="Email address" autoComplete="off"/>
            <Button label='Add' rounded/>
        </CardBody>
    </CardElement>
  )
}

export default CardAdd;