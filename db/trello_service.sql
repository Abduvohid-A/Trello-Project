sudo - u postgres psql

CREATE DATABASE trello_service;

\c trello_service;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL
);

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    columnId INTEGER NOT NULL,
    FOREIGN KEY (columnId) REFERENCES columns (id) ON DELETE CASCADE ON UPDATE NO ACTION
);

CREATE TABLE columns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_DATE
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    orders INTEGER NOT NULL,
    description VARCHAR(250) NOT NULL,
    userId INT,
    boardId INT,
    columnId INTEGER,
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE SET NULL ON UPDATE NO ACTION,
    FOREIGN KEY (boardId) REFERENCES boards (id) ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (columnId) REFERENCES columns (id) ON DELETE CASCADE ON UPDATE NO ACTION
);

insert into
    users (name, email, password)
values (
        'Daisey',
        'dcandish0@theatlantic.com',
        'lU1xm,_iJrR'
    );

insert into
    users (name, email, password)
values (
        'Georgeanne',
        'gderry1@ihg.com',
        'xE9*bzK.jW~j,'
    );

insert into
    users (name, email, password)
values (
        'Maure',
        'mklageman2@icio.us',
        'lQ8<8eAV?.'
    );

insert into
    users (name, email, password)
values (
        'Fleur',
        'frider3@bloomberg.com',
        'eO6W0&J5i9'
    );

insert into
    users (name, email, password)
values (
        'Dalston',
        'ddeleek4@unesco.org',
        'yQ4IuNn{|n?SQ$2'
    );

insert into
    users (name, email, password)
values (
        'Zsazsa',
        'zmaggorini5@virginia.edu',
        'jQ6h/oj|'
    );

insert into
    users (name, email, password)
values (
        'Karrah',
        'kblincoe6@unicef.org',
        'aG464<F=p1$\/Ph'
    );

insert into
    users (name, email, password)
values (
        'Valaree',
        'vchaudrelle7@sitemeter.com',
        'oZ9@Sfis}'
    );

insert into
    users (name, email, password)
values (
        'Gasparo',
        'gdrowsfield8@cornell.edu',
        'eL9NmJX)`lS'
    );

insert into
    users (name, email, password)
values (
        'Belle',
        'bgioani9@netlog.com',
        'rI6w!PPK,ZjHK'
    );

insert into
    columns (name, created_at)
values ('Lesya', '2024-10-15');

insert into
    columns (name, created_at)
values ('Rhianon', '2024-03-25');

insert into columns (name, created_at) values ('Akim', '2023-08-10');

insert into
    columns (name, created_at)
values ('Adrea', '2023-11-07');

insert into
    columns (name, created_at)
values ('Lynea', '2022-02-25');

insert into boards (title, columnId) values ('It', 3);

insert into boards (title, columnId) values ('Aerified', 5);

insert into boards (title, columnId) values ('Sub-Ex', 2);

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Tin',
        92,
        'Cag University',
        9,
        1,
        5
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Stringtough',
        11,
        'Planwel University',
        2,
        3,
        3
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Sub-Ex',
        57,
        'University of Miami',
        3,
        2,
        1
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Voyatouch',
        50,
        'Daiichi University of Economics',
        9,
        2,
        5
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'It',
        99,
        'Centre National d''Etudes Agronomiques des Régions Chaudes',
        8,
        3,
        4
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Flexidy',
        100,
        'Beijing New Asia University',
        8,
        1,
        3
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Tempsoft',
        22,
        'Hiroshima Women''s University',
        10,
        3,
        2
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Mat Lam Tam',
        77,
        'Tainan National College of the Arts',
        10,
        2,
        5
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Konklab',
        15,
        'Universidad del Centro Educativo Latinoamericano Rosario',
        5,
        3,
        1
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Subin',
        8,
        'Ama International University',
        10,
        2,
        5
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Tres-Zap',
        18,
        'Nizhny Novgorod State University',
        10,
        1,
        3
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Quo Lux',
        1,
        'Institut National des Sciences Appliquées de Rennes',
        4,
        1,
        3
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Bytecard',
        57,
        'Universidad de la Fraternidad de Agrupaciones Santo Tomas de Aquino (FASTA)',
        7,
        3,
        5
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Daltfresh',
        45,
        'University of St. Michael''s College',
        4,
        3,
        2
    );

insert into
    tasks (
        title,
        orders,
        description,
        userId,
        boardId,
        columnId
    )
values (
        'Bytecard',
        59,
        'Universidad Pedagógica Experimental Libertador',
        6,
        1,
        3
    );