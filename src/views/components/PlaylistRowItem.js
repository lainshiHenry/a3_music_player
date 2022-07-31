import React, { useState } from 'react'

const PlaylistItem = ({ imageString, characterName, isSelected = false }) => {


    return (
        <div aria-label='Playlist Item' className=' w-[150px] h-[150px] border-black border-b-4 bg-gray-400 float-left'>
            {isSelected ? <img src={imageString} alt={characterName} className='m-2 h-[130px] w-[130px] border-4 scale-110' /> : <img src={imageString} alt={characterName} className='m-2 h-[130px] w-[130px]' />}

        </div >
    )
}

export default PlaylistItem