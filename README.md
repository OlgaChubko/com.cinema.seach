Cinema search REST API

Support request types(GET)
For take all films request address /api/allFilms. 

Support request types(GET/POST)
For add new film, request address /api/addFilm/:filmName/:filmYear/:filmFormat/:actors
Where 
:filmName - is movie title,
:filmYear - is year of film production,
:filmFormat - is movie format,
:actors - is actor name.

Support request types(GET/POST)
For delete film by film id request address /api/deleteFilm/:id
where 
:id - is film id number which you want to delete

Support request types(GET)
For find film by film id request address /api/findFilmById/:id
where 
:id - is film id number which you want to find

Support request types(GET)
For find film by film name request address /api/findFilmById/:filmName
where 
:filmName - is film id number which you want to find

Support request types(GET)
For find film by actor name request address /api/findFilmById/:actorName
where 
:actorName - is film id number which you want to find

Support request types(GET)
For find film by id or actor name or film produce years request address /api/flexibleSearch/:searchParam
where 
:searchParam - is film id or actor name or film produce years which you want to find