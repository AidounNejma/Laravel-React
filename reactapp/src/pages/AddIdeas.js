import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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

        const res = await axios.post('http://127.0.0.1:8000/api/add-idea', this.state);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                title: '',
                content: ''
            });


        }
    }


    render() {
        return (
            <div class="container">
                <h4>Add Ideas</h4>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add an Idea</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={this.savesIdea} >
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
                <div class='selector'>
                    <ul>
                        <li>
                            <input id='1' type='checkbox' />
                            <label for='1'>Option 1</label>
                        </li>
                        <li>
                            <input id='2' type='checkbox' />
                            <label for='2'>Option 2</label>
                        </li>
                        <li>
                            <input id='3' type='checkbox' />
                            <label for='3'>Option 3</label>
                        </li>
                        <li>
                            <input id='4' type='checkbox' />
                            <label for='4'>Option 4</label>
                        </li>
                        <li>
                            <input id='5' type='checkbox' />
                            <label for='5'>Option 5</label>
                        </li>
                        <li>
                            <input id='6' type='checkbox' />
                            <label for='6'>Option 6</label>
                        </li>
                        <li>
                            <input id='7' type='checkbox' />
                            <label for='7'>Option 7</label>
                        </li>
                        <li>
                            <input id='8' type='checkbox' />
                            <label for='8'>Option 8</label>
                        </li>
                    </ul>
                    <button class="roundCenter" type="button" data-toggle="modal" data-target="#exampleModal">Add an idea</button>
                </div>
            </div>
        );
    }
}

export default AddIdeas;