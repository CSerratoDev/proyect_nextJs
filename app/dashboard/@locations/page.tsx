import { API_URL} from "../../../constants";
import { Locations } from "entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async (props : { searchParams: Promise <{ store?: string | string[]}>}) => {
    const {store} = await props.searchParams;
  
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
          ...(await authHeaders()),
        },
        next: {
          tags: ["dashboard:locations"],
        },
    });
    let data: Locations[] = await response.json();
    data = [
      {
        locationId: 0,
        locationName: "Ninguna",
        locationLatLng: [0, 0],
        locationAddress: "No existe",
      },
      ...data,
    ];
    return (
      <div className="w-7/12">
        <div className="w-full flex flex-col items-center h-[90vh]">
          <div className="w-1/2 my-10">
            <SelectLocation locations={data} store={store} />
          </div>
          <div className="w-8/12">
            <LocationCard store={store} />
          </div>
        </div>
      </div>
    );
};
export default LocationsPage;