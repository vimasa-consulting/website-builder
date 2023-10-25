export default function Page({ params }: { params: { projectID: string } }) {
  return (
    <div className="flex flex-col pb-14">
      View project here: {params.projectID}
    </div>
  );
}