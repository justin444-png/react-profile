import * as React from 'react';
import './style.css';

export default function Header({onHandleChange}) {

  const [ flag, setFlag ] = React.useState(false)

  const onClickMenu=(event)=>{
    setFlag(!flag)
   console.log({event})
  }

  React.useEffect(() => {
    onHandleChange(flag)
  }, [flag])

  return <div className="headerHed">
    <h1> Header</h1>
    <button onClick={(event) => onClickMenu(event)}> click me </button>
  </div>;
}
