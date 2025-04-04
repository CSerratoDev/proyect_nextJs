import { TOKEN_NAME } from "../../../constants";
import axios from "axios";
import {cookies} from "next/headers";

const CountPage = async () => {
    const userCookies = cookies()
    const token = (await userCookies).get(TOKEN_NAME) ?.value
    console.log(token)
    const countLocations = await axios.get('http://127.0.0.1:4000/locations', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    let count = countLocations?.data?.length;
    return <div className="w-2/12">{`Hay : ${count} location${count > 1 ? 's' : ''}`}</div>
}
export default CountPage;