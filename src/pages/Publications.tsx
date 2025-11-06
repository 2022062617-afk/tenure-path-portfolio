import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Publications</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Peer-reviewed publications and academic contributions
        </p>

        {/* Journal Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Journal Articles</h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex-1">
                    Title of Your Recent Publication: A Comprehensive Study
                  </h3>
                  <Badge>2024</Badge>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Authors:</span> Your Name, Co-Author 1, Co-Author 2
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Journal:</span> Journal Name, Vol. X, Issue Y, Pages Z-ZZ
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex-1">
                    Another Important Research Paper Title
                  </h3>
                  <Badge>2023</Badge>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Authors:</span> Your Name, Co-Author Name
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Journal:</span> Another Journal Name, Vol. X, Pages Y-Z
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* Conference Papers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Conference Papers</h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex-1">
                    Conference Paper Title: Novel Approaches and Methods
                  </h3>
                  <Badge variant="outline">2024</Badge>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Authors:</span> Your Name, Co-Authors
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Conference:</span> International Conference Name 2024
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Paper <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex-1">
                    Advances in [Your Field]: A New Framework
                  </h3>
                  <Badge variant="outline">2023</Badge>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Authors:</span> Your Name, Collaborators
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Conference:</span> Major Conference 2023
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:underline flex items-center gap-1 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Paper <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* Book Chapters */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Book Chapters</h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex-1">
                    Chapter Title in Edited Volume
                  </h3>
                  <Badge variant="secondary">2023</Badge>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Book:</span> Title of Book (Editors: Names)
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Publisher:</span> Publisher Name
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Working Papers */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Working Papers</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex-1">
                    Upcoming Research Paper Title (Under Review)
                  </h3>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Authors:</span> Your Name, Co-Authors
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Status:</span> Submitted to [Journal Name]
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
