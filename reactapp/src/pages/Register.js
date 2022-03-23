import React, { Component } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';

class Register extends Component {
    
    state = {
        email: '',
        name: '',
        password: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //Form Submission
    addFormData = async (evt) => {

        evt.preventDefault();

        axios.post('http://127.0.0.1:8000/api/register', this.state)
        .then(res => {
            //Success alert
            console.log(res);
            Swal.fire({
                title: 'Bravo',
                text: res.data['data']['name'] + " a bien été inscrit !",
                type: 'success',

            });
            this.myFormRef.reset();
        }
        );
    }

    render() {

        return (

            <div className="container" style={{ position: 'relative' }}>

                <h1 className="mr-5 ml-5 mt-5 text-white">Inscription</h1>
                <div className="container mb-5 mt-5 text-left">

                    <form onSubmit={this.addFormData}>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleInput} value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Enter Username" name="name" onChange={this.handleInput} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" onChange={this.handleInput} value={this.state.password} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>


                </div>

            </div>

        )
    };
}
export default Register;