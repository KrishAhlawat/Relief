'use client'
import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { db } from '../lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 20.5937, // Change to the center of your area
  lng: 78.9629, // Change to the center of your area
}

const Map = () => {
  const [reliefPoints, setReliefPoints] = useState<any[]>([])

  useEffect(() => {
    const fetchReliefPoints = async () => {
      const querySnapshot = await getDocs(collection(db, 'relief_points'))
      const points: any[] = []
      querySnapshot.forEach(doc => {
        points.push(doc.data())
      })
      setReliefPoints(points)
    }

    fetchReliefPoints()
  }, [])

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {reliefPoints.map((point, index) => (
          <Marker
            key={index}
            position={{ lat: point.lat, lng: point.lng }}
            title={point.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
