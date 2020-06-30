import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import axios from 'util/Api';
// import { connect } from 'react-redux';
import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    SHOW_MESSAGE
  } from "constants/ActionTypes";
import { connect } from 'react-redux';

const initialData = [
    // { id: 31, name: "John Doe", email: "myemail@email.com", role: "admin", joining_date: "2020-05-16" },
    // { id: 3, name: "Paul Ray", email: "test@email.com", role: "content", joining_date: "2020-05-16" }
];

class UsersPage extends React.Component {
    _isMounted = false;
    constructor(props, context) {
        super(props, context);
        this.state = {
            data : initialData
        }
    }
    componentWillMount() {
        this._isMounted = true;
        axios.get('/users')
        .then(({ data }) => {
            console.log("%%%%%%%%%%%%%%%%%%%%%%% user list data :", data)
            if (this._isMounted) {
                this.setState({data : data.users});
            }
        })
        .catch(error => {
            console.log("!! Error !! ", error );
        })
    }
    onClickHandle = (id) => {
        axios.delete(`/user/${id}`)
        .then(({data}) => {
            this.setState({data : data.users});
        })
        .catch(error => {
            console.log("!! Error !! ", error );
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        console.log("UsersPage props : ", this.props);
        const data = this.state.data;
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="User Management Page" />
                <div className="row mb-md-3">
                    <div className="col-12">
                        <div className="jr-card">
                            {/* Card */}
                            <div className="jr-card-header d-flex align-items-center">
                                <h3 className="mb-0">User List</h3>
                            </div>
                            {/* Table */}
                            <div className="table-responsive-material">
                                <table className="default-table table-unbordered table table-sm table-hover">
                                    <thead className="th-border-b">
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Joining Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((n, index) => {
                                            let bageClass = "btn-warning";
                                            if (n.role.name === "admin") bageClass = "btn-success";
                                            if (n.role.name === "content") bageClass = "btn-info";

                                            return (
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{n.name}</td>
                                                    <td>{n.email}</td>
                                                    <td><span className={`text-white badge ${bageClass}`}>{n.role.name}</span></td>
                                                    <td>{n.created_at || <span className="text-danger">No setting</span>}</td>
                                                    <td>
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => this.onClickHandle(n.id)}>Close
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default connect(()=>({}), ()=>({}))(UsersPage);