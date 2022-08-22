import React, {useState} from 'react';
import axios from 'axios';
import { Box, Button, Typography, TextField } from '@mui/material';

export default function Paragraph(props) {
    const { checkOption, setOpen, open, setOption } = props;
    const [question, setQuestion] = useState("");
    const [isTouched, setTouched] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleTextChange = (event) => {
        event.preventDefault();
        setQuestion(event.target.value);
        if(question === "" ) {
            setDisabled(true)
        }
        setDisabled(false);
    };

    const handleClick = () => {
        
        const data = {
            question: question,
            answer: checkOption,
        }
        axios.post('http://localhost:5000/form/builder', data)
            .then(res => console.log(res.data));
        setOpen(!open);
        setQuestion("");
        setOption("")
        // window.location.reload();
    }

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Type question here
            </Typography>
            <TextField
                multiline
                required
                maxRows={4}
                fullWidth
                value={question}
                onChange={handleTextChange}
                variant="outlined"
                onBlur={() => setTouched(true)}
            />
            {isTouched && !question && (
                <p style={{ color: "red" }}>Please enter value</p>
            )}
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                Add answer here
            </Typography> */}
            {/* <TextField
                multiline
                maxRows={4}
                fullWidth
                value={question}
                onChange={handleTextChange}
                variant="outlined"
            /> */}
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
                    <Button variant="outlined" size="small" onClick={handleClick} disabled={disabled} >
                        {"Submit"}
                    </Button>
                </Box>
            </div>
        </>
    );
}
