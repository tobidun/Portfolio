// react-loader-spinner version 5 has broken types that use multiple 'export default'
// we import ThreeDots as a default export to fix the TS error while keeping runtime functionality
// @ts-ignore
import { ThreeDots } from "react-loader-spinner";

function AppLoader() {
  return (
    <div className="flex flex-col justify-center align-center text-center h-full bg-[#1f1f38]">
      <ThreeDots
        height="100"
        width="100"
        radius="10"
        color="#4db5ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}

export default AppLoader;
