## Project Summary

### Backend part 
* Java 17
* Spring Boot 3.3.1
* located in the root folder

### Frontend Part
* React 18
* Primefaces React (https://primereact.org/)
* located in the "filter-crud-react" folder

## Run application

To run application just execute command in root folder:
```
./mvnw spring-boot:run
```

or if you have installed maven:

```
mvn spring-boot:run
```

Another way to run application is build it and run as Java Spring solution (pom.xml)

After application is started navigate to ``127.0.0.1:8080``

React part has already built and located in "src/main/resources" folder.
If for some reason it needs to be rebuild:
- Navigate to "filter-crud-react"
- Run 'npm install'
- Run 'npm run build'
- copy artifacts from "filter-crud-react/build" to "src/main/resources" with a same structure as it copied now

P.S. Better not to change default spring port (8080) - react part by default configured to it.  
