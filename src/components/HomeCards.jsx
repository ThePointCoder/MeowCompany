import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-4 container m-auto'>
        <Card>
            <h1 className='text-xl bold'>For Developers</h1>
            <a className='inline-block mt-2 p-2 bg-slate-400' href="">Browse Jobs</a>
        </Card>
        <Card bg='bg-indigo-100'>
            <h1 className='text-xl bold'>For Employers</h1>
            <a className='inline-block mt-2 p-2 bg-indigo-400' href="">Add Job</a>
        </Card>
    </div>
  )
}

export default HomeCards