import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiMessageSquareError, BiSearch } from "react-icons/bi";
import { Container, Content, InputControl, Results, ResultItem, Legend } from './InputSearch.styles';

/**
 * The ** SearchInput ** allow you to make searchs and display all the results in a wrapper. Depending of the case the component will show a different result.   
 * - ** Results found **: The component will show all the result that match with the search.
 * - ** Not results found ** The component will show a message with the legend *No results*  
 * 
 * Optionally this component receives the typical arguments of a common input
 * [type, name, placeholder, autoComplete, value]. If the * placeholder * argument is not assigned the component will use a default value which is * search * and the ** theme ** which you want to display
 */

const InputSearch = ({ ...props }) => {

  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleChange = async (e) => {
    try {

      if(e.target.value !== '') {
        setSearching(true);
        
        const request = await fetch('https://jsonplaceholder.typicode.com/users/');
        const response = await request.json();
  
        const results = response.filter(el => el.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
        await setResults(results);
      
      } else {
        setSearching(false);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content theme={ props.theme }>
        <InputControl { ...props } type='text' name='search' placeholder={ props.placeholder || 'Search' } onChange={ handleChange } autocomplete="off"/>
        <BiSearch/>
      </Content>
      <Results searching={ searching } theme={ props.theme }>
        {
          results.length === 0 
          ? <Legend>
              <BiMessageSquareError/>
              No results
            </Legend>
          : results.map(el => <ResultItem key={ el.id }>{el.name}</ResultItem>)
        }
      </Results>
    </Container>
  )
};

InputSearch.propTypes = {
  /**
   * Indicates waht is the type of input that you want to use
   */
  type: PropTypes.string,
  /**
   * Name that the input will has
   */
  name: PropTypes.string,
  /**
   * Name which will be displayed in the input
   */
  placeholder: PropTypes.string,
  /**
   * Allow you to indicat if you want to use the auto complete or not
   */
  autoComplete: PropTypes.string,
  /**
   * Indicates wath is the style that will has the component
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};

InputSearch.defaultProps = {
  type: 'text',
  name: 'search',
  placeholder: 'Search',
  autoComplete: 'off',
  theme: 'light'
}

export default InputSearch;