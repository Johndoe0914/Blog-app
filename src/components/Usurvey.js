import React, { Component } from 'react'
const firebase = require("firebase");
const uuid = require("uuid");

let firebaseConfig = {
    apiKey: "AIzaSyA4hCchrAWjrelBH93q3K7VTpwkxCmUMF0",
    authDomain: "u-survey-57fec.firebaseapp.com",
    databaseURL: "https://u-survey-57fec.firebaseio.com",
    projectId: "u-survey-57fec",
    storageBucket: "u-survey-57fec.appspot.com",
    messagingSenderId: "552529082741",
    appId: "1:552529082741:web:050bdc8d00e1977e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class Usurvey extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uid: uuid.v1(),
             studentName: "",
             answers: {
                 answer1: "",
                 answer2: "",
                 answer3: "",
                 answer4: "",
                 answer5: "",
             },
             isSubmitted: false
        }
    }
   
    handleSubmit = event => {
        const studentName = this.refs.name.value
        this.setState({
            studentName: studentName
        }, function(){
            console.log(this.state)
        })
    };

    render() {
        let studentName;
        let questions;

        if(this.state.studentName === "" && this.state.isSubmitted === false){
            studentName = <div >
                <h4>Hey student, please enter your name: </h4>
                <form onSubmit={this.handleSubmit}>
                <input style={{ fontSize:"20px", padding:"15px"}}type="text" placeholder="Enter your name" ref="studentName"  />
                </form>
                 </div>

        }
        console.log(this.state.studentName)
        return (
            <div style={{ margin: "100px"}}>
                {studentName}
                <hr />
                {questions}
            </div>
        )
    }
}
