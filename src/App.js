import React, { useState } from 'react';
import './App.css';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';


function App() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      id: 1,
      name: "The Incredibles",
      image: <img src="https://d23.com/app/uploads/2015/11/1180w-600h_disney-families-the-incredibles.jpg" />
    },
    {
      id: 2,
      name: "Sleeping Beauty",
      image: <img src="https://i.pinimg.com/550x/7f/a3/04/7fa304848dd0669b5230bf43ad898324.jpg" />
    },
    {
      id: 3,
      name: "The Little Mermaid",
      image: <img src="https://cdn.trendhunterstatic.com/thumbs/grodansnagel.jpeg?auto=webp" />
    },
    {
      id: 4,
      name: "La Familia Madrigal",
      image: <img src="https://mamasgeeky.com/wp-content/uploads/2021/09/disney-encanto-characters.jpg.webp" />
    },
    {
      id: 5,
      name: "Mickey Mouse and Friends",
      image: <img src="https://wallpapers.com/images/hd/disney-characters-mickey-mouse-family-lzqqsm549e5xi1iu.jpg" />
    },
    {
      id: 6,
      name: "The Lion King",
      image: <img src="https://images.fandango.com/images/fandangoblog/lionking_EC001.jpg" />
    },
    {
      id: 7,
      name: "Emperor's New Groove",
      image: <img src="https://i.ytimg.com/vi/qFy5DCCMX20/maxresdefault.jpg" />
    },
  ];

  console.log(currentIndex);

  const clickForward = (e) => {
    const indexNumber = currentIndex;
    currentIndex === 6 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    console.log(currentIndex)
  };

  const clickBackward = (e) => {
    const indexNumber = currentIndex;
    currentIndex === 0 ? setCurrentIndex(6) : setCurrentIndex(currentIndex - 1)
    console.log(currentIndex)
  };



  return (
    <div className="App">
      <div className="appWrapper">
        <div className="buttonBack">
          <FaArrowCircleLeft onClick={(e) => clickBackward()} role="button"/>
        </div>
        <div>
          <div className="imageWrapper">
            <div className="imageContainer">
              <div className="image">
                {images[currentIndex].image}
              </div>
            </div>
          </div>
          <p>{images[currentIndex].name}</p>
        </div>
        <div className="buttonForward">
          <FaArrowCircleRight onClick={(e) => clickForward()} role="button"/>
        </div>
      </div>


    </div>
  );
}

export default App;
