//necessary imports
import { Link } from "react-router-dom";

//displays a message to let the user know the signup was successful. Also provides a link back to the login page.
const Success = () => {
    return(
        <div className="success_message">
            <label>you have successfully signed up... click below to login with your new account</label><br></br>
            <Link to="/">login with account</Link>
        </div>
    )
}

export default Success;
