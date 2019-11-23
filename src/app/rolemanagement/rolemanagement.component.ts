import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import {
  RolemanagementDataSource,
  RolemanagementItem
} from "./rolemanagement-datasource";
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
const COLORS: string[] = ["pink", "red", "orange", "yellow"];
const NAMES: string[] = ["Maia", "Asher", "Olivia", "Atticus"];

@Component({
  selector: "app-rolemanagement",
  templateUrl: "./rolemanagement.component.html",
  styleUrls: ["./rolemanagement.component.css"]
})
export class RolemanagementComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "progress", "color"];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  // @ViewChild(MatTable, { static: false }) table: MatTable<RolemanagementItem>;
  constructor() {
    // Create  users
    const users = Array.from({ length: 5 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    " " +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    ".";

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
