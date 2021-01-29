import React from 'react';
import PropTypes from 'prop-types';
import AlbumZing from "./components/AlbumZing";

AlbumList.propTypes = {

};

function AlbumList(props) {
    const albumList =[
        {
            id : 1,
            name : "Đỉnh cao Zing MP3",
            thumbnailUrl : "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/7/2/b/172b1a00ca9bced80b679c96a228e4b4.jpg",
        },
        {
            id : 2,
            name : "Nhạc Việt nghe nhiều 2021",
            thumbnailUrl : "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/8/7/7/48777810a5a68c5ffa2d95aa369f7a06.jpg",
        },
        {
            id : 3,
            name : "Những bài hát hay nhất của Rekii",
            thumbnailUrl : "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/7/0/9/670912c897aeff115225ac2f1b8810a4.jpg",
        },
        {
            id : 4,
            name : "V-Pop : 100 Híts Thập Niên",
            thumbnailUrl : "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/3/7/9/4379222f9fda9f57f9917a8be45b5a97.jpg",
        },
        {
            id : 5,
            name : "Thay lời muốn nói : Thói quen",
            thumbnailUrl : "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/2/0/9/4209684c04f48fae6d482d9743c1fa66.jpg",
        }
    ]
    return (
        <div>
            <h2> CÓ THỂ BẠN SẼ THÍCH</h2>
            <AlbumZing albumList={albumList}/>
        </div>
    );
}

export default AlbumList;
