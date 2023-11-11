import Container from "@/components/Container";
import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LogInForm";
import Tab from "@/components/Tab";
import { TabItem } from "@/components/Tab";
import AuthForm from '../components/supabase/auth-form'
import UtakataSupabaseClient from "../type/supabase.d";
import LogOutForm from "@/components/LogOutForm";


export default async function Home() {

    const {data: {user}} = await UtakataSupabaseClient.auth.getUser()

    const tabItem: TabItem[] = [
        {tabName: "SignUp",tabContent: <SignUpForm />},
        {tabName: "LogIn",tabContent: <LoginForm />}
    ]
    return (
        <>  
            {user == null ? 
            <Container>
                <Tab Props={tabItem}/>
            </Container>
             : (<><p>ログインしています</p> <LogOutForm /></>)}
            {/* <div className="row">
                <div className="col-6">
                    <h1 className="header">Supabase Auth + Storage</h1>
                    <p className="">
                    Experience our Auth and Storage through a simple profile management example. Create a user
                    profile and upload an avatar image. Fast, simple, secure.
                    </p>
                </div>
                <div className="col-6 auth-widget">
                    <AuthForm />
                </div>
            </div> */}
        </>
        
    )
}