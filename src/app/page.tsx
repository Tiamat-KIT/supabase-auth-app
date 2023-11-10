"use client";

import useUser from "@/hook/useUser";

export default function Home() {
    const {session,signOut,signIn} = useUser();
    return (
        <>
            {session ? (
            <button onClick={() => signOut()}>サインアウト</button>
        ) : (
            <button onClick={() => signIn()}>ログイン</button>
        )}
        </>
    )
}