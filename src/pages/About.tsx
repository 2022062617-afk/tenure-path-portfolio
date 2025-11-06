import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Building } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">About Me</h1>

        {/* Profile Section */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Photo</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Dr. [Your Name]</h2>
              <p className="text-muted-foreground mb-4">
                I am an Assistant Professor at [University Name], specializing in [Your Field]. 
                My research focuses on [Research Areas], and I am passionate about advancing knowledge 
                through innovative approaches and interdisciplinary collaboration.
              </p>
              <p className="text-muted-foreground">
                With a commitment to excellence in both research and teaching, I strive to inspire 
                students and contribute meaningful insights to the academic community.
              </p>
            </div>
          </div>
        </Card>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Ph.D. in [Field]</h3>
              <p className="text-muted-foreground">[University Name] | [Year]</p>
              <p className="text-muted-foreground mt-2">
                Dissertation: "[Your Dissertation Title]"
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">M.S. in [Field]</h3>
              <p className="text-muted-foreground">[University Name] | [Year]</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">B.S. in [Field]</h3>
              <p className="text-muted-foreground">[University Name] | [Year]</p>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground">
            <Building className="h-6 w-6 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Assistant Professor</h3>
              <p className="text-muted-foreground">[University Name] | [Year - Present]</p>
              <p className="text-muted-foreground mt-2">
                Teaching undergraduate and graduate courses in [subjects]. Conducting research in [areas].
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Postdoctoral Researcher</h3>
              <p className="text-muted-foreground">[Institution] | [Year - Year]</p>
              <p className="text-muted-foreground mt-2">
                Conducted research on [topic] and published multiple peer-reviewed articles.
              </p>
            </Card>
          </div>
        </section>

        {/* Awards & Honors */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground">
            <Award className="h-6 w-6 text-primary" />
            Awards & Honors
          </h2>
          <Card className="p-6">
            <ul className="space-y-3 text-muted-foreground">
              <li>• Excellence in Teaching Award, [Year]</li>
              <li>• Research Grant, [Funding Agency], [Year]</li>
              <li>• Best Paper Award, [Conference Name], [Year]</li>
              <li>• Outstanding Graduate Student Award, [Year]</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
