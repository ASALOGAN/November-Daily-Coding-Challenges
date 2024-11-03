import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Chip, Paper, Tooltip, Typography } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

const TaskList = ({ tasks, onEdit, onDelete }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return 'blue';
      case 'Completed':
        return 'green';
      case 'In Progress':
        return 'yellow';
      case 'Pending':
        return 'red';
      default:
        return 'grey';
    }
  };

  const getTextColor = (bgColor) => {
    switch (bgColor) {
      case 'blue':
        return 'white';
      case 'green':
        return 'white';
      case 'yellow':
        return 'black';
      case 'red':
        return 'white';
      default:
        return 'black';
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        bgcolor: "background.paper",
        boxShadow: 4,
        borderRadius: 3,
        p: 3,
        mt: 4,
      }}
    >
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                #
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Task
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", minWidth: 100 }}
              >
                Status
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Priority
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", minWidth: 65 }}
              >
                Due Date
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Tags
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Edit
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <Typography variant="h6" color="textSecondary">
                    No tasks available
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              tasks.map((task, index) => (
                <TableRow key={task._id} hover>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell sx={{ minWidth: 150 }}>{task.name}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          minWidth: 80,
                          height: 20,
                          borderRadius: '10px',
                          bgcolor: getStatusColor(task.status),
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: getTextColor(getStatusColor(task.status)),
                          mr: 1,
                          px: 1,
                        }}
                      >
                        {task.status}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{task.priority}</TableCell>
                  <TableCell>
                    {new Date(task.dueDate)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      })
                      .replace(/-/g, "/")}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {task.tags &&
                        task.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ bgcolor: "secondary.light" }}
                          />
                        ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit Task">
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        onClick={() => onEdit(task)}
                        sx={{ color: "info.main" }}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Delete Task">
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => onDelete(task._id)}
                        sx={{ color: "error.main" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskList;
