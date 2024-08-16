// import { AppDispatch } from "@/store";
// import { useMutation } from "@tanstack/react-query";
// import { useDispatch } from "react-redux";

// export function loginMutation() {
//     const dispatch = useDispatch<AppDispatch>();
//     return useMutation({
//       mutationFn: (data: LoginParams) => {
//         return postLoginUserAPI(data);
//       },
//       onSuccess({data}) {
//         dispatch(setAuthUser(data.user))
//         Cookies.set("access_token", data.access_token, { expires: 1 });
//         location.replace('/')
//       },
//       onError: (err: AxiosError) => error("username or password is incorrect"),
//     });
//   }
