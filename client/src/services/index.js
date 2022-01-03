import axios from "axios";

const fetchUser = async (handle) => {
  try {
    let { data } = await axios.get(`http://localhost:5000/user/api/${handle}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchUserRepo = async (handle, page) => {
  try {
    let dataArr = await axios.get(`http://localhost:5000/user/repo/${handle}`);
    console.log("data---", dataArr.data);
    return dataArr.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchUser, fetchUserRepo };
