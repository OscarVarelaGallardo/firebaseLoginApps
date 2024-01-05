
import { FacebookProvider, LoginButton } from 'react-facebook';
import './App.css'

function App() {

  function handleSuccess(response:any) {
    if (response.status === 'connected') {
        //logout
         window.FB.logout(function(response:any) {
          // user is now logged out
          console.log(response);
        }
      );
      return;
    }
    console.log(response);
  }

  function handleError(error:any) {
    console.log(error);
  }
  return (
    <>
      <div>
        <FacebookProvider appId="772585208219547">
          <LoginButton
            scope="email"
            onError={handleError}
            onSuccess={handleSuccess}
          >
            Login via Facebook
          </LoginButton>
        </FacebookProvider>
      </div>
    </>
  )
}

export default App
