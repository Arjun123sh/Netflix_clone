import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,value)=>{
            state.popularMovies=value.payload
        },
        addTrendingMovies:(state,value)=>{
            state.trendingMovies=value.payload;
        },
        addUpcomingMovies:(state,value)=>{
            state.upcomingMovies=value.payload
        }
    },
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies}=moviesSlice.actions
export default moviesSlice.reducer;