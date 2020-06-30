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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { getCategories } from 'actions/Category';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import axios from 'util/Api';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

class UploadVideo extends React.Component {
    constructor() {
        super();
        this.file = null;
        this.chunks = [];
        this.cover = null;

        this.state = {
            title: "",
            description: "",
            category_id: null,
            progress: 0,
            fileName: "",
            imageName: ""
        }
    }
    componentWillMount() {
        this.props.getCategories();
    }
    onClickSaveHandle = () => {
        if (this.file !== null) {
            this.createChunks();
        }
    }
    onSelectUpload = (event) => {
        this.file = event.target.files.item(0);
        if (this.file !== null) {
            this.setState({ fileName: event.target.files.item(0).name });
        }
    }
    onSelectImage = (event) => {
        this.cover = event.target.files.item(0);
        if (this.cover !== null) {
            this.setState({ imageName: this.cover.name });
        }
    }
    createChunks = async () => {
        let size = 3 * 1024 * 1024;
        let chunks = Math.ceil(this.file.size / size);

        for (let i = 0; i < chunks; i++) {
            const chunk = this.file.slice(
                i * size, Math.min(i * size + size, this.file.size), this.file.type
            );

            let formData = new FormData;
            formData.set('is_last', i + 1 === chunks);
            formData.set('file', chunk, `${this.file.name}.part`);

            await this.upload(formData).then((res) => {
                this.setState({ progress: (i + 1) / chunks * 100 });
                if (res.data && res.data.uploaded) {
                    console.log(" this.state.category_id : ", this.state.category_id)
                    
                    let videoForm = new FormData;
                    videoForm.set('video_id', res.data.id);
                    videoForm.set('title', this.state.title);
                    videoForm.set('category_id', this.state.category_id);
                    videoForm.set('description', this.state.description);
                    videoForm.set('cover', this.cover, `${this.cover.name}`);
                    const config = {
                        method: 'POST',
                        data: videoForm,
                        url: '/videos/create-content'
                    };
                    axios(config).then(response => {
                        console.log("!!!!!!!!!!!!! success : ", response);
                    }).catch(error => {
                        console.error(" error ");
                    })
                }
            }).catch(err => {
                console.error(err);
            });
        }
    }
    upload = (formData) => {
        return new Promise((resolve, reject) => {
            const config = {
                method: 'POST',
                data: formData,
                url: '/videos/upload'
            };
            axios(config).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            });
        })
    }
    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Create Video Page" />
                <div className="row">
                    <CardBox
                        styleName="col-md-12 col-12"
                        heading="Video Content">
                        <form className="form-group" noValidate autoComplete="off">
                            <div className="col-md-12 col-12">
                                <input
                                    accept="video/*"
                                    style={{ display: "none" }}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={this.onSelectUpload}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="span"
                                        startIcon={<CloudUploadIcon />}
                                    // onClick={}
                                    >
                                        Upload Video File By Clicking... {this.state.fileName}
                                    </Button>
                                </label>
                                <div style={{ width: "100%" }} className="mt-2">
                                    <LinearProgressWithLabel value={this.state.progress} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <TextField
                                            id="video-title"
                                            label="Title"
                                            variant="outlined"
                                            color="secondary"
                                            helperText="Please write video title"
                                            fullWidth
                                            margin="normal"
                                            value={this.state.title}
                                            onChange={(event) => this.setState({ title: event.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <TextField
                                            id="video-description"
                                            label="Description"
                                            variant="outlined"
                                            color="secondary"
                                            helperText="Please write video description"
                                            fullWidth
                                            margin="normal"
                                            value={this.state.description}
                                            onChange={(event) => this.setState({ description: event.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <Typography variant="subtitle1">Video Cover Image</Typography>
                                            <input
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                id="icon-button-file" 
                                                type="file" 
                                                onChange={this.onSelectImage}/>
                                            <label htmlFor="icon-button-file">
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <PhotoCamera />
                                                </IconButton>
                                            </label>
                                        <span className="primary">{this.state.imageName}</span>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <FormControl variant="outlined" className="col-12">
                                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={this.state.category}
                                                    onChange={(event) => { console.log("^^^ event : ", event.target); this.setState({ category_id: event.target.value }); }}
                                                    label="Category"
                                                >
                                                    <MenuItem value="" disabled>
                                                        <em>Choose Video Content Category</em>
                                                    </MenuItem>
                                                    {
                                                        this.props.categoryList.map(category => {
                                                            return <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </div>
                                <div className="text-right mt-3">
                                    <Button variant="contained" color="primary" className="mr-2" onClick={this.onClickSaveHandle}>
                                        Save
                                        </Button>
                                    <Button variant="contained" color="secondary">
                                        Cancel
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

const mapStateToProps = ({ category }) => {
    const { categoryList } = category;
    return { categoryList }
}
export default connect(mapStateToProps, { getCategories })(UploadVideo);