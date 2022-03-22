import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import $ from 'jquery';


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
        
        const circle = $('<div class="item"></div>')
        
        function getCircleY (radians, radius) {
            return Math.sin(radians) * radius;
        }
        
        function getCircleX (radians, radius) {
            return Math.cos(radians) * radius;
        }

        $(circle).css({
            left: getCircleX(3.14, 225) + 'px',
            top: getCircleY(3.14, 225) + 'px'
        });

        if (res.data.status === 200) {
            console.log(res.data);
            
            this.setState({
                title: '',
                content: ''
            });

            
        

            const myTitle = $('<h5></h5>');
            myTitle.html(res.data.title);
            circle.append(myTitle);
            
        }

        $(".selector").append(circle);
    }








    render() {
        return (
            <div className="container" >
                <h4>Add Ideas</h4>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add an Idea</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
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

                <div className="containerCircles">
                <div className='selector'>
                    <button className="roundCenter" type="button" data-toggle="modal" data-target="#exampleModal">Add an idea</button>
                </div>
                </div>
            </div>
        );
    }
}

export default AddIdeas;