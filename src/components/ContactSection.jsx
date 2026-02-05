import { Linkedin, Mail, Github} from "lucide-react";
import {cn} from "@/lib/utils";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    Let's <span className="text-primary">connect.</span>
                </h2>

                <p className="text-center text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, collaborations, and opportunities, so don't hesitate to reach out and chat with me!
                </p>

                <div className="flex space-x-4 justify-center">
                                
                    <a href="mailto:ajhow@ucdavis.edu">
                        <Mail className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"/>
                    </a>
                                
                    <a href="https://www.linkedin.com/in/alexander-j-howard" target="_blank">
                        <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"/>  
                    </a>

                    <a href="https://www.github.com/alexanderjhoward" target="_blank">
                        <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"/>  
                    </a>

                </div>
            </div>
        </section>
    )
}