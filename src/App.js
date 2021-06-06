import React, { Component } from 'react';
import './App.css';
import { webFeedUrl } from './globle';
import MultiPost from './components/MultiPost'
import SinglePost from './components/SinglePost'
import VideoPost from './components/VideoPost'
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
      loading: true
    }
  }

  async componentDidMount() {
    let feedId = this.props.match.params.postId;

    let path = webFeedUrl + "/" + feedId;

    let config = { method: "GET" }

    let res = await fetch(path, config);

    let resJson = await res.json();

    console.log("response", res)
    console.log("Json", resJson);

    if (res.status === 200) {
      this.setState({
        loading: false,
        data: resJson
      })
      console.log(this.state.data.length);
    } else if (res.status === 500) {
      this.setState({
        loading: false,
        data: ''
      })

    }
  }

  showPost() {
    let { data } = this.state;
    if (data.media.length === 1) {
      if (data.media[0].contentType.startsWith("image/")) {
        return (
          <SinglePost data={data} />
        )
      } else {
        return (
          <VideoPost data={data} />
        )
      }

    } else {
      return (
        <MultiPost data={data} />
      )
    }

  }


  render() {
    let { loading, data } = this.state

    if (loading === true) {

      return (
        <div style={{ marginLeft: "50%", marginTop: "25%" }}>
          <CircularProgress  style={{ color: '#ECC951' }} />
        </div>
      )

    } else if (data === '') {

      return (

        <div className="main-container">

          <div style={{ textAlign: "center" }}>

            <img className="mt-3 " src="https://pet-network.io/petnetwork.png" alt="logo" height="150" width="150" />

            <h4 style={{ marginTop: 10, color: "#ffffff" }}> Get The App Here To Get More Features</h4>
            <div className="app-link">

              <a className="btn-app"><img src={require("./images/apple-store.png")} alt="App Store Button" style={{ width: "33%", marginRight: 25 + "px" }} /></a>
              <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("./images/google-store.png")} alt="Play Store Button" style={{ width: "30%" }} /></a>

            </div>

          </div>
          <div className="mt-5 text-center">
          <h3 style={{color:"red"}} >Something Went Wrong!</h3>
          </div>

          <div className="footer">

            <div >

              <a href="https://www.martersolutions.com/"><i className="fa fa-globe" style={{ fontSize: 27, color: '#ECC951', marginRight: 10 }} /></a>
              <a href="https://www.facebook.com/MARTERsolutions/?ref=br_rs"> <i className="fa fa-facebook" style={{ fontSize: 27, color: '#ECC951', marginRight: 10 }} /></a>


            </div>

            {/* "sales@martersolutions.com" */}

            <p style={{ fontSize: 17, color: '#ffffff' }}>Copyright 2018 - By Marter Solutions: All rights reserved.</p>

          </div>

        </div>

      );

    } else {
      return (
        <div className="main-container">


          <div style={{ textAlign: "center" }}>

            <img className="mt-3" src="https://pet-network.io/petnetwork.png" alt="logo" height="150" width="150" />

            <h4 style={{ marginTop: 10, color: "#ffffff" }}> Get The App Here To Get More Features</h4>
            <div className="app-link">

              <a className="btn-app"><img src={require("./images/apple-store.png")} alt="App Store Button" style={{ width: "33%", marginRight: 25 + "px" }} /></a>
              <a href="https://play.google.com/store/apps/details?id=com.petnetwork" className="btn-app"><img src={require("./images/google-store.png")} alt="Play Store Button" style={{ width: "30%" }} /></a>

            </div>

          </div>

          {
            this.showPost()
          }

          <div className="footer">

            <div >

              <a href="https://www.martersolutions.com/"><i className="fa fa-globe" style={{ fontSize: 27, color: '#ECC951', marginRight: 10 }} /></a>
              <a href="https://www.facebook.com/MARTERsolutions/?ref=br_rs"> <i className="fa fa-facebook" style={{ fontSize: 27, color: '#ECC951', marginRight: 10 }} /></a>


            </div>

            {/* "sales@martersolutions.com" */}

            <p style={{ fontSize: 17, color: '#ffffff' }}>Copyright 2018 - By Marter Solutions: All rights reserved.</p>

          </div>

        </div>
      )
    }

  }
}

export default App;
