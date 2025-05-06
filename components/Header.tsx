import React from 'react'
import {cn} from "~/lib/utils";
import {useLocation} from "react-router";
interface Props{
    title: string
    description: string
}
const Header = ({title, description}:Props) => {

    const location = useLocation()
    return (
        <header className='header'>
            <article>
                <h1 className={cn('text-dark-100',
                    location.pathname === '/'? 'text-2xl md:text-4xl font-bold' : 'text-2xl md:text-2xl font-semibold'
                    )}>{title}</h1>
                <p className='header__description'>{description}</p>
            </article>
        </header>
    )
}
export default Header
