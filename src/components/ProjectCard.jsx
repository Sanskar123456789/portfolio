const ProjectCard = ({ project, handleModalInfo }) => {

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md h-40 bg-white p-2">
      <img
        onClick={() => handleModalInfo(project)}
        src={project.src}
        style={{width: '-webkit-fill-available'}}
        alt="project card"
        className="rounded-md duration-200 hover:scale-105 cursor-pointer h-full m-auto"
      />
    </div>
  );
};

export default ProjectCard;
