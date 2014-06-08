
DROP TABLE IF EXISTS account.test2;

CREATE TABLE account.test2
(
  email    character varying(20),
  password character varying(255) NOT NULL,
  id bigserial,

  CONSTRAINT test2_pkey PRIMARY KEY (id)
);

