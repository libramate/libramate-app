import { signOut } from "firebase/auth";
import { NextPage } from "next";
import CustomHead from "../../common/components/Head/Head";
import { NavLayout } from "../../common/components/layout/Layout";
import SessionValidator from "../../common/components/SessionValidator/SessionValidator";
import { auth } from "../../firebase/firebase";

const Profile: NextPage = () => (
  <>
    <SessionValidator />
    <CustomHead title="Profile" />

    <NavLayout>
      <h1>Profile</h1>
      <button
        onClick={(): void => {
          void signOut(auth);
        }}
      >
        Sign out
      </button>
    </NavLayout>
  </>
);

export default Profile;
