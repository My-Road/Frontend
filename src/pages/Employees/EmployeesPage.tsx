import React, { useState, useCallback, ChangeEvent } from "react";
import { Box, Container } from "@mui/material";
import SearchBar from "./components/SearchBar";
import AddNewButton from "./components/AddNewButton";
import EmployeeCard from "./components/EmployeeCard";
import Grid from "@mui/material/Grid2";
import { employeesData } from "./components/constants";
import { Employee } from "./components/types";

const EmployeesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [employees, setEmployees] = useState<Employee[]>(employeesData);

  const handleAddNew = useCallback((): void => {
    console.log("Add new employee clicked");
    const newEmployee: Employee = {
      id: `${employees.length + 1}`,
      name: `New Employee ${employees.length + 1}`,
      phoneNumber: "0592756247",
      address: "Awarta",
      idNumber: "000000",
      startDate: "2024-01-01",
      salary: 0,
      email: "new.employee@example.com",
    };
    setEmployees((prev) => [...prev, newEmployee]);
  }, [employees]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", padding: "20px", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="lg">
        {/* Search Bar */}
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mt: 8 }}>
          <SearchBar value={searchTerm} onChange={handleSearch} />
        </Box>

        {/* Add New Button */}
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mt: 8 }}>
          <AddNewButton onClick={handleAddNew} />
        </Box>

        {/* Employee Cards */}
        <Grid container   rowSpacing={8} columnSpacing={8} justifyContent="center" sx={{ mt: 8 }}>
          {filteredEmployees.map((employee) => (
              <EmployeeCard employee={employee} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EmployeesPage;
