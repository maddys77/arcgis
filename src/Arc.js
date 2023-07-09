import React from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import {useRef,useEffect,useState} from 'react'


const Arc = () => {
    const [maps,setmaps] = useState("topo-vector")
    const mapRef = useRef(null)
    useEffect(() => {
      new MapView({
        container:mapRef.current,
        map: new Map({
            basemap:maps
        }),
        zoom:10,
        center: [-118.24, 34.05]
      })

    }, [maps])
    



  return (
    <>
    <div className='firstdiv' style={{height:"6.2vh",backgroundColor:"#7CB9E8"}}>
    <div class="dropdown">
  <button class="dropbtn">Type of Map</button>
  <div class="dropdown-content">
  <p onClick={()=>setmaps("terrain")}>Terrain</p>
  <p onClick={()=>setmaps("oceans")}>Oceans</p>
  <p onClick={()=>setmaps("osm")}>Street Map</p>
  <p onClick={()=>setmaps("satellite")}>Satellite</p>



  </div>
</div>
    </div>
    <div ref={mapRef} style={{height:800}}></div>
    </>
  )
}

export default Arc