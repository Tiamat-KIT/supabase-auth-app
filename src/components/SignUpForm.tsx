import UtakataSupabaseClient from "@/type/supabase.d";
async function SupabaseSignUp(formData: FormData) {
    "use server"
    const email = formData.get("email");
    const password = formData.get("password");
    UtakataSupabaseClient.auth.signUp({
        email: email?.toString() as string,
        password: password?.toString() as string
    })
}

export default async function SignUpForm() {
    return (
        <>
            <h1 className="text-2xl hero">Supabase SignUp Form</h1>
            <form action={SupabaseSignUp} className="form-control w-full max-w-xs">
                <input type="email" name="email" placeholder="Email-Address Type here" className="input input-bordered w-full max-w-xs"/>
                <input type="password" name="password" placeholder="Password Type here" className="input input-bordered w-full max-w-xs"/>
                <button type="submit" name="submit" className="btn btn-primary">SignUp</button>
            </form>
        </>
        
    )
    
}