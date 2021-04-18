import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link} from "react-router-dom";


class Home extends React.Component{

  render(){
    return(
      <div class="container px-4 py-5 mx-auto">
      <center>
          <div class="card card0">
              <div class="d-flex flex-lg-row flex-column-reverse">
                  <div class="card card1">
                      <div class="row justify-content-center my-auto">
                          <div >
                              <div class="row justify-content-center px-3 mb-3"> <img src="download.png" style={{height:"237px",width:"200px",padding:'10px'}} alt="" disabled/> </div>
                              <h1 class="mb-5 text-center heading">GUVI</h1>
                              <h3 class="msg-info">Tech deserves you </h3>
                              <h5><p>GUVI started as an unique community who were passionate to learn and share technical knowledge in our very own mother tongue. We try to connect with everyone in their preferred language</p></h5>

                          </div>
                      </div>
                      <div class="bottom text-center mb-5">
                          <h5><p>Click below to view some of the characters and thier details in The Breaking Bad API </p></h5>
                          <p href="#" class="sm-text mx-auto mb-3">list of characters<button class="btn btn-white ml-2"><Link to="/character">clickhere </Link></button></p>
                      </div>
                  </div>
              </div>
          </div>
          </center>
      </div>
    )
  }
}

export default Home;
