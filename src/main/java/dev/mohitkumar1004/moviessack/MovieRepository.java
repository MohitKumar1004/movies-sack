/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package dev.mohitkumar1004.moviessack;

import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Mohit Kumar 1004
 */
@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
//    Optional<Movie> findByMovieByImdbId(String imndbId);
}
