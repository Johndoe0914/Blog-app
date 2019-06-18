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
             questions: {
                 question1: "Do you think global warming will wipe out all humans?",
                 question2: "I like to go above and beyond of what i am asked?",
                 question3: "Do you consider yourself a go getter?",
                 question4: "Will planet earth survive longer than humans?" ,
                 question5: "Are you motivated to strive and be your best?"
             },
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
    handleQuestionsSubmit = () =>{
        firebase.database().ref("uSurvey/" + this.state.uid).set({
            studentName: this.state.studentName,
            questions: this.state.questions,
            answers: this.state.answers
        });
        this.setState({
            isSubmitted: true
        })
    }

    handleInputChange = event => {
        let answers = this.state.answers;
        if(event.target.name === "answer1"){
            answers.answer1 = event.target.value
        } else if(event.target.name === "answer2"){
            answers.answer2 = event.target.value
        } else if(event.target.name === "answer3"){
            answers.answer3 = event.target.value
        } else if(event.target.name === "answer4"){
            answers.answer4 = event.target.value
        } else  if(event.target.name === "answer5"){
            answers.answer5 = event.target.value
        } 

        this.setState({ answers: answers}, function() {
            console.log(this.state)
        })
    }

    render() {
        let studentName;
        let questions;

        if(this.state.studentName === "" && this.state.isSubmitted === false){
            studentName = <center>
                <div >
                <h4>Hey student, please enter your name then press ENTER : </h4>
                <form onSubmit={this.handleSubmit}>
                <input style={{ fontSize:"20px", padding:"15px"}}type="text" placeholder="Enter your name" ref="name"  />
                </form>
                 </div>
            </center>
                 questions = ""

        } else if(this.state.studentName !=="" && this.state.isSubmitted === false){
            studentName = <div>
                 <h1>Welcome to U-Survey, {this.state.studentName}</h1> 
            <br />
            <h3>Answer the questions below</h3>
            </div>
            

            questions = <div>
                <form onSubmit={this.handleQuestionsSubmit}>
                    <div className="card">
                        <label>{this.state.questions.question1}</label> <br />
                        <input type="radio" name="answer1" value="Yes" onChange={this.handleInputChange}/>Yes <br />
                        <input type="radio" name="answer1" value="No" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer1" value="Maybe" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>{this.state.questions.question2}</label> <br />
                        <input type="radio" name="answer2" value="Yes" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer2" value="No" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer2" value="Maybe" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>{this.state.questions.question3}</label> <br />
                        <input type="radio" name="answer3" value="Yes" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer3" value="No" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer3" value="Maybe" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>{this.state.questions.question4}</label> <br />
                        <input type="radio" name="answer4" value="Yes" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer4" value="No" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer4" value="Maybe" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <div className="card">
                        <label>{this.state.questions.question5}</label> <br />
                        <input type="radio" name="answer5" value="Yes" onChange={this.handleInputChange}/> Yes <br />
                        <input type="radio" name="answer5" value="No" onChange={this.handleInputChange}/> No <br />
                        <input type="radio" name="answer5" value="Maybe" onChange={this.handleInputChange}/> Maybe
                    </div>
                    <center><input className="feedback-button" type="submit" value="submit" /></center>
                </form>
            </div> 
        } else if(this.state.isSubmitted === true && this.state.studentName !== "" && this.state.answers !== ""){
            studentName = <div>
                <h1>Thanks for taking this survey, {this.state.studentName} enjoy your day!</h1>
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
