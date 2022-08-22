import React, { useEffect, useState } from "react";
import { Box, Button, Container } from '@mui/material';
import axios from "axios";
import BasicModal from "./Modal";
import BoxComponent from "./Box";
import { Link } from 'react-router-dom';


const MainHomePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/form/answer')
            .then(res => {
                // console.log(res.data)
                setData(res.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [data])

    return (
        <>
            {!data.length && <BasicModal />}
            {data && data.length ?
                <Container sx={{ border: "2px solid" }} >
                    {
                        data?.map((item, id) => (
                            <BoxComponent item={item} key={id} />
                        ))
                    }
                    <BasicModal flag={true} />
                    <div style={{ width: '100%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                            }}
                        >
                            <Button component={Link} to="/form/answer" navigate='/form/answer' variant="outlined" size="small">
                                {"Review my answers >"}
                            </Button>
                        </Box>
                    </div>
                </Container> : null
            }
        </>
    );
}

export default MainHomePage