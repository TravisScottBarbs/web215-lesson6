import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://media.wired.com/photos/62a393d78eaf9419b31098a5/master/pass/musk_sec_GettyImages-1395062612.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://helios-i.mashable.com/imagery/articles/01nMMkzf3q2fV1oEtqAOZl8/hero-image.fill.size_1200x900.v1612310509.jpg',
        },
        {
            name: 'Ellen Degeneres',
            url: 'https://www.dagbladet.no/images/72753837.jpg?imageId=72753837&x=0&y=4.654442877292&cropw=100&croph=95.345557122708&width=352&height=243',
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    };
    
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

  return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                <div
                    style={{ backgroundImage: "url(" + person.url + ")" }}
                    className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            ))}
        </div>      
    </div>
  );
}

export default TinderCards;
