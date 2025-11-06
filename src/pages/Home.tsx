import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, GraduationCap, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Dr. K. Vidyavathi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professor | Electronics & Communication Engineering
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Advancing knowledge in Image Processing, Signal Processing, and IoT through innovative research and inspiring the next generation of engineers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about">
                <Button size="lg" className="font-semibold">
                  Learn More About Me
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link to="/research">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Research</h3>
                <p className="text-muted-foreground">
                  Explore my current and past research projects
                </p>
              </Card>
            </Link>

            <Link to="/publications">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Publications</h3>
                <p className="text-muted-foreground">
                  Browse my published papers and articles
                </p>
              </Card>
            </Link>

            <Link to="/teaching">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Teaching</h3>
                <p className="text-muted-foreground">
                  View my courses and teaching philosophy
                </p>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <Mail className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Contact</h3>
                <p className="text-muted-foreground">
                  Reach out for collaboration opportunities
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Recent Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Latest Publication</h3>
              <p className="text-muted-foreground mb-4">
                "Real time risk monitoring system for Oil and gas Industry Using AI and IOT" - Indica Journal, 2025
              </p>
              <Link to="/publications">
                <Button variant="link" className="p-0">Read more →</Button>
              </Link>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Recent Patent</h3>
              <p className="text-muted-foreground mb-4">
                "Advancing Breast Cancer Detection with Machine Learning" - Published August 2024
              </p>
              <Link to="/research">
                <Button variant="link" className="p-0">Learn more →</Button>
              </Link>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">New Book</h3>
              <p className="text-muted-foreground mb-4">
                "Ethics and Social Implications of AI" - Published March 2025
              </p>
              <Link to="/publications">
                <Button variant="link" className="p-0">View details →</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
