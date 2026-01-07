import { registerRootComponent } from "expo";
import RootLayout from "./app/_layout";
import Provider from "./context/provider";

export default function App() {
  return (
    <Provider>
      <RootLayout />
    </Provider>
  );
}
registerRootComponent(App);

// import { ExpoRoot } from 'expo-router';

// // https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// // Must be exported or Fast Refresh won't update the context
// export function App() {
//   const ctx = require.context('./app');
//   return <ExpoRoot context={ctx} />;
// }
