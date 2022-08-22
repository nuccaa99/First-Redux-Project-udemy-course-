import { combineReducers } from "redux"


const songsReducer = () => {
    return (
        {
            titile: 'No Scrubs',
            duration: '4:05'
        },
        {
            titile: 'bla',
            duration: '4:50'
        },
        {
            titile: 'Nadsdubs',
            duration: '2:05'
        },
        {
            titile: 'No',
            duration: '1:78'
        }
    )
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}