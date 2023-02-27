import { GoogleLogin } from "react-google-login";

const clientId = clientId;

function login() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED... res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="login / register"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default login;
