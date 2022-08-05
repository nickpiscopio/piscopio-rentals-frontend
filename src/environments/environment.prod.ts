export const environment = {
  production: true,
  // Create a reverse proxy for this to work in synology:
  // https://www.mihaiblaga.dev/synology-built-in-reverse-proxy
  // domain: "https://www.keatslanerentals.com",
  domain: "https://192-168-1-249.redhoneybadger.direct.quickconnect.to:3030",
  bookNow: "https://evolve.com/vacation-rentals/469273",
  directions: "https://www.google.com/maps/place/153+Keats+Ln,+Albrightsville,+PA+18210",
  vehicleThreshold: 4,
  propertyManager: {
    name: "Dottie Grefe",
    phoneNumber: "(484) 661-7106",
    email: "dorothygrefe@gmail.com"
  },
  propertyOwner: {
    name: "Sarah",
    phoneNumber: "(267) 580-9279",
    email: "KeatsLaneRental@gmail.com"
  }
};
