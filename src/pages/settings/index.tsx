import { NextPage } from "next";
import CustomHead from "../../common/components/Head/Head";
import { NavLayout } from "../../common/components/layout/Layout";
import SessionValidator from "../../common/components/SessionValidator/SessionValidator";

const Settings: NextPage = () => {
  return (
    <>
      <SessionValidator />
      <CustomHead title="Settings" />

      <NavLayout>
        <h1>Settings</h1>
      </NavLayout>
    </>
  );
};

export default Settings;
