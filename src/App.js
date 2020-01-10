import React, { Component } from "react";
import FriendCard from "./components/picsCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Header>Pics List</Header>
          <Wrapper>
            {this.state.friends.map(friend => (
              <FriendCard
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
              />
            ))}
          </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
