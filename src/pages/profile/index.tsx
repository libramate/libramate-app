import { NextPage } from "next";
import CustomHead from "../../common/components/Head/Head";
import { NavLayout } from "../../common/components/layout/Layout";
import SessionValidator from "../../common/components/SessionValidator/SessionValidator";

const Profile: NextPage = () => {
  return (
    <>
      <SessionValidator />
      <CustomHead title="Profile" />

      <NavLayout>
        <h1>Profile</h1>
      </NavLayout>
    </>
  );
};

export default Profile;
