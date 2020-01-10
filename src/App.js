import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import friends from "./friends.json";
import update from "immutability-helper";
import PicsCard from "./components/PicsCard";

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    headerText: "Don't click on the same image twice!",
    friends
  }

  handleClick = friendsID => {
    console.log(friendsID);

    let friendArr = this.state.friends;

    for(let i = 0; i < friendArr.length; i++) {

      if(friendsID === friendArr[i].id) {

        if(friendArr[i].clicked === false){

          this.setState({
            score: this.state.score +1,
            friends: update(this.state.friends, {[i]: {clicked: {$set: true }}}),
            headerText: "You guessed correctly!"
          })

        } else {

          if(this.state.score > this.state.topScore) {
            this.setState({
              topScore: this.state.score,
              score: 0,
              headerText: "Wrong! You guessed incorrectly",
              friends
            },
            () => {
              console.log('Updated new top score!')
            });

          }

          if(this.state.score <= this.state.topScore) {
            this.setState({
              score: 0,
              headerText: "You guessed wrong!",
              friends
            },

            () => {
              console.log('Reset the game, you did not beat the top score!')
            });
          }

        }
      }
    }

  };

  shuffleArray = array => {
    let i = array.length - 1;
    for(; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
  

      let characterCards = this.state.friends.map((friends) =>
        <PicsCard
          name = {friends.name}
          image = {friends.image}
          key = {friends.id}
          id = {friends.id}
          handleClick = {this.handleClick}
          />
      )

      let shuffleCards = this.shuffleArray(characterCards)

      return (
      <div>
        <Header score={this.state.score} topScore = {this.state.topScore} headerText = {this.state.headerText}/>
          <Wrapper>
            {shuffleCards}
          </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
