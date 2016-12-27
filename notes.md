Angular Project: Those Movie Guys

Devise, only admin. Make it a special route. /user-setup

Home Page - feed of the current posts. Pagination to the next page. Search bar in the corner for movie title or ratings or genre. 

About Page - writes about what those movie guys are. how each post works. contact information for them. 

Genre Page - shows links to all genres

Ratings Page - ranks them all by rating. lets you filter by a certain interval. 

Show Page Rating - has a link to the rotten tomatoes score, imdb page. take imdb api and use al that information to auto populate each show page. lets you edit the rating, review if logged in. 

Create Review  - Form to create review. Need name, rating 1-10 ( decimals) , review or details, imdb link, picture upload
** Just add the IMDB id. write your rating and review. write where you watched it on. 
upload picture from poster and auto populate everything else 



Database:

Devise user - with username

Review:
title:string type:string viewing_platform: string genre:string those_movie_guy_rating:integer imdb_id:string actors:string awards:string: 

type - ( Movie, TV Show), viewing - netflix original, amazon original, abc online those_movie_guy_rating:integer — needs to be decimals. link in rails database??

actors:string awards:string box_office:decimal director:string genre_id:integer language:string picture:string production:string rated:string year:string runtime:string title:string type:string imdb_id:string viewing_platform:string those_movie_guy_rating:decimal those_movie_guys_review:string writer:string imdbRating:decimal imdbVotes:integer tomatoConsensus:string tomatoUser:integer tomatoUserReviews: integer tomatoCritics: integer tomatoURL: string

*genres will show each genre. so I need a genre_id
*has many genres 

Genre:
type:string id:integer