
# Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
# Click nbfs://nbhost/SystemFileSystem/Templates/Other/Dockerfile to edit this template

# define base docker image
FROM maven:latest AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17
LABEL maintainer="Mohit Kumar 1004"
WORKDIR /app
EXPOSE 8080
COPY --from=builder /app/target/moviessack-0.0.1-SNAPSHOT.jar springboot-docker-moviessack.jar

ENTRYPOINT ["java","-jar","springboot-docker-moviessack.jar"]

CMD ["/bin/sh"]
