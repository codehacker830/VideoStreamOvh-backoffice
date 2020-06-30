import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from 'actions/Category';
import Button from "@material-ui/core/Button";

const initialData = [
    // { id: 31, name: "Horror", description: "This is horrible genre film" },
    // { id: 1, name: "Horror", description: "This is horrible genre film" },
    // { id: 21, name: "Horror", description: "This is horrible genre film" },
    // { id: 14, name: "Horror", description: "This is horrible genre film" },
    // { id: 31, name: "Horror", description: "This is horrible genre film" },
];

class CategoryPage extends React.Component {
    _isMounted = false;
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        };
    }
    componentWillMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.props.getCategories();
        }
    }
    onClickHandle = (id) => {
        this.props.deleteCategory(id);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        console.log("CategoryPage props : ", this.props);
        const data = this.props.categoryList || [];
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Category Page" />
                <div className="row mb-md-3">
                    <div className="col-12">
                        <div className="jr-card">
                            {/* Card */}
                            <div className="jr-card-header d-flex align-items-center">
                                <h3 className="mb-0">Category List</h3>
                            </div>
                            {/* Table */}
                            <div className="table-responsive-material">
                                <table className="default-table table-bordered table table-md table-hover">
                                    <thead className="th-border-b">
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((n, index) => {
                                            let bageClass = "btn-warning";
                                            if (n.role === "admin") bageClass = "btn-success";
                                            if (n.role === "content") bageClass = "btn-info";
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{n.name}</td>
                                                    <td>{n.description}</td>
                                                    <td><Button variant="contained" color="secondary" className="mr-2" onClick={() => this.onClickHandle(n.id)}>Delete</Button></td>
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
const mapStateToProps = ({ category }) => {
    const { categoryList } = category;
    return { categoryList }
};

export default connect(mapStateToProps, { getCategories, deleteCategory })(CategoryPage);