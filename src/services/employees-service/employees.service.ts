import { createStore, selectorFactory } from "okos";
import { Employee } from "@ts/employee";
import { employeesData } from "./mock";

interface EmployeesService {
  employees: Employee[];
}

const initialState: EmployeesService = {
  employees: employeesData,
};

export const employeesService = createStore(initialState);

export const useEmployeesSelector = selectorFactory(employeesService.store);
