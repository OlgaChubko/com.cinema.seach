**<h2>Node JS Dependencies</h2>**

_express_<br>
_cookie-parser_<br>
_body-parser_<br>
_mysql_<br>
_nconf_<br>


**<h2>Cinema search REST API</h2>**

<h3>REST API methods</h3>

**/api/allFilms<br>
/api/addFilm/:filmName/:filmYear/:filmFormat/:actors<br>
/api/deleteFilm/:id<br>
/api/findFilmById/:id<br>
/api/findFilmByFilmName/:filmName<br>
/api/findFilmByActorName/:actorName<br>
/api/flexibleSearch/:searchParam**

Support request types(GET)<br>
For take all films request address /api/allFilms.<br> 

Support request types(GET/POST)<br>
For add new film, request address */api/addFilm/:filmName/:filmYear/:filmFormat/:actors*<br>
where<br>
:filmName - is movie title,<br>
:filmYear - is year of film production,<br>
:filmFormat - is movie format,<br>
:actors - is actor name.<br>

Support request types(GET/POST)<br>
For delete film by film id request address _/api/deleteFilm/:id_<br>
where :id - is film id number which you want to delete<br>

Support request types(GET)<br>
For find film by film id request address _/api/findFilmById/:id_<br>
where<br>
:id - is film id number which you want to find<br>

Support request types(GET)<br>
For find film by film name request address _/api/findFilmByFilmName/:filmName_<br>
where<br> 
:filmName - is film id number which you want to find<br>

Support request types(GET)<br>
For find film by actor name request address _/api/findFilmByActorName/:actorName_<br>
where<br> 
:actorName - is film id number which you want to find<br>

Support request types(GET)<br>
For find film by id or actor name or film produce years request address _/api/flexibleSearch/:searchParam_<br>
where<br> 
:searchParam - is film id or actor name or film produce years which you want to find<br>

**<h2>Settings</h2>**

All project settings save in _config_properties.json_ file in resources folder.