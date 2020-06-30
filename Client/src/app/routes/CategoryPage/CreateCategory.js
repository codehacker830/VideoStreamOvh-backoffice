import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import CardBox from "components/CardBox";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'util/Api';

const style = {
    input: {
        display: "none"
    }
};
class CreateCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
        };
    }
    onClickHandle = () => {
        axios.post('/category/create', {
            name: this.state.name,
            description: this.state.description
        }
        ).then((data) => {
            console.log("%%% success : ", data)
        }).catch(error => {
            console.log("!!!!!!! error : ", error);
        })

    }
    render() {
        console.log("VideoPage props : ", this.props);
        const { name, description } = this.state;
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Add New Cagtegory" />
                <div className="row">
                    <CardBox
                        styleName="col-md-12 col-12"
                        heading="New Cagtegory">
                        <form className="form-group" noValidate autoComplete="off">
                            <div className="col-md-12 col-12">
                                <TextField
                                    id="category-name"
                                    label="Name"
                                    variant="outlined"
                                    color="secondary"
                                    helperText="Please write category name"
                                    fullWidth
                                    margin="normal"
                                    value={name}
                                    onChange={(event) => this.setState({ name: event.target.value })}
                                />
                                <TextField
                                    id="category-description"
                                    label="Description"
                                    variant="outlined"
                                    color="secondary"
                                    helperText="Please write category description"
                                    fullWidth
                                    margin="normal"
                                    value={description}
                                    onChange={(event) => this.setState({ description: event.target.value })}
                                />
                                <div className="text-right mt-3">
                                    <Button variant="contained" color="primary" className="mr-2" onClick={this.onClickHandle}>
                                        Create
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </ CardBox>
                </div>
            </div >
        );
    }
}

export default CreateCategory;