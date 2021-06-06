import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
import Modal from 'react-responsive-modal'

const style = {

    subheader: {
        color: '#ECC951'
    },
    title: {
        color: '#ECC951'
    },

}

class MultiPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            openModal:false
        }
        console.log("MultiPost", this.state.data);
    }

    closeModal = () => {
        this.setState({ openModal: false });
    };
    showModal() {
        this.setState({ openModal: true });
    }


    showMultiPost(media) {
        let arr = [];
        let indicator = [];

        for (let i = 0; i < media.length; i++) {
            if (i === 0) {
                let eachTag = (
                    <div className="carousel-item active" key={i}>
                        <img src={mediaUrl + "/" + media[i].mediaId} alt="Los Angeles" width="100%" height="450" />
                    </div>
                );
                arr.push(eachTag);
            } else {
                let anotherTag = (
                    <div className="carousel-item" key={i}>
                        <img src={mediaUrl + "/" + media[i].mediaId} alt="Chicago" width="100%" height="450" />
                    </div>
                );
                arr.push(anotherTag);
            }
        }

        for (let i = 0; i < media.length; i++) {
            if (i === 0) {
                let tag = <li data-target="#myCarousel" style={{ color: '#ECC951' }} data-slide-to={i} className="active"></li>
                indicator.push(tag)
            } else {
                let tag = <li data-target="#myCarousel" style={{ color: '#ECC951' }} data-slide-to="0" ></li>
                indicator.push(tag);
            }
        }

        return (
            <div id="myCarousel" className="carousel slide" style={{ maxWidth: 450, }}>
                <div className="carousel-inner">
                    <ol className="carousel-indicators" >
                        {indicator}
                    </ol>

                    {arr}

                </div>
                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" >
                    <span style={{ color: '#ECC951' }} className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next" style={{ color: '#ECC951' }}>
                    <span style={{ color: '#ECC951' }} className="carousel-control-next-icon"></span>
                </a>
            </div>
        )
    }

    render() {
        const { classes } = this.props
        let { data,openModal } = this.state
        let subtext = data.activity === "" ? "" : data.petsName + " is " + data.activity;
        return (
            <div style={{ padding: 8 }} >
                <Card className="card" style={styles.cardStyle} >
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

                    {
                        this.showMultiPost(data.media)
                    }

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
                        <IconButton onClick={() => { this.showModal() }} style={{ marginLeft: 30, color: '#ffffff' }} aria-label="comment" >
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

                            <a className="btn-app"><img src={require("../images/apple-store.png")} alt="App Store Button" style={{ width: "33%", marginRight: 25 + "px" }} /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("../images/google-store.png")} alt="Play Store Button" style={{ width: "30%" }} /></a>

                        </div>

                    </div>

                </Modal>

            </div >

        )
    }
}

MultiPost.propTypes = {
    classes: PropTypes.object.isRequired,
};
const styles = {

    cardStyle: {
        maxWidth: 450,
        minWidth: 350,
        background: '#191e1f',
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10
    }
}
export default withStyles(style)(MultiPost)