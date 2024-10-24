import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Movie {
	id: number
	title: string
	original_title: string
	vote_average: number
	description: string
	poster_path: string
	backdrop_path: string
}

interface FavoritesState {
	favorites: Movie[]
}

const initialState: FavoritesState = {
	favorites: [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites: (state, action: PayloadAction<Movie>) => {
			const exists = state.favorites.some(
				movie => movie.id === action.payload.id
			)
			if (!exists) {
				state.favorites.push(action.payload)
			}
		},
		removeFromFavorites: (state, action: PayloadAction<number>) => {
			state.favorites = state.favorites.filter(
				movie => movie.id !== action.payload
			)
		},
	},
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
