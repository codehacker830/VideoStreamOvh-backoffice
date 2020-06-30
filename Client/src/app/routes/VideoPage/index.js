import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox';
import Button from "@material-ui/core/Button";
import axios from 'util/Api';
import { connect } from 'react-redux';
import { getVideos, deleteVideo } from 'actions/Video';

const initialData = [
    // { id: 31, title: "Hello", category: { name: "Horror", description : "dasdfasdf"}, description: "Here is description", stars: 5, views: 1563, created_at: "2020-05-16" },
    // { id: 31, title: "Hello", category: { name: "Horror", description : "dasdfasdf"}, description: "Here is description", stars: 5, views: 1563, created_at: "2020-05-16" },
];

class VideoPage extends React.Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            data : initialData
        };
    }
    componentWillMount() {
        this._isMounted = true;
        if(this._isMounted) {
            this.props.getVideos();
        }
    }
    onHandleClick = (id) => {
        this.props.deleteVideo(id);
        // axios.delete(`/video/${id}`)
        // .then(({data}) => {
        //     this.setState({data : data.videos});
        // })
        // .catch(error => {
        //     console.log("!! Error !! ", error );
        // })
    }
    render() {
        console.log("VideoPage props : ", this.props);
        // const { data } = this.state;
        const data = this.props.videoList || [];

        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Video Page" />
                <div className="row">
                    <CardBox
                        styleName="col-lg-12"
                        heading="Video Content">
                        {/* Table */}
                        <div className="table-responsive-material">
                            <table className="default-table table-unbordered table table-sm table-hover">
                                <thead className="th-border-b">
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Rating</th>
                                        <th>Views</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((n, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{n.title}</td>
                                                <td><span className="badge badge-light">{n.category.name}</span></td>
                                                <td>{n.description}</td>
                                                <td>{n.rating}</td>
                                                <td>{n.views}</td>
                                                <td>{n.created_at}</td>
                                                <td><Button variant="contained" color="secondary" onClick={() => this.onHandleClick(n.id)}>Remove</Button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </CardBox>
                </div >
            </div >
        );
    }
}
const mapStateToProps = ({ video }) => {
    const { videoList } = video;
    return { videoList };
}

export default connect(mapStateToProps, { getVideos, deleteVideo })(VideoPage);