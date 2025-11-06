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
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Dr. K. Vidyavathi</h2>
              <p className="text-muted-foreground mb-4">
                I am a Professor at Gnanamani College of Technology, specializing in Electronics and Communication Engineering. 
                My research focuses on Image Processing, Signal Processing, Video Compression, Biomedical Engineering, and 
                Digital Signal Processing. I am passionate about advancing knowledge through innovative approaches and 
                interdisciplinary collaboration.
              </p>
              <p className="text-muted-foreground">
                With over 18 years of teaching and research experience, I have published extensively in international journals, 
                authored 5 books, filed 3 patents, and mentored numerous students. I strive to inspire the next generation of 
                engineers and contribute meaningful insights to the academic and research community.
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
              <h3 className="text-lg font-semibold text-card-foreground">Ph.D. in Electronics and Communication</h3>
              <p className="text-muted-foreground">Anna University, Chennai | 2019</p>
              <p className="text-muted-foreground mt-2">
                Grade: Highly Recommended
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">M.E. in Advanced Communication System (ACS)</h3>
              <p className="text-muted-foreground">VMRF Deemed University | 2006</p>
              <p className="text-muted-foreground mt-2">77%</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">B.E. in Electronics and Communication Engineering</h3>
              <p className="text-muted-foreground">K.S.R. College of Technology, Tiruchengode, Periyar University | 2003</p>
              <p className="text-muted-foreground mt-2">72%</p>
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
              <h3 className="text-lg font-semibold text-card-foreground">Professor</h3>
              <p className="text-muted-foreground">Gnanamani College of Technology | January 2024 - Present</p>
              <p className="text-muted-foreground mt-2">
                Teaching undergraduate and graduate courses in Electronics and Communication Engineering. 
                Leading research initiatives in Image Processing and Signal Processing.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Professor and Head of Department</h3>
              <p className="text-muted-foreground">Selvam College of Technology | June 2016 - March 2023</p>
              <p className="text-muted-foreground mt-2">
                Led the ECE department, served as IQAC Coordinator, Ladies Hostel Warden, and IETE Students' Chapter Coordinator. 
                Conducted extensive research and published multiple papers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Assistant Professor and Head of Department</h3>
              <p className="text-muted-foreground">King College of Technology | July 2009 - April 2016</p>
              <p className="text-muted-foreground mt-2">
                Managed department operations and taught various ECE courses including Microwave Engineering, 
                Wireless Communication, and Digital Signal Processing.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Assistant Professor</h3>
              <p className="text-muted-foreground">Gnanamani College of Technology | May 2007 - June 2009</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">Lecturer</h3>
              <p className="text-muted-foreground">Annai Mathammal Sheela Engineering College | July 2003 - April 2007</p>
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
              <li>• TNSCST Research Grant of Rs. 7,500 for "Hybrid-Based Wireless Power Transfer for Electric Vehicles", 2023</li>
              <li>• TNSCST Research Grant of Rs. 7,500 for "Effective Recognition of Maize Plant Leaf Using Deep Learning", 2024-2025</li>
              <li>• AICTE ATAL Academy Grant of Rs. 1,00,000 for Faculty Development Programme on "Greener, Smarter, Faster: The Role of Organic Semiconductors in Electric Vehicles"</li>
              <li>• Published 3 Patents including "Advancing Breast Cancer Detection with Machine Learning and Mass Imaging" (2024)</li>
              <li>• Published 5 Books including "Ethics and Social Implications of AI" (2025)</li>
              <li>• 16+ International Journal Publications in prestigious journals including IEEE Xplore, ISPRS, and Scopus-indexed journals</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
