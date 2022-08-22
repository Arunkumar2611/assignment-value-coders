import React, { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import axios from "axios";
import { Link } from 'react-router-dom';


const Review = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/form/answer')
            .then(res => {
                console.log(res.data)
                setData(res.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    const listItems = data?.map(
        (element) => {
            const { paragraph, checkboxAnswer } = element
            return (
                <ul>
                    <h1>{element.question}</h1>
                    {paragraph ? <Typography variant="h6" component="h2">{paragraph}</Typography> : ""}
                    {
                        checkboxAnswer && checkboxAnswer.length ? checkboxAnswer.map(function (item, index) {
                            return (
                                <Typography variant="h6" component="h2">{item}</Typography>
                            )
                        }) : ""
                    }
                </ul>
            )
        }
    )

    return (
        <Container sx={{ border: "2px solid" }} >
            {listItems}

            <div style={{ margin: "20px" }} >
                <Typography component={Link} to="/form/builder" navigate='/form/builder' variant="p">
                    Back to Forms Builder
                </Typography>
            </div>
        </Container>
    )
}

export default Review