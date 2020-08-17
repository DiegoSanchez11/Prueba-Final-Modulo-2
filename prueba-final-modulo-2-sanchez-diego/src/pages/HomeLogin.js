// Este sera mi Home-Login
import React from 'react';
// Components
import Form from '../components/Form';
import NavBar from '../components/NavBar';
import MainTextForm from '../components/MainTextForm';

class HomeLogin extends React.Component{
    render(){
        return(
            <div>
                
                <NavBar />
                <MainTextForm />
                <Form />
            </div>
        )
    }
}

export default HomeLogin;