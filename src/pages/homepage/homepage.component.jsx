import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory-compoent'
const HomePage = (props) => (
    <div className='homepage'>
        <button onClick = {() => props.history.push(`/shop`)}>Shopping page</button> <br />
        <Directory></Directory>
    </div>
)

export default HomePage;