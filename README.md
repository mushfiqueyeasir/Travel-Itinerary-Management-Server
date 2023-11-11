# Travel Itinerary Management Application

This project implements a backend system for a Travel Itinerary Management application. Users can perform CRUD operations on travel itineraries, including creating, updating, deleting, and retrieving itinerary details. The system employs Node.js and Express.js for API development, MongoDB for data storage, and JWT-based authentication for user security.

## Features

- **API Development:** The system offers RESTful APIs for managing travel itineraries, including user authentication, itinerary creation, updating, deletion, and retrieval.

- **Database Integration:** MongoDB is used to store user and itinerary data. Proper schemas are designed and relationships between users and itineraries are implemented.

- **Authentication and Security:** JWT-based authentication secures endpoints, preventing unauthorized access.

- **Performance Optimization:** The APIs are optimized for speed and efficiency.

- **Documentation:** The APIs are documented using Postman for easy understanding and usage. Clear setup instructions and guidelines for running the project are provided.

- **CI/CD Pipeline:** Continuous Integration/Continuous Deployment setup for automated testing and deployment.


## Setup Instructions

1. **Cloning the Repository:** 
    ```
    git clone https://github.com/mushfiqueyeasir/Travel-Itinerary-Management-Server.git
    ```

2. **Installation:**

    ```
    cd project_folder
    npm install
    ```

4. **Running the Application:**

    ```
    npm run dev
    ```

## Api End-points
**Base Url** 

[https://travel-itinerary-management-server.vercel.app/](https://travel-itinerary-management-server.vercel.app/)

**User** 
1. *Create user* (POST)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user

    ```

2. *Login* (POST)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user/login
   
    ```
3. *Update User* (PUT)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user/${userId}
   
    ```
4. *Get All User* (GET)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user
   
    ```
5. *Get Specific User* (GET)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user/${userId}
   
    ```
6. *Get User Session Data* (GET)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user/session
   ```

7. *Delete Specific User* (DEL)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/user/${userId}
   ```

**Itinerary** 
1. *Create Itinerary* (POST)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/itinerary

    ```

2. *Update Specific Itinerary* (PUT)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/itinerary/${itineraryId}

    ```
3. *GET ALL Itinerary* (GET)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/itinerary

    ```
4. *Get Specific User All Itinerary* (GET)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/itinerary/user/{$userId}
   
    ```
5. *Get Specific Itinerary* (GET)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/itinerary/${itineraryId}
   
    ```

7. *Delete Specific Itinerary* (DEL)
    ```
   https://travel-itinerary-management-server.vercel.app/api/v1/itinerary/${itineraryId}
   ```

More detail explanation will be in Postman

**Postman Collection:**

[Postman Collection Link](https://www.postman.com/martian-crescent-965487/workspace/travel-itinerary-management-system/overview)

   


