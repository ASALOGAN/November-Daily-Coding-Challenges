import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  Typography,
} from "@mui/material";

const TaskFilter = ({ onFilterChange }) => {
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState([]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    onFilterChange({ status: event.target.value, priority, tags });
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
    onFilterChange({ status, priority: event.target.value, tags });
  };

  const handleTagsChange = (event) => {
    const {
      target: { value },
    } = event;
    setTags(typeof value === "string" ? value.split(",") : value);
    onFilterChange({
      status,
      priority,
      tags: typeof value === "string" ? value.split(",") : value,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: 3,
        bgcolor: "background.default",
        borderRadius: 2,
        boxShadow: 3,
        mr: 2,
        mt: 4,
        height: 280,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          color: "primary.main",
          fontWeight: "bold",
          fontFamily: "Arial",
        }}
      >
        Filter Tasks
      </Typography>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={handleStatusChange}
          label="Status"
          sx={{ bgcolor: "background.paper", borderRadius: 1 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Not Started">Not Started</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={handlePriorityChange}
          label="Priority"
          sx={{ bgcolor: "background.paper", borderRadius: 1 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
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
          sx={{ bgcolor: "background.paper", borderRadius: 1 }}
        >
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Urgent">Urgent</MenuItem>
          <MenuItem value="Optional">Optional</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaskFilter;
