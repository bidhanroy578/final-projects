import { useContext } from "react";
import { AuthContext } from "../context_api/Auth_context";

const useAuthData = () => {
   return useContext(AuthContext)
};

export default useAuthData;