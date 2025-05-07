import React from 'react'
import {Header, StatsCard, TripCard} from "../../../components";

const Dashboard = () => {
    const user = { name: 'Ryan Guo'}
    const dashboardStats = {
        totalUsers: 12450,
        usersJoined:{ currentMonthCount: 218, lastMonthCount: 176},
        totalTrips: 3210,
        tripsCreated:{ currentMonthCount: 218, lastMonthCount: 376},
        userRole: { total: 62, currentMonthCount: 25, lastMonthCount: 15},
    }

    const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats

    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Welcome ${user?.name?? 'Guest'}`}
                description='Track activity, trends and popular destiantions in real time'
            />
            <section className='flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <StatsCard
                        headerTitle = 'Total Trips'
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonthCount}
                        lastMonthCount={tripsCreated.lastMonthCount}
                    />
                    <StatsCard
                        headerTitle='Total Users'
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonthCount}
                        lastMonthCount={usersJoined.lastMonthCount}
                    />
                    <StatsCard
                        headerTitle='Active Users'
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonthCount}
                        lastMonthCount={userRole.lastMonthCount}
                    />
                    <TripCard />


                </div>
            </section>
        </main>
    )
}
export default Dashboard
