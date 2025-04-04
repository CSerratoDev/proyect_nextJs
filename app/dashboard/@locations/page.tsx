import { TOKEN_NAME } from "../../../constants";
import axios from "axios";
import { Locations } from "entities";
import {cookies} from "next/headers";
import SelectLocation from "./_components/SelectLocation";

const LocationsPage = async () => {
    const userCookies = cookies();
    const token = (await userCookies).get(TOKEN_NAME) ?.value;
    const {data} = await axios.get<Locations[]>(
        'http://127.0.0.1:4000/locations', 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }); 
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh]">
        <div className="w-1/2 my-10">
                <SelectLocation locations={data} />
                </div>
            </div>
        </div>
    )
}
export default LocationsPage;