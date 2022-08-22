import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OptionMenu from './OptionMenu';
import { Link } from '@mui/material';
import Paragraph from './ParagraphQuestion';
import Input from './input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOption("");
    // window.location.reload();
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      {!props.flag && <Button sx={{ m: 3 }} variant='contained' color='primary' onClick={handleOpen}>Add Questions</Button>}
      {props.flag &&
        <Link sx={{ p: 5, fontSize: 20 }} component="button" underline="always" onClick={handleOpen} >
          Add New Question
        </Link>
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New Questions
          </Typography>

          <OptionMenu option={option} handleOptionChange={handleOptionChange} />
          {
            option === "paragraph" && (
              <Paragraph checkOption={option} setOpen={setOpen} open={open} setOption={setOption} />
            )
          }
          {
            option === "checkbox" && (
              <Input checkOption={option} setOpen={setOpen} open={open} />
            )
          }
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;