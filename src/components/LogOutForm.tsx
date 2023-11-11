import UtakataSupabaseClient from "@/type/supabase.d";

export default async function LogOutForm() {
    return (
        <button className="btn btn-primary" onClick={async () => await UtakataSupabaseClient.auth.signOut()}>LogOut</button>
    )
}