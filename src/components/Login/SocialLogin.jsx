import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGooglePlusG } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button  onClick={handleGoogleSignIn} className="btn text-2xl btn-success">
                  <FaGooglePlusG/>  
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;