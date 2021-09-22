import React , {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import {fetchPost} from './redux/posts/ActionPost'

export const PostsContainer = () => {

	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts)
	useEffect(()=>{
		dispatch(fetchPost())
	},[])
	return posts.loading ? (
			<p>loading...</p>
		): posts.error ? (
			<p>{posts.error}</p>

		):(
			<div>
				<h1>List is here! posts ....</h1>
			<div>{posts && posts.posts && posts.posts.map(item=>
				<div>{item.title}</div>)}
				</div>
			</div>

		)
	
}
