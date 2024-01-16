

import Iframe from "react-iframe";
import Container from "./container";

const Video = () => {
    return (
        <Container className="space-y-4">
            <div className="flex flex-col gap-y-4">
                <Iframe
                    url="https://www.youtube.com/embed/gtjxAH8uaP0?si=es--OlAZwwtjLQGZ"
                    id=""
                    className="w-full h-[200px] md:h-[400px] lg:h-[650px] rounded-md"
                    display="block"
                    position="relative"
                />
            </div>
            <div className="bg-green-500 p-2 rounded-sm">
                url: https://www.youtube.com/embed/gtjxAH8uaP0?si=es--OlAZwwtjLQGZ
            </div>
        </Container>
    );
};

export default Video;
