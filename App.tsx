import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNav from './Sidenav';
import Main from './Main';
import './style.css';

export default function App() {

  const [ expand, setExpand ] = React.useState(false);
  return (
    <div>
      <Header onHandleChange={(event) => setExpand(event)} />
     <div className='subdiv'>
      <SideNav expandFlag={expand} />
      <Main/>
      </div>
      <Footer />
    </div>
  );
}
