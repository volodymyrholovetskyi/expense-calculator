--liquibase formatted sql
--changeset vholovetskyi:1

create table event
(
    id            BIGINT       NOT NULL PRIMARY KEY AUTO_INCREMENT,
    uuid          VARCHAR(255) NOT NULL,
    name          VARCHAR(255) NOT NULL,
    description   VARCHAR(255),
    status        VARCHAR(255) NOT NULL,
    currency_code VARCHAR(3)   NOT NULL,
    end_of_event  DATE         NOT NULL,
    create_date   TIMESTAMP    NOT NULL,
    update_date   TIMESTAMP    NOT NULL
);