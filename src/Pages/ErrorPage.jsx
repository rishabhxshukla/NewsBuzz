import "../Styles/ErrorPage.css";
import gif from "../Components/error.gif";

function ErrorPage() 
{
  return (
    <>
        <div className="ErrorContainer">
            <h1 id="heading1">Whoops!</h1>
            <h2 id="heading2">404 page not found..</h2>
            <img src={gif} alt="Error GIF" id="gif" />
        </div>
    </>
  )
}

export default ErrorPage