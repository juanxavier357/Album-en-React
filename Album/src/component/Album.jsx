import React from 'react'
import rozes from '../assets/rozes.png'

import './Album.css'

function Album(props) {

    const {artist, category, song, year} = props;

    return (
        <>
            <div className="album">
                <img className="album__image" src={rozes} alt="Rozes" />
                <div className="album__content">
                    <div className="album__content--title">
                        <h2>{artist}</h2>
                        <p>{category}</p>
                    </div>
                    <div className="album__content--description">
                        <h3>{song}</h3>
                        <h3>({year})</h3>
                    </div>
                    <div className="album__button">
                        <button className='album__button--dance'>dance</button>
                        <a className='album__button--heart'>♡</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Album

