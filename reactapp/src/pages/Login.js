import React, { Component } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';



class Login extends Component {
    
    state = {
        email: '',
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

        axios.post('http://127.0.0.1:8000/api/login', this.state)
        .then(res => {
            //Success alert
            if (res["data"]["status"] === "error") {
                Swal.fire({
                    title: 'OPPS',
                    text: "Error",
                    type: 'warning',

                });
            }
            else {
                Swal.fire({
                    title: 'Connexion réussie',
                    text: "You have been logged-in successfully",
                    type: 'success',
                });
            }
            /* this.myFormRef.reset(); */
        }
        );
    }

    render() {

        return (

            <div className="container" style={{ position: 'relative' }}>


                <div className="container p-5">
                    <h1 className="text-center mb-5 text-white">Connexion</h1>
                    <form onSubmit={this.addFormData}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Enter Email</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" onChange={this.handleInput} value={this.state.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Enter Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPass1" aria-describedby="passHelp" placeholder="Enter Password" onChange={this.handleInput} value={this.state.password} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>


                </div>

            </div>

        )
    }
}
export default Login;

