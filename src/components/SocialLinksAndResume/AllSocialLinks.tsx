import { useAppContext } from "../../contexts/useAppContext";
import SocialLinks from "./SocialLinks";

function AllSocialLinks() {
  const { showOtherSideBar } = useAppContext();
  return (
    <>
      {!showOtherSideBar ? (
        <>
          <SocialLinks />
        </>
      ) : null}
    </>
  );
}

export default AllSocialLinks;
