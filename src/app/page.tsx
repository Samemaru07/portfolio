import Hero from "@/components/Hero";
import ConceptTree from "@/components/ConceptTree";
import WorksSection from "@/components/WorksSection";
import ProfileSection from "@/components/ProfileSection";
import EnvironmentSection from "@/components/EnvironmentSection";
import LinksSection from "@/components/LinksSection";

export default function Home() {
    return (
        <div className="space-y-16">
            <Hero />
            <ConceptTree />
            <WorksSection />
            <ProfileSection />
            <EnvironmentSection />
            <LinksSection />
        </div>
    );
}
