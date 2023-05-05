import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map({geoLocation}) {
  const mapStyles = {
    height: "300px",
    width: "-webkit-fill-available",
    borderRadius: "7px",
    margin :'7px',
    marginBlock : '10px'
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCQofwgsylgwV2hJAiwYpiV1X573RfGOoc">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
       <Marker key={'shafa'} position={defaultCenter}/>
       </GoogleMap>
    </LoadScript>
  );
}

export default Map;
