CREATE SCHEMA `cinema` DEFAULT CHARACTER SET utf8 ;

USE cinema;

create table cinema_archive (
  id int(5) not null auto_increment,
  name varchar(50) not null,
  produce_year int(4) not null,
  video_format varchar(10) not null,
  actors varchar(2000) not null,
  primary key (id)
);


CREATE USER 'test_user'@'*' IDENTIFIED BY 'test_user';

GRANT ALL PRIVILEGES ON cinema.* TO 'test_user'@'*';

FLUSH PRIVILEGES;


INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Blazing Saddles', 1974, 'VHS', 'Mel Brooks, Clevon Little, Harvey Korman,
 Gene Wilder, Slim Pickens, Madeline Kahn');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Casablanca', 1942, 'DVD', 'Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Charade', 1953, 'DVD', 'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Cool Hand Luke', 1967, 'VHS', 'Paul Newman, George Kennedy, Strother Martin');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Butch Cassidy and the Sundance Kid', 1969, 'VHS', 'Paul Newman, Robert Redford, Katherine Ross');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('The Sting', 1973, 'DVD', 'Robert Redford, Paul Newman, Robert Shaw, Charles Durning');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('The Muppet Movie', 1979, 'DVD', 'Jim Henson, Frank Oz, Dave Geolz, Mel Brooks,
 James Coburn, Charles Durning, Austin Pendleton');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Get Shorty ', 1995, 'DVD', 'John Travolta, Danny DeVito, Renne Russo, Gene Hackman, Dennis Farina');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('My Cousin Vinny', 1992, 'DVD', 'Joe Pesci, Marrisa Tomei, Fred Gwynne,
 Austin Pendleton, Lane Smith, Ralph Macchio');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Gladiator', 2000, 'Blu-Ray', 'Russell Crowe, Joaquin Phoenix, Connie Nielson');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Star Wars', 1977, 'Blu-Ray', 'Harrison Ford, Mark Hamill, Carrie Fisher, Alec Guinness, James Earl Jones');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Raiders of the Lost Ark', 1981, 'DVD', 'Harrison Ford, Karen Allen');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Serenity', 2005, 'Blu-Ray', 'Nathan Fillion, Alan Tudyk, Adam Baldwin,
 Ron Glass, Jewel Staite, Gina Torres, Morena Baccarin, Sean Maher, Summer Glau, Chiwetel Ejiofor');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Hooisers', 1986, 'VHS', 'Gene Hackman, Barbara Hershey, Dennis Hopper');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('WarGames', 1983, 'VHS', 'Matthew Broderick, Ally Sheedy, Dabney Coleman,
John Wood, Barry Corbin');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Spaceballs', 1987, 'VHS', 'Bill Pullman, John Candy, Mel Brooks, Rick Moranis, Daphne Zuniga, Joan Rivers');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Young Frankenstein', 1974, 'VHS', 'Gene Wilder, Kenneth Mars, Terri Garr, Gene Hackman, Peter Boyle');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Real Genius', 1985, 'VHS', 'Val Kilmer, Gabe Jarret, Michelle Meyrink, William Atherton');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Top Gun', 1986, 'DVD', 'Tom Cruise, Kelly McGillis, Val Kilmer, Anthony Edwards, Tom Skerritt');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('MASH', 1970, 'DVD', 'Donald Sutherland, Elliot Gould, Tom Skerritt, Sally Kellerman, Robert Duvall');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('The Russians Are Coming, The Russians Are Coming', 1966, 'VHS', 'Carl Reiner,
 Eva Marie Saint, Alan Arkin, Brian Keith');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Jaws', 1975, 'DVD', 'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('2001: A Space Odyssey', 1968, 'DVD', 'Keir Dullea, Gary Lockwood, William Sylvester, Douglas Rain');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Harvey', 1950, 'DVD', 'James Stewart, Josephine Hull, Peggy Dow, Charles Drake');

INSERT INTO cinema_archive (name, produce_year, video_format, actors)
VALUES ('Knocked Up', 2007, 'Blu-Ray', 'Seth Rogen, Katherine Heigl, Paul Rudd, Leslie Mann');




