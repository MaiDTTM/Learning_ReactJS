import React from 'react';
import PropTypes from 'prop-types';
import AlbumZing from "../AlbumZing";
import './styles.scss';

AlbumZingItems.propTypes = {

};

function AlbumZingItems({album}) {
    return (
        <div className="albumItem">
            <div className="albumItem__item">
                <img src={album.thumbnailUrl} alt={album.name}/>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default AlbumZingItems;
