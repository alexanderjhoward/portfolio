import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Computational Biology
    {name: "R", level: 95, category: "Computational Biology"},
    {name: "Python", level: 85, category: "Computational Biology"},
    {name: "Bash", level: 85, category: "Computational Biology"},
    {name: "Genome assembly/Variant calling", level: 85, category: "Computational Biology"},
    {name: "RNA-seq", level: 90, category: "Computational Biology"},
    {name: "Protein structural modeling/PLMs", level: 85, category: "Computational Biology"},

    // Molecular Biology
    {name: "DNA/RNA/protein purification", level: 85, category: "Molecular Biology"},
    {name: "Cloning", level: 90, category: "Molecular Biology"},
    {name: "Directed evolution", level: 90, category: "Molecular Biology"},
    {name: "Fluorescent microscopy", level: 60, category: "Molecular Biology"},
    {name: "Agroinfiltration", level: 80, category: "Molecular Biology"},
    {name: "Plant pathogen culturing/inoculation", level: 60, category: "Molecular Biology"},

];

const categories = ["All", "Computational Biology", "Molecular Biology"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return (
        <section 
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Keystone <span className="text-primary"> skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}