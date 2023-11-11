import UtakataSupabaseClient from "@/type/supabase.d";
async function SupabaseSignUp(formData: FormData) {
    "use server"
    const email = formData.get("email");
    const password = formData.get("password");
    /* const user = (await UtakataSupabaseClient.auth.getUser()).data.user */
    
    await UtakataSupabaseClient.auth.signUp({
        email: email?.toString() as string,
        password: password?.toString() as string,
        options:{
            emailRedirectTo: "http://localhost:3000"
        }
    }).then(({data,error}) => {
        if(error){
            console.error(error)
            return;
        }
        if(data.user?.identities?.length == 0){
            console.error("既に登録済みのメールアドレスです")
        }
    })
}

export default async function SignUpForm() {

    return (
        <>
            <h1 className="text-2xl hero">Supabase SignUp Form</h1>
            <form action={SupabaseSignUp} className="form-control w-full">
                <input type="email" name="email" placeholder="Email-Address Type here" className="input input-bordered w-full"/>
                <input type="password" name="password" placeholder="Password Type here" className="input input-bordered w-full"/>
                <button type="submit" name="submit" className="btn btn-primary">SignUp</button>
            </form>
        </>
        
    )
    
}