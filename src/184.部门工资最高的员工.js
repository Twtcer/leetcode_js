select  d.Name as Department,e.Name as Employee , e.Salary  from Employee e left join Department d on e.DepartmentId = d.Id