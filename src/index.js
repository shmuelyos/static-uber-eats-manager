import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css';
import AuthContextProvider from "./contexts/AuthContext";
import OrderContextProvider from "./contexts/OrderContext";
import RestaurantContextProvider from "./contexts/RestaurantContext";
import {Amplify} from "aws-amplify";
import awsconfig from './aws-exports';

// const isLocalhost = Boolean(
//     window.location.hostname === "localhost" ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === "[::1]" ||
//     // 127.0.0.1/8 is considered localhost for IPv4.
//     window.location.hostname.match(
//         /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );
//
// // Assuming you have two redirect URIs, and the first is for localhost and second is for production
// const [
//     localRedirectSignIn,
//     productionRedirectSignIn,
// ] = awsConfig.oauth.redirectSignIn.split(",");
//
// const [
//     localRedirectSignOut,
//     productionRedirectSignOut,
// ] = awsConfig.oauth.redirectSignOut.split(",");
//
// const updatedAwsConfig = {
//     ...awsConfig,
//     oauth: {
//         ...awsConfig.oauth,
//         redirectSignIn: (() => {
//             console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ Attempting to SignIn ~~~~~~~~~~~~~~~~~~~~~ ")
//
//             if (isLocalhost) {
//                 console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ localRedirectSignIn ~~~~~~~~~~~~~~~~~~~~~ :", JSON.stringify(localRedirectSignIn, null, 4))
//                 return localRedirectSignIn
//             } else {
//                 console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ productionRedirectSignIn ~~~~~~~~~~~~~~~~~~~~~ :", JSON.stringify(productionRedirectSignIn, null, 4))
//                 return productionRedirectSignIn
//             }
//         })(),
//         redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
//     }
// }
// console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ updatedAwsConfig ~~~~~~~~~~~~~~~~~~~~~ :", JSON.stringify(updatedAwsConfig,null,4))
//
// Amplify.configure(updatedAwsConfig);


awsconfig.oauth.redirectSignIn = window.location.origin
awsconfig.oauth.redirectSignOut = window.location.origin
// awsconfig.oauth.redirectSignIn = window.location.toString()
// awsconfig.oauth.redirectSignOut = window.location.toString()


console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ awsconfig ~~~~~~~~~~~~~~~~~~~~~ :", JSON.stringify(awsconfig,null,4))

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <RestaurantContextProvider>
                <OrderContextProvider>
                    <App/>
                </OrderContextProvider>
            </RestaurantContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)

