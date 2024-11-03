import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography, OutlinedInput, Chip, IconButton, Snackbar, Alert } from '@mui/material';
import { createTask, updateTask } from '../service/task';
import CloseIcon from '@mui/icons-material/Close';

const TaskForm = ({ task, onSuccess, onClose }) => {
  const [name, setName] = useState(task ? task.name : '');
  const [status, setStatus] = useState(task ? task.status : 'Pending');
  const [priority, setPriority] = useState(task ? task.priority : 'Medium');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [tags, setTags] = useState(task ? task.tags : []);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (!name.trim()) {
      setSnackbar({ open: true, message: 'Task name is required', severity: 'error' });
      return;
    }
    if (!dueDate) {
      setSnackbar({ open: true, message: 'Due date is required', severity: 'error' });
      return;
    }
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const selectedDate = new Date(dueDate).setHours(0, 0, 0, 0);
    if (selectedDate < currentDate) {
      setSnackbar({ open: true, message: 'Due date cannot be in the past', severity: 'error' });
      return;
    }
    const taskData = { name, status, priority, dueDate, tags };
    try {
      if (task) {
        await updateTask(task._id, taskData);
      } else {
        await createTask(taskData);
      }
      setSnackbar({ open: true, message: 'Task saved successfully', severity: 'success' });
      onSuccess();
    } catch (error) {
      console.error('Error saving task:', error);
      setSnackbar({ open: true, message: 'Error saving task', severity: 'error' });
    }
  };

  const handleTagsChange = (event) => {
    const {
      target: { value },
    } = event;
    setTags(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        bgcolor: "background.paper",
        maxWidth: 500,
        mx: "auto",
        position: "relative",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "primary.main", fontWeight: "bold" }}
      >
        {task ? "Edit Task" : "New Task"}
      </Typography>
      <TextField
        required
        label="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        sx={{ bgcolor: "background.default", borderRadius: 1 }}
        error={showErrors && !name.trim()}
        helperText={showErrors && !name.trim() ? "Task name is required" : ""}
      />
      <FormControl
        variant="outlined"
        sx={{ m: 1, minWidth: 120, width: "100%" }}
      >
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
          sx={{ bgcolor: "background.default", borderRadius: 1 }}
        >
          <MenuItem value="Not Started">Not Started</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        sx={{ m: 1, minWidth: 120, width: "100%" }}
      >
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          label="Priority"
          sx={{ bgcolor: "background.default", borderRadius: 1 }}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        sx={{
          m: 1,
          width: "100%",
          bgcolor: "background.default",
          borderRadius: 1,
        }}
        error={
          showErrors &&
          (!dueDate || new Date(dueDate) < new Date().setHours(0, 0, 0, 0))
        }
        helperText={
          showErrors &&
          (!dueDate
            ? "Due date is required"
            : new Date(dueDate) < new Date().setHours(0, 0, 0, 0)
            ? "Due date cannot be in the past"
            : "")
        }
      />
      <FormControl
        variant="outlined"
        sx={{ m: 1, minWidth: 120, width: "100%" }}
      >
        <InputLabel>Tags</InputLabel>
        <Select
          multiple
          value={tags}
          onChange={handleTagsChange}
          input={<OutlinedInput label="Tags" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  size="small"
                  sx={{ bgcolor: "secondary.light", color: "text.primary" }}
                />
              ))}
            </Box>
          )}
          sx={{ bgcolor: "background.default", borderRadius: 1 }}
        >
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Urgent">Urgent</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 3, width: "100%" }}
      >
        {task ? "Update Task" : "Create Task"}
      </Button>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TaskForm;
