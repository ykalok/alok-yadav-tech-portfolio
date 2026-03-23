import React, { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Download, Copy, Check } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ContactSection = ({ data }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Message Sent! 🎉',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <div className="text-center">
            <SectionTitle title="Get In Touch" subtitle="Let's discuss your next big project or opportunity" />
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <FadeInWhenVisible delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>
              </div>

              <Card className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
                <div className="space-y-6">
                  {/* Email with copy */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Email</p>
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${data.email}`}
                          className="text-slate-900 dark:text-white font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors truncate"
                        >
                          {data.email}
                        </a>
                        <button
                          onClick={copyEmail}
                          className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
                          title="Copy email"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-slate-400 hover:text-emerald-500" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Location</p>
                      <p className="text-slate-900 dark:text-white font-medium">{data.location}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-400 transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold hover:shadow-lg group"
                >
                  <Github className="h-5 w-5 group-hover:text-emerald-500" />
                  <span>GitHub</span>
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-400 transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold hover:shadow-lg group"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-emerald-500" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <Button
                onClick={() => window.open(data.resumeUrl, '_blank')}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={400}>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              <Card className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Your Message
                      </label>
                      <span className={`text-xs ${formData.message.length > 450 ? 'text-amber-500' : 'text-slate-400'}`}>
                        {formData.message.length}/500
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      maxLength={500}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hi!"
                      rows={6}
                      className="bg-white dark:bg-slate-900 resize-none border-slate-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
