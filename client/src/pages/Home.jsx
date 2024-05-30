import React, { useState, useEffect } from 'react'

import { Loader, Card, FormField } from '../components'

const RenderCards = ({data, title}) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />)
    }

    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}
const Home = () =>{
    const [loading, setloading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState('');
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#222328] text-[32px]'>
                    The Community Showcase 
                </h1>
                <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'> Text goes here </p>
            </div>
            <div className='mt-10'>
                <FormField />
            </div>

            <div className='mt-10'>
                {loading ? (
                    <div className='flex justify-center items-center'>
                    <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className='font-medium text-[#666e75]'>
                                Show result from <span className='text-[222328]'>{search}</span>
                            </h2>
                        )}
                        <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                            {searchText ? (
                                <RenderCards data={[]} title='Search Result' />
                                ) : (
                                    <RenderCards data={[]} title="No post found" />
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Home