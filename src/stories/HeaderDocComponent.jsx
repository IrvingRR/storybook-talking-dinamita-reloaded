import { Canvas, ArgsTable, Source } from '@storybook/addon-docs';
import Header from '../components/Header';
import './header-docs-component.css';

const HeaderDocComponent = () => {

  const userData = {
    name: 'Katehrine Johson',
    picture: 'https://media.istockphoto.com/photos/successful-smiling-woman-wearing-eyeglasses-on-grey-wall-picture-id1289220949?k=20&m=1289220949&s=612x612&w=0&h=WYYmFk3KxRo2sV5MbH19Xf1NEkCz1HG5-Mk8eW_6kdE='
  };

  return (
    <main className='docs-main-container'>
        {/* Header component introduction 
        =======================================*/}

        <h1>Header component</h1>
        <p>This component allow you to implement a Header componentn in your application. The Header component receive two arguments: <strong>theme</strong> and <strong>data</strong></p>
        <Canvas isColumn withToolbar withSource={'none'} source>
            <Header/>
        </Canvas>
        <ArgsTable of={Header}/>

        {/* Header component stories 
        =======================================*/}

        <h2>Stories</h2>
        <hr />
        <br/>
        {/* Logged
        =======================================*/}

        <h2>Logged</h2>
        <p>This is the variant of the Header component when the user is logged. The information of the user will be displated in the Header component</p>
        <ul className="doc-list">
          <li>The background color is white</li>
          <li>Has a shadow</li>
          <li>The content color is dark gray</li>
          <li>Shows the information of the user</li>
        </ul>
        <Canvas isColumn withToolbar withSource={'none'}>
            <Header data={ userData }/>
        </Canvas>
        <Source
          language='jsx'
          dark
          format={true}
          code={`
            <Header data={{
              name: 'Katehrine Johson',
              picture: 'https://media.istockphoto.com/photos/successful-smiling-woman-wearing-eyeglasses-on-grey-wall-picture-id1289220949?k=20&m=1289220949&s=612x612&w=0&h=WYYmFk3KxRo2sV5MbH19Xf1NEkCz1HG5-Mk8eW_6kdE='
            }}/>
          `}
        />
      
        {/* Logged Dark
        =======================================*/}
        <h2>Logged dark</h2>
        <p>This is the variant of the Header component when the user is logged and the theme is <strong>dark</strong></p>
        <ul className="doc-list">
          <li>The background color is dark blue</li>
          <li>Has a dark blue shadow </li>
        </ul>
        <Canvas isColumn withToolbar withSource={'none'}>
            <Header data={ userData } theme='dark'/>
        </Canvas>
        <Source
          language='jsx'
          dark
          format={true}
          code={`
            <Header theme='dark' data={{
              name: 'Katehrine Johson',
              picture: 'https://media.istockphoto.com/photos/successful-smiling-woman-wearing-eyeglasses-on-grey-wall-picture-id1289220949?k=20&m=1289220949&s=612x612&w=0&h=WYYmFk3KxRo2sV5MbH19Xf1NEkCz1HG5-Mk8eW_6kdE='
            }}/>
          `}
        />

         {/* Logged Out
        =======================================*/}

        <h2>Logged out</h2>
        <p>This is the variant of the Header component when the user is <strong>NOT</strong> logged.</p>
        <ul className="doc-list">
          <li>The background color is white</li>
          <li>Has a shadow</li>
          <li>The content color is dark gray</li>
          <li>It has two buttons for the user tu log in or create a new account</li>
        </ul>
        <Canvas isColumn withToolbar withSource={'none'}>
            <Header data={undefined}/>
        </Canvas>
        <Source
          language='jsx'
          dark
          format={true}
          code={`<Header/>`}
        />

         {/* Logged Out Dark
        =======================================*/}

        <h2>Logged out dark</h2>
        <p>This is the variant of the Header component when the user is <strong>NOT</strong> logged and the theme is <strong>dark</strong>.</p>
        <ul className="doc-list">
          <li>The background color is blue dark</li>
          <li>Has a dark blue shadow </li>
        </ul>
        <Canvas isColumn withToolbar withSource={'none'}>
            <Header data={undefined} theme='dark'/>
        </Canvas>
        <Source
          language='jsx'
          dark
          format={true}
          code={`<Header theme='dark'/>`}
        />
    </main>
  );
}

export default HeaderDocComponent;