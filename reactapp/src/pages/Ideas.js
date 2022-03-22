import React, { Component } from 'react';
/* import { Link } from 'react-router-dom' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

class Ideas extends Component {

    state = {
        student: [],
        loading: true
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/ideas');
        //console.log(res);

        if (res.data.status === 200) {
            this.setState({
                ideas: res.data.ideas,
                loading: false
            })
        }
    }

    thumbsUp = async (id) => {

        const res = await axios.post(`http://127.0.0.1:8000/api/ideas-up/${id}`, this.state);
        
        if (res.data.status === 200) {
            this.setState({
                loading: false
            })
        }
    
    }

    thumbsDown = async (id) => {

        const res = await axios.post(`http://127.0.0.1:8000/api/ideas-down/${id}`, this.state);
        if (res.data.status === 200) {
            this.setState({
                loading: false
            })
        }
    
    }

    render() {
        var ideas_HTML_CARDS = "";
        var modal_HTML_CARDS = "";

        if (this.state.loading) {

            ideas_HTML_CARDS = <h1 className='text-center text-white'>Chargement...</h1>
        }
        else {
            ideas_HTML_CARDS =
                this.state.ideas.map((item) => {
                    return (
                        <div key={item.id} className="card m-4">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{item.user_id}</h6>
                                <p className="card-text">{item.content}</p>
                                <button className="btn btn-dark" type="button" data-toggle="modal" data-target={"#exampleModalCenter" + item.id}>Voir plus</button>
                            </div>
                        </div>

                    );
                });
            modal_HTML_CARDS =
                this.state.ideas.map((item) => {
                    return (
                        <div key={item.id} className="modal fade" id={"exampleModalCenter" + item.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">{item.title}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {item.content}
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={() => this.thumbsDown(item.id)} className="btn btn-dark"><FontAwesomeIcon icon={faThumbsDown} /></button>
                                        <button onClick={() => this.thumbsUp(item.id)} className="btn btn-dark"><FontAwesomeIcon icon={faThumbsUp} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                });

        }
        return (

            <div className="container py-4">
                {modal_HTML_CARDS}
                {/* Cards */}
                <div className="d-flex flex-wrap overflow-auto">
                    {ideas_HTML_CARDS}
                </div>
            </div>
        );
    }
}

export default Ideas;