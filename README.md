**Node JS Dependencies**

_express
cookie-parser
body-parser
mysql
nconf_



**Cinema search REST API**

REST API METHODS

**/api/allFilms
/api/addFilm/:filmName/:filmYear/:filmFormat/:actors
/api/deleteFilm/:id
/api/findFilmById/:id
/api/findFilmByFilmName/:filmName
/api/findFilmByActorName/:actorName
/api/flexibleSearch/:searchParam**

Support request types(GET)
For take all films request address /api/allFilms. 

Support request types(GET/POST)
For add new film, request address */api/addFilm/:filmName/:filmYear/:filmFormat/:actor*s
where 
:filmName - is movie title,
:filmYear - is year of film production,
:filmFormat - is movie format,
:actors - is actor name.

Support request types(GET/POST)
For delete film by film id request address _/api/deleteFilm/:id_
where :id - is film id number which you want to delete

Support request types(GET)
For find film by film id request address _/api/findFilmById/:id_
where 
:id - is film id number which you want to find

Support request types(GET)
For find film by film name request address _/api/findFilmByFilmName/:filmName_
where 
:filmName - is film id number which you want to find

Support request types(GET)
For find film by actor name request address _/api/findFilmByActorName/:actorName_
where 
:actorName - is film id number which you want to find

Support request types(GET)
For find film by id or actor name or film produce years request address _/api/flexibleSearch/:searchParam_
where 
:searchParam - is film id or actor name or film produce years which you want to find

**Settings**

All project settings save in _config_properties.json_ file in resources folder.