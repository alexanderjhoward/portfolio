import { useEffect, useState } from "react";

export const StarBackgound = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 8000 // Can adjust to increase/decrease particles
        );
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 8 + 2, // Between 1 and 4 pixles in size
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // Between 0.5 and 1 opacity
                animationDuration: Math.random() * 1 + 1, // Between 2 and 6 second animation
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 30 // Can adjust to increase/decrease meteors
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 8 + 2, // Between 1 and 4 pixles in size
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 15, // Between 0.5 and 1 opacity
                animationDuration: Math.random() * 5 + 5, // Between 2 and 6 second animation
            });
        }
        setMeteors(newMeteors);
    };


    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div
                key={star.id}
                className="star animate-pulse-subtle"
                style={{
                    width: star.size +"px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
            />
        ))}
        {meteors.map((meteor) => (
            <div
                key={meteor.id}
                className="meteor animate-meteor"
                style={{
                    width: meteor.size +"px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    delay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }}
            />
        ))}
    </div>
    );
}