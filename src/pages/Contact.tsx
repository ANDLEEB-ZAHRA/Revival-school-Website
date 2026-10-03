import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { CAMPUS_INFO } from '../data/navigation';
import { IMAGES } from '../data/images';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    applyingFor: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.parentName.trim()) errs.parentName = 'Parent name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid phone number (at least 10 digits)';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.applyingFor) errs.applyingFor = 'Please select a program/grade';
    if (!formData.message.trim()) errs.message = 'Please provide details in the message';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          parentName: '',
          phone: '',
          email: '',
          applyingFor: '',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <>
      <SEO
        title="Contact & Admission Enquiry"
        description="Get in touch with Revival School Gujrat for admissions, fee details, campus tours, and academic counseling."
      />

      <main className="bg-[#f8fafd] pt-28 pb-16 md:pt-36">
        
        {/* Contact Top Hero Section matching reference */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header info */}
            <div className="lg:col-span-6 space-y-4">
              <Badge>Contact</Badge>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy-900 tracking-tight leading-tight">
                Talk to us about admission
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                Have questions about admissions, academics, or student life? We're here to help. Get in touch with Revival School Gujrat and take the first step toward a brighter educational journey.
              </p>
            </div>

            {/* Right Principal / Admin Desk Image matching reference */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <img
                  src={IMAGES.principalDesk}
                  alt="Revival School Principal & Administration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif font-bold text-sm sm:text-base">Revival Administration Office</p>
                  <p className="text-xs text-slate-200">Open for Parent Consultations & Campus Visits</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Details & Enquiry Form Grid matching reference */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1: Phone */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:border-brand-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</h3>
                    <a href={`tel:${CAMPUS_INFO.phone}`} className="font-serif font-bold text-lg text-brand-navy-900 hover:text-brand-blue-600 transition-colors block">
                      {CAMPUS_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">
                      Call for admission queries, school information and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Address */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:border-brand-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Address</h3>
                    <h4 className="font-serif font-bold text-base text-brand-navy-900">
                      Revival School Gujrat
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Grand Trunk Road near Gorali, Gujrat, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Office Hours */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:border-brand-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Office Hours</h3>
                    <h4 className="font-serif font-bold text-base text-brand-navy-900">
                      Monday – Saturday, 8:00 am – 2:00 pm
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      We're available to assist you during these hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Royal Blue Admissions Open Banner */}
              <div className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-600 rounded-2xl p-6 text-white shadow-lg border border-brand-blue-500/30">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold-300 block mb-1">
                  ADMISSION
                </span>
                <h3 className="font-serif font-bold text-xl text-white mb-1.5">
                  Admissions Open
                </h3>
                <p className="text-xs text-blue-100">
                  For Early Years, Primary, Middle School and Secondary classes.
                </p>
              </div>

            </div>

            {/* Right Column: Admission Enquiry Form matching reference */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl">
                
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy-900">
                    Admission Enquiry
                  </h2>
                  <p className="text-sm font-semibold text-brand-blue-600 mt-1">
                    Start Your Child's Journey
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Tell us about your child and our team will get in touch with you.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-emerald-900">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-emerald-700 max-w-md mx-auto">
                      Thank you for contacting Revival School Gujrat. Our admissions counselor will call you within 24 hours with complete details.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="primary"
                      size="sm"
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Parent Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="Enter your name"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.parentName 
                              ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200'
                          }`}
                        />
                        {errors.parentName && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.parentName}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0300 1234567"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.phone 
                              ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.email 
                              ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Applying For */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Applying For *
                        </label>
                        <select
                          value={formData.applyingFor}
                          onChange={(e) => setFormData({ ...formData, applyingFor: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                            errors.applyingFor 
                              ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200'
                          }`}
                        >
                          <option value="">Choose a stage / grade</option>
                          <option value="early-years">Early Years / Montessori (Age 3-5)</option>
                          <option value="primary">Primary School (Grades 1 - 5)</option>
                          <option value="middle">Middle School (Grades 6 - 8)</option>
                          <option value="secondary-science">Secondary - Matric Science (Grade 9 & 10)</option>
                          <option value="secondary-arts">Secondary - Matric Arts (Grade 9 & 10)</option>
                        </select>
                        {errors.applyingFor && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.applyingFor}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us your child's age, current grade, and anything you would like to ask."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.message 
                            ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                            : 'border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button matching reference */}
                    <div className="flex justify-end pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={isSubmitting}
                        className="px-8 shadow-md"
                        icon={<ArrowRight size={16} />}
                      >
                        {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* Parent Voices Quote Banner matching reference */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="py-8 px-6 bg-gradient-to-r from-brand-blue-50 via-white to-brand-blue-50 rounded-3xl border border-brand-blue-100 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-600 block mb-2">
              PARENT VOICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-navy-900 max-w-3xl mx-auto leading-tight">
              “A place where learning meets character and confidence.”
            </h2>
          </div>
        </section>

        {/* CTA Banner */}
        <CampusCTABanner buttonText="Apply for Admission" buttonLink="/admissions" />

      </main>
    </>
  );
};
