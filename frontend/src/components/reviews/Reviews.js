import React, { useEffect, useRef } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId

    useEffect(() => {
        getMovieData(movieId)
    },[])

    const addReview = async(e) => {
        e.preventDefault()
        const rev = revText.current
        try {
            const response = await api.post("/api/v1/reviews",{
                reviewBody: rev.value,
                imdbId: movieId
            })
            console.log(movie)
            const updatedReviews = [...reviews, {body: rev.value}]
            rev.value = ""
            setReviews(updatedReviews)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <br />
                    <h3>Reviews</h3>
                    <br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((review) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{review.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews