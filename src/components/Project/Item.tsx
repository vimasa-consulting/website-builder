import { ROUTES } from "@/services/NavigationService";
import { Project } from "@/types/project";
import { Table } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Item({ project }: { project: Project }) {

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Link href={`${ROUTES.PROJECTS}/${project._id}`}>
          {project.name}
        </Link>
      </Table.Cell>
      <Table.Cell>
        {project.projectHostingAlias}
      </Table.Cell>
      <Table.Cell>
        {/* TODO: confirm action */}
        <a
          className="font-bold text-lg text-red-600 hover:underline dark:text-cyan-500"
          href="/projects"
        >
          <p>
            x
          </p>
        </a>
      </Table.Cell>
    </Table.Row>
  )
}