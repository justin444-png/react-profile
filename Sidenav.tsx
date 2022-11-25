import * as React from 'react';
import './style.css';

export default function SideNav({ expandFlag }) {
  return (
    <div
      className={ expandFlag ? 'mobilehight sideNavhed' : 'sideNavhed'}
      style={{
        width: expandFlag ? '30%' : '5%',
      }}
    >
      SideNavjkhkfhjkfhdfbdbdshjb
    </div>
  );
}
