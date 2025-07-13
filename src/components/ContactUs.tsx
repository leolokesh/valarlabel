import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'YOUR_USER_ID' // replace with your EmailJS public key
      );
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900/80 backdrop-blur-sm border border-plum-500/20 text-white max-w-md mx-auto rounded-2xl shadow-2xl shadow-plum-500/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center gradient-text tracking-wider">Get in Touch</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 p-2">
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-plum-400 focus:ring-plum-400 transition-all duration-300 rounded-lg"
            required
          />
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-plum-400 focus:ring-plum-400 transition-all duration-300 rounded-lg"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 w-full p-2 rounded-lg focus:border-plum-400 focus:ring-plum-400 transition-all duration-300"
            rows={5}
            required
          />
          <DialogFooter>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-plum-500 hover:from-purple-600 hover:to-plum-600 text-white font-bold text-base tracking-wider rounded-lg transition-all duration-300 transform hover:scale-105">
              Send Message
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUs;