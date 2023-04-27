
const url = "http://localhost:8000";
// const url = "http://localhost:5000";

// const url = "https://node-12jyotirlinga.mobiloitte.io"
// const url = "http://192.168.112.198:8000";

const user = `${url}/api/v1/user`;

const ApiConfig = {
  userSignUp: `${user}/signUp`,
  userLogin: `${user}/login`,
};

export default ApiConfig;
