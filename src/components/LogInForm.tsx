import UtakataSupabaseClient from "@/type/supabase.d";

async function SupabaseLogIn(formData: FormData) {
    "use server"
    const [email,password] = [formData.get("email"),formData.get("password")]
    UtakataSupabaseClient.auth.signInWithPassword({
        email: email?.toString() as string,
        password: password?.toString() as string
    })
}

export default async function LoginForm() {
    return (
        <>
            <h1 className="text-2xl hero">Supabase LogIn Form</h1>
            <form action={SupabaseLogIn} className="form-control w-full max-w-xs">
                <input type="email" name="email" placeholder="Email-Address Type here" className="input input-bordered w-full max-w-xs"/>
                <input type="password" name="password" placeholder="Password Type here" className="input input-bordered w-full max-w-xs"/>
                <button type="submit" name="submit" className="btn btn-primary">LogIn</button>
            </form>
        </>
    )
}