import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Ideas extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Ideas Data
                                    <Link to={'add-ideas'} className="btn btn-primary btn-sm float-end">Add Ideas</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ideas;