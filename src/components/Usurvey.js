import React, { Component } from 'react'
import "./Usurvey.css";
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
        event.preventDefault()
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
                <input style={{ fontSize:"20px", padding:"15px"}}type="text" placeholder="Enter your name" ref="name"  />
                </form>
                 </div>
                 questions = ""

        } else if(this.state.studentName != "" && this.state.isSubmitted === false){
            studentName = <p><h1>Welcome to U-Survey, {this.state.studentName}</h1> 
            <br />
            <h3>Answer the questions below</h3>
            </p>

            questions = <div>
                <form onSubmit={this.handleQuestionsSubmit}>
                    <div className="card">
                        <label>Do you think global warming will wipe out all humans?</label> <br />
                        <input type="radio" name="answer1" value="globalWarming" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer1" value="globalWarming" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer1" value="globalWarming" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>I like to go above and beyond of what i am asked?</label> <br />
                        <input type="radio" name="answer2" value="aboveBeyond" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer2" value="aboveBeyond" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer2" value="aboveBeyond" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>Do you consider yourself a go getter?</label> <br />
                        <input type="radio" name="answer3" value="goGetter" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer3" value="goGetter" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer3" value="goGetter" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>Will planet earth survive longer than humans?</label> <br />
                        <input type="radio" name="answer4" value="survival" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer4" value="survival" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer4" value="survival" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>Are you motivated to strive and be your best?</label> <br />
                        <input type="radio" name="answer5" value="motivated" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer5" value="motivated" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer5" value="motivated" onChange={this.handleInputChange}/> Maybe
                    </div>
                                <center><button style={{ padding:"10px", backgroundColor:"lightBlue", marginTop:"20px"}}>Submit</button></center>
                </form>
            </div>
        }
      
        return (
            <div style={{ margin: "100px"}}>
                {studentName}
                <hr />
                {questions}
            </div>
        )
    }
}
