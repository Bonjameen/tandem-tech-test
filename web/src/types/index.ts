// My preferred solution to copying to interface from the api
// is to set up a third project that stores all shared types
// and have that project as a dependency of the api and web
// projects.
export interface BusTime {
  id: number;
  busId: number;
  destination: string;
  minutesUntilArrival: number;
}
