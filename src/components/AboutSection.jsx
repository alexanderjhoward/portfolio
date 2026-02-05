import { Code, Leaf, TestTube2 } from "lucide-react";

export const AboutSection = ()  => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
                    About <span className="text-primary"> me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <h3 className="text-2xl font-semibold">
                            Passionate molecular and computational biologist
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a dedicated scientist with a strong background in computational biology, genomics, and protein engineering. My research specializes in high-throughput phenotyping, directed evolution, and machine learning-based phenotype prediction.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in touch
                            </a>
                            
                            <a download href="Howard,Alexander_CV.pdf" className="cosmic-button">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Bioinformatics</h4>
                                    <p className="text-muted-foreground">
                                        Strong background in statistics, genomics, transcriptomics, and machine learning techniques.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <TestTube2 className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Molecular Biology</h4>
                                    <p className="text-muted-foreground">
                                        Hands-on expertise in genetic analysis, cloning, protein expression, and protein engineering.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Leaf className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Agricultural research</h4>
                                    <p className="text-muted-foreground">
                                        Conducted genetic and computational research on multiple model crop species to improve stress resilience and productivity.
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
};