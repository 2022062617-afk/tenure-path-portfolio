import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Research</h1>
        <p className="text-xl text-muted-foreground mb-12">
          My research explores [main research areas] with a focus on [specific interests].
        </p>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Research Interests</h2>
          <Card className="p-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">Machine Learning</Badge>
              <Badge variant="secondary" className="text-sm">Data Science</Badge>
              <Badge variant="secondary" className="text-sm">Artificial Intelligence</Badge>
              <Badge variant="secondary" className="text-sm">Deep Learning</Badge>
              <Badge variant="secondary" className="text-sm">Computer Vision</Badge>
              <Badge variant="secondary" className="text-sm">Natural Language Processing</Badge>
            </div>
          </Card>
        </section>

        {/* Current Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Current Projects</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Project Title One
              </h3>
              <p className="text-muted-foreground mb-4">
                This project investigates [brief description of the project]. The research aims to 
                develop novel approaches to [objective] with applications in [application area].
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>Active</Badge>
                <Badge variant="outline">Funded</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Funding: [Funding Agency] | Duration: [Years]
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Project Title Two
              </h3>
              <p className="text-muted-foreground mb-4">
                This collaborative project focuses on [description]. Working with researchers from 
                [institutions], we are developing [what you're developing].
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge>Active</Badge>
                <Badge variant="outline">Collaborative</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Collaborators: [Names/Institutions] | Duration: [Years]
              </p>
            </Card>
          </div>
        </section>

        {/* Past Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Past Projects</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Completed Project Title
              </h3>
              <p className="text-muted-foreground mb-4">
                This project successfully developed [achievement]. The results were published in 
                [publication details] and have been cited [number] times.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Duration: [Years] | Key Publications: [Number]
              </p>
            </Card>
          </div>
        </section>

        {/* Research Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Research Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Publications</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Citations</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Collaborators</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
