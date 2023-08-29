import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyCx3N6XJWcCy0YyeRBmA_Ooj1-OoBLGIxI",
  authDomain: "fs-checklist.firebaseapp.com",
  projectId: "fs-checklist",
  storageBucket: "fs-checklist.appspot.com",
  messagingSenderId: "491073340230",
  appId: "1:491073340230:web:653cfa301244f1b13bdb47",
  measurementId: "G-D2SFV0NS8W",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

logEvent(analytics, "app_started");

export { app, analytics, perf };
