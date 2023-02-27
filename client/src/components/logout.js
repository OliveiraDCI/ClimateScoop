import { GoogleLogout } from "react-google-login";

const clientId = clientId;

function logout() {
  const onSuccess = () => {
    console.log("Log out successfull.");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default logout;
