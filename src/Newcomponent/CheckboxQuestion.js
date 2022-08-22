// import React, { useState } from "react";
// import Container from '@mui/material/Container';
// import { Box, Button, Checkbox, Typography, TextField, FormGroup, FormControlLabel } from '@mui/material';

// const CheckboxQuestion = () => {
//     const [text, setText] = useState();

//     const handleTextChange = (event) => {
//         setText(event.target.value);
//     };

//     const [state, setState] = React.useState({
//         mango: true,
//         apple: false,
//         banana: false,
//         orange: false
//     });

//     const handleChange = (event) => {
//         console.log(event.target.name)
//         console.log(event.target.checked)
//         setState({
//             ...state,
//             [event.target.name]: event.target.checked,
//         });
//     };

//     const addAnswer = () => {

//     }

//     const inputField = <TextField label="Outlined" variant="outlined" />

//     const handleClick = () => {

//     }

//     return (
//         <>
//             <Typography variant="h6" component="h3">Type question here</Typography>
//             <TextField
//                 multiline
//                 maxRows={4}
//                 fullWidth
//                 value={text}
//                 onChange={handleTextChange}
//                 variant="outlined"
//             />
//             {inputField}
//             <FormGroup>
//                 {
//                     Object.entries(state).map((item, i) => {
//                         return <FormControlLabel control={<Checkbox key={i} name={item[0]} onChange={(e) => handleChange(e)} checked={item[1]} />} label={item[0]} />
//                     })
//                 }
//             </FormGroup>

//             <Button onClick={addAnswer}>{"+ Add another option"}</Button>

//             <div style={{ width: '100%' }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         p: 1,
//                         m: 1,
//                         bgcolor: 'background.paper',
//                         borderRadius: 1,
//                     }}
//                 >
//                     <Button variant="outlined" size="small" onClick={handleClick}>
//                         {"Submit"}
//                     </Button>
//                 </Box>
//             </div>
//         </>
//     )
// }

// export default CheckboxQuestion