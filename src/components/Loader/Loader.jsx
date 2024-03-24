
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      color="#e15b64"
      secondaryColor="#c0efff"
    //   radius="12.5"
      ariaLabel="magnifying-glass-loading"
    wrapperStyle={{}}
    wrapperClass="undefined"
    //   wrapperClass=""
    />
  );
};
export default Loader