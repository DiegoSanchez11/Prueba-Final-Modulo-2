// Este sera mi Home-Login
import React from 'react';
// Components
import Form from '../components/Form';
import NavBar from '../components/NavBar';

class HomeLogin extends React.Component{
    render(){
        return(
            <NavBar />
            <Form />
        )
    }
}

export default HomeLogin;