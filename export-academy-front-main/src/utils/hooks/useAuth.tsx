// import { useEffect } from "react";
//  import { authUserQuery } from "@/services/queries";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store";
// import { updateUser } from "@/store/slices/userSlice";

// export function useAuth() {
  
//   const controller = new AbortController();

//   const dispatch = useDispatch<AppDispatch>();
//   const { isLoading, isSuccess, data: user } = authUserQuery();

//   useEffect(() => {
//     if (isSuccess && user) 
//       dispatch(updateUser(user.data));

//     return () => {
//       controller.abort();
//     };
//   }, [user]);

//   return { user, isLoading };
// }