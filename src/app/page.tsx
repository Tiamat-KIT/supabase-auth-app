import Container from "@/components/Container";
import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LogInForm";
import Tab from "@/components/Tab";
import { TabItem } from "@/components/Tab";

export default function Home() {
    const tabItem: TabItem[] = [
        {tabName: "SignUp",tabContent: <SignUpForm />},
        {tabName: "LogIn",tabContent: <LoginForm />}
    ]
    return (
        <>  
        
            <Container>
                <Tab Props={tabItem}/>
            </Container>
        </>
        
    )
}