"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AppointmentsTable() {
  return (
    <div className="my-4">
      <Table>
        <TableCaption>List of your Appointments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date and Time</TableHead>
            <TableHead>Suspected Disease</TableHead>
            <TableHead>Doctor/Physician</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              May 2023 <span className="sm:hidden">|</span> 8:20 PM
            </TableCell>
            <TableCell>Bad Throat</TableCell>
            <TableCell>James Cate</TableCell>
            <TableCell
              onClick={() => {
                console.log("cancelled");
              }}
            >
              <Button className="bg-red-600 text-white text-center font-semibold cursor-pointer">
                Cancel
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
