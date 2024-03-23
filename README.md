# Expense Calculator (in progress)

* [General info](#general-info)
* [Requirement](#requirements)
* [API Docs](#api-docs)
* [Technologies](#technologies)

## General info

- The application was created for personal use at the request of friends. As the app owner, I am an administrator.
- This expense split program can be used to calculate the cost share of each person in the group. For example, when you
  go on a trip with your friends where multiple people pay for shared expenses. At the end of the trip, you would need
  to calculate how much each person owes and to whom.
- Three types of expense sharing:
  - Split Equal
  - Split Unequal - Amt
  - Split Unequal - %

## Requirements

### Admin:

> 1. The admin must be able to log in.
> 2. The admin must be able to approve registered users.
> 3. The admin must be able to view the statistics of expenses.
> 4. The admin must be able to create, delete, update the user.
> 5. The admin can create, edit, delete an event.
> 6. The admin can update or delete expenses.

### Participant:

> 1. The participant must be able to register.
> 2. The participantmust be able to log in.
> 3. The participant can create event.
> 4. Each participant can create expenses.
> 5. The participantcan view all expenses.
> 6. The participantcan view the balance.
> 7. After the deadline, the participant should receive the report by e-mail

## API Docs

> - Swagger UI: http://localhost:8080/swagger-ui/index.html
> - Entity Relationship Diagram:

![loading-ag-249](C:/IT/JAVA/PORTFOLIO/Expense%20Calculator/ER-diagram.png)

| URL template             | Description                                      | Access      |
| ------------------------ | ------------------------------------------------ | ----------- |
| GET /events              | Get a list of events                             | user, admin |
| GET /events/id           | Get event details                                | user, admin |
| POST /events             | Create a new event                               | user, admin |
| PUT /events/id           | Update the event                                 | admin       |
| DELETE /events/id        | Delete the event                                 | admin       |
| GET /expenses/event/{id} | Get a list of expenses associated with the event | user, admin |
| POST /expenses           | Create a new expenses                            | user, admin |

## Technologies

- Java 17
- Spring Boot (v.3.2.3)
- Spring Security (JWT)
- Spring Boot Devtools
- JPA & Hibernate
- Liquibase
- Spring Boot Test
- Maven
- Swagger (v.3)
- Lombok
- MySQL
- Docker
- Git
