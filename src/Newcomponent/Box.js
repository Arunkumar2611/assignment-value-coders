import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Typography, Checkbox, Button } from '@mui/material';

export default function BoxComponent(props) {
    const obj = {};
    const { item: { answer, checkbox, paragraph, question, _id } } = props;
    const [text, setText] = useState();
    const [checked, setChecked] = useState(obj);
    const [isTouched, setTouched] = useState(false);

    for (let i = 0; i < checkbox.length; i++) {
        obj[checkbox[i]] = false;
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleChange = (event) => {
        setChecked(prev => ({ ...prev, [event.target.name]: event.target.checked }));
    };

    const handleSubmit = () => {
        let filtered = Object.keys(checked).filter(function (key) {
            return checked[key];
        });
        const data = {
            checkboxAnswer: filtered,
            paragraph: text
        }
        axios.patch(`http://localhost:5000/form/${_id}`, data)
            .then(res => console.log(res.data));
    }

    const element =
        Object.keys(obj).map((item, i) => (
            <div key={i}>
                <Checkbox name={item} checked={checked[item]} onChange={handleChange} />
                <span>{item}</span>
            </div>
        ))

    return (
        <Box sx={{ p: 3, m: 5 }}>
            <Typography sx={{ mb: 3 }} variant="h5">{question+" *"}</Typography>
            {
                answer === "paragraph" ? (
                    <>
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
                    </>
                ) : element
            }
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
                    <Button variant="outlined" size="small" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Box>
            </div>
        </Box>
    );
}
