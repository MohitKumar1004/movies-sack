
# Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
# Click nbfs://nbhost/SystemFileSystem/Templates/Other/Dockerfile to edit this template

# define base docker image
FROM alpine:latest

RUN mvn clean package -DskipTests

FROM openjdk:17
EXPOSE 8080
LABEL maintainer="Mohit Kumar 1004"
ADD target/moviessack-0.0.1-SNAPSHOT.jar springboot-docker-moviessack.jar
ENTRYPOINT ["java","-jar","springboot-docker-moviessack.jar"]

CMD ["/bin/sh"]
