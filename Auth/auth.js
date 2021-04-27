import { Auth } from 'aws-amplify';



                // sign up
export const signup = async({ username, email, password }) => {
    try {
      const res = await Auth.signUp({
        username,
        email,
        password,
      });
  
      console.log(res);
  
    //   dispatch({
    //     type: 'SIGNUP',
    //     payload: {
    //       user_name: username
    //       email: email,
    //       isSignedup: true,
    //     },
    //   });
    //   dispatch({
    //     type: 'SET_COMPANY_STATE',
    //     payload: {
    //       userId: res.userSub,
    //     },
    //   });
      return res;
    } catch (error) {
      console.log('error signing up:', error);
    }
  };





                // sign in
  export const login = async ({ email, password }) => {
    try {
      const res = await Auth.signIn(email, password);
      const user = await Auth.currentUserInfo();
    //   dispatch({
    //     type: 'LOGIN',
    //     payload: {
    //       userId: user.email,
    //       isLoggedin: true,
    //     },
    //   });
      console.log(user);
  
    //   dispatch(isLoggedIn({ userId: user.email, loggedIn: true }));
    //   dispatch(
    //     setNewCampaign({ userId: user.email, email: user.attributes.email })
    //   );
      return res;
    } catch (error) {
      console.log(error.message);
    //   dispatch({
    //     type: 'LOGIN',
    //     payload: {
    //       loginError: 'There was a problem logging in. Please try again',
    //       isLoggedin: false,
    //     },
    //   });
    }
  };