import { API_URL, TOKEN_NAME } from "../../../constants";
import axios from "axios";
import { Locations } from "entities";
import {cookies} from "next/headers";
import SelectLocation from "./_components/SelectLocation";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";

const LocationsPage = async ({searchParams}: { 
    searchParams : { [key: string]: string | string[] | undefined };
}) => {
    const userCookies = await cookies();
    const token = (await userCookies).get(TOKEN_NAME) ?.value;
    let {data} = await axios.get<Locations[]>(
        `${API_URL}/locations`, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },
    ); 
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0,0],
            locationAddress: "No existe"
        },
        ... data
    ]
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh]">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={searchParams?.store}/>
                </div>
                <div className="w-8/12">
                   <LocationCard store={searchParams.store}/>
                </div>
                <div className="w-6/12">
                    <FormNewLocation store={searchParams.store}/>
                </div>
                <DeleteLocationButton store={searchParams.store}/>
            </div>
        </div>
    )
}
export default LocationsPage;