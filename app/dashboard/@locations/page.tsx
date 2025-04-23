import { API_URL} from "../../../constants";
import { Locations } from "entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";

const LocationsPage = async ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) => {
    const store = searchParams?.store;
  
    const response = await fetch(
      `${API_URL}/locations`, 
      {
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
          <div className="w-6/12">
            <FormNewLocation store={store} />
          </div>
          <div className="flex flex-col flex-grow-0 gap-10 items-center">
            <DeleteLocationButton store={store} />
            <UpdateLocation store={store}>
              <>
                <FormUpdateLocation store={store} />
              </>
            </UpdateLocation>
          </div>
        </div>
      </div>
    );
};
  

export default LocationsPage;