import React from 'react';
import PropTypes from 'prop-types';
import AlbumZingItems from "../AlbumZingItems";
import './styles.scss';

AlbumZing.propTypes = {
    albumList : PropTypes.array,
};
AlbumZing.defaultProps ={
    albumList:[],
}

function AlbumZing({albumList}) {
    return (
            <ul className="album-list">
                {albumList.map(album => (
                    <li key ={album.id}>
                        <AlbumZingItems album = {album}/>
                    </li>
                ))}
            </ul>
    );
}

export default AlbumZing;
