import { Button } from "flowbite-react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
function OAuth() {
  async function handleGoogleClick() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.getCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Button
      type="button"
      outline
      gradientDuoTone="pinkToOrange"
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="mr-2 h-6 w-6" />
      Continue with Google
    </Button>
  );
}

export default OAuth;
