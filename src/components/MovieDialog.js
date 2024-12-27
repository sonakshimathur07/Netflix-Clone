import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../utils/moviesSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
    const { open, id } = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setOpen(false));
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="movie-dialog-title"
            aria-describedby="movie-dialog-description"
        >
            <DialogContent>
                {/* Pass movie ID to VideoBackground */}
                <VideoBackground movieId={id} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
