import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import axios from 'axios';


class AddIdeas extends Component {

    state = {
        title: '',
        content: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    savesIdea = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8001/api/add-idea', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                title: '',
                content: ''
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Add Ideas
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <form onSubmit= {this.savesIdea} >
                                    <div className="form-group mb-3">
                                        <label>Idea Title</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                        <span className="text-danger"></span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Idea Content</label>
                                        <textarea type="text" name="content" onChange={this.handleInput} value={this.state.content} className="form-control"></textarea>
                                        <span className="text-danger"></span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Add Idea</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddIdeas;