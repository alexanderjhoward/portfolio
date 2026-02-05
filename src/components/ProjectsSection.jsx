import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Directed evolution of plant immune receptors",
        description: "I've used protein engineering techniques to engineer a plant immune receptor with broader pathogen recognition properties.",
        image:"/projects/pik1_de_project.png",
        tags:["Yeast Surface Display", "FACS", "Directed Evolution", "Protein Engineering"],
        URL: "https://www.biorxiv.org/content/10.1101/2024.09.30.614878v2",
    },
    {
        id: 2,
        title: "Genotype-to-phenotype mapping with AI",
        description: "I've trained large AI models with custom data to predict the recognition properties of immune receptors found in plant genomes.",
        image:"/projects/pik1_g2p_project.png",
        tags:["PLMs", "Genotype-to-Phenotype Analysis", "Gene Discovery", "Machine Learning"],
        URL: "https://www.biorxiv.org/content/10.1101/2025.01.27.635131v1",
    },
        {
        id: 3,
        title: "Genomic analysis of plant pathogens",
        description: "I've analyzed plant pathogen genomes to explore strain diversity and its implications for improving disease resistance in plants.",
        image:"/projects/max_search_project.png",
        tags:["Sequence Homology Searches", "Population Genomics", "Pathogen Evolution"],
        URL: "https://github.com/alexanderjhoward/RonaldLab/tree/master/MAXsearch",
    },
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> projects</span>
                </h2>

                <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Below is a selection of recent projects that showcase my skills in molecular biology, machine learning, and bioinformatics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.URL}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
