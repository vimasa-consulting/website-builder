import { Table } from "flowbite-react";
import projects from '@/mockdata/projects/projects.json';
import Item from "./Item";

export default function List() {
  return (
    <Table hoverable className="xl:w-3/4 mt-8 text-md">
      <Table.Head className="text-xl">
        <Table.HeadCell className="py-5">
          Name
        </Table.HeadCell>
        <Table.HeadCell>
          Domain
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Delete
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {projects.map((project) => <Item key={project._id} project={project} /> )}
      </Table.Body>
    </Table>
  );
}