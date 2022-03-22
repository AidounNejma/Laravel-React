import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';


class AddIdeas extends Component {

    state = {
        title: '',
        content: '',
    }

    planetCount = 0;

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
            left: getCircleX(3.14 + (this.planetCount * 0.7), 250) + 'px',
            top: getCircleY(3.14 + (this.planetCount * 0.7), 250) + 'px'
        });

        this.planetCount++;

        if (res.data.status === 200) {
            //console.log(res.data);
            
            this.setState({
                title: '',
                content: ''
            });

            /* Creation d'un variable pour stocker le titre + ajout dans la div du cercle */
            const myTitle = $('<h5></h5>');
            myTitle.html(res.data.title);
            circle.append(myTitle);
            
        }
        /* Ajout du cercle dans notre orbite */
        $(".selector").append(circle);
    }

    render() {
        
        return (
            <div className="container" >
                <h4>Ajouter une idée</h4>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-dark">
                            <div className="modal-header text-white">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter une idée</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="text-white" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.savesIdea} >
                                    <div className="form-group mb-3">
                                        <label className="text-white">Titre</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                        <span className="text-danger"></span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="text-white">Contenu</label>
                                        <textarea type="text" name="content" onChange={this.handleInput} value={this.state.content} className="form-control"></textarea>
                                        <span className="text-danger"></span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-light">Ajouter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerCircles">
                <div className='selector'>
                    <button className="roundCenter" type="button" data-toggle="modal" data-target="#exampleModal">Ajouter une idée</button>
                </div>
                </div>
            </div>
        );
    }
}

export default AddIdeas;