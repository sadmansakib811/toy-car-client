import { Link, useRouteError } from "react-router-dom";
import img from './assets/404-drib23.gif'
 function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center flex flex-col items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="items-center text-center justify-center">
        <img  src={img} alt="" />

      </div>
     
   <Link to='./'> <button className="btn btn-secondary"> Go To Home Page</button></Link> 
    </div>
  );
}

export default ErrorPage