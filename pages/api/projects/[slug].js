const { projects } = require('./data.json');

export default (req, res) => {
    const project = projects.filter((project) => project.slug === req.query.slug)

    res.status(200).json(project);
}