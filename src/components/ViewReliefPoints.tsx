'use client'
import { useEffect, useState } from 'react'

// Mock function to fetch relief points
async function fetchReliefPoints() {
  return [
    { id: '1', data: () => ({ name: 'Point A', type: 'Type 1', location: { latitude: 12.34, longitude: 56.78 } }) },
    { id: '2', data: () => ({ name: 'Point B', type: 'Type 2', location: { _lat: 34.56, _long: 78.90 } }) },
  ]
}

interface ReliefPoint {
  id: string
  name: string
  type: string
  location: { latitude: number; longitude: number } | { _lat: number; _long: number } | { lat: number; lng: number }
}

export default function ReliefPointList() {
  const [points, setPoints] = useState<ReliefPoint[]>([])

  useEffect(() => {
    fetchReliefPoints().then(docs => {
      const pts = docs.map(d => ({ id: d.id, ...d.data() }))
      setPoints(pts)
    })
  }, [])

  const formatLocation = (loc: { latitude: number; longitude: number } | { _lat: number; _long: number } | { lat: number; lng: number }) => {
    // Firestore GeoPoint
    if ('latitude' in loc && 'longitude' in loc) {
      return `${loc.latitude.toFixed(4)}, ${loc.longitude.toFixed(4)}`
    }
    // internal Firestore fields
    if ('_lat' in loc && '_long' in loc) {
      return `${loc._lat.toFixed(4)}, ${loc._long.toFixed(4)}`
    }
    // plain object { lat, lng }
    if ('lat' in loc && 'lng' in loc) {
      return `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`
    }
    // fallback
    return JSON.stringify(loc)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
      {points.map(p => (
      <div key={p.id} className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{p.name}</h3>
        <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Type:</span> {p.type}
        </p>
        <p className="text-sm text-gray-600">
        <span className="font-medium">Location:</span> {formatLocation(p.location)}
        </p>
      </div>
      ))}
    </div>
  )
}
