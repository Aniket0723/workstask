import './Newsletter.css'
function Newsletter() {
    return (
        <div className="mail">
        <h1 className="mailTitle">Stay Updated on all news on Hemp </h1>
        <span className="mailDesc">
          Join our mailing list and get 10% off your next order
        </span>
        <div className="mailInputContainer">
          <input type="mail" placeholder="Enter your email" />
          <button >SIGNUP</button>
        </div>
      </div>        
    );
  }
  
  export default Newsletter;