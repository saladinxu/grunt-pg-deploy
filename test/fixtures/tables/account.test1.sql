
DROP TABLE IF EXISTS account.test1;

CREATE TABLE account.test1
(
  id   bigint NOT NULL,
  title     character varying(15) NOT NULL,
  content    character varying(255) NULL,
  time_stamp timestamptz default current_timestamp
);

