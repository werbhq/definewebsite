import "./abouthero.css";

function AboutHero() {
  return (
	
    <div className="hero">
    
      <div className="herosectiona">
	  <img
          className="sideimage"
          alt=""
        ></img>
        <h2 className="mainheading">let's define</h2>
        <h2 className="heroheader">
          <span className="youthfulYellowFG">define.</span>
        </h2>
        <br></br>
        <br></br>
        <div className="tagline">
          Define is a 24-hour offline <br />
          hackathon to channelise your <br />
          creative minds and bring out <br />
          solutions for
          <span className="youthfulYellowFG">real-world problems.</span>
        </div>
        <br></br>
        <h3 className="mainheading">
          in short,
          <span className="youthfulYellowFG"> a chance to</span>
        </h3>
        <br></br>
        <ul className="elements">
          <li>Interact and learn</li>
          <li>Play around with multiple domains</li>
          <li>Build solutions that impact</li>
          <li>Gain awesome goodies.</li>
          <li>Have a whole lot of fun</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutHero;
