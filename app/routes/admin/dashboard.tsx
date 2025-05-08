import React from 'react'
import {Header, StatsCard, TripCard} from "../../../components";
import { dashboardStats, allTrips, users } from '../../constants';
const user = { name: 'Ryan Guo'}
const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats

const Dashboard = () => {

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

                </div>
            </section>

            {/*TripCard render*/}
            <section className='container'>
                <h1 className='text-xl font-semibold text-dark-100'>Created Trips</h1>
                <div className='trip-grid'>
                    {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice} ) => (
                        <TripCard
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrls={imageUrls[0]}
                            location={itinerary?.[0]?.location??''}
                            tags={tags}
                            price={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Dashboard
