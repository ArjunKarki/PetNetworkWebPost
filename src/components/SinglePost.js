import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import Comment from "@material-ui/icons/Comment";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ownerProPic, mediaUrl } from '../globle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import Modal from 'react-responsive-modal';

const style = {

    subheader: {
        color: '#ECC951'
    },
    title: {
        color: '#ECC951'
    },

}

class SinglePost extends Component {

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

            <div style={{ padding: 8 }}>
                <Card style={styles.card}>

                    <CardHeader
                        classes={{
                            subheader: classes.subheader,
                            title: classes.title
                        }}
                        avatar={
                            <Avatar aria-label="Recipe" src={ownerProPic + "/" + data.ownerId} />
                        }
                        action={

                            <IconButton disabled={true}>
                                <MoreVertIcon style={{ color: '#ECC951' }} />
                            </IconButton>

                        }

                        title={data.ownerName}
                        subheader={subtext}
                    />

                    {/* <div style={styles.hashtagstyle}> {data.hashtags}</div> */}

                    <CardMedia
                        style={{ height: 400, }}
                        title="Contemplative Reptile"
                    >
                        <img src={mediaUrl + "/" + data.media[0].mediaId} alt="Responsive" height="400" width="450" />

                    </CardMedia>

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


                    <div style={{ textAlign: "center"  }} >

                        <img className="mt-3"  background-image="none" src="https://pet-network.io/petnetwork.png" alt="logo" height="160" width="180" />

                        <h4 style={{ marginTop: 15, color: "black", }}> Get The App Here To Get These Features</h4>

                        <div style={{ marginTop: 15 }}>

                            <a  className="btn-app"><img src={require("../images/apple-store.png")} alt="App Store Button" style={{ width: "33%", marginRight: 25 + "px" }} /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("../images/google-store.png")} alt="Play Store Button" style={{ width: "30%" }} /></a>

                        </div>

                    </div>

                </Modal>
              
            </div>
        )
    }
}

SinglePost.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {

    card: {
        maxWidth: 450,
        minWidth: 350,
        marginLeft: "auto",
        marginRight: "auto",
        background: '#191e1f',
        marginBottom: 10
    },
    hashtagstyle: {
        margin: 10,
        color: "#ffffff"
    },
    modalCard: {
        background: '#191e1f',
    }
}
export default withStyles(style)(SinglePost)