"use client"

import React, { useEffect } from "react"

export interface TabItem {
    tabName: string
    tabContent: React.ReactNode
}

function ReactTabSelectToggle(event: React.MouseEvent<HTMLLIElement, MouseEvent>,length: number){
    const tabBarSelects = document.querySelectorAll(".tab")
    tabBarSelects.forEach((item,idx) => {item.classList.remove("tab-active")})
    const content = document.getElementById(`tab-content${event.currentTarget.id.slice(3)}`)
    // タブの非アクティブ化
    content!.hidden = false
    for(let i = 0; i < length; i++){
        document.getElementById(`tab-content${i}`)!.hidden = true
    }

    // タブのアクティブ化
    const tab = document.getElementById(event.currentTarget.id)
    tab?.classList.add("tab-active")
    document.getElementById(`tab-content${event.currentTarget.id.slice(3)}`)!.hidden = false
}

/**
 * @param Props TabItem[]型のProps
 * @returns TabItem[]型のPropsを受け取り、Tabを生成する
 */
export default function Tab({Props}:{Props?: TabItem[]}) {
    useEffect(() => {
        window.addEventListener("load", () => {
            const tabs = document.querySelectorAll(".tab")
            tabs[0].classList.add("tab-active")
            /* const Contents = Props?.map((_,i) => {return  document.getElementById(`.tab-content${i}`)})
            Contents!.forEach((item,idx) => {item!.hidden = true}) */
            document.getElementById("tab-content0")!.hidden = false
        },false)
    }, [])

    
    if(Props == undefined || Props.length == 0){
        return <p>TabItem is undefined</p>
    }else {
        return(
            <>
                <ul className="tabs">
                    {Props.map((item,i) => {
                            return( 
                                <li 
                                    className="tab tab-lg tab-bordered" 
                                    key={i} 
                                    id={`tab${i}`} 
                                    onClick={(event) => {ReactTabSelectToggle(event,Props.length)}}>                                        
                                    {item.tabName}
                                </li>
                            )
                        })
                    }
                </ul>
                {Props.map((item,i) => {
                    return(
                        <div className="tab-content" key={i} id={`tab-content${i}`}/* id={`tab-content${i}`} */ hidden>
                            {item.tabContent}
                        </div>
                    )
                })}
            </>
        )
    }
}