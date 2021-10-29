import React from "react";
import { Employee } from "@components";
import { useEmployeesSelector } from "@services";

export const EmployeesContainer: React.FC = () => {
  const employees = useEmployeesSelector((state) => state.employees);

  const employeesComponents = React.useMemo(
    () =>
      employees.map((employee) => (
        <Employee
          key={employee.id}
          name={employee.name}
          imageUrl={employee.image.url}
          description={employee.description}
        />
      )),
    [employees]
  );

  return <>{employeesComponents}</>;
};
