export interface City {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
  local_names?: Record<string, string>
}
