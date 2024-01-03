import React from 'react';
import './home.css';
import pic from "../assets/images/pic.jpg";
import dice from "../assets/images/dice.png";

const greetings = [
  "Hello! I am ",
  "你好! 我是",
  "Hola! soy",
  "안녕! 나는야"
];

function randomLanguage() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}


function Home() {

	const [greeting, setGreeting] = React.useState(greetings[0]);

	const handleChangeGreeting = () => {
      const newGreeting = randomLanguage();
      setGreeting(newGreeting);
    };
	return (
		<>
		  <header>
		    <h1>{greeting}<span>Aidan Hsu</span></h1>
		    <img onClick={handleChangeGreeting} className="dice" src={dice} />
		  </header>
		  <p> I am a Senior at Boston College, working towards a B.A. in Computer Science with a minor in biology and math. I am looking to start my career in Software Engineering.</p>
		  <p> I am based in Boston and Las Vegas.</p>
		  <div className="sbsBox">
		  	<img className="picture" src={pic} />
		  	<p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
		  </div>
		</>
	);
}

export default Home;