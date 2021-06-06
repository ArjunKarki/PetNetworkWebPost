import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import ReactPlayer from 'react-player'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import Comment from "@material-ui/icons/Comment";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { mediaUrl, ownerProPic } from '../globle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from 'react-responsive-modal';


const style = {

    subheader: {
        color: '#ECC951'
    },
    title: {
        color: '#ECC951'
    },

}

class VideoPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            openModal: false
        }
        console.log("SingPost", this.state.data);
    }

    closeModal = () => {
        this.setState({ openModal: false });
    };

    showModal() {
        this.setState({ openModal: true });
    }

    render() {
        const { classes } = this.props
        let { data, openModal } = this.state
        let subtext = data.activity === "" ? "" : data.petsName + " is " + data.activity;
        return (
            <div id="top" style={{ padding: 8 }}>

                <Card className="card" style={{ maxWidth: 500, marginLeft: "auto", marginRight: "auto", background: '#191e1f' }} >
                    <CardHeader
                        classes={{
                            subheader: classes.subheader,
                            title: classes.title
                        }}
                        avatar={
                            <Avatar aria-label="Recipe" className="avator" src={ownerProPic + "/" + data.ownerId} />
                        }

                        action={
                            <IconButton disabled={true}>
                                <MoreVertIcon style={{ color: '#ECC951' }} />
                            </IconButton>
                        }

                        title={data.ownerName}
                        subheader={subtext}

                    />
                    <div >
                        <video preload="none" width="100%" height="100%" controls poster={mediaUrl + "/" + data.media[0].mediaId + "/thumbnail"}>
                            <source src={mediaUrl + "/" + data.media[0].mediaId} type={data.media[0].contentType} />
                        </video>

                        {/* <ReactPlayer
                            controls={true}
                            width="500"
                            height="600"
                            url={mediaUrl + "/" + data.media[0].mediaId} /> */}
                    </div>

                    {
                        data.status === "" ?
                            null :
                            <CardContent>
                                <Typography component="p" style={{ color: '#ffffff', fontSize: 18 }}>
                                    {data.status}
                                </Typography>
                            </CardContent>
                    }

                    <CardActions disableActionSpacing>

                        <IconButton onClick={() => { this.showModal() }} aria-label="Add to favorites" style={{ color: '#ffffff' }}>
                            <FavoriteIcon />
                            <div style={{ fontSize: 15, marginLeft: 10 }}>{data.likes.length}</div>
                        </IconButton>
                        <IconButton onClick={() => { this.showModal() }} style={{ marginLeft: 20, color: '#ffffff' }} aria-label="comment" >
                            <Comment />
                            <div style={{ fontSize: 15, marginLeft: 10 }}>{data.comments.length}</div>
                        </IconButton>
                        {/* <IconButton disabled={true} style={{ marginLeft: 20, color: '#ffffff' }} aria-label="Share">
                            <ShareIcon />
                            <div style={{ fontSize: 15, marginLeft: 10 }}>{0}</div>
                        </IconButton> */}
                    </CardActions>

                </Card>

                <Modal
                    open={openModal}
                    onClose={this.closeModal}
                    center
                    showCloseIcon={true}
                    animationDuration={500}
                    classNames={{ modal: 'custom-modal' }}
                >
                    <div style={{ textAlign: "center" }} >

                        <img className="mt-3" background-image="none" src="https://pet-network.io/petnetwork.png" alt="logo" height="160" width="180" />

                        <h4 style={{ marginTop: 15, color: "black", }}> Get The App Here To Get These Features</h4>

                        <div style={{ marginTop: 15 }}>

                            <a className="btn-app"><img src={require("../images/apple-store.png")} alt="App Store Button" style={{ width: "33%", marginRight: 25 + "px" }} /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("../images/google-store.png")} alt="Play Store Button" style={{ width: "30%" }} /></a>

                        </div>

                    </div>

                </Modal>

                {/* <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.openModal}
                    onClose={this.handleClose}
                >
                    <div style={{ marginTop: "4%", width: 350, height: "70%", marginLeft: "auto", marginRight: "auto", background: '#ffffff', }}>
                        <button className="close pop-up-app" style={{ padding: 10 }} onClick={() => { this.setState({ openModal: false }) }}>&times;</button>
                        <div style={{ textAlign: "center", }} >

                            <img className="mt-3" src={require("../images/splashBack.jpg")} alt="logo" height="200" width="180" />

                            <h4 style={{ marginTop: 15, color: "black", }}> Get The App Here To Get These Features</h4>

                            <div style={{ marginTop: 15 }}>

                                <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("../images/apple-store.png")} alt="App Store Button" style={{ width: "33%", marginRight: 25 + "px" }} /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("../images/google-store.png")} alt="Play Store Button" style={{ width: "30%" }} /></a>

                            </div>

                        </div>
                        
                    </div>
                   
                </Modal> */}

            </div>

        )
    }
}
VideoPost.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(style)(VideoPost)