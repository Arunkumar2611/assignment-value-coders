import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Checkbox, Button, Typography, } from '@mui/material';

export default function Input(props) {
    const { checkOption, open, setOpen } = props
    const [input, setInput] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [text, setText] = useState();
    const [isTouched, setTouched] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleTextChange = (event) => {
        setText(event.target.value);
        if(text === "" ) {
            setDisabled(true)
        }
        setDisabled(false);
    };

    const obj = {};
    for (let i = 0; i < input.length; i++) {
        obj[input[i]] = false;
    }

    const handleChange = (e) => {
        if (e.key === 'Enter') {
            setInput(input => [...input, e.target.value])
            setShow(false);
        }
    }

    const handleClick = () => {
        const data = {
            question: text,
            answer: checkOption,
            checkbox: input
        }
        axios.post('http://localhost:5000/form/builder', data)
            .then(res => console.log(res.data));
        setOpen(!open);
        setInput([]);
        setText("");
    }

    const addFormFields = () => {
        setShow(true);
    }

    return (
        <div>
            <Typography variant="h6" component="h3">Type question here</Typography>
            <TextField
                multiline
                maxRows={4}
                fullWidth
                value={text}
                onChange={handleTextChange}
                variant="outlined"
                onBlur={() => setTouched(true)}
            />
            {isTouched && !text && (
                <p style={{ color: "red" }}>Please enter value</p>
            )}
            {
                Object.keys(obj).map((item, i) => (
                    <div>
                        <Checkbox />
                        <span>{item}</span>
                    </div>
                ))
            }
            {
                show && <TextField sx={{ mt: 2, width: "100%" }} fullwidth onKeyDown={handleChange} />
            }
            <div className="button-section">
                <Button onClick={() => addFormFields()}>{"+ Add Answer Option"}</Button>
            </div>
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
                    <Button variant="outlined" size="small" onClick={handleClick} disabled={disabled}>
                        {"Submit"}
                    </Button>
                </Box>
            </div>
        </div>
    );
}
