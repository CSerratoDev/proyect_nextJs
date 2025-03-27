import axios from "axios";

const CountPage = async () => {
    const counLocations = await axios.get('http://127.0.0.1:4000/locations');
    return "Hay: " + counLocations?.data?.length + " Locations"; 
}

export default CountPage;