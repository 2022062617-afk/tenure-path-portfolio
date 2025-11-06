import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Contact</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Get in touch for collaboration opportunities or inquiries
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:your.email@university.edu" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      your.email@university.edu
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Department of [Your Department]<br />
                      [University Name]<br />
                      Building Name, Room 123<br />
                      City, State ZIP
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Office Hours */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Office Hours</h2>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  I am available during the following times for student consultations:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monday: 2:00 PM - 4:00 PM</li>
                  <li>• Wednesday: 2:00 PM - 4:00 PM</li>
                  <li>• Friday: 10:00 AM - 12:00 PM</li>
                  <li className="mt-4 text-sm">
                    * Or by appointment - please email to schedule
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h2>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={6}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold text-card-foreground mb-3">
                Prospective Students
              </h3>
              <p className="text-muted-foreground text-sm">
                I am always interested in working with motivated students. If you are interested 
                in pursuing graduate research in [your field], please include your CV and research 
                interests in your message.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
