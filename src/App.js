import {Image, Layout} from "antd";
import SideMenu from '../src/components/SideMenu';
import {withAuthenticator} from '@aws-amplify/ui-react';
import ProtectedRoutes from "./routes/ProtectedRoutes";

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
