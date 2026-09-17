import Hero from "@/components/Hero";
import ConceptTree from "@/components/ConceptTree";
import WorksSection from "@/components/WorksSection";

export default function Home() {
    return (
        <div className="space-y-16">
            <Hero />
            <ConceptTree />
            <WorksSection />
        </div>
    );
}
