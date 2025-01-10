---
title: 'Alpha Breakfast Burrito '
date: '2024-01-27'
updated: '2024-01-27'
categories:
  - 'review'
  - 'plant-based-food'
coverImage: '/images/alpha-wrapper.jpg'
coverWidth: 16
coverHeight: 6
excerpt: My review of the Alpha brand plant based breakfast burrito.
---

<script>
import StarRating from '@ernane/svelte-star-rating';
const config = {
			readOnly: true,
			countStars: 5,
			range: {
				min: 0,
				max: 5,
				step: 0.25
			},
			score: 3.25,
			showScore: true,
			scoreFormat: function () {
				return `(${this.score.toFixed(2)}/${this.countStars})`;
			},
			name: '',
			starConfig: {
				size: 30,
				fillColor: '#F9ED4F',
				strokeColor: '#BB8511',
				unfilledColor: '#FFF',
				strokeUnfilledColor: '#000'
			}
		};
</script>
<div class="rating">
	<h2>Overall Rating - <StarRating {config}></StarRating> </h2>
</div>

<div class="main-container">
<div class="left">
<p>Overall it was enjoyable - I mean its a frozen burrito so my hopes are only so high.</p>
<p>Comparing this to a delicious homemade burrito my beautiful wife would make is certainly not fair - I am no one is winning that matchup. Comparing this to other frozen burrito products I have had in the past (non-vegan) I would say that it is certainly up there. </p>
<p>
	I found the filling to feel like ... well filling. It felt like one big paste that was squirted into the shell. There was no real consistency change between the different ingredients. 
</p>
<p>
	The taste was as expected. A few spices, not spicy, but not bland. If I recall I paid around $3.50 for this, which in my area is not bad for a plant based product. It seems by stamping "Plant Based" on the packaging the price goes up quite a bit for some reason, but thats a post for another day.
</p>
<p>
	All in all, I would say it worth trying out and I might try a few of the other ones they have, but I would not go out of my way to buy this one again. The manufacture <a href="https://www.eatalphafoods.com/" target="_blank">Alpha Foods</a> has several other products worth checking out.
</p>
<p class="note">
<i>
	I am in no way affiliated with the manufacture of this product. The cover image is from the manufactures website and used without asking for specific permission which I though would be okay since I am not talking smack about them. The other photo is mine (should be pretty easy to tell that though...)
	</i>
</p>
</div>
<div class="right">

<table>
<thead>
<tr>
<th>Category</th>
<th>Rating</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mouth Feel</td><td>3.0</td>
</tr>
<tr>
<td>Taste</td><td>3.5</td>
<tr>
<tr>
<td>Ingredients Complexity</td><td>2.5</td>
<tr>
<td>Value</td><td>3.5</td>
<tr>
</tbody>

</table>

<img src="/images/a-burrito.jpg" alt="a burrito" class="post-img">

</div>
</div>
<style>
	.main-container{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5%;
	}
	.rating{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	table{
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20px;
		padding: 10px;
		border: 1px solid var(--darker)
	}
	table tr th{
		text-align: left;
	}
	table tr td{
		padding: 15px;
	}
	.note{
		font-size: small;
		color: grey;
	}
	.post-img{
		width: 400px;
		margin-left: 15%;
		margin-right: auto;
	}
	@media only screen and (max-width: 900px){
    .main-container{
        grid-template-columns: 1fr;
    }
}
</style>
