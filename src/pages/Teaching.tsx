import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Teaching = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Teaching</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Committed to inspiring students and fostering critical thinking
        </p>

        {/* Teaching Philosophy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Teaching Philosophy</h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-4">
              My teaching philosophy centers on creating an engaging, inclusive learning environment 
              where students feel empowered to explore complex ideas and develop critical thinking skills. 
              I believe in:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Active learning through hands-on projects and real-world applications</li>
              <li>• Fostering curiosity and independent thinking</li>
              <li>• Providing personalized feedback and mentorship</li>
              <li>• Encouraging collaborative learning and peer interaction</li>
              <li>• Integrating current research into coursework</li>
            </ul>
          </Card>
        </section>

        {/* Current Courses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Current Courses</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Course Title 101
                  </h3>
                  <p className="text-muted-foreground">Undergraduate Level | Fall 2024</p>
                </div>
                <Badge>Active</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Introduction to [subject area]. This course covers fundamental concepts including 
                [topics]. Students will develop skills in [skills] through lectures, labs, and projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Lecture</Badge>
                <Badge variant="outline">Lab</Badge>
                <Badge variant="outline">Projects</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Advanced Course 501
                  </h3>
                  <p className="text-muted-foreground">Graduate Level | Fall 2024</p>
                </div>
                <Badge>Active</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced topics in [field]. This seminar-style course explores cutting-edge research 
                and methodologies. Students engage in discussions, presentations, and research projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Seminar</Badge>
                <Badge variant="outline">Research</Badge>
                <Badge variant="outline">Presentations</Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Past Courses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Past Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Previous Course Title
              </h3>
              <p className="text-muted-foreground mb-2">Spring 2024</p>
              <p className="text-sm text-muted-foreground">
                [Brief description of the course and level]
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Another Course
              </h3>
              <p className="text-muted-foreground mb-2">Fall 2023</p>
              <p className="text-sm text-muted-foreground">
                [Brief description of the course and level]
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Special Topics Course
              </h3>
              <p className="text-muted-foreground mb-2">Spring 2023</p>
              <p className="text-sm text-muted-foreground">
                [Brief description of the course and level]
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Introductory Course
              </h3>
              <p className="text-muted-foreground mb-2">Fall 2022</p>
              <p className="text-sm text-muted-foreground">
                [Brief description of the course and level]
              </p>
            </Card>
          </div>
        </section>

        {/* Student Mentoring */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Student Mentoring</h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-4">
              I am committed to mentoring students at all levels, from undergraduate researchers 
              to graduate students completing their dissertations. Current and past mentees include:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Graduate Students</h4>
                <p className="text-muted-foreground text-sm">
                  Currently advising 3 Ph.D. students and 2 Master's students on research projects 
                  in [areas]
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Undergraduate Researchers</h4>
                <p className="text-muted-foreground text-sm">
                  Mentored 10+ undergraduate students in summer research programs and honors theses
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
