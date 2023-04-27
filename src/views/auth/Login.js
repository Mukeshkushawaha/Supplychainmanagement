import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  Link,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import Axios from "axios";
import ApiConfig from "src/config/ApiConfig";
import { AuthContext } from "src/context/Auth";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainLoginContainer: {
    background: "rgba(255, 255, 255, 0.025)",
    padding: "50px 20px 20px",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& h1": {
      fontWeight: "100",
      fontSize: "32px",
    },
  },
  formBox: {
    "& svg": {
      fontSize: "16px",
      color: "#555352",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#BB2C2C !important",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#BB2C2C !important",
      padding: "0px",
    },
    "& p": {
      color: "#fff !important",
      paddingBottom: "8px",
    },
  },
  BaseBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "25px 0px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& p": {
      color: "#FFFFFF99",
    },
    "& span": {
      color: "#FF564D",
      fontWeight: "500",
    },
    "& a": {
      color: "#FF564D",
      fontWeight: "500",
    },
  },
}));
export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const auth = useContext(AuthContext);
  const [checkData, setCheckData] = useState("");
  const [open2, setOpen2] = React.useState(false);
  const [googleData, setGoogleData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [google, setGoogle] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const handleClose1 = () => {
    setOpen2(false);
  };
  const VerifyGoogleHandle = async (value) => {
    setIsSubmit(true);
    if (googleData !== "") {
      setIsLoading1(true);

      try {
        const res = await Axios({
          method: "POST",
          url: ApiConfig.verifygoogleauth,
          headers: {
            authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
          },
          data: {
            otp: googleData,
          },
        });
        if (res.data.status === 200) {
          window.sessionStorage.setItem("token", res.data.data);
          if (window.sessionStorage.getItem("token")) {
            auth.getProfileHandler();
          }
          toast.success(res.data.message);
          history.push("/dashboard");
          setIsLoading1(false);
        } else if (res.data.status === 205) {
          toast.warn(res.data.message);
          setIsLoading1(false);

          setGoogle(res.data.message);
        } else {
          toast.warn(res.data.message);
          setIsLoading1(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading1(false);
      }
    } else {
      toast.warn("Please enter your valid otp");
    }
  };

  const loginSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await Axios.post(ApiConfig.login, {
        email: values.email,
        password: values.password,
      });
      if (res.data.status === 200) {
        window.sessionStorage.setItem("token", res.data.data.token);
        window.localStorage.setItem("tokenname", res.data.data.token);
        // start
        if (window.sessionStorage.getItem("token")) {
          auth.getProfileHandler();
          auth.checkLogin();
        }
        setCheckData(res.data.data.TwoFa);
        if (res.data.data.TwoFa === "GOOGLE") {
          // SendGoogleOtpHandle();
          setOpen2(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          auth.setIsLogin(true);
          auth.checkLogin();
          auth.getProfileHandler(res.data.data.token);
          history.push("/dashboard");
          toast.success("Login successfully");
        }
        //end
      } else {
        console.log("not logined");
        setIsLoading(false);
        toast.warn(res.data.message);
      }
    } catch (error) {
      console.log("ERROR", error);
      setIsLoading(false);
      // toast.error(error.response.data.message);
      if (error.res) {
        toast.error("Email or Password not Correct");
      } else {
        toast.error("Invalid Credentials");
      }
    }
  };

  return (
    <Box>
      <Box className={classes.mainLoginContainer}>
        <Box>
          <Typography variant="h1">Sign-In</Typography>
          <Box py={3}>
            <Typography variant="body1" style={{ color: "#FFFFFF99" }}>
              Access to Fierex ICO Dashboard using your Email and Password
            </Typography>
          </Box>
         
                <Box className={classes.formBox}>
                  <Box>
                    <Typography variant="body1">Email</Typography>
                    <TextField
                      placeholder="Enter your email"
                      variant="outlined"
                      name="email"
                      type="email"
                      fullWidth
                      
                    />
                    
                  </Box>
                  <Box pt={2}>
                    <Typography variant="body1">Password</Typography>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter you password"
                      variant="outlined"
                      fullWidth
                     
                     />
                   
                  </Box>
                </Box>
                <Box className={classes.BaseBox}>
                  <Typography
                    variant="body1"
                    
                onClick={()=>history.push("/forgotpassword")}

                    style={{ fontWeight: "500", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Typography>
                  <Typography variant="body1">
                    New on platform?&nbsp;
                    <span
                onClick={()=>history.push("/register")}

                      style={{ cursor: "pointer" }}
                    >
                      Sign Up
                    </span>
                  </Typography>
                </Box>
                <Button
                onClick={()=>history.push("/dashboard")}
                  variant="contained"
                  color="secondary"
                  size="large"
                 
                >
                  Login
                </Button>
                <Box className={classes.BaseBox}>
                  <Typography variant="body1">
                    By clicking you are confirming to agree.
                    <Link
                      style={{ cursor: "pointer" }}
                      href="/termscondition"
                      target="_blank"
                    >
                      {" "}
                      Term & Conditions
                    </Link>
                  </Typography>
                </Box>
            
        </Box>
      </Box>

      
    </Box>
  );
}

// import {
//   Box,
//   Button,
//   FormHelperText,
//   IconButton,
//   makeStyles,
//   TextField,
//   Typography,
//   Link,
//   Dialog,
//   DialogContent,
// } from "@material-ui/core";
// import React, { useState, useContext, useEffect } from "react";
// import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
// import { Form, Formik } from "formik";
// import * as yup from "yup";

// import { useHistory } from "react-router-dom";
// import { toast } from "react-toastify";
// import ButtonCircularProgress from "src/component/ButtonCircularProgress";
// import Axios from "axios";
// import ApiConfig from "src/config/ApiConfig";
// import { AuthContext } from "src/context/Auth";
// import { Link as RouterLink } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   mainLoginContainer: {
//     background: "rgba(255, 255, 255, 0.025)",
//     padding: "50px 20px 20px",
//     borderRadius: "15px",
//     [theme.breakpoints.down("xs")]: {
//       padding: "10px",
//     },
//     "& h1": {
//       fontWeight: "100",
//       fontSize: "32px",
//     },
//   },
//   formBox: {
//     "& svg": {
//       fontSize: "16px",
//       color: "#555352",
//     },
//     "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#BB2C2C !important",
//     },
//     "& .MuiFormHelperText-root.Mui-error": {
//       color: "#BB2C2C !important",
//       padding: "0px",
//     },
//     "& p": {
//       color: "#fff !important",
//       paddingBottom: "8px",
//     },
//   },
//   BaseBox: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     margin: "25px 0px",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//     "& p": {
//       color: "#FFFFFF99",
//     },
//     "& span": {
//       color: "#FF564D",
//       fontWeight: "500",
//     },
//     "& a": {
//       color: "#FF564D",
//       fontWeight: "500",
//     },
//   },
// }));
// export default function Login() {
//   const classes = useStyles();
//   const history = useHistory();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoading1, setIsLoading1] = useState(false);
//   const auth = useContext(AuthContext);
//   const [checkData, setCheckData] = useState("");
//   const [open2, setOpen2] = React.useState(false);
//   const [googleData, setGoogleData] = useState();
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [google, setGoogle] = useState("");
//   const [secretKey, setSecretKey] = useState("");
//   const handleClose1 = () => {
//     setOpen2(false);
//   };
//   const VerifyGoogleHandle = async (value) => {
//     setIsSubmit(true);
//     if (googleData !== "") {
//       setIsLoading1(true);

//       try {
//         const res = await Axios({
//           method: "POST",
//           url: ApiConfig.verifygoogleauth,
//           headers: {
//             authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
//           },
//           data: {
//             otp: googleData,
//           },
//         });
//         if (res.data.status === 200) {
//           window.sessionStorage.setItem("token", res.data.data);
//           if (window.sessionStorage.getItem("token")) {
//             auth.getProfileHandler();
//           }
//           toast.success(res.data.message);
//           history.push("/dashboard");
//           setIsLoading1(false);
//         } else if (res.data.status === 205) {
//           toast.warn(res.data.message);
//           setIsLoading1(false);

//           setGoogle(res.data.message);
//         } else {
//           toast.warn(res.data.message);
//           setIsLoading1(false);
//         }
//       } catch (err) {
//         console.log(err);
//         setIsLoading1(false);
//       }
//     } else {
//       toast.warn("Please enter your valid otp");
//     }
//   };

//   const loginSubmit = async (values) => {
//     setIsLoading(true);
//     try {
//       // const res = await Axios.post(ApiConfig.userLogin, {
//       //   email: values.email,
//       //   password: values.password,
//       // });
//       const res = await Axios({
//         method:"POST",
//         url:ApiConfig.userLogin,
//         data:{
//         email: values.email,
//         password: values.password,
//         }
//       })
//       console.log("res",res)
//     } catch (error) {
//       console.log("ERROR", error);
//       setIsLoading(false);
//     }
//   };
//   const formInitialSchema = {
//     email: "",
//     password: "",
//   };
//   const formValidationSchema = yup.object().shape({
//     email: yup
//       .string()
//       .email("You have entered an invalid email address. Please try again")

//       .required("Email address is required")
//       .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
//     password: yup.string().required("Please enter your password"),
//   });
//   return (
//     <Box>
//       <Box className={classes.mainLoginContainer}>
//         <Box>
//           <Typography variant="h1">Sign-In</Typography>
//           <Box py={3}>
//             <Typography variant="body1" style={{ color: "#FFFFFF99" }}>
//               Access to Fierex ICO Dashboard using your Email and Password
//             </Typography>
//           </Box>
//           <Formik
//             initialValues={formInitialSchema}
//             validationSchema={formValidationSchema}
//             onSubmit={(values) => loginSubmit(values)}
//           >
//             {({
//               errors,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//               touched,
//               values,
//               setFieldValue,
//             }) => (
//               <Form>
//                 <Box className={classes.formBox}>
//                   <Box>
//                     <Typography variant="body1">Email</Typography>
//                     <TextField
//                       placeholder="Enter your email"
//                       variant="outlined"
//                       name="email"
//                       type="email"
//                       fullWidth
//                       value={values.email}
//                       error={Boolean(touched.email && errors.email)}
//                       onBlur={handleBlur}
//                       onChange={handleChange}
//                     />
//                     <FormHelperText error>
//                       {touched.email && errors.email}
//                     </FormHelperText>
//                   </Box>
//                   <Box pt={2}>
//                     <Typography variant="body1">Password</Typography>
//                     <TextField
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Enter you password"
//                       variant="outlined"
//                       fullWidth
//                       value={values.password}
//                       error={Boolean(touched.password && errors.password)}
//                       onBlur={handleBlur}
//                       onChange={handleChange}
//                       InputProps={{
//                         endAdornment: (
//                           <IconButton
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? (
//                               <BsEyeFill />
//                             ) : (
//                               <BsFillEyeSlashFill />
//                             )}
//                           </IconButton>
//                         ),
//                       }}
//                     />
//                     <FormHelperText error>
//                       {touched.password && errors.password}
//                     </FormHelperText>
//                   </Box>
//                 </Box>
//                 <Box className={classes.BaseBox}>
//                   <Typography
//                     variant="body1"
//                     style={{ fontWeight: "500", cursor: "pointer" }}
//                     onClick={() => history.push("/forgotpassword")}
//                   >
//                     Forgot Password?
//                   </Typography>
//                   <Typography variant="body1">
//                     New on platform?&nbsp;
//                     <span
//                       style={{ cursor: "pointer" }}
//                       onClick={() => history.push("/register")}
//                     >
//                       Sign Up
//                     </span>
//                   </Typography>
//                 </Box>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="secondary"
//                   size="large"
//                   disabled={isLoading}
//                   // onClick={() => history.push("/dashboard")}
//                 >
//                   Login
//                   {isLoading && <ButtonCircularProgress />}
//                 </Button>
//                 <Box className={classes.BaseBox}>
//                   <Typography variant="body1">
//                     By clicking you are confirming to agree.
//                     <Link
//                       style={{ cursor: "pointer" }}
//                       href="/termscondition"
//                       target="_blank"
//                     >
//                       {" "}
//                       Term & Conditions
//                     </Link>
//                   </Typography>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </Box>

   
//     </Box>
//   );
// }

