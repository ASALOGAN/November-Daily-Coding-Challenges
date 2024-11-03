import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import { Button, Box, Typography, Modal } from "@mui/material";
import { getTasks, deleteTask } from "../service/task";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    refreshTasks();
  }, []);

  const handleEdit = (task) => {
    setCurrentTask(task);
    setOpen(true);
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      console.log('Task deleted successfully');
      refreshTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSuccess = () => {
    console.log("Task operation successful");
    setOpen(false); // Close the modal on success
    setCurrentTask(null); // Reset current task
    refreshTasks(); // Refresh the task list
  };

  const handleFilterChange = async (filters) => {
    try {
      const filteredTasks = await getTasks(filters);
      setTasks(filteredTasks);
      console.log("Filters applied:", filters);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const handleOpen = () => {
    setCurrentTask(null); // Reset current task for new task creation
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentTask(null); // Reset current task
  };

  const refreshTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error refreshing tasks:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200, // Increased width
          mb: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
              mb: 2,
            }}
          >
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add Task
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
              <TaskFilter onFilterChange={handleFilterChange} />
              <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <TaskForm task={currentTask} onSuccess={handleSuccess} onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
