// export const calcCP = (rho, R, V) => {
//     // rho air density (kg/m^3)
//     // R rotor radius (m)
//     // V wind speed (m/s)
//     var TSR = 6
//     var pitch = 0.1
//     var N = 10;

//     // Constants
//     var pi = Math.PI;
//     var C = 0.45;   // Blade shape factor
//     var a = 1 / 3;    // Induction factor

//     // Variables
//     var r = [];          // Radial position of each blade element (m)
//     var dr = R / N;      // Width of each blade element (m)
//     var phi = [];        // Twist angle of each blade element (radians)
//     var alpha = [];      // Angle of attack of each blade element (radians)
//     var Cl = [];         // Lift coefficient of each blade element
//     var Cd = [];         // Drag coefficient of each blade element
//     var F = [];          // Force on each blade element (N)
//     var CP = 0;          // Power coefficient

//     // Calculate radial positions and twist angles of blade elements
//     for (var i = 0; i < N; i++) {
//         r.push((i + 0.5) * dr);
//         phi.push(Math.atan((1 - a) * (R - r[i]) / (TSR * r[i])));
//     }

//     // Calculate angle of attack, lift and drag coefficients for each blade element
//     for (var i = 0; i < N; i++) {
//         alpha.push(pitch - phi[i]);
//         Cl.push(C * Math.sin(2 * pi * alpha[i]));
//         Cd.push(C * Math.cos(2 * pi * alpha[i]));
//     }

//     // Calculate force on each blade element
//     for (var i = 0; i < N; i++) {
//         F.push(0.5 * rho * pi * dr * r[i] * V * V * (Cl[i] * Math.cos(phi[i]) - Cd[i] * Math.sin(phi[i])));
//     }

//     // Calculate total force and power
//     var Ftot = F.reduce((a, b) => a + b, 0);
//     var P = 0.5 * rho * pi * R * R * V * V * TSR * Ftot;

//     // Calculate power coefficient
//     CP = P / (0.5 * rho * pi * R * R * V * V * V);

//     return CP;
//     // return 0.4
// }

export function calcCP(rho, R, V) {
    return 0.45
  }