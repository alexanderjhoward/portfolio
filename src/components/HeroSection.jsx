import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-3xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hello!</span>
                        <span className="opacity-0 animate-fade-in-delay-2"> My name is</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> Alexander Howard.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a Ph.D. candidate at the University of California, Davis with seven years of experience working on molecular biology and bioinformatics projects. I am driven by my passion for research and am interested in using my skills to improve agriculture through genomics, machine learning, and protein engineering. 
                    </p>

                    <div className="opacity-0 pt-4 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View my work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}