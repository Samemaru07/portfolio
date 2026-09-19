import Hero from "@/components/Hero";
import ConceptTree from "@/components/ConceptTree";
import WorksSection from "@/components/WorksSection";
import ProfileSection from "@/components/ProfileSection";
import EnvironmentSection from "@/components/EnvironmentSection";
import LinksSection from "@/components/LinksSection";
import BackgroundLayer from "@/components/BackgroundLayer";

export default function Home() {
    return (
        <div>
            <BackgroundLayer />
            <div className="space-y-16 relative z-0">
                <section id="hero">
                    <Hero />
                </section>
                <ConceptTree />
                <WorksSection />
                <ProfileSection />
                <EnvironmentSection />
                <LinksSection />
            </div>
        </div>
    );
}
