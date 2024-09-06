import { errorToast } from "@/helpers/toastifyNotify";
import {
  fetchFail,
  fetchStart,
  successProjects,
} from "./features/projectSlice"; 
import { useDispatch } from "react-redux";

const useProject = () => {
  const dispatch = useDispatch();
  //seckinit mail
  const url = "https://portfolio-backend-ochre-phi.vercel.app/api/projects";

  const getProjects = async () => {
    try {
      dispatch(fetchStart());
      const response = await fetch(url,{ cache: 'force-cache' });
      console.log(response);
      const responsebody = await response.json();
      console.log(responsebody);
      dispatch(successProjects(responsebody));
    } catch (error) {
      errorToast("Get projects is failed!");
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getProjects };
};

export default useProject;
