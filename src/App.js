import {Image, Layout} from "antd";
import SideMenu from '../src/components/SideMenu';
import {Amplify} from "aws-amplify";
// import awsExports from "./aws-exports";
import {withAuthenticator} from '@aws-amplify/ui-react';
import ProtectedRoutes from "./routes/ProtectedRoutes";

import awsConfig from './aws-exports';

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
    localRedirectSignIn,
    productionRedirectSignIn,
] = awsConfig.oauth.redirectSignIn.split(",");

const [
    localRedirectSignOut,
    productionRedirectSignOut,
] = awsConfig.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
    ...awsConfig,
    oauth: {
        ...awsConfig.oauth,
        redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
        redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    }
}

Amplify.configure(updatedAwsConfig);
// global.subscription = {}

const {Sider, Content, Footer} = Layout;

function App() {

    return (
        <Layout>
            <Sider style={{height: "100vh", backgroundColor: "white"}}>
                <Image
                    src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
                    preview={false}
                />
                <SideMenu/>
            </Sider>
            <Layout>
                <Content>
                    <ProtectedRoutes/>
                    {/*<AppRoutes/>*/}
                </Content>
                <Footer style={{textAlign: "center"}}>
                    Uber Eats Restaurant Dashboard ©2022
                </Footer>
            </Layout>
        </Layout>
    )
}

export default withAuthenticator(App)
