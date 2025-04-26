import { API_URL} from "../../../constants";
import { Locations } from "entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";

const LocationsPage = async ({searchParams}: { searchParams: { store?: string | string[] }}) => {
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
      //<div className="w-7/12">
      //  <div className="w-full flex flex-col items-center h-[90vh]">
      //    <div className="w-1/2 my-10">
      //      <SelectLocation locations={data} store={searchParams.store} />
      //    </div>
      //  <div className="w-6/12">
      //      <FormNewLocation store={searchParams.store} />
      //</div>
            <div className="w-8/12 flex flex-col gap-10 flex-grow-0 items-center justify-center">
              <LocationCard store={searchParams.store} />
              <div className="flex flex-row flex-grow-0 bg-white shadow-medium rounded-md px-10 py-2 gap-2">
                <UpdateLocation store={searchParams.store}>
                  <FormUpdateLocation store={searchParams.store} />
                </UpdateLocation>
                <DeleteLocationButton store={searchParams.store} />
              </div>
            </div>
      //  </div>
      //</div>
    );
};
export default LocationsPage;