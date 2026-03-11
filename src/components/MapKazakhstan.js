import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapKazakhstan(){

const position=[48.0196,66.9237];

return(

<MapContainer
center={position}
zoom={5}
style={{height:"400px",width:"100%"}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Marker position={[51.1694,71.4491]}>
<Popup>
Astana region
</Popup>
</Marker>

<Marker position={[43.2220,76.8512]}>
<Popup>
Almaty region
</Popup>
</Marker>

</MapContainer>

)

}

export default MapKazakhstan