import axios from "axios";

const fetchData = async () => {
    const { data } = await axios.get("https://dogapi.dog/api/v2/breeds");
    return data;
};
function fetchDataNotAsync() {
    const { data } = axios.get("https://restcountries.com/v3.1/name/iraq");
    return data[0][0];
};

console.log(await fetchData());
// console.log(fetchDataNotAsync());
