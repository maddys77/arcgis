import React from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import {useRef,useEffect} from 'react'


const Arc = () => {
    const mapRef = useRef(null)
    useEffect(() => {
      new MapView({
        container:mapRef.current,
        map: new Map({
            basemap:"topo-vector"
        }),
        zoom:10,
        center: [-118.24, 34.05]
      })

    }, [])
    



  return (
    
    <div ref={mapRef} style={{height:"100vh",width:"100%"}}></div>
  )
}

export default Arc