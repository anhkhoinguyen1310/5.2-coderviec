import React, {useState, useEffect} from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"; 
export default function Homepage() {
    const [jobs, setJobs] = useState ([])
    useEffect (() => {
        async function fetchJobs()
        {
            const resp = await fetch ('http://localhost:3001/jobs')
            const json = await resp.json()
            console.log ({json})
            setJobs(json)
        }
        fetchJobs()
    }, []);
    //map(() => {}) to map(() => ())
    return (   
        <Container>
            <h1>Home Page</h1>
            {jobs.map(j => {
                return (
                    <Card className = "mb-3" >
                    <Card.Body>
                      <Card.Title>{j.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>{j.description}</Card.Text>
                      <Card.Link  as= {Link} to = {"/job/" + j.id}>More details</Card.Link>
                    </Card.Body>
                  </Card> 
                );
            })}
        </Container>
    ) 
}
