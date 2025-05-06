import React from 'react'
import {Header} from "../../../components";

const Dashboard = () => {
    const user = { name: 'Ryan Guo'}
    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Welcome ${user?.name?? 'Guest'}`}
                description='Track activity, trends and popular destiantions in real time'
            />
            Dashboard page content
        </main>
    )
}
export default Dashboard
