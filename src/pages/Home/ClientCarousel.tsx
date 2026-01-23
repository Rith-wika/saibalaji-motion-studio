import clientsData from "@/data/clients.json";

interface Client {
    name: string;
    logo: string;
    description: string;
}

const MarqueeRow = ({
    items,
    direction = "left",
    speed = 40,
}: {
    items: Client[];
    direction?: "left" | "right";
    speed?: number;
}) => {
    return (
        <div
            className="relative flex overflow-hidden group select-none"
            style={{
                // @ts-ignore
                "--duration": `${speed}s`,
            }}
        >
            <div
                className={`flex min-w-full shrink-0 items-center gap-16 py-4 group-hover:[animation-play-state:paused] ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
                    }`}
            >
                {items.map((client, idx) => (
                    <div
                        key={`${client.name}-${idx}`}
                        className="w-auto h-16 flex items-center justify-center px-4"
                    >
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="max-w-full max-h-full object-contain transition-all duration-300 transform hover:scale-110 cursor-pointer"
                            title={client.name}
                        />
                    </div>
                ))}
            </div>
            <div
                className={`flex min-w-full shrink-0 items-center gap-16 py-4 group-hover:[animation-play-state:paused] ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
                    }`}
                aria-hidden="true"
            >
                {items.map((client, idx) => (
                    <div
                        key={`${client.name}-duplicate-${idx}`}
                        className="w-auto h-16 flex items-center justify-center px-4"
                    >
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="max-w-full max-h-full object-contain transition-all duration-300 transform hover:scale-110 cursor-pointer"
                            title={client.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const ClientCarousel = () => {
    // Split the clients into two rows for visual interest
    const mid = Math.ceil(clientsData.length / 2);
    const firstRow = clientsData.slice(0, mid);
    const secondRow = clientsData.slice(mid);

    return (
        <section className="py-20 bg-background/50 overflow-hidden border-t">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Valued Clients</h2>
                <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Trusted by leading companies across industries for our excellence in execution.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <MarqueeRow items={firstRow} direction="left" speed={50} />
                <MarqueeRow items={secondRow} direction="right" speed={50} />
            </div>
        </section>
    );
};

export default ClientCarousel;
