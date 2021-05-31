export default function getUser() {
  if (window.gapi === undefined || window.gapi.auth2 === undefined) {
    return null;
  }

  const authInstance = window.gapi.auth2.getAuthInstance();
  const isSignedIn = authInstance.isSignedIn.get();

  if (isSignedIn === false) {
    return null;
  }

  const isAdmin = (userEmail) => {
    return process.env.REACT_APP_ADMIN_EMAILS.split(',').includes(userEmail);
  }

  const profile = authInstance.currentUser.get().getBasicProfile();
  const user = {
    "ID": profile.getId(),
    "fullName": profile.getName(),
    "givenName": profile.getGivenName(),
    "familyName": profile.getFamilyName(),
    "imageUrl": profile.getImageUrl(),
    "email": profile.getEmail(),
    signOut: authInstance.signOut,
    "Admin": isAdmin(profile.getEmail()),
    "Membership": profile.getEmail().split("@")[1] == "ucsb.edu"
  };

  return user;
}